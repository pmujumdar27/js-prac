let todos = []

const findTodoById = (todos, id) => {
    return todos.find(todo => todo.id === id)
}

const findIndex = (todos, id) => {
    return todos.findIndex(todo => todo.id === id)
}

const getTodos = (req, res) => {
    res.json(todos)
}

const getTodoById = (req, res) => {
    const foundTodo = findTodoById(todos, req.params.id)
    if (!foundTodo) {
        return res.status(404).send()
    }
    res.json(foundTodo)
}

const createTodo = (req, res) => {
    const todo = req.body
    const todoId = todo.id
    if (findTodoById(todos, todoId)) {
        return res.status(400).json({"message": `Todo with ID ${todoId} alraedy exists`})
    }
    todos.push(todo)
    res.status(201).json({ id: todoId })
}

const updateTodoById = (req, res) => {
    let foundTodoIndex = findIndex(todos, req.params.id)
    if (foundTodoIndex === -1) {
        return res.status(404).send()
    }
    const todo = req.body
    todos[foundTodoIndex] = todo
    return res.status(200).send()
}

const deleteTodoById = (req, res) => {
    const foundTodo = findTodoById(todos, req.params.id)
    if (!foundTodo) {
        return res.status(404).send()
    }
    todos = todos.filter(todo => todo.id !== req.params.id)
    return res.status(200).send()
}

module.exports = {
    getTodos,
    getTodoById,
    createTodo,
    updateTodoById,
    deleteTodoById,
}