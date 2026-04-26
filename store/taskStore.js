let tasks = [];
let currentId = 1;

export const taskStore = {
	getAll() {
		return tasks;
	},

	create(title) {
		const task = {
			id: currentId++,
			title,
			completed: false,
		};
		tasks.push(task);
		return task;
	},

	deleteById(id) {
		const index = tasks.findIndex((t) => t.id === id);
		if (index === -1) return null;
		return tasks.splice(index, 1)[0];
	},

	toggleById(id) {
		const task = tasks.find((t) => t.id === id);
		if (!task) return null;

		task.completed = !task.completed;
		return task;
	},
};
