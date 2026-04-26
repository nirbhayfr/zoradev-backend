import sanitize from "mongo-sanitize";
import tryCatch from "../middlewares/errorHandler.js";
import { taskStore } from "../store/taskStore.js";
import { taskBaseSchema, taskIdParamSchema } from "../config/zod.js";

export const getTasks = tryCatch(async (req, res) => {
	return res.status(200).json({
		success: true,
		message: "Tasks fetched successfully",
		data: taskStore.getAll(),
	});
});

export const createTask = tryCatch(async (req, res) => {
	const sanitizedBody = sanitize(req.body);

	const baseValidation = taskBaseSchema.safeParse(sanitizedBody);

	if (!baseValidation.success) {
		const firstError = baseValidation.error.issues[0]?.message;
		return res.status(400).json({ message: firstError });
	}

	const { title } = baseValidation.data;

	const task = taskStore.create(title);

	return res.status(201).json({
		success: true,
		message: "Task created successfully",
		data: task,
	});
});

export const deleteTask = tryCatch(async (req, res) => {
	const paramValidation = taskIdParamSchema.safeParse(req.params);

	if (!paramValidation.success) {
		const firstError = paramValidation.error.issues[0]?.message;
		return res.status(400).json({ message: firstError });
	}

	const id = parseInt(paramValidation.data.id);

	const deletedTask = taskStore.deleteById(id);

	if (!deletedTask) {
		return res.status(404).json({
			success: false,
			message: "Task not found",
		});
	}

	return res.status(200).json({
		success: true,
		message: "Task deleted successfully",
		data: deletedTask[0],
	});
});

export const toggleTask = tryCatch(async (req, res) => {
	const paramValidation = taskIdParamSchema.safeParse(req.params);

	if (!paramValidation.success) {
		const firstError = paramValidation.error.issues[0]?.message;
		return res.status(400).json({ message: firstError });
	}

	const id = parseInt(paramValidation.data.id);

	const updated = taskStore.toggleById(id);

	if (!updated) {
		return res.status(404).json({
			success: false,
			message: "Task not found",
		});
	}

	return res.status(200).json({
		success: true,
		message: "Task toggled successfully",
		data: updated,
	});
});
