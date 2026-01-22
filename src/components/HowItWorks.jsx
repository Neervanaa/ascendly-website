import React from 'react';
import './HowItWorks.css';

function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Assess Your Current Position',
      description: 'Share your current role, skills, and experience. Our AI analyzes your starting point.'
    },
    {
      number: '02',
      title: 'Define Your Dream Career',
      description: 'Tell us about your career aspirations and desired role. We map out the destination.'
    },
    {
      number: '03',
      title: 'Get Your Personalized Route',
      description: 'Receive a custom learning roadmap with skills to acquire, courses to take, and milestones to achieve.'
    },
    {
      number: '04',
      title: 'Navigate & Grow',
      description: 'Follow your personalized path with continuous guidance, track progress, and adjust as needed.'
    }
  ];

  return (
    <section id="how-it-works" className="how-it-works">
      <div className="container">
        <h2 className="section-title">How It Works</h2>
        <p className="section-subtitle">
          Your journey to career success in four simple steps
        </p>
        <div className="steps-container">
          {steps.map((step, index) => (
            <div key={index} className="step">
              <div className="step-number">{step.number}</div>
              <div className="step-content">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
              {index < steps.length - 1 && <div className="step-connector"></div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
