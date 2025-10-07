import { useState } from 'react'
import './Knapp.css'

function Knapp({onAddRow}) {

    return(
        <div className="knapp-container">
            <button className="knapp" onClick={onAddRow}>Send</button>
        </div>
    );
}
export default Knapp