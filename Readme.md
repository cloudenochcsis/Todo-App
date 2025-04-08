# Todo App

A full-stack Todo application with React frontend and Node.js/Express/MongoDB backend.

## Tech Stack
- **Frontend**: React
- **Backend**: Node.js + Express
- **Database**: MongoDB
- **Containerization**: Docker, Docker Compose

## Focus Areas
- Full CI/CD implementation
- Containerization with Docker
- Azure App Service deployment
- Application monitoring with App Insights
- Automated testing and linting

## DevOps Skills Demonstrated
- CI/CD Pipelines
- Containerization
- Cloud deployment
- Application monitoring
- Secrets management

## Features
- Create, read, update, and delete todos
- Mark todos as completed/uncompleted
- Responsive design
- RESTful API
- MongoDB database for persistence

## Getting Started

### Prerequisites
- Node.js and npm (for local development)
- MongoDB (for local development)
- Docker and Docker Compose (for containerized deployment)

### Local Installation

1. Clone the repository
```
git clone <repository-url>
cd Todo-app
```

2. Install all dependencies
```
npm run install-all
```

3. Start MongoDB (if it's not running as a service)
```
mongod
```

4. Start the development servers
```
npm run dev
```

5. Open your browser and navigate to `http://localhost:3000`

### Docker Deployment

1. Clone the repository
```
git clone <repository-url>
cd Todo-app
```

2. Build and start the containers
```
docker-compose up -d
```

3. Open your browser and navigate to `http://localhost`

4. To stop the containers
```
docker-compose down
```

## API Endpoints

- `GET /api/todos` - Get all todos
- `POST /api/todos` - Create a new todo
- `PATCH /api/todos/:id` - Update a todo
- `DELETE /api/todos/:id` - Delete a todo

## Docker Architecture

The application is containerized using Docker with three services:

1. **MongoDB**: Database service
   - Persists data using Docker volumes

2. **Backend API**: Node.js Express service
   - Connects to MongoDB service
   - Exposes REST API on port 5000

3. **Frontend**: React app served by Nginx
   - Built as a static site
   - Served on port 80
   - Proxies API requests to the backend service

## Project Structure

```
Todo-app/
├── docker-compose.yml     # Docker compose configuration
├── .dockerignore          # Files excluded from Docker build
│
├── backend/               # Backend code
│   ├── Dockerfile         # Backend Docker configuration
│   ├── models/            # Database models
│   ├── routes/            # API routes
│   ├── .env               # Environment variables
│   ├── package.json       # Backend dependencies
│   └── server.js          # Server entry point
│
└── frontend/              # Frontend code
    ├── Dockerfile         # Frontend Docker configuration
    ├── nginx.conf         # Nginx configuration for React
    ├── public/            # Static files
    ├── src/               # React components
    │   ├── components/    # React components
    │   ├── App.js         # Main App component
    │   └── index.js       # React entry point
    └── package.json       # Frontend dependencies
```