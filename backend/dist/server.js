"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const broadcast_routes_js_1 = require("./routes/broadcast.routes.js");
const mongo_connect_js_1 = require("./lib/utils/mongo-connect.js");
const auth_routes_js_1 = require("./routes/auth.routes.js");
const cookie_parser_1 = __importDefault(require("cookie-parser"));
dotenv_1.default.config();
const app = (0, express_1.default)();
let port;
let serverUrlString;
let mongoUrlString;
if (process.env.NODE_ENV === "production") {
    serverUrlString = `https://${process.env.PROD_ORIGIN}:${process.env.PROD_EXPRESS_PORT}`;
    mongoUrlString = process.env.PROD_MONGO_URI;
    port = process.env.PROD_EXPRESS_PORT;
}
else {
    serverUrlString = `http://localhost:${process.env.DEV_EXPRESS_PORT}`;
    mongoUrlString = process.env.DEV_MONGO_URI;
    port = process.env.DEV_EXPRESS_PORT;
}
let corsOptions = {
    origin: '*'
};
app.use((0, cors_1.default)(corsOptions));
app.use((0, cookie_parser_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use("/auth", auth_routes_js_1.router);
app.use("/broadcast", broadcast_routes_js_1.router);
app.use("/", express_1.default.static(path_1.default.join(__dirname, "../public/browser")));
app.get("*", (req, res) => {
    res.sendFile(path_1.default.resolve(__dirname, "../public/browser/index.html"));
});
async function start() {
    try {
        await (0, mongo_connect_js_1.connectToMongo)(mongoUrlString);
        app.listen(port, () => {
            console.log(`listening on ${serverUrlString} ...`);
        });
    }
    catch (err) {
        console.log(err);
    }
}
start();
//# sourceMappingURL=server.js.map