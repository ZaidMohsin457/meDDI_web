import React from 'react';
import './Features.css';

const Features = () => {
  const features = [
    {
      icon: '📱',
      title: 'Mobile Application',
      description: 'Cross-platform mobile app (Android & iOS) with real-time camera processing and offline capabilities'
    },
    {
      icon: '🤖',
      title: 'AI-Powered Recognition',
      description: 'Advanced VLM technology for accurate handwritten prescription recognition with 90%+ accuracy'
    },
    {
      icon: '⚡',
      title: 'Real-Time Processing',
      description: 'Process prescriptions in less than 10 seconds with instant DDI alerts and recommendations'
    },
    {
      icon: '🛡️',
      title: 'DDI Detection',
      description: 'Comprehensive drug-drug interaction detection with severity classification and clinical guidance'
    },
    {
      icon: '💾',
      title: 'Secure Database',
      description: 'Structured prescription database with ICD-10 and RxNorm coding for patient medication history'
    },
    {
      icon: '🌐',
      title: 'Offline Support',
      description: 'Works seamlessly in low-connectivity environments with cloud synchronization when available'
    },
    {
      icon: '🔒',
      title: 'Security & Privacy',
      description: 'End-to-end encryption, secure data handling, and compliance with local regulations'
    },
    {
      icon: '📊',
      title: 'Analytics & Insights',
      description: 'Pharmacovigilance support with prescription pattern analysis and medication safety insights'
    }
  ];

  return (
    <section id="features" className="features-section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Key Features</span>
          <h2 className="section-title">What meDDI Offers</h2>
          <p className="section-description">
            A comprehensive suite of features designed to enhance medication safety and streamline pharmacy operations.
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="workflow-section">
          <h3>How It Works</h3>
          <div className="workflow-steps">
            <div className="workflow-step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h4>Scan Prescription</h4>
                <p>Use mobile app to capture handwritten prescription with real-time guidance</p>
              </div>
            </div>
            <div className="workflow-arrow">→</div>
            <div className="workflow-step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h4>AI Recognition</h4>
                <p>VLM processes and extracts medication information with high accuracy</p>
              </div>
            </div>
            <div className="workflow-arrow">→</div>
            <div className="workflow-step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h4>DDI Detection</h4>
                <p>System checks for drug interactions and provides severity alerts</p>
              </div>
            </div>
            <div className="workflow-arrow">→</div>
            <div className="workflow-step">
              <div className="step-number">4</div>
              <div className="step-content">
                <h4>Save & Monitor</h4>
                <p>Prescription saved to database for patient history and pharmacovigilance</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;

