// App.js

import React from 'react';
import './App.css';
import Header from './Header';
import MainContent from './MainContent';

function App() {
  return (
    <div className="app">
      <Header />
      <MainContent />
      {/* Add the rest of your application content here */}
    </div>
  );
}

export default App;
