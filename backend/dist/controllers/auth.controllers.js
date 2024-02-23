"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkUser = exports.loginUser = exports.registerUser = void 0;
const user_models_js_1 = require("../models/user.models.js");
const registerUser = async (req, res) => {
    const { email, password1, password2, username } = req.body;
    const emailTaken = await user_models_js_1.Users.findOne({ email });
    if (emailTaken) {
        return res.status(400).json({
            success: false,
            data: { message: "invalid username or password" }
        });
    }
    const usernameTaken = await user_models_js_1.Users.findOne({ username });
    if (usernameTaken) {
        return res.status(400).json({
            success: false,
            data: { message: "invalid username or password" }
        });
    }
    if (!email || !password1 || !password2 || !username) {
        return res.status(400).json({
            success: false,
            data: { message: "invalid form" }
        });
    }
    if (password1 !== password2) {
        return res.status(400).json({
            success: false,
            data: { message: "passwords do not match" }
        });
    }
    const user = await user_models_js_1.Users.create({ email, password1, username });
    const token = user.generateToken();
    res.status(200).json({ success: true, data: { user }, token });
};
exports.registerUser = registerUser;
const loginUser = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({
            success: false,
            data: { message: "invalid username or password" }
        });
    }
    const user = await user_models_js_1.Users.findOne({ email });
    if (!user) {
        return res.status(400).json({
            success: false,
            data: { message: "invalid username or password" }
        });
    }
    const passMatch = await user.comparePass(password);
    if (!passMatch) {
        return res.status(400).json({
            success: false,
            data: { message: "invalid username or password" }
        });
    }
    const token = user.generateToken();
    res.status(200).json({ success: true, data: { user }, token });
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
                return res.status(400).json({ message: "taken" });
            }
            else {
                return res.status(200).json({ message: "success" });
            }
        }
        default: {
            return res.status(400).json({ message: "invalid field" });
        }
    }
};
exports.checkUser = checkUser;
//# sourceMappingURL=auth.controllers.js.map