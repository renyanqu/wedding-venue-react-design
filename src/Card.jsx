import React from 'react';

const Card = ({ title, imageSrc, altText, children, onClick }) => {
    const handleCardClick = (event) => {
      event.preventDefault();
      if (onClick) {
        onClick();
      }
    };
  
    return (
      <div className={`home__mainCard ${title.toLowerCase()}`} onClick={handleCardClick}>
        <h2 className="home__cardTitle">{title}</h2>
        <img className="home__cardImage" src={imageSrc} alt={altText} style={{ width: '170px', height: '120px' }} />
        {children}
      </div>
    );
  };

export default Card;