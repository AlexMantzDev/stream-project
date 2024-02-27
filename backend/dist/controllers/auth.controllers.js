"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyEmail = exports.checkUser = exports.loginUser = exports.registerUser = void 0;
const user_models_js_1 = require("../models/user.models.js");
const crypto_1 = __importDefault(require("crypto"));
const nodemailer_js_1 = require("../lib/utils/nodemailer.js");
const registerUser = async (req, res) => {
    const { email, password1, password2, username } = req.body;
    const emailTaken = await user_models_js_1.Users.findOne({ email });
    if (emailTaken) {
        return res.status(400).json({
            success: false,
            data: { message: "invalid username or email" }
        });
    }
    const usernameTaken = await user_models_js_1.Users.findOne({ username });
    if (usernameTaken) {
        return res.status(400).json({
            success: false,
            data: { message: "invalid username or email" }
        });
    }
    const isFirstUser = (await user_models_js_1.Users.countDocuments({})) === 0;
    const role = isFirstUser ? "admin" : "user";
    const verificationToken = crypto_1.default.randomBytes(2 ** 8).toString("hex");
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
    const user = await user_models_js_1.Users.create({ email, password1, username, role, verificationToken });
    await (0, nodemailer_js_1.sendVerificationEmail)({
        username: user.username,
        email: user.email,
        verificationToken: user.verificationToken,
        origin: process.env.ORIGIN
    });
    res.status(200).json({ success: true, data: { user } });
};
exports.registerUser = registerUser;
const loginUser = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({
            success: false,
            data: { message: "please provide email and password" }
        });
    }
    const user = await user_models_js_1.Users.findOne({ email });
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
exports.loginUser = loginUser;
const checkUser = async (req, res) => {
    const { field, param } = req.body;
    switch (field) {
        case "username": {
            if (param === "" || undefined) {
                return res.status(400).json({ message: "invalid field" });
            }
            const usernameTaken = await user_models_js_1.Users.findOne({ username: param });
            if (usernameTaken) {
                return res.status(400).json({ success: false, data: { message: "taken" } });
            }
            else {
                return res.status(200).json({ success: true, data: { message: "success" } });
            }
        }
        default: {
            return res.status(400).json({ message: "invalid field" });
        }
    }
};
exports.checkUser = checkUser;
const verifyEmail = async (req, res) => {
    const { verificationToken, email } = req.body;
    const user = await user_models_js_1.Users.findOne({ email });
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
exports.verifyEmail = verifyEmail;
//# sourceMappingURL=auth.controllers.js.map