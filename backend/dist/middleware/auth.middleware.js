"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
async function authMiddleware(req, res, next) {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).send();
    }
    const bearerToken = authHeader.split(" ")[1];
    try {
        const verifiedJWT = jsonwebtoken_1.default.verify(bearerToken, process.env.JWT_SECRET);
        req.user = {
            id: verifiedJWT.id,
            username: verifiedJWT.username
        };
        next();
    }
    catch (err) {
        res.status(500).send();
    }
}
exports.authMiddleware = authMiddleware;
//# sourceMappingURL=auth.middleware.js.map