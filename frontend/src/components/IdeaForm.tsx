import React, { useState } from "react";

const IdeaForm = ({ onSubmit }: { onSubmit: (idea: string) => void }) => {
  const [idea, setIdea] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(idea);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 max-w-xl mx-auto">
      <textarea
        className="w-full p-3 border border-gray-300 rounded-lg"
        placeholder="Describe your startup idea..."
        value={idea}
        onChange={(e) => setIdea(e.target.value)}
        rows={6}
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
      >
        Evaluate Idea
      </button>
    </form>
  );
};

export default IdeaForm;
