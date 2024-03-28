import { express } from "express";
import { auth } from "../middlewares/auth.js";
import {
  deleteJob,
  editJob,
  getAllJobs,
  getJob,
} from "../controllers/jobController";
const router = express.Router();

router.get("/getalljobs", auth, getAllJobs);
router.get("/getjob/:id", auth, getJob);
router.put("/editjob/:id", auth, editJob);
router.delete("/deletejob/:id", auth, deleteJob);
export default router;
