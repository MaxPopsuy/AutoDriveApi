const { Trip } = require("../models");
const moment = require("../utils/moment");
const tripUtil = require("../utils/trip");

exports.getAll = async (req, res, next) => {
  try {
    const trips = await Trip.find();
    trips.forEach((trip) => {
      trip.time = moment.format(trip.time, "HH:mm");
      trip.date = moment.format(trip.date, "YYYY-MM-DD");
    });

    res.status(200).send(trips);
  } catch (error) {
    next(error);
  }
};

exports.getById = async (req, res, next) => {
  try {
    const id = req.params.id;

    const trip = await Trip.findById(id);

    if (!trip) {
      res.status(404).json({message: "Trip not found"});
      return;
    }

    res.status(200).json(trip);
  } catch (error) {
    next(error);
  }
};

exports.find = async (req, res, next) => {
  try {
    const data = req.body || {};
    const filter = req.query.filter;

    switch (filter) {
      case "earliest":
        tripUtil.getTripsByFilter(Trip, res, data, { time: 1 });
        break;
      case "latest":
        tripUtil.getTripsByFilter(Trip, res, data, { time: -1 });
        break;
      default:
        tripUtil.getTripsByFilter(Trip, res, data, {});
    }
  } catch (error) {
    next(error);
  }
};

exports.create = async (req, res, next) => {
  try {
    const tripBody = req.body;

    tripBody.time = moment.format(tripBody.time, "HH:mm", true);
    tripBody.date = moment.format(tripBody.date, "YYYY-MM-DD", true);

    const trip = await Trip.create(tripBody);

    res.status(200).json({ trip, message: "Successfully created a trip!" });
  } catch (error) {
    next(error);
  }
};

exports.setDriverRating = async (req, res, next) => {
  try {
    const id = req.params.id;
    const { rating } = req.body;

    const trip = await Trip.findById(id);

    trip.driverRating = rating;
    await trip.save();

    res
      .status(200)
      .json({ trip: trip, message: "Successfully changed driver's rating!" });
  } catch (error) {
    next(error);
  }
};

exports.setPassengerRating = async (req, res, next) => {
  try {
    const id = req.params.id;
    const { rating } = req.body;

    const trip = await Trip.findById(id);

    trip.passengerRating = rating;
    await trip.save();

    res
      .status(200)
      .json({ trip: trip, message: "Successfully changed driver's rating!" });
  } catch (error) {
    next(error);
  }
};
