import { z } from "zod";

export const taskBaseSchema = z.object({
	title: z
		.string()
		.min(1, "Title is required")
		.max(100, "Title must be under 100 characters"),
});

export const taskIdParamSchema = z.object({
	id: z.string().regex(/^\d+$/, "Invalid task id"),
});
