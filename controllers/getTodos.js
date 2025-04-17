const todoModel = require('../Model/Todo');

exports.getTodos = async(req,res)=>{
    try{
        //* fetch all todos
        const todos = await todoModel.find({});   
        res.status(200).json({
            success: true,
            data: todos,
            message: "Fetch all todos Data"
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
        //* find id
        const id = req.params.id;
        if(!id){
            return res.status(400).json({
                success: false,
                data: "Invalid id",
                message: "Invalid id"
            });
        }
        const todo = await todoModel.findById({_id: id});
        res.status(200).json({
            success: true,
            dats: todo,
            message: "Fetch todo by id"

        })
    }
    catch(err){
        console.log(err);
        res.status(500).json({
            success: false,
            data: "Internal server error",
            message: err.message
        });
    }
}