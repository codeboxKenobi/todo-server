import Router from 'express';
import TodoController from './TodoController.js'

const router = new Router();

router.post('/todo', TodoController.create)
router.get('/todo', TodoController.getAllTodo)
router.put('/todo/:id', TodoController.updateTodo)
router.delete('/todo/:id', TodoController.deleteTodo)

export default router;