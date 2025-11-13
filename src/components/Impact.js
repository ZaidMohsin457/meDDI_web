import React from 'react';
import './Impact.css';

const Impact = () => {
  const sdgs = [
    {
      number: 'SDG 3',
      title: 'Good Health and Well-being',
      description: 'Direct contribution to universal health coverage and safe access to medicines through improved medication safety',
      targets: ['3.8 - Universal Health Coverage', '3.b - Access to Safe Medicines']
    },
    {
      number: 'SDG 9',
      title: 'Industry, Innovation, and Infrastructure',
      description: 'Healthcare technology infrastructure development and inclusive digital health innovation',
      targets: ['9.5 - Enhance Research', '9.c - Universal Access to ICT']
    },
    {
      number: 'SDG 17',
      title: 'Partnerships for the Goals',
      description: 'Multi-stakeholder partnerships between academia, healthcare providers, and regulatory authorities',
      targets: ['17.6 - Technology Transfer', '17.16 - Multi-stakeholder Partnerships']
    }
  ];

  const impacts = [
    {
      category: 'Clinical Impact',
      icon: '🏥',
      points: [
        'Real-time DDI identification at point of medication dispensing',
        'Covers 95% of drug transactions in community environments',
        'Prevents medication errors and adverse drug events'
      ]
    },
    {
      category: 'Public Health',
      icon: '🌍',
      points: [
        'Systematic prescription database for pharmacovigilance',
        'Evidence-based policymaking support',
        'Antimicrobial resistance tracking capabilities'
      ]
    },
    {
      category: 'Digital Health',
      icon: '💻',
      points: [
        'Entry point into healthcare digitization',
        'Mobile-first solution for resource-constrained environments',
        'Minimal infrastructure requirements'
      ]
    },
    {
      category: 'Capacity Building',
      icon: '👥',
      points: [
        'Training for 50+ pharmacists and physicians',
        'Specialized training for 4-6 MS/MPhil students',
        'National AI and health informatics capacity building'
      ]
    }
  ];

  return (
    <section id="impact" className="impact-section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Global Impact</span>
          <h2 className="section-title">Impact & SDG Alignment</h2>
          <p className="section-description">
            meDDI contributes to multiple Sustainable Development Goals while addressing critical healthcare challenges in Pakistan.
          </p>
        </div>

        <div className="sdg-grid">
          {sdgs.map((sdg, index) => (
            <div key={index} className="sdg-card">
              <div className="sdg-number">{sdg.number}</div>
              <h3>{sdg.title}</h3>
              <p>{sdg.description}</p>
              <div className="sdg-targets">
                {sdg.targets.map((target, targetIndex) => (
                  <span key={targetIndex} className="target-badge">{target}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="impacts-container">
          <h3>Key Impact Areas</h3>
          <div className="impacts-grid">
            {impacts.map((impact, index) => (
              <div key={index} className="impact-card">
                <div className="impact-icon">{impact.icon}</div>
                <h4>{impact.category}</h4>
                <ul className="impact-points">
                  {impact.points.map((point, pointIndex) => (
                    <li key={pointIndex}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="research-significance">
          <h3>Research Significance</h3>
          <div className="significance-grid">
            <div className="significance-item">
              <h4>Scientific Contribution</h4>
              <p>
                First implementation of Vision-Language Models for handwritten prescription processing 
                in developing countries, advancing medical document understanding.
              </p>
            </div>
            <div className="significance-item">
              <h4>Clinical Impact</h4>
              <p>
                Fills critical gap in medication safety infrastructure, covering 95% of drug transactions 
                in community environments where existing systems are absent.
              </p>
            </div>
            <div className="significance-item">
              <h4>Public Health Infrastructure</h4>
              <p>
                Creates unprecedented national source for pharmacovigilance, prescription pattern analysis, 
                and evidence-based policymaking.
              </p>
            </div>
            <div className="significance-item">
              <h4>Digital Health Advancement</h4>
              <p>
                Viable entry point into healthcare digitization with minimal infrastructure modifications, 
                supporting universal health coverage goals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;

