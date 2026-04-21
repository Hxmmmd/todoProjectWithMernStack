# Todo Project - Client (Frontend)

This directory contains the frontend for the Todo Project, built with React and Vite. It provides a clean, responsive UI to manage tasks, allowing users to create, complete, and delete todos.

## Tech Stack

- **React 19**: Modern UI library for building the interface.
- **Vite**: Next-generation frontend tooling for ultra-fast development server and optimized builds.
- **Axios**: Promise-based HTTP client to communicate with the backend REST API.
- **React Icons**: For UI icons.
- **Nginx**: Used in the production Docker image to serve the built static assets.

## Directory Structure

- `src/components/`: Reusable React components (CreateTask, TodoTask, Heading).
- `src/hooks/`: Custom React hooks (`useTodos.jsx` for state and API logic).
- `src/model/`: Axios wrapper methods (`todoMeathod.js`) handling CRUD operations.

## Scripts

In the project directory, you can run:

### `npm run dev`
Runs the app in development mode using Vite. Open [http://localhost:5173](http://localhost:5173) to view it in the browser. The page will automatically reload if you make edits.

### `npm run build`
Builds the app for production to the `dist` folder. It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm run preview`
Locally preview the production build after running `npm run build`.

### `npm run lint`
Runs ESLint to check for code quality and style issues.

## Environment Variables

When running locally, the frontend expects the backend API to be available at `http://localhost:3000/todos`.

When running via Docker, you can pass a custom API endpoint using the `VITE_API_ENDPOINT_URL` environment variable.

## Docker Setup

This client includes a multi-stage `dockerfile`:
1. **Stage 1 (Builder)**: Uses a Node.js image to install dependencies and run `npm run build`, generating the static files.
2. **Stage 2 (Production)**: Uses a lightweight `nginx:alpine` image to copy the build artifacts and serve them efficiently on port 80. (Mapped to 5173 in `docker-compose.yaml`).
