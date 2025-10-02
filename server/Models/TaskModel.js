const mongoose = require("mongoose");
const TaskSchema = mongoose.Schema({
    task:{
        type:String,
        required:true
    }
}); 

module.exports = mongoose.model("taskulu",TaskSchema);