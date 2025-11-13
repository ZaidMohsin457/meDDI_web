import React from 'react';
import './Progress.css';

const Progress = () => {
  const phases = [
    {
      phase: 'Phase I',
      title: 'Model Development & Dataset Creation',
      duration: 'Months 1-6',
      status: 'in-progress',
      tasks: [
        'Data collection from partner hospitals and pharmacies',
        'Annotation by trained pharmacists/clinicians',
        'Data augmentation and synthesis',
        'VLM research and fine-tuning',
        'Baseline comparison and evaluation'
      ]
    },
    {
      phase: 'Phase II',
      title: 'Application & Backend Development',
      duration: 'Months 7-12',
      status: 'upcoming',
      tasks: [
        'Flutter mobile app development',
        'Backend services and APIs',
        'DDI detection engine integration',
        'Security and compliance implementation',
        'Testing and optimization'
      ]
    },
    {
      phase: 'Phase III',
      title: 'On-Site Testing & Validation',
      duration: 'Months 13-18',
      status: 'upcoming',
      tasks: [
        'Pilot deployment in 20-30 pharmacies',
        'Training and support for users',
        'Data collection and analysis',
        'Statistical validation',
        'Iterative optimization'
      ]
    }
  ];

  const milestones = [
    { label: 'Dataset Collection', progress: 60 },
    { label: 'Model Training', progress: 40 },
    { label: 'App Development', progress: 25 },
    { label: 'DDI Engine', progress: 50 },
    { label: 'Pilot Deployment', progress: 10 }
  ];

  return (
    <section id="progress" className="progress-section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Project Status</span>
          <h2 className="section-title">Research Progress</h2>
          <p className="section-description">
            Our comprehensive three-phase approach to developing and deploying the meDDI system.
          </p>
        </div>

        <div className="milestones-container">
          <h3>Current Milestones</h3>
          <div className="milestones-grid">
            {milestones.map((milestone, index) => (
              <div key={index} className="milestone-card">
                <div className="milestone-header">
                  <span className="milestone-label">{milestone.label}</span>
                  <span className="milestone-percentage">{milestone.progress}%</span>
                </div>
                <div className="progress-bar">
                  <div 
                    className="progress-fill" 
                    style={{ width: `${milestone.progress}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="phases-container">
          <h3>Research Phases</h3>
          <div className="phases-timeline">
            {phases.map((phase, index) => (
              <div key={index} className={`phase-card ${phase.status}`}>
                <div className="phase-header">
                  <div className="phase-badge">
                    <span className="phase-number">{phase.phase}</span>
                    <span className="phase-duration">{phase.duration}</span>
                  </div>
                  <div className={`status-badge ${phase.status}`}>
                    {phase.status === 'in-progress' ? 'In Progress' : 'Upcoming'}
                  </div>
                </div>
                <h4 className="phase-title">{phase.title}</h4>
                <ul className="phase-tasks">
                  {phase.tasks.map((task, taskIndex) => (
                    <li key={taskIndex}>{task}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="expected-outcomes">
          <h3>Expected Outcomes</h3>
          <div className="outcomes-grid">
            <div className="outcome-item">
              <div className="outcome-icon">🎯</div>
              <h4>Technical Results</h4>
              <p>90%+ drug name extraction, 85%+ dosage recognition, 95%+ DDI detection sensitivity</p>
            </div>
            <div className="outcome-item">
              <div className="outcome-icon">📱</div>
              <h4>Deployed Application</h4>
              <p>Production-ready mobile app in 20-30 pharmacies with high user satisfaction</p>
            </div>
            <div className="outcome-item">
              <div className="outcome-icon">🛡️</div>
              <h4>Patient Safety</h4>
              <p>40%+ reduction in prescription processing errors and prevented medication errors</p>
            </div>
            <div className="outcome-item">
              <div className="outcome-icon">📚</div>
              <h4>Research Output</h4>
              <p>2-3 peer-reviewed publications and open-source contributions to the community</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Progress;

