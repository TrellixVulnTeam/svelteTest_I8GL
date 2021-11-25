const express = require("express");
const app = express();

const Test = require("./routers/test/test.c");

app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Methods', '*');
    res.header('Content-Type', 'application/json;charset=utf-8');
    next();
});

app.use("/test", Test);

app.listen(3000, () => {
    console.log("localhost:3000");
})