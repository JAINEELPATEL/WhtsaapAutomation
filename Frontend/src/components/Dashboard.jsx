import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import UploadExcel from './UploadExcel';
import WriteMessage from './WriteMessage';
import WhatsappLogin from './WhatsappLogin';
import SendMessage from './SendMessage';
import Terminate from './Terminate';
import FormatExcel from './FormatExcel';
import DefaultContent from './DefaultContent';
import { useLocation } from 'react-router-dom';
import '../styles/Dashboard.css';
const Dashboard = () => {
  const location = useLocation();
  console.log('Current Path:', location.pathname);

  return (
    <div className="dashboard-container">
    <div className='Sidebar'>
   <Sidebar />
   </div>
    <div className="main-content">
      <Routes>
        <Route exact path="/uploadexcel" element={<UploadExcel />} />
        <Route exact path="/formatexcel" element={<FormatExcel />} />
        <Route path="/writemessage" element={<WriteMessage />} />
        <Route path="/whatsapplogin" element={<WhatsappLogin />} />
        <Route path="/sendmessage" element={<SendMessage />} />
        <Route path="/terminate" element={<Terminate />} />
        <Route path="*" element={<DefaultContent />} /> {/* Default route for unmatched paths */}
      </Routes>
    </div>
  </div>
  );
};

export default Dashboard;
