let express = require("express");
const { createTask,allTasks,deleteTask,editTask, updateTask } = require("../Controllers/TaskRouter");
let router = express.Router();


router.get("/",(req,res)=>{
    res.send("thiss is task")
});

router.post("/create",createTask)

router.get("/alltasks",allTasks) 

router.delete("/delete/:id",deleteTask);

router.get("/editTask/:id",editTask);

router.post('/updateTask/:id',updateTask)

module.exports = router;