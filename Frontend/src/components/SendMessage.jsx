import React from 'react';
import axios from 'axios';

const ReadMessage = () => {
  const handleClick = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:5000/read-message');
      console.log(response.data); // Logging the response from the server
    } catch (error) {
      console.error('Error reading message:', error);
    }
  };

  return (
    <div>
      <h2>Read Message</h2>
      <button type="button" onClick={handleClick}>Read</button>
    </div>
  );
};

export default ReadMessage;
