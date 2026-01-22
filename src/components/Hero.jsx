import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            Your <span className="highlight">Smart GPS</span> for Career Growth
          </h1>
          <p className="hero-subtitle">
            Navigate from your current job to your dream career with AI-powered guidance
          </p>
          <p className="hero-description">
            Ascendly is an AI-powered platform for career and education consulting that helps you 
            transition efficiently through personalized learning routes and strategic career planning.
          </p>
          <div className="hero-buttons">
            <button className="primary-button">Start Your Journey</button>
            <button className="secondary-button">Learn More</button>
          </div>
        </div>
        <div className="hero-visual">
          <div className="gps-illustration">
            <div className="path-line"></div>
            <div className="waypoint current">
              <span>Current Role</span>
            </div>
            <div className="waypoint intermediate">
              <span>Skills & Growth</span>
            </div>
            <div className="waypoint destination">
              <span>Dream Career</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
