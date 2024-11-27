import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const Admin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
  
    const handleLogin = () => {
      // Logging for debugging purposes
      // console.log('Logging in with', email, password);
      
      navigate('/adminHome');
    };

    const handleHome = () => {
      // Logging for debugging purposes
      // console.log('Logging in with', email, password);
      
      navigate('/');
    };
  
    const handleSignUpRedirect = (e) => {
      e.preventDefault(); // Prevent the default link behavior
      navigate('/signup');
    };
  
    useEffect(() => {
      // Clear state when component unmounts
      return () => {
        setEmail('');
        setPassword('');
      };
    }, []);
  
    // Check if both email and password are filled in
    const isFormValid = email.trim() !== '' && password.trim() !== '';
  
    return (
      <div className="login-container">
        <div className="login-form">
          <h2>Admin Login</h2>
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
          <button onClick={handleLogin} disabled={!isFormValid}>Login</button>
          <a href="/" className="signup" onClick={handleHome}>Back to home</a>
        </div>
      </div>
    );
}

export default Admin