import { express } from "express";
import {
  deleteJob,
  editJob,
  getAllJobs,
  getJob,
} from "../controllers/jobController";
const router = express.Router();

router.get("/getalljobs", getAllJobs);
router.get("/getjob/:id", getJob);
router.put("/editjob/:id", editJob);
router.delete("/deletejob/:id", deleteJob);
export default router;
