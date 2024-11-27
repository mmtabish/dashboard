import React, { useState } from 'react';

const Card = ({ image, title, description, buttonText, onButtonClick }) => {
  const [counter, setCounter] = useState(0);

  const handleButtonClick = () => {
    setCounter(counter + 1);
    if (onButtonClick) {
      onButtonClick(); // Call the passed-in onButtonClick if it exists
    }
  };

  return (
    <div className="card">
      {image && <img src={image} alt={title} className="card-image" />}
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
        {buttonText && (
          <button className="card-button" onClick={handleButtonClick}>
            {buttonText} {counter}
          </button>
        )}
      </div>
    </div>
  );
};

export default Card;
