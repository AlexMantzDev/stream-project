import { Schema, Document, model } from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export interface IUserDoc extends Document {
	username: string;
	email: string;
	password: string;
	comparePass(password: string): boolean;
	generateToken(): any;
}

const UserSchema = new Schema<IUserDoc>(
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

export const Users = model<IUserDoc>("User", UserSchema);
