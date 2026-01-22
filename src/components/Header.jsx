import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <h1>Ascendly</h1>
        </div>
        <nav className="nav">
          <a href="#features">Features</a>
          <a href="#how-it-works">How It Works</a>
          <a href="#about">About</a>
          <button className="cta-button">Get Started</button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
