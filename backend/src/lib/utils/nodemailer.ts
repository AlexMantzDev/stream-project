import nodemailer from "nodemailer";

const nodemailerConfig = {
	host: "smtp.ethereal.email",
	port: 587,
	auth: {
		user: "clay.hintz@ethereal.email",
		pass: "rrSkVfNZKsrSXSVrdy"
	}
};

export const sendEmail = async ({ to, subject, html }) => {
	await nodemailer.createTestAccount();

	const transporter = nodemailer.createTransport(nodemailerConfig);

	return transporter.sendEmail({
		from: '"stream-project" <stream-project@email.com>',
		to,
		subject,
		html
	});
};

export const sendVerificationEmail = async ({ username, email, verificationToken, origin }) => {
	const verifyLink = `${origin}/verify?token=${verificationToken}&email=${email}`;
	const message = `<h2>Welcome to Stream Project</h2><p>Thanks for creating an account ${username}. click <a href=${verifyLink} target="_blank">here</a> to verify your email</p>`;
	return sendEmail({ to: email, subject: "Email Confirmation", html: message });
};
