const mongoose = require("mongoose");

function connectToMongo(url) {
	console.log(`connecting to mongodb database at ${url} ...`);
	const mongooseConnnection = mongoose.connect(url);
	return mongooseConnnection;
}

module.exports = connectToMongo;
