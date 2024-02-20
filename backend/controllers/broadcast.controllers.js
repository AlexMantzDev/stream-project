// CONTROLLERS
const connectStream = (req, res) => {
	const streamkey = req.body.key;
	if (streamkey === process.env.OBS_SECRET) {
		res.status(200).send();
		return;
	}

	res.status(403).send();
};

// EXPORTS
module.exports = { connectStream };
