// IMPORTS
const Users = require("../models/user.models");

// CONTROLLERS
const register = (req, res) => {
	const user = req.body;
	res.status(200).json({ success: true, data: { user } });
};

const login = (req, res) => {
	const user = req.body;
	res.status(200).json({ success: true, data: { user } });
};

// EXPORTS
module.exports = { register, login };
