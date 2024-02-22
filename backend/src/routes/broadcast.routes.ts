// IMPORTS
const router = require("express").Router();
const { connectStream } = require("../controllers/broadcast.controllers");

// METHODS
router.post("/", connectStream);

// EXPORTS
module.exports = router;
