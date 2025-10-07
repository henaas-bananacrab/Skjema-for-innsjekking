import { useState } from 'react';
import './Kontakter.css'

function Kontakter({ kontaktInfo: externalInfo, setKontaktInfo: externalSetInfo }) {
  const [internalInfo, setInternalInfo] = useState({
    name: '',
    phone: '',
    email: ''
  });

  const kontaktInfo = externalInfo ?? internalInfo;
  const setKontaktInfo = externalSetInfo ?? setInternalInfo;

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Validate input based on field type
    let validatedValue = value;
    
    if (name === 'name') {
      // Only allow letters and spaces, prevent multiple consecutive spaces
      validatedValue = value
        .replace(/[^a-zA-ZæøåÆØÅ\s]/g, '')
        .replace(/\s{2,}/g, ' '); // Replace multiple spaces with single space
    } else if (name === 'phone') {
      // Only allow numbers, + (only at start), and spaces
      validatedValue = value.replace(/[^0-9+\s]/g, '');
      // Ensure + only appears at the beginning
      if (validatedValue.includes('+')) {
        const plusIndex = validatedValue.indexOf('+');
        if (plusIndex > 0) {
          validatedValue = validatedValue.replace(/\+/g, '');
        } else {
          // Keep only first +
          validatedValue = '+' + validatedValue.slice(1).replace(/\+/g, '');
        }
      }
      // Prevent multiple consecutive spaces
      validatedValue = validatedValue.replace(/\s{2,}/g, ' ');
    } else if (name === 'email') {
      // Ensure only one @ symbol is allowed
      const atCount = (value.match(/@/g) || []).length;
      if (atCount > 1) {
        // If more than one @, keep only the first one
        const firstAtIndex = value.indexOf('@');
        validatedValue = value.substring(0, firstAtIndex + 1) + value.substring(firstAtIndex + 1).replace(/@/g, '');
      }
    }
    
    setKontaktInfo(prev => ({
      ...prev,
      [name]: validatedValue
    }));
  };

  return (
    <div className="kontakt-box">
      <h1>Kontakt</h1>
      <label htmlFor="name">Navn:</label>
      <input
        type="text"
        id="name"
        name="name"
        placeholder="Ola Nordmann"
        pattern="[a-zA-ZæøåÆØÅ\s]+"
        title="Kun bokstaver og mellomrom er tillatt"
        required
        value={kontaktInfo.name}
        onChange={handleChange}
        />

      <label htmlFor="phone">Telefon:</label>
      <input
        type="tel"
        id="phone"
        name="phone"
        placeholder="+47 22 22 55 55"
        pattern="^\+?[0-9\s]{8,15}$"
        title="Telefonnummer med eller uten +. Kun tall, + (i starten) og mellomrom er tillatt"
        required
        value={kontaktInfo.phone}
        onChange={handleChange}
      />

      <label htmlFor="email">E-post:</label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="navn@mail.com"
        title="Gyldig e-postadresse med @ symbol"
        required
        value={kontaktInfo.email}
        onChange={handleChange}
      />
    </div>
  );
}

export default Kontakter;