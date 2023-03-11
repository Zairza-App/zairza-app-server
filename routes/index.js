const routes = require("express").Router();
const book = require("./admin");
const books = require("./auth");
routes.get("/", async function (req, res) { 
      res.send(`Reached home!`); 
});
routes.use("/admin", book);
routes.use("/auth", books);
module.exports = routes;