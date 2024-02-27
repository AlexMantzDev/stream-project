// IMPORTS
import express from "express";
import {
	registerUser,
	loginUser,
	checkUser,
	verifyEmail
} from "../controllers/auth.controllers.js";

export const router = express.Router();

// ROUTES
router.post("/checkuser", checkUser);
router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/verify", verifyEmail);
