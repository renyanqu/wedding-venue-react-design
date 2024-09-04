import React from 'react';
import "./footer.css";


const Footer = ({ setPage }) => {
    function go(event, page) {
        event.preventDefault();
        setPage(page);
        setMenuVisible(false); // Close the menu when a menu item is clicked
      }
  return( 
    <footer className="footer">
        <ul className="footer__list">
            <li className="footer__item"><a className="footer__link" href="WeddingOptions.html" onClick={(e) => go(e, "Wedding Options")}>Wedding Options</a></li>
            <li className="footer__item"><a className="footer__link" href="Food&Drinks.html" onClick={(e) => go(e, "Food&Drinks")}>Food & Drinks</a></li>
            <li className="footer__item"><a className="footer__link" href="About.html" onClick={(e) => go(e, "About")}>About</a></li>
            <li className="footer__item"><a className="footer__link" href="Contact.html" onClick={(e) => go(e, "Contact")}>Contact</a></li>
        </ul>
    </footer>
    );
};

export default Footer;