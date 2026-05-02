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

    // ✅ Fetch existing contract to compare changes
    const existingContract = await Contract.findById(params.id)
    if (!existingContract) {
      return NextResponse.json(
        { error: "Contract not found" },
        { status: 404 }
      )
    }

    const updateData = {}

    // ✅ Only add fields to updateData if they are actually provided
    if (body.description !== undefined && body.description !== null) updateData.description = body.description
    if (body.clientEmail !== undefined && body.clientEmail !== null) updateData.clientEmail = body.clientEmail
    if (body.reference !== undefined && body.reference !== null) updateData.reference = body.reference
    if (body.signature !== undefined && body.signature !== null) updateData.signature = body.signature
    
    // ✅ Handle date -> signedDate conversion (form sends 'date', DB uses 'signedDate')
    if (body.signedDate !== undefined && body.signedDate !== null) updateData.signedDate = body.signedDate
    if (body.date !== undefined && body.date !== null) updateData.signedDate = body.date

    // ✅ Check if ANY contract detail field is being changed
    const descriptionChanged = body.description !== undefined && body.description !== existingContract.description
    const clientEmailChanged = body.clientEmail !== undefined && body.clientEmail !== existingContract.clientEmail
    const referenceChanged = body.reference !== undefined && body.reference !== existingContract.reference
    
    const isAnyDetailChanged = descriptionChanged || clientEmailChanged || referenceChanged

    // ✅ If ANY contract detail is being updated and NOT signing, clear client signature and reset to pending
    // This ensures a previously completed contract moves back to pending and requires re-signing.
    if (isAnyDetailChanged && !body.signature) {
      updateData.signature = null
      updateData.signedDate = null
      updateData.status = "pending"
    }
    // ✅ Auto-update status to "completed" when client signature is added
    else if (body.signature) {
      updateData.status = "completed"
    }

    const updated = await Contract.findByIdAndUpdate(
      params.id,
      updateData,
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