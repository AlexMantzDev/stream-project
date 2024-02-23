// IMPORTS
import express from "express";
import { registerUser, loginUser, checkUser } from "../controllers/auth.controllers.js";

export const router = express.Router();

// METHODS
router.post("/checkuser", checkUser);
router.post("/register", registerUser);
router.post("/login", loginUser);
