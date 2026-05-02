import mongoose from "mongoose"

const ContractSchema = new mongoose.Schema(
  {
    description: { type: String, required: true },

    createdDate: { type: Date, default: Date.now },

    clientEmail: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },

    reference: { type: String },

    // 👨‍💼 ADMIN SIGNATURE
    adminSignature: { type: String },
    adminSignedDate: { type: Date },

    // 👤 CLIENT SIGNATURE
    signature: { type: String }, // (keep your existing field)
    signedDate: { type: Date },

    // 📊 STATUS
    status: {
      type: String,
      enum: ["pending", "admin-signed", "completed"],
      default: "pending",
    },
  },
  { timestamps: true }
)

export default mongoose.models.Contract ||
  mongoose.model("Contract", ContractSchema)