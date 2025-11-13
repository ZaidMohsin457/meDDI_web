import React from 'react';
import './Solution.css';

const Solution = () => {
  return (
    <section id="solution" className="solution-section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Our Approach</span>
          <h2 className="section-title">The meDDI Solution</h2>
          <p className="section-description">
            A comprehensive AI-powered system that combines Vision-Language Models with clinical expertise 
            to revolutionize medication safety in Pakistan.
          </p>
        </div>

        <div className="objectives-grid">
          <div className="objective-card">
            <div className="objective-number">01</div>
            <h3>Advanced Prescription Recognition</h3>
            <p>
              VLM-based system achieving <strong>90%+ drug name</strong> and <strong>85%+ dosage/frequency</strong> 
              recognition accuracy, handling diverse handwriting styles, medical abbreviations, and Urdu markings.
            </p>
            <ul className="feature-list">
              <li>✓ Handles varied handwriting styles</li>
              <li>✓ Recognizes medical abbreviations</li>
              <li>✓ Processes Urdu markings</li>
              <li>✓ Context-aware interpretation</li>
            </ul>
          </div>

          <div className="objective-card">
            <div className="objective-number">02</div>
            <h3>Real-Time DDI Detection</h3>
            <p>
              Intelligent DDI detection engine with <strong>95%+ sensitivity</strong> for major and contraindicated 
              interactions, providing evidence-based clinical guidance with severity classification.
            </p>
            <ul className="feature-list">
              <li>✓ Real-time interaction detection</li>
              <li>✓ Severity classification (minor to contraindicated)</li>
              <li>✓ Evidence-based recommendations</li>
              <li>✓ 5,000+ drug database</li>
            </ul>
          </div>

          <div className="objective-card">
            <div className="objective-number">03</div>
            <h3>Structured Prescription Database</h3>
            <p>
              Comprehensive database system converting unstructured prescription data into standardized format 
              using ICD-10 and RxNorm coding standards for longitudinal patient monitoring.
            </p>
            <ul className="feature-list">
              <li>✓ ICD-10 diagnosis coding</li>
              <li>✓ RxNorm medication coding</li>
              <li>✓ Patient medication history</li>
              <li>✓ Pharmacovigilance support</li>
            </ul>
          </div>

          <div className="objective-card">
            <div className="objective-number">04</div>
            <h3>Mobile-First Application</h3>
            <p>
              Cross-platform mobile app enabling <strong>&lt;10 second</strong> prescription processing with 
              offline capabilities, designed for low-connectivity environments.
            </p>
            <ul className="feature-list">
              <li>✓ Android & iOS support</li>
              <li>✓ Offline functionality</li>
              <li>✓ Real-time camera processing</li>
              <li>✓ User-friendly interface</li>
            </ul>
          </div>
        </div>

        <div className="tech-highlight">
          <div className="tech-content">
            <h3>Cutting-Edge Technology</h3>
            <p>
              meDDI leverages state-of-the-art Vision-Language Models (VLMs) that combine visual understanding 
              with medical domain knowledge, enabling accurate interpretation of handwritten prescriptions that 
              traditional OCR systems cannot handle.
            </p>
            <div className="tech-tags">
              <span className="tech-tag">Vision-Language Models</span>
              <span className="tech-tag">Transfer Learning</span>
              <span className="tech-tag">Medical AI</span>
              <span className="tech-tag">Real-Time Processing</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;

