import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Loginotp from './components/Loginotp';
import './App.css';

function App() {

  return (
    <Router>
      <Routes>

        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/loginotp" element={<Loginotp />} />

      </Routes>
    </Router>
  );
}

export default App;
