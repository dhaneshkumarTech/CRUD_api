const { getTodo, createTodo, updateTodo, deleteTodo } = require('./controller/Todo');

const router = require('express').Router();


router.get("/todos", getTodo)

router.post("/todos", createTodo)

router.put("/todos/:todoID", updateTodo)

router.delete("/todos/:todoID", deleteTodo);


module.exports = router;