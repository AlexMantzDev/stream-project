"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
function connectToMongo(uri) {
    try {
        console.log(`connecting to mongodb database at ${uri} ...`);
        const mongooseConnnection = mongoose.connect(uri);
        console.log("connected to mongodb.");
        return mongooseConnnection;
    }
    catch (err) {
        console.log(err);
    }
}
module.exports = connectToMongo;
//# sourceMappingURL=mongo-connect.js.map