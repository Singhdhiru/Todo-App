const express = require('express');
const router = express.Router();

//* import controller
const {createTodo} = require('../controllers/createTodo');
const{getTodos, getTodoById} = require('../controllers/getTodos');

//* Api route
router.post("/createTodo", createTodo);
router.get('/getTodos', getTodos);
router.get('/gettodoById', getTodoById);

module.exports = router;

