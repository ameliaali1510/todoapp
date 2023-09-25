const Todo = require("../models/todo")

const getTodos = async (req, res) => {

    const items = await Todo.find({})

    res.json({
        message: "all items",
        todos: items
    })
}

const getTodo = async (req, res) => {

    const { id } = req.params

    const todo = await Todo.findById(id)

    res.status(200).json(todo)
}

const createTodo = async (req, res) => {

    const { text } = req.body
    console.log(text)

    const todoObj = new Todo({
        text,
    })


    const newTodo = await todoObj.save()

    res.status(200).json(newTodo)
}

const editTodo = async (req, res) => {

    const { id } = req.params

    const todo = await Todo.findByIdAndUpdate(id, { text: req.body.text })
    res.status(200).json(todo)
}

const deleteTodo = async (req, res) => {

    const { id } = req.params

    const todo = await Todo.findByIdAndDelete(id)

    res.status(200).json(todo)
}

module.exports = {
    createTodo,
    getTodos,
    editTodo,
    deleteTodo,
    getTodo
}