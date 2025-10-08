import React from 'react';
import '../style/Kontakt.css';

const Kontakt = () => {
  return (
    <>


      <div className="contact-container">
        <div className="contact-header">
          Kontakt
        </div>
        <div className="contact-field">
          <label htmlFor="name">Navn:</label>
          <input type="text" id="name" name="name" />
        </div>
        <div className="contact-field">
          <label htmlFor="phone">Telefon:</label>
          <input type="tel" id="phone" name="phone" />
        </div>
        <div className="contact-field">
          <label htmlFor="email">E-post:</label>
          <input type="email" id="email" name="email" />
        </div>
      </div>
    </>
  );
};

export default Kontakt;