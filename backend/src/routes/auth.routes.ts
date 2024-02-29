// IMPORTS
import express from "express";
import {
	registerUser,
	loginUser,
	checkUser,
	verifyEmail,
	logoutUser
} from "../controllers/auth.controllers.js";
import { authenticateUser } from "../middleware/auth.middleware.js";

export const router = express.Router();

// ROUTES
router.post("/checkuser", checkUser);
router.post("/register", registerUser);
router.post("/login", loginUser);
router.delete("/logout", authenticateUser, logoutUser);
router.post("/verify", verifyEmail);
