import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Education.css';

const educationItems = [
  {
    id: 'edu-mca',
    degree: 'MCA',
    fullName: 'Master of Computer Applications',
    institution: 'PSNA College of Engineering and Technology',
    period: '2025 – 2027',
    cgpa: 'CGPA: 8.38 / 10 (up to Semester 2)',
    desc: 'Advanced post-graduate degree focused on computer applications, modern software development, MERN stack, AI integration, algorithms, and system design.',
    tags: ['MERN Stack', 'AI Integration', 'Software Engineering', 'Databases', 'Algorithms'],
  },
  {
    id: 'edu-bca',
    degree: 'BCA',
    fullName: 'Bachelor of Computer Applications',
    institution: 'NPR Arts and Science College',
    period: '2022 – 2025',
    cgpa: 'CGPA: 6.97 / 10',
    desc: 'Strong foundational undergraduate degree in computer applications, programming fundamentals, web technologies, object-oriented concepts, and database management.',
    tags: ['Programming Fundamentals', 'OOP', 'Web Basics', 'DBMS', 'Data Structures'],
  },
  {
    id: 'edu-school',
    degree: 'HSC & SSLC',
    fullName: 'Higher Secondary & SSLC',
    institution: 'SSM Matric Higher Secondary School',
    period: '2020 – 2022',
    cgpa: 'Higher Secondary: 80.66% | SSLC: 65.8%',
    desc: 'Secondary and Higher Secondary education with focus on Computer Science and Mathematics foundation.',
    tags: ['Computer Science', 'Mathematics', 'Tamil Nadu Board'],
  },
];

const journeySteps = [
  { label: 'MERN Stack', desc: 'React + Node.js + Express + MongoDB (Certified)' },
  { label: 'AI Integration', desc: 'API integration & intelligent application features' },
  { label: 'Project Achievements', desc: 'Secured 2nd Prize in Project Expo @ The American College' },
  { label: 'Cloud & DevOps', desc: 'Learning deployment & modern cloud tools' },
];

function Education() {
  const sectionRef = useScrollReveal();

  return (
    <section id="education" className="section education" ref={sectionRef} aria-labelledby="education-heading">
      <div className="container">
        <div className="education__header reveal">
          <span className="section-eyebrow">Academic Background</span>
          <h2 id="education-heading" className="section-title">Education &amp; Journey</h2>
          <p className="section-subtitle">
            Strong academic qualifications in computer applications paired with practical, self-directed product development.
          </p>
        </div>

        <div className="education__layout">
          {/* Timeline */}
          <div className="education__timeline" role="list" aria-label="Education history">
            {educationItems.map((item, i) => (
              <article
                key={item.id}
                id={item.id}
                className={`edu-item reveal reveal-delay-${i + 1}`}
                role="listitem"
                aria-labelledby={`${item.id}-heading`}
              >
                <div className="edu-item__marker" aria-hidden="true">
                  <div className="edu-item__dot" />
                  {i < educationItems.length - 1 && <div className="edu-item__line" />}
                </div>

                <div className="edu-item__card card">
                  <div className="edu-item__header">
                    <div>
                      <span className="edu-item__degree-badge">{item.degree}</span>
                      <h3 id={`${item.id}-heading`} className="edu-item__title">{item.fullName}</h3>
                      <p className="edu-item__institution">{item.institution}</p>
                    </div>
                    <div className="edu-item__right-header">
                      <span className="edu-item__period">{item.period}</span>
                      <span className="badge badge-green edu-item__cgpa-badge">{item.cgpa}</span>
                    </div>
                  </div>

                  <p className="edu-item__desc">{item.desc}</p>

                  <div className="edu-item__tags">
                    {item.tags.map((tag) => (
                      <span key={tag} className="badge">{tag}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Journey */}
          <aside className="education__journey reveal reveal-delay-3" aria-labelledby="journey-heading">
            <div className="card education__journey-card">
              <h3 id="journey-heading" className="education__journey-title">Development Journey</h3>
              <p className="education__journey-desc">Continuous skill building beyond the classroom:</p>

              <ol className="education__journey-list">
                {journeySteps.map((step, i) => (
                  <li key={step.label} className="education__journey-step">
                    <span className="education__journey-step-num">{String(i + 1).padStart(2, '0')}</span>
                    <div>
                      <strong className="education__journey-step-label">{step.label}</strong>
                      <span className="education__journey-step-desc">{step.desc}</span>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

export default Education;
