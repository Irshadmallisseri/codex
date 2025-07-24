from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from dotenv import load_dotenv
import openai
import os
from database import init_db, SessionLocal, Message

app = FastAPI()

load_dotenv()
openai.api_key = os.getenv("OPENAI_API_KEY")

class ChatRequest(BaseModel):
    message: str

class ChatResponse(BaseModel):
    response: str

@app.on_event("startup")
def startup_event():
    init_db()

@app.post("/chat", response_model=ChatResponse)
async def chat(request: ChatRequest):
    if not request.message:
        raise HTTPException(status_code=400, detail="Message cannot be empty")
    try:
        if openai.api_key:
            resp = openai.ChatCompletion.create(
                model="gpt-3.5-turbo",
                messages=[{"role": "user", "content": request.message}],
            )
            ai_text = resp.choices[0].message.content.strip()
        else:
            ai_text = f"I heard you say: {request.message}"
    except Exception:
        raise HTTPException(status_code=500, detail="AI generation failed")

    db = SessionLocal()
    msg = Message(user_message=request.message, ai_response=ai_text)
    db.add(msg)
    db.commit()
    db.close()
    return ChatResponse(response=ai_text)
