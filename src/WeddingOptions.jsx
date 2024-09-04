import React from 'react';
import card1 from './card1.jpeg';
import card2 from './card2.jpeg';
import card3 from './card3.jpeg';
import card4 from './card4.jpeg';
import './index.css';
import { useRef } from "react";
import Button from './Button';
import './weddingoptions.css';


const WeddingOptions = ({ navigateToPage }) => {
  const dialogRef = useRef();
    return (
      <>
          <div className="options__container">
            <div className='options__subcontainer'>
            <p className="option__titleP">Wedding Options</p>
            <h2 className="option__mainTitle">Every wedding has a story.</h2>
            <h2 className="option__mainTitle">What's yours?</h2>
            <p className="p__undermainTitle">
            Let La Dolce Vita transform your special day into a timeless tale. 
            Our expert team captures the unique moments, creating a cinematic experience that reflects the genuine emotions of your celebration. 
            Trust us to craft a wedding narrative as unique as your love.
            </p>
            </div>
            <div className="index__mainPanel1">
              <img className="paragraph__image1" src={card3} alt="long table and many chairs"/>
              <div className="Panel1__content">
                <h2 className="panel__title">Intimate Weddings</h2>
                <p>Craft your perfect intimate wedding with us—where love meets exquisite details. Cherish unforgettable moments in stunning venues with our expert team. Celebrate your unique connection intimately.</p>
                <Button visual="button" onClick={() => navigateToPage("Contact")}>Book A Meeting</Button>
              </div>
            </div>
            <div className="index__mainPanel2">
              <div className="Panel2__content">
                <h2 className="panel__title">Marquee Weddings</h2>
                <p>Discover timeless elegance with Marquee Weddings—where your unique love story meets customizable luxury. Elevate your celebration under the open sky, surrounded by nature or against a stunning urban backdrop. Our dedicated team ensures perfection in every detail. Choose Marquee Weddings for an extraordinary and effortlessly chic celebration.</p>
                <Button visual="button" onClick={() => navigateToPage("Contact")}>Book A Meeting</Button>
              </div>
              <img className="paragraph__image2" src={card1} alt="glasses and flower on white table"/>
            </div>
            <div className="index__mainPanel3">
              <img className="paragraph__image3" src={card4} alt="church"/>
              <div className="Panel3__content">
                <h2 className="panel__title">Large Weddings</h2>
                <p>Experience the epitome of grandeur with our large weddings. Choose from stunning venues, expertly designed for your vision. Our dedicated team ensures every detail, from exquisite decor to gourmet cuisine, exceeds expectations. Create lasting memories in an enchanting atmosphere, where love takes center stage. Let us turn your dream into a reality for a wedding day that dazzles and delights.</p>
                <Button visual="button" onClick={() => navigateToPage("Contact")}>Book A Meeting</Button>
              </div>
            </div>
            <div className="index__mainPanel4">
              <div className="Panel4__content">
                <h2 className="panel__title">Winter Weddings</h2>
                <p>Celebrate love in the enchanting embrace of Winter Weddings. Picture a magical backdrop of glistening snow, twinkling lights, and cozy fireside moments. Embrace the season's charm with glamorous attire and indulge in a winter feast. Create timeless memories in a fairy-tale setting that captures the romance and magic of your special day. Winter Weddings: Where love sparkles in the frosty elegance of the season.</p>
                <Button visual="button" onClick={() => navigateToPage("Contact")}>Book A Meeting</Button>
              </div>
              <img className="paragraph__image4" src={card2} alt="chairs on the side and table on the front"/>
            </div>
          </div>
          <div className='address'>
            <h2>La Dolce Vita</h2>
            <p>123-456-7890</p>
            <p>201 165th Ave NE</p>
            <p>Bellevue, WA 98008</p>
          </div>
          <div className="options__buttonContainer">
            <Button visual="button" onClick={() => navigateToPage("Contact")}>Book A Meeting</Button>
          </div>
        </>
      );
};

export default WeddingOptions;