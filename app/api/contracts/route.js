// import { NextResponse } from "next/server"
// import mongoose from "mongoose"
// import Contract from "../../../lib/models/Contract"

// async function connectDB() {
//   if (mongoose.connection.readyState === 1) return
//   await mongoose.connect(process.env.MONGODB_URI)
// }

// // GET
// export async function GET() {
//   try {
//     await connectDB()
//     const data = await Contract.find().sort({ createdAt: -1 })
//     return NextResponse.json({ contracts: data })
//   } catch (err) {
//     return NextResponse.json({ error: err.message }, { status: 500 })
//   }
// }

// // POST
// export async function POST(req) {
//   try {
//     await connectDB()

//     const body = await req.json()

//     const newContract = await Contract.create({
//       description: body.description,
//       date: body.date,
//       signature: body.signature,
//       reference: body.reference,
//       clientEmail: body.clientEmail,
//     })
//     console.log(newContract);


//     return NextResponse.json({ data: newContract })
//   } catch (err) {
//     return NextResponse.json({ error: err.message }, { status: 500 })
//   }
// }



import { NextResponse } from "next/server"
import mongoose from "mongoose"
import Contract from "../../../lib/models/Contract"

async function connectDB() {
  if (mongoose.connection.readyState === 1) return
  await mongoose.connect(process.env.MONGODB_URI)
}

// ✅ GET CONTRACTS (FILTER BY EMAIL)
export async function GET(req) {
  try {
    await connectDB()

    const { searchParams } = new URL(req.url)
    const email = searchParams.get("email")

    let contracts

    if (email) {
      // 👉 CLIENT VIEW (filter)
      contracts = await Contract.find({
        clientEmail: email.toLowerCase(),
      }).sort({ createdAt: -1 })
    } else {
      // 👉 ADMIN VIEW (all)
      contracts = await Contract.find().sort({ createdAt: -1 })
    }

    return NextResponse.json({ contracts })

  } catch (error) {
    console.error("GET CONTRACT ERROR:", error)

    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    )
  }
}


// ✅ POST (CREATE CONTRACT)
export async function POST(req) {
  try {
    await connectDB()

    const body = await req.json()

    const newContract = await Contract.create({
      description: body.description,
      clientEmail: body.clientEmail,
      reference: body.reference,
    })

    return NextResponse.json({ contract: newContract })

  } catch (err) {
    console.error("POST ERROR:", err)
    return NextResponse.json(
      { error: err.message },
      { status: 500 }
    )
  }
}