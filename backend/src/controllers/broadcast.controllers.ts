// CONTROLLERS
const connectStream = (req, res) => {
	const streamkey = req.body.key;
	if (streamkey !== process.env.OBS_SECRET) {
		return res.status(403).send();
	}
	res.status(200).send();
};

// EXPORTS
module.exports = { connectStream };
