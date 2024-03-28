import mongoose from "mongoose";

const proposalSchema = new mongoose.Schema({
  jobId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Job",
    required: true,
  },
  freelancerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  coverLetter: {
    type: String,
    required: true,
  },
  bidAmount: {
    type: Number,
    required: true,
  },
  deliveryTime: {
    type: Date,
    required: true,
  },
  attachments: [String], // Array of attachment URLs
  status: {
    type: String,
    enum: ["submitted", "accepted", "rejected"],
    default: "submitted",
  },
  submittedAt: {
    type: Date,
    default: Date.now,
  },
});

export const Proposal = mongoose.model("Proposal", proposalSchema);
