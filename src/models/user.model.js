const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const User = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
    },
    password: { type: String, required: true },
    role: { type: String, enum: ["passenger", "driver", "admin"], required: true },
  },
  { versionKey: false, timestamps: true }
);

User.methods.validatePassword = function (rawPassword) {
  const hashedPassword = this.password;
  return bcrypt.compare(rawPassword, hashedPassword);
};

User.statics.hashPassword = function (rawPassword) {
  return bcrypt.hash(rawPassword, 12);
};


module.exports = model("user", User);
