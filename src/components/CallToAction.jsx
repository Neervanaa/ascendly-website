import React from 'react';
import './CallToAction.css';

function CallToAction() {
  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-content">
          <h2>Ready to Navigate Your Career Journey?</h2>
          <p>
            Join thousands of professionals who are already using Ascendly to reach their dream careers
          </p>
          <div className="cta-buttons">
            <button className="primary-button large">Get Started Free</button>
            <button className="secondary-button large">Schedule a Demo</button>
          </div>
          <p className="cta-note">No credit card required • 14-day free trial</p>
        </div>
      </div>
    </section>
  );
}

export default CallToAction;
