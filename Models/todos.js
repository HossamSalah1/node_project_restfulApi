const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    title: {
        type: String, 
        required: true ,
        trim:true
    },
    status: { 
        type: String, 
        enum: ["done", "in progress", "todo"], 
        default: "todo" ,
    }
});

const todoModel = mongoose.model('Todo', todoSchema);
module.exports = todoModel;
