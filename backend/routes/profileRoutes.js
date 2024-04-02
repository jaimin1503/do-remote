import express from "express";
const router = express.Router();
import { auth } from "../middlewares/auth.js";

import {
  editProfilePicture,
  editInfo,
  editSpecs,
} from "../controllers/profileController.js";

router.put("/editProfilePicture/:id", auth, editProfilePicture);
router.put("/editInfo/:id", auth, editInfo);
router.put("/editSpecs/:id", auth, editSpecs);

export default router;
