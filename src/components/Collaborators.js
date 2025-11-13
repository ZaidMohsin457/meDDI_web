import React from 'react';
import './Collaborators.css';

const Collaborators = () => {
  const collaborators = [
    {
      name: 'Al-Raazi Hospital Rawalpindi',
      type: 'Healthcare Partner',
      description: 'Providing access to prescription data and clinical expertise for model development and validation.',
      logo: '/logos/al-raazi-logo.png', // Placeholder path - replace with actual logo
      website: '#'
    }
    // Add more collaborators here as needed
  ];

  return (
    <section id="collaborators" className="collaborators-section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Partnerships</span>
          <h2 className="section-title">Our Collaborators</h2>
          <p className="section-description">
            We work with leading healthcare institutions and organizations to make meDDI a reality.
          </p>
        </div>

        <div className="collaborators-grid">
          {collaborators.map((collaborator, index) => (
            <div key={index} className="collaborator-card">
              <div className="collaborator-logo-container">
                <img 
                  src={collaborator.logo} 
                  alt={`${collaborator.name} logo`}
                  className="collaborator-logo"
                  onError={(e) => {
                    // Fallback if image doesn't exist
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="collaborator-logo-placeholder" style={{ display: 'none' }}>
                  <span className="placeholder-icon">🏥</span>
                  <span className="placeholder-text">{collaborator.name}</span>
                </div>
              </div>
              <div className="collaborator-info">
                <div className="collaborator-type">{collaborator.type}</div>
                <h3 className="collaborator-name">{collaborator.name}</h3>
                <p className="collaborator-description">{collaborator.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="collaboration-note">
          <p>
            <strong>Interested in collaborating?</strong> We're always looking for healthcare institutions, 
            pharmacies, and research partners to join us in improving medication safety in Pakistan.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Collaborators;

