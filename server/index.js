let express = require("express");
let app = express();
app.listen(3000);

let db = require("./config/mongooseConfig");
let TaskModel = require("./Models/TaskModel");
let cors = require("cors");
let TaskRouter = require("./Routers/TaskRouter");

app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.set("view engine","ejs");
app.use(cors())



app.get("/",(req,res)=>{
    res.send("hello")
});



app.use("/task",TaskRouter)