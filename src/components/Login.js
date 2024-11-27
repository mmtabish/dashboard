// Login.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
      localStorage.setItem("userId", email); // Use email as a unique identifier
      localStorage.setItem("userName", user.name); // Store user's name
      navigate("/");
    } else {
      alert("Invalid email or password");
    }
  };

  const handleSignUpRedirect = (e) => {
    e.preventDefault();
    navigate("/signup");
  };

  const isFormValid = email.trim() !== "" && password.trim() !== "";

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
