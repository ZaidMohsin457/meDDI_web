import React from 'react';
import './Team.css';

const Team = () => {
  const supervisors = [
    {
      name: 'Dr. Ahmar Rashid',
      role: 'Principal Supervisor',
      department: 'Department of Computer Science,GIKI',
      email: 'ahmar.rashid@giki.edu.pk',
      image: `${process.env.PUBLIC_URL}/team/supervisor1.jpg` // Placeholder - replace with actual images
    }
    // Add more supervisors here
  ];

  const collaborators = [
    {
      name: 'Dr. Usman Zafar',
      role: 'Clinical Advisor',
      organization: 'Al-Raazi Hospital Rawalpindi',
      email: 'collaborator@hospital.com',
      image: `${process.env.PUBLIC_URL}/team/collaborator1.jpg`
    }
    // Add more collaborators here
  ];

  const developers = [
    {
      name: 'Muhammad Zaid Mohsin',
      role: 'Full Stack Developer',
      specialization: 'Mobile & Backend',
      email: 'zaidmohsin45@gmail.com',
      image: `${process.env.PUBLIC_URL}/team/developer1.jpg`
    },
    {
      name: 'Haidar Ali Khan',
      role: 'AI Developer',
      specialization: 'AI/ML Engineer',
      email: 'haiderali786.haris@gmail.com',
      image: `${process.env.PUBLIC_URL}/team/developer2.jpg`
    },
    {
      name: 'Ali Faisal',
      role: 'AI Developer',
      specialization: 'AI/ML Engineer',
      email: 'alifaisalkhn@gmail.com',
      image: `${process.env.PUBLIC_URL}/team/developer3.jpg`
    }
    
    // Add more developers here
  ];

  const renderTeamMember = (member, index) => (
    <div key={index} className="team-member-card">
      <div className="team-member-image-container">
        <img 
          src={member.image} 
          alt={member.name}
          className="team-member-image"
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.nextSibling.style.display = 'flex';
          }}
        />
        <div className="team-member-placeholder" style={{ display: 'none' }}>
          <span className="member-initials">
            {member.name.split(' ').map(n => n[0]).join('').toUpperCase()}
          </span>
        </div>
      </div>
      <div className="team-member-info">
        <h3 className="member-name">{member.name}</h3>
        <div className="member-role">{member.role}</div>
        {member.department && (
          <div className="member-department">{member.department}</div>
        )}
        {member.organization && (
          <div className="member-organization">{member.organization}</div>
        )}
        {member.specialization && (
          <div className="member-specialization">{member.specialization}</div>
        )}
        {member.email && (
          <a href={`mailto:${member.email}`} className="member-email">
            {member.email}
          </a>
        )}
      </div>
    </div>
  );

  return (
    <section id="team" className="team-section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Our People</span>
          <h2 className="section-title">Meet Our Team</h2>
          <p className="section-description">
            The dedicated individuals working together to make meDDI a success.
          </p>
        </div>

        {supervisors.length > 0 && (
          <div className="team-category">
            <h3 className="category-title">
              <span className="category-icon">👨‍🏫</span>
              Supervisors
            </h3>
            <div className="team-grid">
              {supervisors.map((member, index) => renderTeamMember(member, index))}
            </div>
          </div>
        )}

        {collaborators.length > 0 && (
          <div className="team-category">
            <h3 className="category-title">
              <span className="category-icon">🤝</span>
              Collaborators
            </h3>
            <div className="team-grid">
              {collaborators.map((member, index) => renderTeamMember(member, index))}
            </div>
          </div>
        )}

        {developers.length > 0 && (
          <div className="team-category">
            <h3 className="category-title">
              <span className="category-icon">💻</span>
              Development Team
            </h3>
            <div className="team-grid">
              {developers.map((member, index) => renderTeamMember(member, index))}
            </div>
          </div>
        )}

        <div className="team-note">
          <p>
            Our team combines expertise in artificial intelligence, healthcare informatics, 
            clinical practice, and software engineering to deliver a comprehensive medication safety solution.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Team;

