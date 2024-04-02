import express from "express";
const router = express.Router();
import { auth } from "../middlewares/auth.js";

import {
  editPofilePicture,
  editInfo,
  editSpecs,
} from "../controllers/profileController.js";

router.post("/editProfilePicture/:id", auth, editPofilePicture);
router.post("/editInfo/:id", auth, editInfo);
router.post("/editSpecs/:id", auth, editSpecs);

export default router;
