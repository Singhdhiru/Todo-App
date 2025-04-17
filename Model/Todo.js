const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    titel:{
        type: String,
        required: true,
        maxLenght: 50
    },
    
    description:{
        type: String,
        required: true,
        maxLenght: 50
    },

    creatdAt:{
        type: Date,
        required: true,
        default: Date.now()
    },

    updatedAt:{
        type: Date,
        required: true,
        default: Date.now()
    }
});

const todoModel = mongoose.model('todoModel', todoSchema);
module.exports = todoModel;