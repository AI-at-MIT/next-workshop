'use client'
import React, { useState } from 'react';

function MyPage() {
  const [inputText, setInputText] = useState('');
  const [processedText, setProcessedText] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch('http://127.0.0.1:5000/process-text', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: inputText }),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const data = await response.json();
      setProcessedText(data.text);
    } catch (error) {
      console.error('Failed to process text:', error);
    }
  };

  return (
<div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
  <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
    <input
      type="text"
      value={inputText}
      onChange={handleInputChange}
      className="mb-4 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      placeholder="Enter text"
    />
    <button
      onClick={handleSubmit}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
    >
      Submit
    </button>
    <p className="mt-4 text-gray-700">
      Processed Text: <span className="font-semibold">{processedText}</span>
    </p>
  </div>
</div>

  );
}

export default MyPage;
