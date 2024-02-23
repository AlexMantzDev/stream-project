"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const auth_controllers_js_1 = require("../controllers/auth.controllers.js");
exports.router = express_1.default.Router();
exports.router.post("/checkuser", auth_controllers_js_1.checkUser);
exports.router.post("/register", auth_controllers_js_1.registerUser);
exports.router.post("/login", auth_controllers_js_1.loginUser);
//# sourceMappingURL=auth.routes.js.map