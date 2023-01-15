const swaggerAutogen = require("swagger-autogen")();

const info = {
  info: {
    description:
      "A simple AutoDrive API that supports authentication, work with trips",
    version: "1.0.0",
    title: "AutoDrive Api",
    license: {
      name: "Apache 2.0",
      url: "http://www.apache.org/licenses/LICENSE-2.0.html",
    },
  },
  servers: [
    {
      url: "http://localhost:5000/api/v1",
    },
  ],
  tags: [
    {
      name: "Auth",
    },
    {
      name: "Trips",
    },
    { name: "Users" },
    {
      name: "Coming soon",
    },
  ],
  schemes: ["http"],
  host: "localhost:8080",
  basePath: "/api/v1",
};

const outputFile = "./src/docs/api2.json";
const endpointsFiles = ["./src/routes/api.js"];

swaggerAutogen(outputFile, endpointsFiles, info);
