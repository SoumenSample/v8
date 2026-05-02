
import { NextResponse } from "next/server"
import mongoose from "mongoose"
import Quotation from "../../../lib/models/Quotation"
import User from "@/lib/models/User"
import { connectToDatabase } from "@/lib/mongodb"
import { emitToUsers } from "@/lib/socket/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth-options"

async function connectDB() {
  try {
    await connectToDatabase()
  } catch (err) {
    console.error("DB ERROR:", err)
    throw err
  }
}

export async function GET(req) {
  try {
    await connectDB()
    const session = await getServerSession(authOptions)
    
    if (!session?.user?.email) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const user = await User.findOne({ email: session.user.email })
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 })
    }

    // Admins see all quotations, clients see only assigned to them
    const query = user.role === "admin" ? {} : { recipientUserId: user._id }
    let quotations = await Quotation.find(query).sort({ createdAt: -1 })
    
    // Manually populate recipientUserId to avoid schema caching issues
    quotations = await Promise.all(
      quotations.map(async (q) => {
        const qObj = q.toObject()
        if (q.recipientUserId) {
          const client = await User.findById(q.recipientUserId).select("name email")
          qObj.recipientUserId = client
        }
        return qObj
      })
    )

    return NextResponse.json({ quotations })

  } catch (error) {
    console.error("🔥 GET ERROR:", error)
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    )
  }
}

export async function POST(req) {
  try {
    await connectDB()
    const session = await getServerSession(authOptions)
    
    if (!session?.user?.email) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const user = await User.findOne({ email: session.user.email })
    if (!user || user.role !== "admin") {
      return NextResponse.json({ error: "Admin access required" }, { status: 403 })
    }

    const formData = await req.formData()
    const title = formData.get("title")
    const description = formData.get("description")
    const recipientUserId = formData.get("recipientUserId")
    const fileUrl = formData.get("fileUrl")

    if (!title || String(title).trim() === "") {
      return NextResponse.json({ error: "Title is required" }, { status: 400 })
    }

    if (!recipientUserId) {
      return NextResponse.json({ error: "Client selection is required" }, { status: 400 })
    }

    // Verify client exists
    const client = await User.findById(recipientUserId)
    if (!client) {
      return NextResponse.json({ error: "Selected client not found" }, { status: 404 })
    }

    const newQuotation = await Quotation.create({
      title,
      description,
      fileUrl: fileUrl || "",
      recipientUserId,
    })

    // Notify the assigned client
    emitToUsers([recipientUserId.toString()], "notification", {
      type: "quotation",
      title: "New Quotation",
      text: `You have been sent a new quotation: "${title || 'Untitled'}"`,
    })

    // Manually populate recipientUserId to avoid schema caching issues
    let quotationData = newQuotation.toObject()
    if (quotationData.recipientUserId) {
      const client = await User.findById(quotationData.recipientUserId).select("name email")
      quotationData.recipientUserId = client
    }

    return NextResponse.json({ success: true, data: quotationData })

  } catch (err) {
    console.error("🔥 POST ERROR:", err)
    return NextResponse.json(
      { error: err.message },
      { status: 500 }
    )
  }
}
