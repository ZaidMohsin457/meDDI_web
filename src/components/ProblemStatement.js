import React from 'react';
import './ProblemStatement.css';

const ProblemStatement = () => {
  return (
    <section id="problem" className="problem-section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">The Challenge</span>
          <h2 className="section-title">Problem Statement</h2>
          <p className="section-description">
            Medication errors and adverse drug events pose a critical threat to patient safety in Pakistan's healthcare system.
          </p>
        </div>

        <div className="problem-grid">
          <div className="problem-card">
            <div className="problem-icon">⚠️</div>
            <h3>High Error Rates</h3>
            <p>Approximately 30% of all adverse drug reactions are linked to Drug-Drug Interactions (DDIs), with no effective monitoring systems in place.</p>
          </div>

          <div className="problem-card">
            <div className="problem-icon">✍️</div>
            <h3>Illegible Prescriptions</h3>
            <p>Handwritten prescriptions suffer from illegibility, non-standardized abbreviations, and format inconsistencies, leading to fatal dispensing errors.</p>
          </div>

          <div className="problem-card">
            <div className="problem-icon">⏱️</div>
            <h3>Manual Verification</h3>
            <p>Pharmacists manually verify prescriptions using limited reference materials, which is time-consuming and prone to human error.</p>
          </div>

          <div className="problem-card">
            <div className="problem-icon">📊</div>
            <h3>No Digital Database</h3>
            <p>Lack of organized digital prescription databases prevents continuous monitoring of patient drug history across multiple prescriptions.</p>
          </div>

          <div className="problem-card">
            <div className="problem-icon">🔍</div>
            <h3>No Pharmacovigilance</h3>
            <p>Absence of a central pharmacovigilance system to track prescribing patterns, inappropriate prescribing, or adverse drug events.</p>
          </div>

          <div className="problem-card">
            <div className="problem-icon">💻</div>
            <h3>Inadequate Technology</h3>
            <p>Existing solutions like TrOCR achieve only 65-70% accuracy, which is unacceptable for clinical use where one mistake can be fatal.</p>
          </div>
        </div>

        <div className="statistics-box">
          <h3>Impact Statistics</h3>
          <div className="stats-grid">
            <div className="stat-box">
              <div className="stat-value">1 in 10</div>
              <div className="stat-text">Patients worldwide affected by medication errors</div>
            </div>
            <div className="stat-box">
              <div className="stat-value">30%</div>
              <div className="stat-text">Adverse drug reactions linked to DDIs</div>
            </div>
            <div className="stat-box">
              <div className="stat-value">65-70%</div>
              <div className="stat-text">Current OCR accuracy (insufficient for clinical use)</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemStatement;

