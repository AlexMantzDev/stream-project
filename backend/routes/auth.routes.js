// IMPORTS
const router = require("express").Router();
const { register, login } = require("../controllers/auth.controllers");

// METHODS
router.post("/register", register);
router.post("/login", login);

// EXPORTS
module.exports = router;
