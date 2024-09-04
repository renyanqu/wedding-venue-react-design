import React from 'react';
import './index.css';
import ImageGallery from './ImageGallery';
import './fooddrinks.css';


const FoodDrinks = () => {
    return (
      <>
      <div className="fooddrinks__container">
        <p className="fooddrinks__titleP">Food & Drinks</p>
        <h2 className="fooddrinks__mainTitle">Locally sourced, seasonal menu.</h2>
      </div>
      <ImageGallery />
    </>
      );
};

export default FoodDrinks;