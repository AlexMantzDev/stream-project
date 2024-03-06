"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.attachCookies = exports.isTokenValid = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const isTokenValid = (token) => jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
exports.isTokenValid = isTokenValid;
const attachCookies = ({ res, user, refreshToken }) => {
    const accessTokenJWT = jsonwebtoken_1.default.sign({ payload: { user } }, process.env.JWT_SECRET);
    const refreshTokenJWT = jsonwebtoken_1.default.sign({ payload: { user, refreshToken } }, process.env.JWT_SECRET);
    const oneHour = 1000 * 60 * 60;
    const oneDay = 1000 * 60 * 60 * 24;
    res.cookie("accessToken", accessTokenJWT, {
        httpOnly: true,
        expires: new Date(Date.now() + oneHour),
        secure: process.env.NODE_ENV === "production",
        signed: true
    });
    res.cookie("refreshToken", refreshTokenJWT, {
        httpOnly: true,
        expires: new Date(Date.now() + oneDay),
        secure: process.env.NODE_ENV === "production",
        signed: true
    });
    console.log(res);
};
exports.attachCookies = attachCookies;
//# sourceMappingURL=jwt.js.map