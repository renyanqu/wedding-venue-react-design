import React, { useState } from 'react';
import "./nav.css";

function NavBar({ setPage }) {
  const [isMenuVisible, setMenuVisible] = useState(false);

  function go(event, page) {
    event.preventDefault();
    setPage(page);
    setMenuVisible(false); // Close the menu when a menu item is clicked
  }

  const handleHamburgerClick = () => {
    setMenuVisible(prevState => !prevState);
  };

  return (
    <nav>
      <ul className={`menu ${isMenuVisible ? 'show__menu' : 'menu__hidden'}`}>
        <li className='menu__item'>
          <button className='menu__button' href="home.html" onClick={(e) => go(e, "Home")}>
            Home
          </button>
        </li>
        <li className='menu__item'>
          <button className='menu__button' href="WeddingOptions.html" onClick={(e) => go(e, "Wedding Options")}>
            Wedding Options
          </button>
        </li>
        <li className='menu__item'>
          <button className='menu__button' href="Food&Drinks.html" onClick={(e) => go(e, "Food&Drinks")}>
            Food & Drinks
          </button>
        </li>
        <li className='menu__item'>
          <button className='menu__button' href="About.html" onClick={(e) => go(e, "About")}>
            About
            <i className="gg-chevron-down"></i>
          </button>
          <ul className="submenu">
              <li className="submenu__item"><a className="submenu__link" href="Contact.html" onClick={(e) => go(e, "Contact")}>Contact</a></li>
          </ul>
        </li>
      </ul>
      <button className="hamburger" onClick={handleHamburgerClick}>
        <i className={`hamburger__menuOpen gg-menu ${isMenuVisible ? 'open' : ''}`} aria-label="open hamburger menu"></i>
      </button>
    </nav>
  );
}

export default NavBar;
