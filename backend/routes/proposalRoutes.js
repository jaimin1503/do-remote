import express from "express";
import {
  getAllProposals,
  createProposal,
  editProposal,
  withdarawProposal,
  acceptProposal,
  rejectProposal,
} from "../controllers/proposalController.js";
const router = express.Router();

router.get("/getproposals", getAllProposals);
router.post("/createproposal", createProposal);
router.put("/editproposal/:id", editProposal);
router.delete("/withdrawproposal/:id", withdarawProposal);
router.put("/acceptproposal/:id", acceptProposal);
router.put("/rejectproposal/:id", rejectProposal);

export default router;
