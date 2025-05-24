import os
import google.generativeai as genai
from dotenv import load_dotenv

load_dotenv()
genai.configure(api_key=os.getenv("GEMINI_API_KEY"))

def evaluate_idea(idea):
    try:
        prompt = f"""
        Evaluate this startup idea: "{idea}"

        1. Classify it as a 'Vitamin' or 'Painkiller'.
        2. Identify the Ideal Customer Profile (ICP).
        3. Distinguish between end-user and buyer.
        4. State KPIs impacted and how.

        Please format your output as:
        {{
          "classification": "...",
          "icp": "...",
          "user": "...",
          "buyer": "...",
          "kpis": ["...", "..."]
        }}
        """

        model = genai.GenerativeModel("gemini-1.5-flash")
        response = model.generate_content(prompt)

        if hasattr(response, "text"):
            return {"evaluation": response.text}
        else:
            return {"error": "No text returned from Gemini."}
    except Exception as e:
        return {"error": str(e)}
