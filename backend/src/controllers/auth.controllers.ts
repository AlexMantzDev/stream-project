// IMPORTS
import { Users } from "../models/user.models.js";
import { Request, Response } from "express";
import crypto from "crypto";
import { sendVerificationEmail } from "../lib/utils/nodemailer.js";

// CONTROLLERS
export const registerUser = async (req: Request, res: Response) => {
	const { email, password1, password2, username } = req.body;
	const emailTaken = await Users.findOne({ email });
	if (emailTaken) {
		return res.status(400).json({
			success: false,
			data: { message: "invalid username or email" }
		});
	}
	const usernameTaken = await Users.findOne({ username });
	if (usernameTaken) {
		return res.status(400).json({
			success: false,
			data: { message: "invalid username or email" }
		});
	}

	const isFirstUser = (await Users.countDocuments({})) === 0;
	const role = isFirstUser ? "admin" : "user";

	const verificationToken = crypto.randomBytes(2 ** 8).toString("hex");

	if (!email || !password1 || !password2 || !username) {
		return res.status(400).json({
			success: false,
			data: { message: "invalid form submission" }
		});
	}
	if (password1 !== password2) {
		return res.status(400).json({
			success: false,
			data: { message: "passwords do not match" }
		});
	}
	const user = await Users.create({ email, password1, username, role, verificationToken });

	await sendVerificationEmail({
		username: user.username,
		email: user.email,
		verificationToken: user.verificationToken,
		origin: process.env.ORIGIN
	});

	res.status(200).json({ success: true, data: { user } });
};

export const loginUser = async (req: Request, res: Response) => {
	const { email, password } = req.body;
	if (!email || !password) {
		return res.status(400).json({
			success: false,
			data: { message: "please provide email and password" }
		});
	}
	const user = await Users.findOne({ email });
	if (!user) {
		return res.status(401).json({
			success: false,
			data: { message: "invalid username or password" }
		});
	}
	const isPassCorrect = await user.comparePass(password);
	if (!isPassCorrect) {
		return res.status(401).json({
			success: false,
			data: { message: "invalid username or password" }
		});
	}
	if (!user.isVerified) {
		return res.status(401).json({
			success: false,
			data: { message: "user account requires email verification" }
		});
	}
	const tokenUser = { name: user.username, userId: user._id, role: user.role };
	res.status(200).json({ success: true, data: { user: tokenUser } });
};

export const checkUser = async (req: Request, res: Response) => {
	const { field, param } = req.body;
	switch (field) {
		case "username": {
			if (param === "" || undefined) {
				return res.status(400).json({ message: "invalid field" });
			}
			const usernameTaken = await Users.findOne({ username: param });
			if (usernameTaken) {
				return res.status(400).json({ success: false, data: { message: "taken" } });
			} else {
				return res.status(200).json({ success: true, data: { message: "success" } });
			}
		}

		// case "email": {...}

		default: {
			return res.status(400).json({ message: "invalid field" });
		}
	}
};

export const verifyEmail = async (req: Request, res: Response) => {
	const { verificationToken, email } = req.body;
	const user = await Users.findOne({ email });
	if (!user) {
		return res.status(401).json({
			success: false,
			data: { message: "verification failed" }
		});
	}
	if (user.verificationToken !== verificationToken) {
		return res.status(401).json({
			success: false,
			data: { message: "verification failed" }
		});
	}

	user.isVerified = true;
	user.verified = Date.now();
	user.verificationToken = "";

	await user.save();

	return res.status(200).json({
		success: true,
		data: { message: "email verified" }
	});
};
