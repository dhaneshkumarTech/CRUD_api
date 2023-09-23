
const Todo = require("../model/todo");

const getTodo = async (req, res) => {
    try {
        const todos = await Todo.find();
        res.json(todos)
    }
    catch (error) {
        res.status(400).send(error)
    }
}
const createTodo = async (req, res) => {
    try {
        const todo = new Todo({
            title: req.body.title,
            description: req.body.description,
            completed: req.body.completed
        });

        const savedTodo = await todo.save();
        res.json(savedTodo);
    } catch (err) {
        res.status(400).send(err);
    }
};


const updateTodo = async (req, res) => {

    try {
        const updatedTodo = await Todo.findOneAndUpdate(
            { _id: req.params.todoID },
            {
                $set: {
                    title: req.body.title,
                    description: req.body.description,
                    completed: req.body.completed,
                },
            },
            { new: true }
        );

        if (!updatedTodo) {
            return res.status(404).send("Todo not found");
        }

        res.json(updatedTodo);
    }
    catch (err) {
        res.status(404).send(err)
    }
}

const deleteTodo = async (req, res) => {
    try {
        const deletedTodo = await Todo.deleteOne(
            { _id: req.params.todoID })

        if (deleteTodo.deleteCount == 0) {
            res.staus(404).json({ message: "Todo not found!" });
        }
        res.json({ message: "Todo deleted" });

    }
    catch (err) {
        res.status(404).send(err);
    }
}

module.exports = {
    getTodo, createTodo, updateTodo, deleteTodo,
};