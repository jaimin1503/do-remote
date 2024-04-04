import express from "express";
const router = express.Router();

import {
  getRandomUsers,
  getRandomUsersWithProfile,
} from "../controllers/clientController.js";

router.get("/randomUsers", getRandomUsers);
router.get("/randomUsersWithProfile", getRandomUsersWithProfile);

export default router;
