import React from 'react';
import logo from './logo.jpeg';
import './header.css';

const Header = () => {
  return( 
    <header className='subheader'>
        <a href="#main" className="skip">Skip to main content</a>
        <a href="index.html">
            <img className="logo" src={logo} alt="flower"/>
        </a>
        <h1 className="header__title">La Dolce Vita</h1>
    </header>
    );
};

export default Header;