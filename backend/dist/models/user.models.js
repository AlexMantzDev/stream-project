"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Users = void 0;
const mongoose_1 = require("mongoose");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const UserSchema = new mongoose_1.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
}, { timestamps: true });
UserSchema.pre("save", async function (password) {
    const salt = await bcryptjs_1.default.genSalt(10);
    this.password = await bcryptjs_1.default.hash(password, salt);
});
UserSchema.methods.comparePass = async function (candidatePass) {
    const isMatch = await bcryptjs_1.default.compare(candidatePass, this.password);
    return isMatch;
};
UserSchema.methods.generateToken = function () {
    const token = jsonwebtoken_1.default.sign({
        id: this._id,
        username: this.username
    }, process.env.JWT_SECRET, { expiresIn: "1d" });
    return token;
};
exports.Users = (0, mongoose_1.model)("User", UserSchema);
//# sourceMappingURL=user.models.js.map