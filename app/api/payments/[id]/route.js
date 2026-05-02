import { NextResponse } from "next/server"
import mongoose from "mongoose"
import Payment from "../../../../lib/models/Payment"

async function connectDB() {
  if (mongoose.connection.readyState === 1) return
  await mongoose.connect(process.env.MONGODB_URI)
}

// UPDATE
export async function PUT(req, { params }) {
  await connectDB()

  const body = await req.json()

  const amount = Number(body.amount) || 0
  const totalFee = Number(body.totalFee) || 0

  if (amount > totalFee) {
    return NextResponse.json(
      { error: "Amount paid cannot be greater than total fee." },
      { status: 400 }
    )
  }

  const updated = await Payment.findByIdAndUpdate(
    params.id,
    {
      ...body,
      amount,
      totalFee,
    },
    { new: true }
  )

  return NextResponse.json({ payment: updated })
}