import { useState } from "react"; 
import NavneListe from './navn.jsx';
import Liste from './liste.jsx';

const Side3 = () => {
  const [innsjekkData, setInnsjekkData] = useState([
    { id: 'a1', data: 'Første person' },
    { id: 'b2', data: 'Andre person' },
    { id: 'c3', data: 'Tredje person' },
  ]);

  return (
    <>
      <NavneListe />
      <Liste rows={innsjekkData} />
    </>
  );
};

export default Side3;