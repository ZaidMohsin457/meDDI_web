import React, { useState, useEffect } from 'react';
import './Navigation.css';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-logo" onClick={() => scrollToSection('hero')}>
          <span className="logo-text">meDDI</span>
          <span className="logo-tagline">Medication Safety</span>
        </div>
        <button 
          className="mobile-menu-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <li><a href="#problem" onClick={() => scrollToSection('problem')}>Problem</a></li>
          <li><a href="#solution" onClick={() => scrollToSection('solution')}>Solution</a></li>
          <li><a href="#features" onClick={() => scrollToSection('features')}>Features</a></li>
          <li><a href="#progress" onClick={() => scrollToSection('progress')}>Progress</a></li>
          <li><a href="#impact" onClick={() => scrollToSection('impact')}>Impact</a></li>
          <li><a href="#collaborators" onClick={() => scrollToSection('collaborators')}>Collaborators</a></li>
          <li><a href="#team" onClick={() => scrollToSection('team')}>Team</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;

