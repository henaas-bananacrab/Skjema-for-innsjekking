import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './Components/Navigation.jsx';
import './App.css'
import Home from './Components/Side1';
import Side2 from './Components/Side2';
import Side3 from './Components/Side3';

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
        <Router>
      <div className="app">
        <Navigation />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/side2" element={<Side2 />} />
            <Route path="/side3" element={<Side3 />} />
          </Routes>
        </main>
      </div>
    </Router>
    </>
  );
}
export default App
