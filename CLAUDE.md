# CLAUDE.md - Todo App Development Guide

## Build Commands
- Frontend: `cd frontend && npm install && npm start`
- Backend: `cd backend && npm install && npm start`
- Full stack: `npm run dev` (runs both concurrently)

## Test Commands
- Frontend: `cd frontend && npm test`
- Backend: `cd backend && npm test`
- Single test: `cd [frontend|backend] && npm test -- -t "test name"`

## Lint Commands
- Frontend: `cd frontend && npm run lint`
- Backend: `cd backend && npm run lint`
- Fix linting issues: `cd [frontend|backend] && npm run lint -- --fix`

## Code Style Guidelines
- Use functional components with React hooks for frontend
- Follow ESM import/export syntax
- Use async/await for asynchronous operations
- Employ TypeScript for type safety
- Follow kebab-case for filenames, camelCase for variables/functions
- Use PascalCase for component names and interfaces
- Handle errors with try/catch blocks and proper logging
- Organize imports: React, libraries, components, utils, styles
- Write tests for all business logic and components