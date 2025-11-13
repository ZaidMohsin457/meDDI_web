import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>
      <div className="hero-content">
        <div className="hero-badge">
          <span>🏥</span> Transforming Healthcare Safety
        </div>
        <h1 className="hero-title">
          <span className="gradient-text">meDDI</span>
          <br />
          Medication Safety System
        </h1>
        <p className="hero-description">
          Advanced AI-powered system using Vision-Language Models to recognize handwritten 
          prescriptions and detect drug-drug interactions, ensuring patient safety in Pakistan's healthcare system.
        </p>
        <div className="hero-stats">
          <div className="stat-item">
            <div className="stat-number">90%+</div>
            <div className="stat-label">Drug Recognition Accuracy</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">95%+</div>
            <div className="stat-label">DDI Detection Sensitivity</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">&lt;10s</div>
            <div className="stat-label">Processing Time</div>
          </div>
        </div>
        <div className="hero-cta">
          <button 
            className="btn-primary"
            onClick={() => document.getElementById('problem').scrollIntoView({ behavior: 'smooth' })}
          >
            Learn More
          </button>
          <button 
            className="btn-secondary"
            onClick={() => document.getElementById('progress').scrollIntoView({ behavior: 'smooth' })}
          >
            View Progress
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

