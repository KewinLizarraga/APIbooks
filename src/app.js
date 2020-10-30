const express = require("express");
const app = express();

const route = require("./routes");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api", route);

module.exports = app;
