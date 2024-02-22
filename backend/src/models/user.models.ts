const { Schema, model } = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const UserSchema = new Schema(
	{
		username: {
			type: String,
			required: true
		},
		email: {
			type: String,
			required: true
		},
		password: {
			type: String,
			required: true
		}
	},
	{ timestamps: true }
);

UserSchema.pre("save", async function (this: any, password) {
	const salt = await bcrypt.genSalt(10);
	this.password = await bcrypt.hash(password, salt);
});

UserSchema.methods.comparePass = async function (candidatePass) {
	const isMatch = await bcrypt.compare(candidatePass, this.password);
	return isMatch;
};

UserSchema.methods.generateToken = function () {
	const token = jwt.sign(
		{
			id: this._id,
			username: this.username
		},
		process.env.JWT_SECRET,
		{ expiresIn: "1d" }
	);
	return token;
};

module.exports = model("User", UserSchema);
