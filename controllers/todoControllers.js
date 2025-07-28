import todoModel from "../models/TodoModels.js";

export const createTodo = async(req,res) => {
    try{
    const {title,description} = req.body;
    const todo = await todoModel.create({ title, description });

    res.status(201).json(todo);
}
catch(err){
    res.status(500).json({message: err.message})
}
};

export const getTodo = async (req,res)=>{
    try{
      const todo = await todoModel.find({});
      res.status(200).json(todo)
    }
    catch(err){
        res.status(500).json({message: err.message})
    }
} 

export const deleteTodo = async (req,res)=>{
    try{
      const todo = await todoModel.findByIdAndDelete(req.params.id);
      if(!todo) 
        res.status(404).json({message:err.message})
    }
    catch(err){
        res.status(500).json({message: err.message})
    }
}

