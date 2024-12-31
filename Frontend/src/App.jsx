import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigationbar from './components/Navigationbar';
import Home from './components/Home';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import Contact from './components/Contact';
import About from './components/About';
import './App.css';
const App = () => {
  return (
    <Router>
       <Navigationbar />
       <Routes>
        <Route exact path="/" element={<Home />} />
      <Route path="/dashboard/*" element={<Dashboard />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
