# Changelog

## v0.2.0
- `/chat` now generates answers using the OpenAI API when an `OPENAI_API_KEY` is provided.
- Added SQLite message persistence with SQLAlchemy.
- Frontend revamped with chat bubbles, typing indicator and error handling.
- Added environment variable support via `.env` files.
- Dockerfiles converted to multi-stage builds and Docker Compose enables hot reloading.
- Added `.env.example` and updated setup instructions.
