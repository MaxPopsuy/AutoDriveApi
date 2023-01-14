const express = require("express");
const volleyball = require("volleyball");
const helmet = require("helmet");
const cors = require("cors");
const swagger = require('swagger-ui-express');
const swaggerDocs = require('./docs/api.json');
require("dotenv").config();

const apiRouter = require("./routes/api");
const errorHandler = require("./middlewares/errorHandler");

const app = express();

require("./config/db")
require('./config/passport');

app.use(express.json());
app.use(volleyball);
app.use(helmet());
app.use(cors({ origin: "*" }));

app.get("/", (req, res) => {
  res.json({ message: "Hello, World!" });
});

app.use("/api/v1", apiRouter);
app.use("/api-docs", swagger.serve, swagger.setup(swaggerDocs))

app.use(errorHandler);

module.exports = app;
