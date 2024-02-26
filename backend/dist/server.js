"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const socket_io_1 = require("socket.io");
const http_1 = require("http");
const broadcast_routes_js_1 = require("./routes/broadcast.routes.js");
const mongo_connect_js_1 = require("./lib/mongo-connect.js");
const auth_routes_js_1 = require("./routes/auth.routes.js");
dotenv_1.default.config();
const httpServerSettings = {
    cors: {
        origin: process.env.NODE_ENV === "production"
            ? false
            : ["http//localhost:5000", "http://127.0.0.1:5000"]
    }
};
const app = (0, express_1.default)();
const port = process.env.EXPRESS_PORT || 8080;
const httpServer = (0, http_1.createServer)();
const io = new socket_io_1.Server(httpServer, httpServerSettings);
app.use(express_1.default.json());
app.use((0, cors_1.default)({ credentials: true, origin: true }));
app.use(express_1.default.urlencoded({ extended: true }));
app.use("/", express_1.default.static(path_1.default.join(__dirname, "../public/browser")));
app.use("/auth", auth_routes_js_1.router);
app.use("/broadcast", broadcast_routes_js_1.router);
async function start() {
    try {
        await (0, mongo_connect_js_1.connectToMongo)(process.env.MONGO_URI);
        app.listen(port, () => {
            console.log(`listening on http://localhost:${port} ...`);
        });
        socketStart();
    }
    catch (err) {
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
start();
//# sourceMappingURL=server.js.map