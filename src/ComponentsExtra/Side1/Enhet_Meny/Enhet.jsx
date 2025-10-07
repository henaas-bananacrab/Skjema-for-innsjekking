import { useState } from 'react'
import './Enhet.css'
import data from './data/data.json'

function Enhet({setSelectedText}) {
    const handleChange = (event1) => {
        const value = event1.target.value;
        setSelectedText(value);
        console.log(value);
    }

    return(
        <div className="enhet-container">
            <h2 className='enhet-title'>Hvilken Enhet</h2>
            <div className='select-enhet'>
                <select id='mySelect' name='velg en enhet' onChange={handleChange}>
                    <option value=''>velg enhet</option>
                    <option value='0'>{data.enhetData[0].name}</option>
                    <option value='1'>{data.enhetData[1].name}</option>
                    <option value='2'>{data.enhetData[2].name}</option>
                </select>
            </div>
        </div>
    );
}


export default Enhet