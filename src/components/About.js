import React from 'react';
import { useNavigate, Link } from 'react-router-dom';


const About = () => {
  return (
    <div className="about-container">
        
        <nav className="nav">
        <div className="navbar-left">
          <Link to="/">Home</Link>
          <Link to="/About">About</Link>
          <Link to="/contact">Contact</Link>
          
        </div>
       
      </nav>

      <h1>About Us</h1>
      <p>
        Welcome to our application! We are committed to providing the best service possible. 
        Our team is dedicated to ensuring that your experience with our application is smooth and enjoyable.
      </p>
      <p>
        Our mission is to deliver high-quality products and services that meet the needs of our users.
        We constantly strive to improve and innovate to provide the best solutions.
      </p>
    </div>
  );
};

export default About;
