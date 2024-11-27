import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Retrieve stored user data from local storage
    const storedUser = JSON.parse(localStorage.getItem('user'));
    
    if (storedUser && storedUser.email === email && storedUser.password === password) {
      localStorage.setItem('userId', 'uniqueUserId'); // Example: Set a user ID or token
      navigate('/');
    } else {
      alert('Invalid email or password');
    }
  };

  const handleSignUpRedirect = (e) => {
    e.preventDefault(); // Prevent the default link behavior
    navigate('/signup');
  };

  const isFormValid = email.trim() !== '' && password.trim() !== '';

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Login</h2>
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
        <button onClick={handleLogin} disabled={!isFormValid}>
          Login
        </button>
        <a href="/" className="signup" onClick={handleSignUpRedirect}>
          Sign Up
        </a>
      </div>
    </div>
  );
};

export default Login;
