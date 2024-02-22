// IMPORTS
const Users = require("../models/user.models");

// CONTROLLERS
const registerUser = async (req, res) => {
	const { email, password1, password2, username } = req.body;
	const emailTaken = await Users.fineOne({ email });
	if (emailTaken) {
		return res.status(400).json({
			success: false,
			data: { message: "invalid username or password" },
		});
	}
	const usernameTaken = await Users.findOne({ username });
	if (usernameTaken) {
		return res.status(400).json({
			success: false,
			data: { message: "invalid username or password" },
		});
	}
	if (!email || !password1 || !password2 || !username) {
		return res.status(400).json({
			success: false,
			data: { message: "invalid form" },
		});
	}
	if (password1 !== password2) {
		return res.status(400).json({
			success: false,
			data: { message: "passwords do not match" },
		});
	}
	const user = await Users.create({ email, password1, username });
	const token = user.generateToken();
	res.status(200).json({ success: true, data: { user }, token });
};

const loginUser = async (req, res) => {
	const { email, password } = req.body;
	if (!email || !password) {
		return res.status(400).json({
			success: false,
			data: { message: "invalid username or password" },
		});
	}
	const user = await Users.findOne({ email });
	if (!user) {
		return res.status(400).json({
			success: false,
			data: { message: "invalid username or password" },
		});
	}
	const passMatch = await user.comparePass(password);
	if (!passMatch) {
		return res.status(400).json({
			success: false,
			data: { message: "invalid username or password" },
		});
	}
	const token = user.generateToken();
	res.status(200).json({ success: true, data: { user }, token });
};

const checkUser = async (req, res) => {
	const { field, param } = req.body;
	switch (field) {
		case "username": {
			const usernameTaken = await Users.findOne({ username: param });
			if (usernameTaken) {
				return res.status(400).json({ message: "taken" });
			} else {
				return res.status(200).json({ message: "success" });
			}
		}

		case "email": {
			const emailTaken = await Users.findOne({ email: param });
			if (emailTaken) {
				return res.status(400).json({ message: "taken" });
			} else {
				return res.status(200).json({ message: "success" });
			}
		}
	}
};

// EXPORTS
module.exports = { registerUser, loginUser, checkUser };
