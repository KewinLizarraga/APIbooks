const route = require("express").Router();

const bookRoutes = require("./book.routes");

route.use("/book", bookRoutes);

module.exports = route;
