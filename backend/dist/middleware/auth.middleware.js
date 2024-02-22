"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jwt = require("jsonwebtoken");
async function authMiddleware(req, res, next) {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).send();
    }
    const bearerToken = authHeader.split(" ")[1];
    try {
        const verifiedJWT = jwt.verify(bearerToken, process.env.JWT_SECRET);
        req.user = {
            id: verifiedJWT.id,
            username: verifiedJWT.username,
        };
        next();
    }
    catch (err) {
        res.status(500).send();
    }
}
module.exports = authMiddleware;
//# sourceMappingURL=auth.middleware.js.map