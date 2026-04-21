# Todo Project - Server (Backend)

This directory contains the Express-based REST API and database logic for the Todo Project. It connects to a MongoDB database to persist todo items.

## Tech Stack

- **Node.js**: JavaScript runtime environment.
- **Express 5**: Fast, unopinionated web framework for building the API.
- **MongoDB**: NoSQL database for flexible data storage.
- **Mongoose**: Elegant MongoDB object modeling for Node.js.
- **dotenv**: Loads environment variables from a `.env` file.
- **cors**: Middleware to enable Cross-Origin Resource Sharing.

## Directory Structure

- `index.js`: The main entry point that configures Express, middlewares, and starts the server.
- `routes/`: Defines the Express router endpoints (`todoList.js`).
- `controller/`: Contains the logic for handling API requests (`todoListController.js`).
- `model/`: Mongoose schemas and models for the database (`Todos.js`).
- `config/`: Database connection logic and other configurations.

## API Endpoints

Base URL: `http://localhost:3000`

- `GET /todos` - Fetch all todos.
- `POST /todos` - Create a new todo.
  - Body: `{ "todoText": "String", "isCompleted": Boolean }`
- `PATCH /todos/:id` - Update an existing todo (e.g., mark as complete).
  - Body: `{ "isCompleted": Boolean }`
- `DELETE /todos/:id` - Delete a todo by ID.

## Setup and Running Locally

1. Install dependencies:
   ```bash
   npm install
   ```

2. Create a `.env` file based on `.envExample`:
   ```env
   PORT=3000
   MONGODB_URL=mongodb://localhost:27017/TodoProject
   CLIENT_URL=http://localhost:5173
   ```

3. Start the development server using nodemon:
   ```bash
   npm run dev
   ```

## Docker Setup

This server includes a `dockerfile` based on `node:18-alpine` for a lightweight containerized environment. 
When orchestrated via `docker-compose.yaml` from the root directory, the server is automatically passed environment variables to connect to the internal `mongo` container (e.g., `MONGODB_URL=mongodb://mongo:27017/TodoProject`).
