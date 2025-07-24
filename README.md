# AI Assistant Example

This repository contains a minimal AI assistant example with a FastAPI backend and a Next.js frontend. Both services can be run together using Docker Compose.

## Prerequisites
- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/)

## Usage

Build and start the services:

```bash
docker-compose up --build
```

Access the frontend at [http://localhost:3000](http://localhost:3000).
The backend API will be available at [http://localhost:8000/chat](http://localhost:8000/chat).

## Project Structure
- `backend/` – FastAPI service
- `frontend/` – Next.js application
- `docker-compose.yml` – Docker orchestration file
