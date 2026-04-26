import express from "express";
import {
	createTask,
	deleteTask,
	getTasks,
	toggleTask,
} from "../controllers/Tasks.js";

const router = express.Router();

router.get("/", getTasks);
router.post("/", createTask);
router.delete("/:id", deleteTask);
router.patch("/:id/toggle", toggleTask);

export default router;
