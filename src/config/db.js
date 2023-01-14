const mongoose = require("mongoose");

module.exports = mongoose
  .set("strictQuery", true)
  .connect(process.env.MONGO_URI)
  .then(() => console.log("db connected"))
  .catch((e) => console.log(e));
