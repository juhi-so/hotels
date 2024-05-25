const express = require("express");
const app = express();
const db = require("./db");
const bodyParser = require("body-parser");
app.use(bodyParser.json());
require("dotenv").config();

app.get("/", function (req, res) {
  res.send("hello world");
});

//import the router files
const personRoutes = require("./routes/personRoutes");
const menuItemRoutes = require("./routes/menuItemRoutes");

//use the routers
app.use("/person", personRoutes);
app.use("/menu", menuItemRoutes);

const PORT = process.env.PORT ;
app.listen(PORT , () => {
  console.log("listening on port 4000");
});
