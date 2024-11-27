// Signup.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = () => {
    if (password === confirmPassword) {
      const users = JSON.parse(localStorage.getItem('users')) || [];
      users.push({ email, name, lastname, password });
      localStorage.setItem('users', JSON.stringify(users));
      navigate('/login');
    } else {
      alert('Passwords do not match');
    }
  };

  const handleSignUpRedirect = (e) => {
    e.preventDefault();
    navigate('/login');
  };

  const isFormValid = 
    email.trim() !== '' &&
    name.trim() !== '' &&
    lastname.trim() !== '' &&
    password.trim() !== '' &&
    confirmPassword.trim() !== '' &&
    password === confirmPassword;

  return (
    <div className="signup-container">
      <div className="signup-form">
        <h2>Signup</h2>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Last Name"
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button onClick={handleSignup} disabled={!isFormValid}>Signup</button>
        <a href="/" className="signup" onClick={handleSignUpRedirect}>Login</a>
      </div>
    </div>
  );
};

export default Signup;
