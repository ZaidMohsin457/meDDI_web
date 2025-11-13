import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-logo">meDDI</h3>
            <p className="footer-tagline">Medication Safety System</p>
            <p className="footer-description">
              Advanced AI-powered system for handwritten prescription recognition 
              and drug-drug interaction detection, ensuring patient safety in Pakistan's healthcare system.
            </p>
          </div>

          <div className="footer-section">
            <h4>Project</h4>
            <ul className="footer-links">
              <li><a href="#problem">Problem Statement</a></li>
              <li><a href="#solution">Solution</a></li>
              <li><a href="#features">Features</a></li>
              <li><a href="#progress">Progress</a></li>
              <li><a href="#impact">Impact</a></li>
              <li><a href="#collaborators">Collaborators</a></li>
              <li><a href="#team">Team</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Research</h4>
            <ul className="footer-links">
              <li>Vision-Language Models</li>
              <li>Medical AI</li>
              <li>Drug-Drug Interactions</li>
              <li>Pharmacovigilance</li>
              <li>Digital Health</li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>SDG Alignment</h4>
            <ul className="footer-links">
              <li>SDG 3: Good Health</li>
              <li>SDG 9: Innovation</li>
              <li>SDG 17: Partnerships</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} meDDI Project. All rights reserved.</p>
          <p className="footer-note">
            Final Year Project - Transforming Medication Safety in Pakistan
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

