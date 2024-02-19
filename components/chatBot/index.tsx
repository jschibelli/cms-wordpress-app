// ChatWithGPT.js
import React, { useState } from "react";
import "./ChatWithGPT.module.scss";

export default function ChatWithGPT() {
  const [prompt, setPrompt] = useState("");
  const [responses, setResponses] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!prompt) return;

    // Replace this URL with your backend endpoint
    const response = await fetch("/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt }),
    });

    const data = await response.json();
    setResponses([...responses, { prompt, response: data.message }]);
    setPrompt("");
  };

  return (
    <div className="chat-container">
      <h1>Chat with GPT</h1>
      <div className="chat-box">
        {responses.map((entry, index) => (
          <div key={index} className="chat-message">
            <div className="user-message">{entry.prompt}</div>
            <div className="gpt-response">{entry.response}</div>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="chat-form">
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Type your message..."
          className="chat-input"
        />
        <button type="submit" className="send-button">
          Send
        </button>
      </form>
    </div>
  );
}
