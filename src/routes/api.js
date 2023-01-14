const express = require('express');

const tripRouter = require("./trip")
const authRouter = require("./auth")

const router = express.Router();

router.use("/trips", tripRouter)
router.use("/auth", authRouter)

module.exports = router;
