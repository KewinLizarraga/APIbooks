const route = require("express").Router();

const { bookControllers } = require("../controllers");

route.get("/", bookControllers.listAll);
route.get("/:_id", bookControllers.listOne);
route.get("/pag/:page", bookControllers.pagination);
route.post("/", bookControllers.create);
route.put("/:_id", bookControllers.update);
route.delete("/:_id", bookControllers.delete);

module.exports = route;
