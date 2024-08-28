
const Todo = require('../models/Todo');



// All get Todo

const getAllTodo = async (req, res) => {

    try {
        const todos = await Todo.find();
        res.status(200).json(todos);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}


// Add a new Todo

const postTodo = async (req, res) => {

    try {
        const post = await Todo.create(req.body);
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}



// Get a Todo

const getTodo = async (req, res) => {
    try {
        const {id} = req.params;
        const todo = await Todo.findById({_id: id});
        res.status(200).json(todo);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

// Patch a Todo

const updateTodo = async (req, res) => {

    try {

        const {id} = req.params;

        const todo = await Todo.findById(id);
        todo.save();

        todo.completed = !todo.completed
        if (!todo) {
            return res.status(400).json({error: 'Not Updated'});
        }


             res.status(200).json(todo);


    } catch (error) {
        res.status(500).json({error: error.message});
    }

}

// Delete a Todo

const deleteTodo = async (req, res) => {
    try {
        const {id} = req.params;

        const todo = await Todo.findByIdAndDelete({_id: id});

        if (!todo) {
            return res.status(400).json({message: 'Not Deleted'});
        }
        res.status(200).json({message: 'Deleted'});

    } catch (error) {
        res.status(500).json({error: error.message});
    }

}

module.exports = {
    getAllTodo,
    getTodo,
    postTodo,
    updateTodo,
    deleteTodo
}