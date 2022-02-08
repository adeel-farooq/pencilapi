const express = require('express')
const mongoConnection = require('./utils/database')
const bodyparser = require("body-parser");
const questionRoutes = require('./routes/route')
const app = express()
let PORT=5000

const httpServer = require("http").createServer(app);

app.use((req, res, next) => {
    res.secretOrKey = "@!!!!@##@";
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "*");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    next();
});
app.use(bodyparser.json({ limit: "50mb" }));
app.use(bodyparser.urlencoded({ extended: false }));

app.use("/api",questionRoutes);
app.use((req, res, next) => {
    res.status(404).json("404 Api not");
});
httpServer.listen(PORT,()=>{
    console.log('connected');
});