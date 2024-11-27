// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import HomePage from './components/HomePage';
import About from './components/About';
import Contact from './components/Contact';
import Admin from './components/Admin';
import AdminHome from './components/AdminHome';

const App = () => {
  const userId = localStorage.getItem('userId');
  const users = JSON.parse(localStorage.getItem('users')) || [];
  const user = users.find(user => user.email === userId);
  const role = user ? user.role : null;

  return (
    <Router>
      <div className='fullscreen-background'>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/about" element={userId ? <About /> : <Navigate to="/login" />} />
          <Route path="/" element={userId ? <HomePage /> : <Navigate to="/login" />} />
          <Route path="/contact" element={userId ? <Contact /> : <Navigate to="/login" />} />
          <Route path="/admin" element={role === 'admin' ? <Admin /> : <Navigate to="/" />} />
          <Route path="/adminHome" element={role === 'admin' ? <AdminHome /> : <Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
