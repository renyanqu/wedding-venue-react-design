import React from 'react';
import Button from './Button';
import './index.css';
import { useRef } from "react";
import about1 from './about1.jpeg';
import about2 from './about2.jpeg';
import about3 from './about3.jpeg';
import about4 from './about4.jpeg';
import about5 from './about5.jpeg';
import about6 from './about6.jpeg';
import about7 from './about7.jpeg';
import about8 from './about8.jpeg';
import CardTwo from './CardTwo';
import './about.css';

const About = ({ navigateToPage }) => {
  const dialogRef = useRef();
    return (
      <>
      <div className="about__container">
        <p className="about__titleP">About</p>
        <h2 className="about__mainTitle">We are La Dolce Vita</h2>
        <h3 className="option__mainTitle">Meet Our Team</h3>
        <p className='p__undermainTitle'>We're led by a team who constantly questions, thinkers, and challengers to unlock great creativity around every turn</p>
      </div>
      <div className='about__cardContainer'>
        <CardTwo imgSrc={about1} altText="Celine Midouin" name="Celine Midouin" title="Chief Talent Officer" buttonText="All About Me" />
        <CardTwo imgSrc={about2} altText="Sarah Hofstetter" name="Sarah Hofstetter" title="Chief Marketing Officer" buttonText="All About Me" />
        <CardTwo imgSrc={about3} altText="Abbey Klaassen" name="Abbey Klaassen" title="Chief Executive Officer" buttonText="All About Me" />
        <CardTwo imgSrc={about4} altText="Emily Johnson" name="Emily Johnson" title="Chief Creative Officer" buttonText="All About Me" />
        <CardTwo imgSrc={about5} altText="Lee Maicon" name="Lee Maicon" title="Chief Strategy Officer" buttonText="All About Me" />
        <CardTwo imgSrc={about6} altText="Aisha Tan" name="Aisha Tan" title="President" buttonText="All About Me" />
        <CardTwo imgSrc={about7} altText="Wei Jie" name="Wei Jie" title="Executive Chairman" buttonText="All About Me" />
        <CardTwo imgSrc={about8} altText="Mei Lin" name="Mei Lin" title="Chief Finacial Officer" buttonText="All About Me" />
      </div>
      <div className='about__address'>
            <h2>La Dolce Vita</h2>
            <p>123-456-7890</p>
            <p>201 165th Ave NE</p>
            <p>Bellevue, WA 98008</p>
            <div className="about__button">
            <Button visual="button" onClick={() => navigateToPage("Contact")}>Book A Meeting</Button>
            </div>
      </div>
    </>
      );
};

export default About;