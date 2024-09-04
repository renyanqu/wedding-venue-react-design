import React from 'react';
import Form from './Form';
import './index.css';
import './contact.css';

const Contact = () => {
    return (
      <>
      <div className="about__container">
        <h2 className="contact__titleP">Let's Connect</h2>
        </div>
      <div className="contact__container">
          <div className="left__content">
              <p className="contact__p">Contact Us</p>
              <h2 className="content__title">For any inquires or to start planning your next celebration, please get in touch.</h2>
              <p className="contact__p">123-456-7890</p>
              <p className="contact__p">201 165th Ave NE</p>
              <p className="contact__p">Bellevue, WA 98008</p>
          </div>
          <Form />
        </div>
    </>
      );
};

export default Contact;