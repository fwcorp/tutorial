const express = require("express");
const server = express();

server.use("/tmp", express.static("/tmp"));
server.listen(8080, () => console.log("listening"));
