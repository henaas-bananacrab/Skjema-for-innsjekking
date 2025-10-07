import React, { useState } from 'react';
import axios from 'axios'; // For making HTTP requests
import './bilde.css';

function Bilde() {
  // State to store the selected file
  const [selectedFile, setSelectedFile] = useState(null);
  // State to store the upload status message
  const [uploadStatus, setUploadStatus] = useState('');

  // This function is called when the user selects a file
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    setUploadStatus(''); // Reset status message
  };

  // This function is called when the user clicks the upload button
  const handleUpload = async () => {
    if (!selectedFile) {
      setUploadStatus('Please select a file first!');
      return;
    }

    // Create a FormData object to send the file
    const formData = new FormData();
    formData.append('image', selectedFile); // 'image' is the key the server will look for

    try {
      setUploadStatus('Uploading...');
      // Send the file to the backend server.
      // Make sure the URL 'http://localhost:5000/upload' matches your server's address.
      const response = await axios.post('http://localhost:5000/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      // Handle a successful response from the server
      setUploadStatus(`Upload successful: ${response.data.message}`);
      console.log('File available at:', response.data.filePath);

    } catch (error) {
      // Handle any errors during the upload
      console.error('Error uploading the file:', error);
      setUploadStatus('Upload failed. Please try again.');
    }
  };

  return (
    <div className="image-container">
      <h2>Upload an Image 📸</h2>
      <p>Select an image file or use your camera to take a picture.</p>
      
      {/* The 'accept="image/*"' attribute suggests only image files.
        The 'capture="environment"' attribute tells mobile browsers to open the back camera.
      */}
      <input 
        type="file" 
        accept="image/*" 
        capture="environment" 
        onChange={handleFileChange} 
      />
      
      <button onClick={handleUpload}>Upload Image</button>

      {/* Display the upload status to the user */}
      {uploadStatus && <p className="status-message">{uploadStatus}</p>}
    </div>
  );
}

export default Bilde;