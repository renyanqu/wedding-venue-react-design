import React from "react";
import Card from "./Card";
import Button from "./Button";
import { useRef } from "react";
import card1 from './card1.jpeg';
import card2 from './card2.jpeg';
import card3 from './card3.jpeg';
import card4 from './card4.jpeg';
import heroimage from './heroimage.jpeg';
import "./home.css";


const Home = ({ navigateToPage }) => {
    const dialogRef = useRef();

  return (
    <>
    <div className="hero">
        <img className="hero__image" src={heroimage} alt="couple holding their hands walking on beach"/>
        <div className="hero__text">
            <h1>Weddings, Inspired by Nature</h1>
            <p>A unique landscape that captures the magic of eternal love. For an unforgettable ceremony.</p>
        </div>
    </div>
    <div className="wedding__options">
        <p className="main__titleP">Wedding Options</p>
        <h2 className="home__mainTitle">All are welcome.</h2>
        <p className="p__undermainTitle">Pick your dream wedding: garden, beach, chapel, ballroom, barn, or destination. Tailor it to your style and love story.</p>
        <Card title="Intimate" imageSrc={card3} altText="long table and many chairs">
            <h3>The Vine Arbor</h3>
            <p>Up to 40 Guests</p>
        </Card>
        <Card title="Marquee" imageSrc={card1} altText="glasses and flower on white table">
            <h3>The Open Field</h3>
            <p>Up to 200 Guests</p>
        </Card>
        <Card title="Large" imageSrc={card4} altText="church">
            <h3>The Entire Giardino</h3>
            <p>Up to 350 Guests</p>
        </Card>
        <Card title="Winter" imageSrc={card2} altText="chairs on the side and table on the front">
            <h3>The Tree House</h3>
            <p>Up to 150 Guests</p>
        </Card>
    </div>
    <div className="button__container">
            <Button visual="button" onClick={() => navigateToPage("Wedding Options")}>Discover More</Button>
    </div>
    </>
  );
};

export default Home;