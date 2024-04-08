import { Proposal } from "../models/proposalModel.js";
import { User } from "../models/user.js";
import { Job } from "../models/job.js";

export const getAllProposals = async (req, res) => {
  try {
    const id = req.params.id;
    const proposals = await Proposal.find({ jobId: id });
    if (!proposals) {
      return res.status(404).json({ message: "No proposals found" });
    } else {
      res.status(200).json(proposals);
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
};

export const createProposal = async (req, res) => {
  const freelancerId = req.user._id;
  console.log("id", freelancerId);
  try {
    if (
      !req.body.jobId ||
      !req.body.coverLetter ||
      !req.body.bidAmount ||
      !req.body.deliveryTime
    ) {
      return res.status(400).send({
        message: "Please fill all the required details",
      });
    }

    const newProposal = new Proposal({
      jobId: req.body.jobId,
      coverLetter: req.body.coverLetter,
      bidAmount: req.body.bidAmount,
      deliveryTime: req.body.deliveryTime,
      freelancerId: freelancerId,
    });

    const savedProposal = await newProposal.save();

    const job = await Job.findOne({ _id: req.body.jobId });
    if (!job) {
      return res.status(404).json({ message: "Job Not Found" });
    }
    job.proposals.push(savedProposal._id);
    await job.save();

    const user = await User.findOne({ _id: freelancerId });
    if (!user) {
      return res.status(404).json({ message: "User Not Found" });
    }
    user.proposals.push(savedProposal._id);
    await user.save();

    res.status(201).json({
      message: "Proposal created successfully",
      savedProposal,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
};

export const editProposal = async (req, res) => {
  try {
    if (
      !req.body.jobId ||
      !req.body.freelancerId ||
      !req.body.coverLetter ||
      !req.body.bidAmount ||
      !req.body.deliveryTime
    ) {
      return res.status(400).send({
        message: "Please fill all the required details",
      });
    }
    const { id } = req.params;

    const result = await Proposal.findByIdAndUpdate(id, req.body);

    if (!result) {
      return res.status(404).json({ message: "Proposal Not Found" });
    }

    return res.status(200).send({ message: "Proposal Updated successfully" });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
};

export const withdarawProposal = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Proposal.findByIdAndDelete(id);
    if (!result) {
      return res.status(404).json({ message: "Proposal Not Found" });
    }
    return res.status(200).send({ message: "Proposal deleted successfully" });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
};

export const acceptProposal = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Proposal.findByIdAndUpdate(id, { status: "accepted" });
    if (!result) {
      return res.status(404).json({ message: "Proposal Not Found" });
    }
    return res.status(200).send({ message: "Proposal accepted successfully" });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
};

export const rejectProposal = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Proposal.findByIdAndUpdate(id, { status: "rejected" });
    if (!result) {
      return res.status(404).json({ message: "Proposal Not Found" });
    }
    return res.status(200).send({ message: "Proposal rejected successfully" });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
};
