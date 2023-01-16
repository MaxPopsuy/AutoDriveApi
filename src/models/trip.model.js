const { Schema, model } = require("mongoose");

const Trip = new Schema(
  {
    startPoint: { type: String, required: true, minLength: 3 },
    endPoint: { type: String, required: true, minLength: 3 },
    date: { type: String || Date, required: true },
    time: { type: String || Date },
    seats: { type: Number, min: 1, max: 8, required: true, default: 1 },
    car: { type: String },
    // driver: { type: Schema.Types.ObjectId, ref: "user" },
    driverRating: { type: Number, required: true, min: 0, max: 5, default: 0 },
    passengerRating: {
      type: Number,
      required: true,
      min: 0,
      max: 5,
      default: 0,
    },
  },
  { versionKey: false, timestamps: true }
);

module.exports = model("trip", Trip);
