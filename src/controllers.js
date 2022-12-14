const { response } = require("express");
const {Todo} = require("./models");

const getAllTodos = async (request , response)=> {
    var id = request.query.id;
    if(id){
        var allTodos = await Todo.findById(id);
    }
    else{
        var allTodos = await Todo.find();
    }  
    return response.json(allTodos);
};

const createTodo =async (request, response) => {
    console.log(request.body);
    await Todo.create(request.body); 
    return response.json({ status: "Done"});
};

const updateTodo =async (request , response) =>{
    var id = request.query.id;
    var data = request.body;
    console.log(id , data);
    await Todo.findByIdAndUpdate(id , data);

    return response.json({status: "Done" });
};

const deleteTodo = async (request , response) =>{
    var id = request.query.id;
    console.log(id);
    await Todo.findByIdAndDelete(id);

    return response.json({status: "Dpne" });
};

const patchTodo =async (request , response) =>{
    var id = request.query.id;
    var data = request.body;
    console.log(id , data);
    await Todo.findByIdAndUpdate(id , data);

    return response.json({status: "Done"});
};


module.exports = { 
    getAllTodos , 
    createTodo , 
    updateTodo , 
    deleteTodo , 
    patchTodo
};


