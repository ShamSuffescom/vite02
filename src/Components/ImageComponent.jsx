import React from 'react';

const ImageComponent = ({ imageUrls }) => {
  
  const handleDownload = (url, filename) => {
    fetch(url, {
      method: 'GET',
      mode: 'no-cors', // Add this line for Get the image from the third party website (CORS) 
      headers: {
        'Content-Type': 'application/octet-stream',
      },
    })
      .then((response) => response.blob())
      .then((blob) => {
        const blobUrl = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = blobUrl;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      })
      .catch((error) => console.error('Error downloading the file', error));
  };

  return (
    <div>
      {imageUrls.map((url, index) => (
        <div key={index} style={{ position: 'relative', display: 'inline-block', margin: '10px' }}>
          <img
            src={url}
            alt={`Image ${index}`}
            style={{ width: '300px', cursor: 'pointer', marginBottom: '5px' }}
          />
          <button
            onClick={() => handleDownload(url, `image_${index + 1}.jpg`)}
            style={{
              position: 'absolute',
              bottom: '0',
              right: '0',
              background: 'rgba(0,0,0,0.5)',
              color: 'white',
              padding: '5px',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            Download
          </button>
        </div>
      ))}
    </div>
  );
};

export default ImageComponent;
