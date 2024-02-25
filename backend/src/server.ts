// IMPORTS
import dotenv from "dotenv";
import path from "path";
import express, { Express } from "express";
import cors from "cors";
import { Server } from "socket.io";
import { createServer } from "http";
import { router as chatRoutes } from "./routes/chat.routes";
import { router as broadcastRoutes } from "./routes/broadcast.routes.js";
import { connectToMongo } from "./lib/mongo-connect.js";
import { router as authRoutes } from "./routes/auth.routes.js";
import { authMiddleware } from "./middleware/auth.middleware.js";

// CONFIG
dotenv.config();
const httpServerSettings = {
	cors: {
		origin:
			process.env.NODE_ENV === "production"
				? false
				: ["http//localhost:5000", "http://127.0.0.1:5000"]
	}
};

// CONSTANTS
const app: Express = express();
const port = process.env.EXPRESS_PORT || 8080;
const httpServer = createServer();
const io = new Server(httpServer, httpServerSettings);

// MIDDLEWARE
app.use(express.json());
app.use(cors({ credentials: true, origin: true }));
app.use(express.urlencoded({ extended: true }));

// ROUTES
app.use("/", express.static(path.join(__dirname, "../public/browser")));
app.use("/chat", chatRoutes);
app.use("/auth", authRoutes);
app.use("/broadcast", broadcastRoutes);

// METHODS
async function start() {
	try {
		await connectToMongo(process.env.MONGO_URI);
		app.listen(port, () => {
			console.log(`listening on http://localhost:${port} ...`);
		});
		socketStart();
	} catch (err) {
		console.log(err);
	}
}

function socketStart() {
	io.on("connection", (socket) => {
		console.log(`User ${socket.id} connected`);
		socket.on("message", (data) => {
			console.log(data);
			io.emit("message", `${socket.id.substring(0, 5)}: ${data}`);
		});
	});

	httpServer.listen(3500, () => {
		console.log("socket.io listening on port 3500...");
	});
}

// INIT
start();
