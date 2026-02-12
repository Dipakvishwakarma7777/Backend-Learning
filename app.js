const express = require("express");
const server = express();

server.get("/", (req, res) => {
  res.send("first page ");
});

server.get("/first", (req, res) => {
  res.send("Second Page");
});

server.listen(3000);
