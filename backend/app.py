from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from model import evaluate_idea
import uvicorn

app = FastAPI()

class IdeaRequest(BaseModel):
    idea: str

@app.post("/evaluate")
def evaluate(request: IdeaRequest):
    result = evaluate_idea(request.idea)
    return result

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
