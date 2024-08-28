const router = require('express').Router();
const {getAllTodo, deleteTodo, updateTodo, postTodo, getTodo} = require('../controllers/todo');

router.route('/').get(getAllTodo).post(postTodo);
router.route('/:id').get(getTodo).put(updateTodo).delete(deleteTodo);

module.exports = router;