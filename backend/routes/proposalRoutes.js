import express from "express";
import {
  getAllProposals,
  createProposal,
  editProposal,
  withdarawProposal,
  acceptProposal,
  rejectProposal,
  getProposal,
} from "../controllers/proposalController.js";
import { auth } from "../middlewares/auth.js";
const router = express.Router();

router.get("/getproposals", auth, getAllProposals);
router.get("/getProposal/:id", auth, getProposal);
router.post("/createproposal", auth, createProposal);
router.put("/editproposal/:id", auth, editProposal);
router.delete("/withdrawproposal/:id", auth, withdarawProposal);
router.put("/acceptproposal/:id", auth, acceptProposal);
router.put("/rejectproposal/:id", auth, rejectProposal);

export default router;
