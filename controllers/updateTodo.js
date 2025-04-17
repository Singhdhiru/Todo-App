const todoModel = require('../Model/Todo');

exports.updateTodo = async(req,res)=>{
    try{
        //* extract id from body 
        const id = req.params.id;
        const {titel, description} = req.body;
        const newTodo = await todoModel.findByIdAndUpdate(
            {_id: id},
            {titel, description, updatedAt: Date.now()}
        )  
        res.status(200).json({
            success: true,
            data: newTodo,
            message: "Update Todo Data"
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