# Task Manager Backend

## Overview

This is a simple REST API built using Node.js and Express for managing tasks. It uses in-memory storage (a plain JavaScript array), meaning data is not persisted and resets when the server restarts.

---

## Tech Stack

- Node.js
- Express.js
- Zod (for validation)

---

## API Endpoints

### 1. GET /task

Returns all tasks.

**Response:**

```json
{
	"success": true,
	"data": []
}
```

---

### 2. POST /task

Creates a new task.

**Request Body:**

```json
{
	"title": "Learn Node.js"
}
```

**Response:**

```json
{
	"success": true,
	"data": {
		"id": 1,
		"title": "Learn Node.js",
		"completed": false
	}
}
```

---

### 3. DELETE /task/:id

Deletes a task by ID.

---

## Bonus Endpoint (Optional Feature)

### PATCH /task/:id/toggle

Toggles task completion status.

---

## Folder Structure

```
project-root/
│
├── controllers/
│   └── task.controller.js
│
├── routes/
│   └── task.routes.js
│
├── store/
│   └── taskStore.js
│
├── config/
│   └── zod.js
│
├── middlewares/
│   └── errorHandler.js
│
└── index.js
```

---

## How to Run Locally

1. Clone the repository

```bash
git clone <your-repo-url>
cd <project-folder>
```

2. Install dependencies

```bash
npm install
```

3. Start the server

```bash
npm run dev
```

4. Server runs on:

```
http://localhost:5000
```

5. Base API URL:

```
http://localhost:5000/api/v1
```

---

## Design Decisions

- Used in-memory storage to keep implementation simple as per requirements.
- Created a separate store layer to manage state instead of mutating variables across files.
- Used Zod for request validation to ensure clean and predictable inputs.
- Followed controller-service separation for scalability.

---

## Limitations

- Data is not persistent (resets on server restart)
- No authentication or authorization
- Not suitable for production use

---

## Notes

- The toggle endpoint is added as a bonus feature and is not part of the core requirements.
- Focus was on clean structure, readability, and correct API behavior.
