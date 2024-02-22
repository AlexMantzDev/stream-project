"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const connectStream = (req, res) => {
    const streamkey = req.body.key;
    if (streamkey !== process.env.OBS_SECRET) {
        return res.status(403).send();
    }
    res.status(200).send();
};
module.exports = { connectStream };
//# sourceMappingURL=broadcast.controllers.js.map