import { useState } from 'react';
import '../Style/Status.css';

function Status({ status: externalStatus, setStatus: externalSetStatus }) {

  const [internalStatus, setInternalStatus] = useState('On its way');
  const status = externalStatus ?? internalStatus;
  const setStatus = externalSetStatus ?? setInternalStatus;

  const toggleStatus = () => {
    switch (status) {
      case 'On its way':
        setStatus('Ready');
        break;
      case 'Ready':
        setStatus('Cancelled');
        break;
      default:
        setStatus('On its way');
        break;
    }
  };

  return (
    <div className="status">
      <h2 className="status-title">STATUS</h2>
      <p className='status-text'>Status: <strong>{status}</strong></p>
      <button className="status-button" onClick={toggleStatus}>Change status</button>
    </div>
  );
}

export default Status;