const express = require("express");

const { trip } = require("../controllers");
const router = express.Router();

router.get("/", trip.getAll);
router.get("/trip/:id", trip.getById);
router.get("/find", trip.find);
router.post("/create", trip.create);
router.patch("/driver/:id", trip.setDriverRating);
router.patch("/passenger/:id", trip.setPassengerRating);

module.exports = router;
