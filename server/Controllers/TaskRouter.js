const TaskModel = require("../Models/TaskModel")

module.exports.createTask = async (req,res)=>{
    let {task } = req.body;

    let createTask = await TaskModel.create({
        task
    });

    res.send(createTask);
} 
module.exports.allTasks = async (req,res)=>{
    let allTasks = await TaskModel.find({});
    res.send({allTasks});
}

module.exports.deleteTask = async (req,res)=>{
    let {id } = req.params;
    let deleteTask = await TaskModel.findByIdAndDelete(id);
    res.send(deleteTask);
}

module.exports.updateTask = async (req,res)=>{
    let {id} = req.params;
    //console.log(id);
    //console.log(req.body);
    let {task} = req.body;
    let updateTask = {task}
    let updatedTask = await TaskModel.findOneAndUpdate({_id: id},updateTask);
    res.send(updatedTask);
}
module.exports.editTask = async (req, res) => {
    try {
        let { id } = req.params;
        let editTask = await TaskModel.findById(id);
        res.send(editTask);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};