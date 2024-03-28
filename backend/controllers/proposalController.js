import { Proposal } from "../models/proposalModel.js";
import { Profile } from "../models/profileModel.js";

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
    const newProposal = new Proposal(req.body);
    const savedProposal = await newProposal.save();
    res.status(201).json({
      data: savedProposal,
    });
    const profile = await Profile.findOne({
      _id: req.body.freelancerId,
    });
    if (!profile) {
      return res.status(404).json({ message: "Profile Not Found" });
    }
    profile.proposals.push(savedProposal._id);
    await profile.save();
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
