# Todo Project

A full-stack to-do application built with React, Vite, Express, and MongoDB. The frontend lets you create, complete, and delete tasks, while the backend stores todos in MongoDB and exposes a small REST API.

## Overview

This project is split into two parts:

- `client/` contains the React frontend built with Vite.
- `server/` contains the Express API and MongoDB connection logic.

The application flow is simple:

1. The React app loads and requests all todos from the backend.
2. The Express server reads todo data from MongoDB using Mongoose.
3. When you create, complete, or delete a task in the UI, the frontend sends a request to the API.
4. The server updates MongoDB and returns the updated data.
5. The frontend updates local state so the UI refreshes immediately.

## Features

- Create a new todo
- View all saved todos
- Mark a todo as completed
- Delete a todo
- Minimal task dashboard UI
- REST API connected to MongoDB

## Tech Stack

### Frontend

- React 19
- Vite
- Axios
- React Icons

### Backend

- Node.js
- Express 5
- MongoDB
- Mongoose
- dotenv
- cors

## Project Structure

```text
todo project/
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── model/
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── index.css
│   │   └── main.jsx
│   ├── .dockerignore
│   ├── .env
│   ├── Dockerfile
│   ├── package.json
│   └── vite.config.js
├── server/
│   ├── config/
│   ├── controller/
│   ├── model/
│   ├── routes/
│   ├── .dockerignore
│   ├── .envExample
│   ├── .env
│   ├── Dockerfile
│   ├── index.js
│   └── package.json
├── docker-compose.yaml
└── README.md
```

## How It Works

### Frontend flow

The main UI lives in `client/src/App.jsx`.

- `useTodos.jsx` handles fetching and updating todos.
- `todoMeathod.js` wraps all Axios requests in a small CRUD class.
- `CreateTask.jsx` collects user input for a new todo.
- `TodoTask.jsx` renders each task and triggers complete/delete actions.
- `Heading.jsx` displays the dashboard header.

On the frontend, the API base URL is currently hardcoded as:

```js
http://localhost:3000/todos
```

That means the backend should run on port `3000` unless you also update the frontend code.

### Backend flow

The backend starts from `server/index.js`.

- Loads environment variables with `dotenv`
- Enables CORS for the frontend origin
- Parses JSON request bodies
- Registers todo routes
- Connects to MongoDB
- Starts the Express server

The route file `server/routes/todoList.js` defines the API endpoints, and `server/controller/todoListController.js` contains the controller logic for each operation.

MongoDB data is modeled in `server/model/Todos.js` with this schema:

- `todoText`: required string
- `isCompleted`: boolean

## API Endpoints

Base URL:

```text
http://localhost:3000
```

### Get all todos

```http
GET /todos
```

Response:

```json
[
  {
    "_id": "661111111111111111111111",
    "todoText": "Finish README",
    "isCompleted": false
  }
]
```

### Create a todo

```http
POST /todos
```

Request body:

```json
{
  "todoText": "Finish README",
  "isCompleted": false
}
```

### Update a todo

```http
PATCH /todos/:id
```

Example request body:

```json
{
  "isCompleted": true
}
```

### Delete a todo

```http
DELETE /todos/:id
```

## Prerequisites

Before running this project, make sure you have:

- Node.js installed
- npm installed
- MongoDB installed locally, or a MongoDB Atlas connection string
- **Docker & Docker Compose** (Optional, if you want to run via Docker)

## Running with Docker (Recommended)

You can easily run the entire project (Frontend, Backend, and MongoDB) using Docker Compose.

1. Clone the repository:
```bash
git clone https://github.com/Hxmmmd/todoProjectWithMernStack.git
cd todoProjectWithMernStack
```

2. Build and start all services using Docker Compose:
```bash
docker-compose up --build
```

This will automatically set up the MongoDB database, start the Express backend on port `3000`, and serve the React frontend on port `5173`.

**Access the application:**
- Frontend UI: [http://localhost:5173](http://localhost:5173)
- Backend API: [http://localhost:3000](http://localhost:3000)

To stop the containers, simply press `Ctrl+C` in your terminal or run `docker-compose down`.

## Running the Project Locally

If you prefer not to use Docker, you can run the project locally. You will need two terminals: one for the backend and one for the frontend.

### Installation

Clone the repository and install dependencies in both the client and server.

```bash
git clone https://github.com/Hxmmmd/todoProjectWithMernStack.git
cd todoProjectWithMernStack
```

### Install frontend dependencies

```bash
cd client
npm install
```

### Install backend dependencies

```bash
cd ../server
npm install
```

### Environment Variables

The backend uses environment variables from `server/.env`.

There is already a template file at `server/.envExample`.

Create a new file named `server/.env` and add:

```env
PORT=3000
MONGODB_URL=mongodb://localhost:27017/TodoProject
CLIENT_URL=http://localhost:5173
```

#### Variable explanation

- `PORT`: the port used by the Express backend
- `MONGODB_URL`: your MongoDB connection string
- `CLIENT_URL`: the frontend URL allowed by CORS

### Start the backend

```bash
cd server
npm run dev
```

This runs the Express server with `nodemon`.

### Start the frontend

```bash
cd client
npm run dev
```

Vite will usually start the frontend at:

```text
http://localhost:5173
```

## Production Build

To create a production-ready frontend build:

```bash
cd client
npm run build
```

To preview the built frontend locally:

```bash
npm run preview
```

## Available Scripts

### Client

- `npm run dev` starts the Vite development server
- `npm run build` creates the production build
- `npm run preview` previews the production build locally
- `npm run lint` runs ESLint

### Server

- `npm run dev` starts the backend with nodemon

## Example Usage

1. Start MongoDB.
2. Start the backend from `server/`.
3. Start the frontend from `client/`.
4. Open the frontend in your browser.
5. Type a task into the input field.
6. Click `Create task`.
7. Mark tasks as done or delete them as needed.

## Error Handling

The backend includes basic error handling for:

- Mongoose validation errors
- Invalid MongoDB document IDs
- Duplicate data errors
- General server errors

The frontend also wraps API errors and logs them in the console.

## Current Notes and Limitations

- The frontend API URL is hardcoded in `client/src/hooks/useTodos.jsx` as `http://localhost:3000/todos`.
- The edit icon is visible in the UI, but an edit feature is not implemented yet.
- There are currently no automated tests in the project.
- The server depends on a valid MongoDB connection before it starts listening for requests.

## Troubleshooting

### CORS error

Make sure `CLIENT_URL` in `server/.env` exactly matches your frontend URL.

Example:

```env
CLIENT_URL=http://localhost:5173
```

### Cannot connect to MongoDB

Check that:

- MongoDB is running
- your connection string is correct
- the database name is included in the URL when required

Example:

```env
MONGODB_URL=mongodb://localhost:27017/TodoProject
```

### Frontend loads but todos do not appear

Check that:

- the backend is running on port `3000`
- MongoDB is connected successfully
- the browser console does not show failed API requests

## Future Improvements

- Add edit todo functionality
- Move the frontend API URL into environment variables
- Add loading and error states in the UI
- Add automated tests
- Add authentication for multiple users
- Add filtering by completed and pending todos

## Author

Hammad Hanif
