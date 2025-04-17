const express = require('express');
const router = express.Router();
const todoModel = require('../Model/Todo');

exports.createTodo = async(req,res)=>{
    try{
        //* Check if req.body exists
        if (!req.body) {
            return res.status(400).json({
                success: false,
                message: "Request body is missing"
            });
        }

        //* extract titel and description from req body
        const {titel, description} = req.body;

        // * creaet new todo and inseert into db
        const response = await todoModel.create({titel, description});
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