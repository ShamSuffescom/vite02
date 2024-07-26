import React from 'react';
import ReactDOM from 'react-dom';
import ImageComponent from '../Components/ImageComponent';

const ImageDownload = () => {
  const imageUrls = [
    'https://decorateone.com/wp-content/uploads/2024/03/embroidered-clothing-near-me.jpg',
    'http://localhost:5173/pngtree-books-logo-image_79985.jpg',
    'http://localhost:5173/medium.webp',
    // Add more image URLs as needed
  ];

  return (
    <div>
      <h1>Image Gallery</h1>
      <ImageComponent imageUrls={imageUrls} />
    </div>
  );
};

export default ImageDownload;
