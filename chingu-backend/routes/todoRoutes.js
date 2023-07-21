import Express from "express";
import { createTodo, getAllTodos, getTodoById, deleteTodoById } from "../controllers/todoControllers.js"

const router = Express.Router();

router.route("/").get(getAllTodos).post(createTodo)
router.route("/:id").get(getTodoById).delete(deleteTodoById);

export default router;