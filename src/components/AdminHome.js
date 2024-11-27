import React from 'react';
import Card from './Card';
import { useNavigate, Link } from 'react-router-dom';

const AdminHome = () => {
    const navigate = useNavigate();


    const handleLogout = () => {
        // Handle logout logic here
        // Example: Redirect to the login page
        navigate('/login');
      };

      const handleButtonClick = () => {
        // Handle card button click logic
        console.log('Card button clicked');
      };
    


    return (
        <div className='home_2'>
          <nav className="nav">
            <div className="navbar-left">

              <Link to="">Home Admin</Link>
              {/* <button className='admin'  onClick={handleAdmin}>Admin</button> */}
            </div>
            <div className="navbar-right">
              <button onClick={handleLogout}>Logout</button>
            </div>
          </nav>
    
          <div className='cards-container'>
            <Card
              image="https://images.unsplash.com/photo-1674707488760-4ec87e969368?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8"
              title="Wallpaper"
              description=" Here are a few great places where you can find high-quality, free wallpapers for your devices"
              buttonText="Add"
              onButtonClick={handleButtonClick}
            />
            <Card
              image="https://images.unsplash.com/photo-1674707488760-4ec87e969368?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8"
              title="Wallpaper"
              description=" Here are a few great places where you can find high-quality, free wallpapers for your devices"
              buttonText="Add"
              onButtonClick={handleButtonClick}
            />
            <Card
              image="https://images.unsplash.com/photo-1674707488760-4ec87e969368?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8"
              title="Wallpaper"
              description=" Here are a few great places where you can find high-quality, free wallpapers for your devices"
              buttonText="Add"
              onButtonClick={handleButtonClick}
            />
            <Card
              image="https://images.unsplash.com/photo-1674707488760-4ec87e969368?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8"
              title="Wallpaper"
              description=" Here are a few great places where you can find high-quality, free wallpapers for your devices"
              buttonText="Add"
              onButtonClick={handleButtonClick}
            />
            <Card
              image="https://images.unsplash.com/photo-1674707488760-4ec87e969368?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8"
              title="Wallpaper"
              description=" Here are a few great places where you can find high-quality, free wallpapers for your devices"
              buttonText="Add"
              onButtonClick={handleButtonClick}
            />
          
           
           
          </div>
        </div>
      );
}

export default AdminHome