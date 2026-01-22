import React from 'react';
import './Features.css';

function Features() {
  const features = [
    {
      icon: '🎯',
      title: 'Personalized Career Roadmap',
      description: 'Get a customized path tailored to your current skills, experience, and career goals.'
    },
    {
      icon: '🤖',
      title: 'AI-Powered Guidance',
      description: 'Leverage advanced AI to identify the most efficient learning routes and career transitions.'
    },
    {
      icon: '📚',
      title: 'Curated Learning Resources',
      description: 'Access hand-picked courses, certifications, and resources aligned with your journey.'
    },
    {
      icon: '📊',
      title: 'Progress Tracking',
      description: 'Monitor your growth with detailed analytics and milestone tracking.'
    },
    {
      icon: '🌟',
      title: 'Industry Insights',
      description: 'Stay updated with real-time market trends and in-demand skills in your target field.'
    },
    {
      icon: '💼',
      title: 'Career Consulting',
      description: 'Connect with expert consultants for personalized advice and mentorship.'
    }
  ];

  return (
    <section id="features" className="features">
      <div className="container">
        <h2 className="section-title">Why Choose Ascendly?</h2>
        <p className="section-subtitle">
          Your complete career navigation system powered by AI
        </p>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
