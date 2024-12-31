import React from 'react';
import axios from 'axios';
import '../styles/FormatExcel.css'; // Import the CSS file for styling

const FormatExcel = () => {

    const handleApplyMessage = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:5000/excel-sheet-formatting');
            console.log(response.data);
            alert('Message applied successfully');
        } catch (error) {
            console.error('Error applying the message:', error);
            if (error.response) {
                console.error('Response data:', error.response.data);
            }
            alert('Failed to apply message. See console for details.');
        }
    };

    return (
        <div className="format-box">
            <h3>Format Your Excel Sheet</h3>
            <button className="format-button" onClick={handleApplyMessage}>Format</button>
        </div>
    )
}

export default FormatExcel;
