// HomePage.js
import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Card from './Card';

const HomePage = () => {
  const [userId, setUserId] = useState(null);
  const [userName, setUserName] = useState('');
  const [role, setRole] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUserId = localStorage.getItem('userId');
    const storedUserName = localStorage.getItem('userName');
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(user => user.email === storedUserId);

    if (user) {
      setUserId(user.email);
      setUserName(storedUserName);
      setRole(user.role); // Assuming role is stored in the user object
    } else {
      setUserId(null);
      setRole(null);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('userId');
    localStorage.removeItem('userName');
    navigate('/login');
  };

  const handleAdmin = () => {
    navigate('/admin');
  };

  const handleButtonClick = () => {
    console.log('Card button clicked');
  };

  const renderCards = () => {
    if (role === 'admin') {
      return (
        <>
          <nav className="nav">
            <div className="navbar-left">
              <Link to="/">Home Admin</Link>
            </div>
            <div className="navbar-right">
              <button onClick={handleLogout}>Logout</button>
            </div>
          </nav>
          <Card
            image="https://images.unsplash.com/photo-1717501219905-2711c58ab655?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw0bjhzclg1N2FYTXx8ZW58MHx8fHx8"
            title={`Admin Card - ${userName}`}
            description="Exclusive content for administrators."
            buttonText="Manage"
            onButtonClick={handleButtonClick}
          />
          {/* Add more admin-specific cards here */}
        </>
      );
    } else if (role === 'user') {
      return (
        <>
          <nav className="nav">
            <div className="navbar-left">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/contact">Contact</Link>
              {role === 'admin' && <button className='admin' onClick={handleAdmin}>Admin</button>}
            </div>
            <div className="navbar-right">
              <button onClick={handleLogout}>Logout</button>
            </div>
          </nav>
          <Card
            image="https://images.unsplash.com/photo-1650923500748-eee80ee6e7d1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHx8"
            title={`User Card - ${userName}`}
            description="Content for regular users."
            buttonText="Add"
            onButtonClick={handleButtonClick}
          />
          {/* Add more regular user-specific cards here */}
        </>
      );
    } else {
      return (
        <>
          <nav className="nav">
            <div className="navbar-left">
              <Link to="/">Home Admin</Link>
            </div>
            <div className="navbar-left">
              <Link to="/">{`${userName}`}</Link>
            </div>
            <div className="navbar-right">
              <button onClick={handleLogout}>Logout</button>
            </div>
          </nav>
          <Card
            image="https://images.unsplash.com/photo-1717501219905-2711c58ab655?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw0bjhzclg1N2FYTXx8ZW58MHx8fHx8"
            title={`Card - ${userName}`}
            description="Exclusive content for administrators."
            buttonText="Manage"
            onButtonClick={handleButtonClick}
          />
          {/* Add more admin-specific cards here */}
        </>
      );
    }
  };

  return (
    <div className='home'>
      <div className='cards-container'>
        {renderCards()}
      </div>
    </div>
  );
};

export default HomePage;
