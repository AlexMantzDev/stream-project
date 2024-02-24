// IMPORTS
import dotenv from "dotenv";
import path from "path";
import express, { Express } from "express";
import cors from "cors";
import { router as broadcastRoutes } from "./routes/broadcast.routes.js";
import { connectToMongo } from "./lib/mongo-connect.js";
import { router as authRoutes } from "./routes/auth.routes.js";
import { authMiddleware } from "./middleware/auth.middleware.js";

// CONFIG
dotenv.config();

// CONSTANTS
const app: Express = express();
const port = process.env.PORT || 8080;

// MIDDLEWARE
app.use(express.json());
app.use(cors({ credentials: true, origin: true }));
app.use(express.urlencoded({ extended: true }));

// ROUTES
app.use("/", express.static(path.join(__dirname, "../public/browser")));
app.use("/auth", authRoutes);
app.use("/broadcast", broadcastRoutes);

// METHODS
async function start() {
	try {
		await connectToMongo(process.env.MONGO_URI);
		app.listen(port, () => {
			console.log(`listening on http://0.0.0.0:${port} ...`);
		});
	} catch (err) {
		console.log(err);
	}
}

// INIT
start();
