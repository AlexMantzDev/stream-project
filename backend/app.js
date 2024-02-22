// CONFIG
require("dotenv").config();

// IMPORTS
const path = require("path");
const express = require("express");
const cors = require("cors");
const connectToMongo = require("./lib/mongo-connect");
const broadcastRoutes = require("./routes/broadcast.routes");
const authRoutes = require("./routes/auth.routes");
const authMiddleware = require("./middleware/auth.middleware");

// CONSTANTS
const app = express();
const port = process.env.PORT || 8080;

// MIDDLEWARE
app.use(express.json());
app.use(cors({ credentials: true, origin: true }));
app.use(express.urlencoded({ extended: true }));

// ROUTES
app.use("/", express.static(path.join(__dirname, "/public/browser")));
app.use("/watch", authMiddleware);
app.use("/auth", authRoutes);
app.use("/broadcast", broadcastRoutes);

// METHODS
async function start() {
	try {
		await connectToMongo(process.env.MONGO_URI);
		app.listen(port, () => {
			console.log(`listening on http://localhost:${port} ...`);
		});
	} catch (err) {
		console.log(err);
	}
}

// INIT
start();
