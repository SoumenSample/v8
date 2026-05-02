import { getServerSession } from "next-auth";
import { z } from "zod";
import bcrypt from "bcryptjs";
import nodemailer from "nodemailer";

import { authOptions } from "@/lib/auth-options";
import { connectToDatabase } from "@/lib/mongodb";
import Lead from "@/lib/models/Lead";
import Client from "@/lib/models/Client";
import User from "@/lib/models/User";
import { emitToUsers } from "@/lib/socket/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const convertSchema = z.object({
  password: z.string().min(8),
  validFrom: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  validTo: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  finalBudget: z.string().trim().min(1, "Final budget is required"),
  projectName: z.string().trim().optional().default(""),
  projectDescription: z.string().trim().optional().default(""),
});

export async function POST(request, { params }) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user || session.user.role !== "admin") {
      return Response.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { leadId } = params;
    const body = await request.json();
    const validated = convertSchema.parse(body);

    await connectToDatabase();

    // Find the lead
    const lead = await Lead.findById(leadId);
    if (!lead) {
      return Response.json({ error: "Lead not found" }, { status: 404 });
    }

    if (lead.convertedToClient) {
      return Response.json({ error: "Lead already converted to client" }, { status: 400 });
    }

    // Check if email already exists
    const existingUser = await User.findOne({ email: lead.email });
    if (existingUser) {
      return Response.json({ error: "User with this email already exists" }, { status: 400 });
    }

    const existingClient = await Client.findOne({ email: lead.email });
    if (existingClient) {
      return Response.json({ error: "Client with this email already exists" }, { status: 400 });
    }

    // Create User account
    const passwordHash = await bcrypt.hash(validated.password, 12);
    const user = await User.create({
      name: lead.name,
      email: lead.email,
      passwordHash,
      role: "client",
      isActive: true,
      createdBy: session.user.id,
    });

    // Create Client entry
    const client = await Client.create({
      name: lead.name,
      email: lead.email,
      phone: lead.phone,
      services: lead.services,
      budget: lead.budget,
      requirement: lead.requirement,
      validFrom: new Date(validated.validFrom),
      validTo: new Date(validated.validTo),
      convertedFromLead: lead._id,
      convertedFromLeadDate: new Date(),
      convertedBy: session.user.id,
      source: "lead-conversion",
      linkedUser: user._id,
      createdBy: session.user.id,
      finalBudget: validated.finalBudget,
      projectName: validated.projectName,
      projectDescription: validated.projectDescription,
    });

    // Link user to client
    await User.findByIdAndUpdate(user._id, { clientProfile: client._id });

    // Update lead to mark as converted
    await Lead.findByIdAndUpdate(
      leadId,
      {
        convertedToClient: true,
        convertedToClientDate: new Date(),
        convertedToClientBy: session.user.id,
        convertedClientId: client._id,
      },
      { new: true }
    );

    const adminIds = (await User.find({ role: "admin" }).select("_id")).map((item) => item._id?.toString?.() || item._id).filter(Boolean);

    if (adminIds.length) {
      emitToUsers(adminIds, "notification", {
        type: "lead",
        title: "Lead converted",
        text: `${lead.name} was converted into a client account.`,
        leadId: lead._id.toString(),
        clientId: client._id.toString(),
        userId: user._id.toString(),
      });
    }

    // ===============================
    // SEND EMAIL (Same as User Creation)
    // ===============================
    try {
      if (
        process.env.EMAIL_HOST &&
        process.env.EMAIL_USER &&
        process.env.EMAIL_PASS
      ) {
        const transporter = nodemailer.createTransport({
          host: process.env.EMAIL_HOST,
          port: Number(process.env.EMAIL_PORT) || 465,
          secure: true,
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
          },
        });

        await transporter.sendMail({
          from: `"CyberSpace Works" <${process.env.EMAIL_USER}>`,
          to: user.email,
          subject: "Your Account Has Been Created - Welcome to CyberSpace Works",
          html: `
            <h2>Welcome, ${user.name}</h2>
            <p>Your account has been created successfully.</p>
            <p><b>Email:</b> ${user.email}</p>
            <p><b>Temporary Password:</b> ${validated.password}</p>
            <p><b>Contract Valid From:</b> ${new Date(validated.validFrom).toLocaleDateString()}</p>
            <p><b>Contract Valid To:</b> ${new Date(validated.validTo).toLocaleDateString()}</p>
            <p>Please change your password after login.</p>
          `,
        });
      } else {
        console.warn("Email skipped: Missing env vars");
      }
    } catch (err) {
      console.error("Email failed:", err);
    }

    return Response.json(
      {
        user: {
          id: user._id.toString(),
          name: user.name,
          email: user.email,
          role: user.role,
        },
        client,
        message: "Lead converted to client and user account created successfully",
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Convert lead error:", error);

    if (error instanceof z.ZodError) {
      return Response.json({ error: error.errors[0].message }, { status: 400 });
    }

    return Response.json({ error: "Server error" }, { status: 500 });
  }
}
