import mongoose, { Schema } from "mongoose";

const jobSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
    index: true, // Add indexing for better query performance
  },
  budget: {
    type: Number,
    required: true,
    min: 500, // Add minimum value constraint
  },
  skillsRequired: [
    {
      type: String,
      required: true,
    },
  ],
  experience: {
    type: String,
    required: true,
    enum: ["Fresher", "Intermediate", "Expert"],
  },
  createdDate: {
    type: Date,
    default: Date.now,
  },
  deadline: {
    type: String,
    required: true,
    enum: [
      "less than a month",
      "1 to 3 months",
      "3 to 6 months",
      "more than 6 month",
    ],
  },
  location: {
    type: String,
    required: true,
    default: "India",
  },
  status: {
    type: String,
    enum: ["open", "closed", "active"],
    default: "open",
  },
  client: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  freeLancer: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  proposals: [
    {
      type: Schema.Types.ObjectId,
      ref: "Proposal",
    },
  ],
});

export const Job = mongoose.model("Job", jobSchema);
