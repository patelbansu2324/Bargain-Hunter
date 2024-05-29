// MainContent.js

import React, { useState, useEffect } from 'react';
import './MainContent.css';

const imageList = [
  'frames-for-your-heart-mR1CIDduGLc-unsplash.jpg',
  'A3 image.jpeg',
  'A4 PIC.jpeg',
  // Add more image filenames as needed
];

const categories = ['Electronics', 'Books', 'Furniture', 'Vehicles', 'Apartment Rentals', /* Add more categories as needed */];

function MainContent() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Automatically change the image every 5 seconds
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageList.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleSearch = () => {
    // Implement your search logic here
    console.log('Performing search...');
  };

  const handleCategoryClick = (category) => {
    // Handle category click
    console.log(`Category clicked: ${category}`);
    // You can implement logic to show/hide category content here
  };

  return (
    <div className="main-content">
      <div className="search-bar">
        <input type="text" placeholder="Search by city, town, state, or zip code" />
        <button className="search-button" onClick={handleSearch}>
          Search
        </button>
      </div>
      <div className="image-slider">
        <img
          src={imageList[currentImageIndex]}
          alt={`Image ${currentImageIndex + 1}`}
          className="image"
        />
      </div>
      <div className="category-buttons">
        {categories.map((category, index) => (
          <button key={index} className="category-button" onClick={() => handleCategoryClick(category)}>
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}

export default MainContent;
