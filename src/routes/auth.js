const express = require("express");

const authMiddleware = require("../middlewares/auth");

const auth = require("../controllers/auth.controller");
const router = express.Router();

router.get("/profile", authMiddleware, auth.profile);
router.post("/register", auth.register);
router.post("/login", auth.login);

module.exports = router;
