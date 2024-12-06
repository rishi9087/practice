import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Login from './components/login/Login';
import Register from './components/register/Register';
import Loginotp from './components/loginotp/Loginotp';
import Dashboard from './components/dashboard/Dashboard';

function App() {

  return (
    <Router>
      <Routes>

        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/loginotp" element={<Loginotp />} />
        <Route path="/dashboard" element={<Dashboard />} />

      </Routes>
    </Router>
  );
}

export default App;
