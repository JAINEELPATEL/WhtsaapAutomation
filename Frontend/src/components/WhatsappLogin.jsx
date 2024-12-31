import React, { useState } from 'react';
import axios from 'axios';
import { FaWhatsapp } from "react-icons/fa";
import '../styles/WhatsappLogin.css';

const WhatsAppLogin = ({ onLogin }) => {
  const [number, setNumber] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:5000/chat-bot', { sender_number: number });
      setMessage(response.data.success || response.data.error);
      if (response.data.success) {
        onLogin(); // Callback to parent component to navigate to next step
      }
    } catch (error) {
      setMessage('Error connecting to the server');
    }
  };

  return (
    <div className='Whatsappcontainer'>
      <div className="login-container">
        <FaWhatsapp />
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            id="number"
            placeholder='WhatsApp Number'
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            required
          />
          <button type="submit">Login</button>
        </form>
        {message && <p>{message}</p>}
      </div>
    </div>
  );
};

export default WhatsAppLogin;
