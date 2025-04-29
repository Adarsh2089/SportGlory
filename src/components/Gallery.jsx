// components/Gallery.jsx
import React from 'react';
import './Gallery.css';

const Gallery = () => {
  const images = ['/assets/Arjuna_Award.jpg','/assets/DhyanChandra.jpg','assets/3_gallery.jpg','assets/4.jpeg','assets/5.jpeg','assets/7.jpeg'];
  return (
    <div className="container" id="gallery">
      <h1>Past Winners</h1>
      <div className="gallery">
        {images.map((img, i) => (
          <img key={i} src={img} className="gallery-image floating" alt={`Event ${i+1}`} />
        ))}
      </div>
    </div>
  );
};

export default Gallery;