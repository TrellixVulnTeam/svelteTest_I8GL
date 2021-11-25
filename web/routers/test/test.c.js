const express = require("express");
const Test = express.Router();
const TestServer = require("./test.s");

Test.get("/", TestServer.getNewsData);


module.exports = Test;