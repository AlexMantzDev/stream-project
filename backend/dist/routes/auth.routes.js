"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const router = require("express").Router();
const { registerUser, loginUser, checkUser, } = require("../controllers/auth.controllers");
router.post("/checkuser", checkUser);
router.post("/register", registerUser);
router.post("/login", loginUser);
module.exports = router;
//# sourceMappingURL=auth.routes.js.map