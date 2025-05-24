import React from "react";
import IdeaForm from "./components/IdeaForm";

function App() {
  const handleIdeaSubmit = (idea: string) => {
    console.log("User Idea Submitted:", idea);
    // This is where backend API call will go later
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-center p-6">🧠 StartEval Agent</h1>
      <IdeaForm onSubmit={handleIdeaSubmit} />
    </div>
  );
}

// ✅ Make sure this is OUTSIDE the function
export default App;
