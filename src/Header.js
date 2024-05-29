// App.js

import React, { useState } from 'react';
import './App.css';



function App() {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="app">
      <header className="header">
        <div className="nav-container">
          <button className="nav-btn" onClick={toggleDropdown}>
            Applications
            {showDropdown && (
              <div className="dropdown">
                <button className="dropdown-item">Buy</button>
                <button className="dropdown-item">Sell</button>
                <button className="dropdown-item">Apartment Rents</button>
                <button className="dropdown-item">Other Category</button>
              </div>
            )}
          </button>
        </div>
        <div className="logo-container">
          <img src="/WhatsApp Image 2024-02-05 at 4.47.14 PM.jpeg" alt="Logo" className="logo" />
        </div>
        <div className="auth-container">
          <button className="auth-btn">Register</button>
          <button className="auth-btn">Login</button>
        </div>
        <button className="nav-btn post-ad-btn">Post Ad</button>
      </header>
      {/* Add the rest of your application content here */}
    </div>
  );
}

export default App;
