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

// ✅ GET CONTRACTS (FILTER BY EMAIL AND TYPE)
export async function GET(req) {
  try {
    await connectDB()

    const { searchParams } = new URL(req.url)
    const email = searchParams.get("email")
    const recipientType = searchParams.get("recipientType") // "client", "employee", or null for all

    let filter = {}

    if (email) {
      // 👉 CLIENT/EMPLOYEE VIEW (filter by their email)
      if (recipientType === "employee") {
        filter.employeeEmail = email.toLowerCase()
      } else {
        filter.clientEmail = email.toLowerCase()
      }
    } else if (recipientType) {
      // 👉 ADMIN VIEW - filter by type
      // Handle both new contracts (with recipientType) and old ones (assume client)
      if (recipientType === "client") {
        filter.$or = [
          { recipientType: "client" },
          { recipientType: { $exists: false } }, // Old contracts without recipientType field
          { recipientType: null }
        ]
      } else if (recipientType === "employee") {
        filter.recipientType = "employee"
      }
    }
    // else: ADMIN VIEW - return all contracts

    const contracts = await Contract.find(filter).sort({ createdAt: -1 })

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

    // Validation
    if (!body.description || !body.reference) {
      return NextResponse.json(
        { error: "Description and reference are required" },
        { status: 400 }
      )
    }

    if (!body.recipientType || !["client", "employee"].includes(body.recipientType)) {
      return NextResponse.json(
        { error: "Invalid recipient type" },
        { status: 400 }
      )
    }

    // Determine which email to use based on recipientType
    let contractData = {
      description: body.description,
      reference: body.reference,
      recipientType: body.recipientType,
    }

    if (body.recipientType === "employee") {
      if (!body.employeeEmail) {
        return NextResponse.json(
          { error: "Employee email is required" },
          { status: 400 }
        )
      }
      contractData.employeeEmail = body.employeeEmail.toLowerCase().trim()
    } else {
      if (!body.clientEmail) {
        return NextResponse.json(
          { error: "Client email is required" },
          { status: 400 }
        )
      }
      contractData.clientEmail = body.clientEmail.toLowerCase().trim()
    }

    const newContract = await Contract.create(contractData)

    return NextResponse.json({ contract: newContract })

  } catch (err) {
    console.error("POST ERROR:", err)
    return NextResponse.json(
      { error: err.message },
      { status: 500 }
    )
  }
}