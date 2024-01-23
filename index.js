const express = require('express');
const bodyParser = require("body-parser");
const cors = require("cors");  
const deptRouter = require('./products-api-routes');
//const productsRouter = require('./products-api-routes');

var app=express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use("/api", deptRouter);
//app.use("/api", productsRouter);


app.get("/", function(req,res)
{
    res.send("Welcome to Express JS API Application");
});




var server=app.listen(3005,function() {});
console.log("Server Started. URL:http://localhost:3005");