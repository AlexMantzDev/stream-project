"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const router = require("express").Router();
const { connectStream } = require("../controllers/broadcast.controllers");
router.post("/", connectStream);
module.exports = router;
//# sourceMappingURL=broadcast.routes.js.map