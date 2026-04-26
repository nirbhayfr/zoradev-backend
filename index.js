import cors from "cors";
import express from "express";
import dotenv from "dotenv";

import taskRoutes from "./routes/Tasks.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(
	cors({
		origin: ["http://localhost:5173"],
		credentials: true,
	}),
);

app.get("/api/health", (req, res) => {
	res.json({
		status: "ok",
		timestamp: new Date(),
		uptime: process.uptime(),
	});
});

app.use("/api/v1/task", taskRoutes);

app.use((req, res) => {
	res.status(404).json({ error: "Route not found" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
	console.log("Server listening at port", PORT);
});
