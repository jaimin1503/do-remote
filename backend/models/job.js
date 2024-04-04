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
    min: 0, // Add minimum value constraint
  },
  skillsRequired: [
    {
      type: String,
      required: true,
    },
  ],
  createdDate: {
    type: Date,
    default: Date.now,
  },
  deadline: {
    type: Date,
    required: true,
    default: Date.now() + 7 * 24 * 60 * 60 * 1000, // Set default deadline to 7 days from now
  },
  location: {
    type: String,
    required: true,
    default: "India",
  },
  client: [
    {
      type: Schema.Types.ObjectId,
      ref: "Job",
    },
  ],
  proposals: [
    {
      type: Schema.Types.ObjectId,
      ref: "Proposal",
    },
  ],
});

export const Job = mongoose.model("Job", jobSchema);
