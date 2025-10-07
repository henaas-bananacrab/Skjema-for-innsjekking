import React from 'react';

const Kontakt = () => {
  return (
    <>
      <div className="container">
        <div className="title-bar">
          Hva er ditt Problem
        </div>
        <div className="text-area">
          <p>Tekst:</p>
        </div>
      </div>

      <div className="image-container">
        Bilde -{'>'} img
      </div>

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