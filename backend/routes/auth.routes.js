// IMPORTS
const router = require("express").Router();
const {
	registerUser,
	loginUser,
	checkUser,
} = require("../controllers/auth.controllers");

// METHODS
router.post("/checkuser", checkUser);
router.post("/register", registerUser);
router.post("/login", loginUser);

// EXPORTS
module.exports = router;
