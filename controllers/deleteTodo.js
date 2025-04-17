const todoModel = require('../Model/Todo');
exports. deleteTodo = async(req,res)=>{
    try{
        const id = req.params.id;
        if(!id){
            res.status(400).json({
                success: false,
                err: err.message,
                message: 'Invalid id'
            })
        }
        const response = await todoModel.findByIdAndDelete({_id: id});
        res.status(200).json({
            success: true,
            data: response,
            message: "Delete Todo Data"
        })

    }
    catch(err){
        res.status(500).json({
            success: false,
            err: err.message,
            message: 'Server Error'
        })
    }
}