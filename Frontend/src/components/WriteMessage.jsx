import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../styles/WriteMessage.css";

const WriteMessage = () => {
    const [text, setText] = useState('');
    const [headers, setHeaders] = useState([]);

    useEffect(() => {
        const fetchHeaders = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:5000/excel-sheet-formatting');
                setHeaders(response.data.headers);
            } catch (error) {
                console.error('Error fetching headers:', error);
            }
        };

        fetchHeaders();
    }, []);

    const handleChange = (e) => {
        setText(e.target.value);
    };

    const handleClick = (header) => {
        setText(text + `{${header}}`);
    };

    const handleSave = async () => {
        try {
            const response = await axios.post('http://127.0.0.1:5000/save-message', { message: text });
            console.log('Message saved:', response.data);
            alert('Message saved successfully!');
        } catch (error) {
            console.error('Error saving message:', error);
            alert('Failed to save the message.');
        }
    };

    return (
        <div className='EntireWriteMessage'>
            <div className='Breadcrumbs-area'>
                {headers.map((header, index) => (
                    <button key={index} onClick={() => handleClick(header)}>
                        {header}
                    </button>
                ))}
            </div>
            <div className="write-message-container">
                <textarea className='NOTEPAD-AREA'
                    value={text}
                    onChange={handleChange}
                    placeholder="Write your custom message here..."
                />
            </div>
            <button className="save-button" onClick={handleSave}>Save Message</button>
        </div>
    );
};

export default WriteMessage;
