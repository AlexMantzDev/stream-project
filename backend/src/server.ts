// IMPORTS
import dotenv from "dotenv";
import path from "path";
import express, { Express } from "express";
import cors from "cors";
import { startSocketServer } from "./lib/utils/socket-server.js";
// import { router as chatRoutes } from "./routes/chat.routes";
import { router as broadcastRoutes } from "./routes/broadcast.routes.js";
import { connectToMongo } from "./lib/utils/mongo-connect.js";
import { router as authRoutes } from "./routes/auth.routes.js";
import cookieParser from "cookie-parser";

// CONFIG
dotenv.config();

// CONSTANTS
const app: Express = express();
let port;
let serverUrlString;
let mongoUrlString;
if (process.env.NODE_ENV === "production") {
	serverUrlString = `https://${process.env.PROD_ORIGIN}:${process.env.PROD_EXPRESS_PORT}`;
	mongoUrlString = process.env.PROD_MONGO_URI;
	port = process.env.PROD_EXPRESS_PORT;
} else {
	serverUrlString = `http://localhost:${process.env.DEV_EXPRESS_PORT}`;
	mongoUrlString = process.env.DEV_MONGO_URI;
	port = process.env.DEV_EXPRESS_PORT;
}

// MIDDLEWARE
app.use(cors());
app.use(cookieParser(process.env.CP_SECRET));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ROUTES
// app.use("/chat", chatRoutes);
app.use("/auth", authRoutes);
app.use("/broadcast", broadcastRoutes);
app.use("/", express.static(path.join(__dirname, "../public/browser")));
app.get("*", (req, res) => {
	res.sendFile(path.resolve(__dirname, "../public/browser/index.html"));
});

// METHODS
async function start() {
	try {
		await connectToMongo(mongoUrlString);
		app.listen(port, () => {
			console.log(`listening on ${serverUrlString} ...`);
		});
		// startSocketServer();
	} catch (err) {
		console.log(err);
	}
}

// INIT
start();
