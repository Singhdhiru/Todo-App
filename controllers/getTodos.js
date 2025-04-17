const express = require('express');
const router = express.Router();
const todoModel = require('../Model/Todo');

exports.getTodos = async(req,res)=>{
    try{
        
        res.status(200).json({
            success: true,
            data: response,
            message: "Todo created sucessfully"
        });
    }
    catch(err){
        // console.err(err);
        console.log(err);
        res.status(500).json({
            success: false,
            data : "Internal server error",
            message: err.message
        });
    }
}

//* find todoy by id
exports.getTodoById = async(req, res)=>{
    try{
        const id = req.params.id;
        const todo = await todoModel.findById({_id: id});
        res.status(200).json({
            success: true,

        })
    }
    catch(err){
        console.log(err);
        res.status(400).json({

        });
    }
}