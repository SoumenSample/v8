import { NextResponse } from "next/server"
import mongoose from "mongoose"
import Contract from "../../../../lib/models/Contract"

// ✅ DB CONNECT
async function connectDB() {
  if (mongoose.connection.readyState === 1) return
  await mongoose.connect(process.env.MONGODB_URI)
}

//
// =========================
// ✅ GET SINGLE CONTRACT
// =========================
//
export async function GET(req, { params }) {
  try {
    await connectDB()

    const contract = await Contract.findById(params.id)

    if (!contract) {
      return NextResponse.json(
        { error: "Contract not found" },
        { status: 404 }
      )
    }

    return NextResponse.json({ contract })

  } catch (err) {
    console.error("GET CONTRACT ERROR:", err)

    return NextResponse.json(
      { error: err.message },
      { status: 500 }
    )
  }
}

//
// =========================
// ✅ UPDATE CONTRACT
// =========================
//
export async function PUT(req, { params }) {
  try {
    await connectDB()

    const body = await req.json()

    const updated = await Contract.findByIdAndUpdate(
      params.id,
      {
        signature: body.signature,
        signedDate: body.signedDate || new Date(),
        status: "completed", // ✅ FORCE UPDATE
      },
      { new: true }
    )

    return NextResponse.json({ contract: updated })

  } catch (err) {
    return NextResponse.json(
      { error: err.message },
      { status: 500 }
    )
  }
}

//
// =========================
// 🗑️ DELETE CONTRACT (optional)
// =========================
//
export async function DELETE(req, { params }) {
  try {
    await connectDB()

    await Contract.findByIdAndDelete(params.id)

    return NextResponse.json({ message: "Deleted successfully" })

  } catch (err) {
    return NextResponse.json(
      { error: err.message },
      { status: 500 }
    )
  }
}