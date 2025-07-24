from fastapi import FastAPI, HTTPException
from pydantic import BaseModel

app = FastAPI()

class ChatRequest(BaseModel):
    message: str

class ChatResponse(BaseModel):
    response: str

@app.post("/chat", response_model=ChatResponse)
async def chat(request: ChatRequest):
    # Simple echo AI for demonstration
    if not request.message:
        raise HTTPException(status_code=400, detail="Message cannot be empty")
    return ChatResponse(response=f"AI: {request.message}")

