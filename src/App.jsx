import { useState } from 'react'
import './App.css'
import Knapp from './Components/Knapp';
import Enhet from './Components/Enhet';
import Navn from './Components/navn';
import Liste from './Components/liste';

function App() {
  const [count, setCount] = useState(0);
  const [rows, setRows] = useState([]);

  const addRow = () => {
    setRows(prevRows => [...prevRows, { id: Date.now(), data: 'New Row Data'}]);
  }

  const [selectedText, setSelectedText] = useState('');

  const enhetText = selectedText;
  console.log(enhetText);

  return (
    <>
    <Enhet setSelectedText={setSelectedText}/>
    <Knapp onAddRow={addRow}/>
    <Navn/>
    <Liste rows={rows} enhetText={enhetText}/>
    </>
  );
}

export default App
