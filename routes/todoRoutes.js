import express from 'express';
import { createTodo, deleteTodo, getTodo } from '../controllers/todoControllers.js';

const router = express.Router()




router.post("/" , createTodo );
router.get("/", getTodo);
router.delete("/:id", deleteTodo)

export default router;