import { useState } from 'react';
import Status from '../Status/Status.jsx';
import Kontakter from '../Kontakter/Kontakter.jsx';
import Informasjon from '../Informasjon/Informasjon.jsx';

function Bestilling() {
  const [kontaktInfo, setKontaktInfo] = useState({ name: '', phone: '', email: '' });
  const [status, setStatus] = useState('On its way');

  return (
    <>
      <Status status={status} setStatus={setStatus} />
      <Kontakter kontaktInfo={kontaktInfo} setKontaktInfo={setKontaktInfo} />
      <Informasjon kontaktInfo={kontaktInfo} status={status} />
    </>
  );
}

export default Bestilling;
