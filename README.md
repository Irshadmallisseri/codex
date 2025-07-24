# AI Assistant Example

This repository contains a simple AI assistant with a FastAPI backend and a Next.js frontend. Both services run together using Docker Compose.

## Prerequisites
- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/)

## Setup
1. Copy `.env.example` to `.env` and add your values. Set `OPENAI_API_KEY` if you want real AI responses.
2. Build and start the services:
   ```bash
   docker-compose up --build
   ```
3. Access the frontend at [http://localhost:3000](http://localhost:3000). The backend API is available at [http://localhost:8000/chat](http://localhost:8000/chat).

During development the containers mount the source code and run with hot reloading so changes are picked up immediately.

## Project Structure
- `backend/` – FastAPI service
- `frontend/` – Next.js application
- `docker-compose.yml` – Docker orchestration file
- `.env.example` – environment variable template
- `CHANGELOG.md` – release notes
