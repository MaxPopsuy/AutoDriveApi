const moment = require("./moment");

exports.getTripsByFilter = async (Trip, res, data, filter) => {
  const trips = await Trip.find(data).sort(filter);

  if (!trips.length) {
    res.status(404).send({ message: "Nothing was found :(" });
    return;
  }

  trips.forEach((trip) => {
    trip.time = moment.format(trip.time, "HH:mm");
    trip.date = moment.format(trip.date, "YYYY-MM-DD");
  });

  res.status(200).send(trips);
};
