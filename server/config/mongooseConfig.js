const mongoose = require("mongoose");
const dbgr = require('debug')("development : mongoose");
require("dotenv").config();
mongoose.connect(`${process.env.DBURL}`)
.then(()=>{
    dbgr("connected");

}).catch((err)=>{
    dbgr(err);
});

module.exports = mongoose.connection;