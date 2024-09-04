import React from 'react';

const CardTwo = ({ imgSrc, altText, name, title, buttonText }) => {
  return (
    <div className={`about__card ${name.toLowerCase()}`}>
      <img src={imgSrc} alt={altText} style={{ width: '170px', height: '250px' }} />
      <h3>{name}</h3>
      <p className="title">{title}</p>
    </div>
  );
};

export default CardTwo;
