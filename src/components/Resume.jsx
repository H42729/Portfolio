import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Resume.css';

function DownloadIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
      <polyline points="7 10 12 15 17 10"/>
      <line x1="12" y1="15" x2="12" y2="3"/>
    </svg>
  );
}

const resumeDetails = [
  { label: 'Candidate', value: 'Vimal Kumar S' },
  { label: 'Target Role', value: 'MERN Stack + AI Developer' },
  { label: 'Education', value: 'MCA (2025–2027) · PSNA College of Engineering and Technology (CGPA: 8.38)' },
  { label: 'Undergraduate', value: 'BCA (2022–2025) · NPR Arts and Science College (CGPA: 6.97)' },
  { label: 'Core Tech Stack', value: 'React.js · Node.js · Express.js · MongoDB · Python · AI API' },
  { label: 'Key Achievement', value: '2nd Prize in Project Expo @ The American College (E-Commerce App)' },
];

function Resume() {
  const sectionRef = useScrollReveal();

  return (
    <section id="resume" className="section resume" ref={sectionRef} aria-labelledby="resume-heading">
      <div className="container">
        <div className="resume__card card reveal">
          <div className="resume__header">
            <span className="section-eyebrow">Curriculum Vitae</span>
            <h2 id="resume-heading" className="section-title">Resume Overview</h2>
            <p className="resume__subtitle">
              Key credentials and candidate summary before downloading the official PDF resume.
            </p>
          </div>

          {/* Details above the download button */}
          <div className="resume__details-grid" role="list" aria-label="Candidate resume details">
            {resumeDetails.map((item) => (
              <div key={item.label} className="resume__detail-box" role="listitem">
                <span className="resume__detail-label">{item.label}</span>
                <span className="resume__detail-value">{item.value}</span>
              </div>
            ))}
          </div>

          {/* Single Download Resume Button */}
          <div className="resume__actions">
            <a
              href="/resume.pdf"
              download="Vimal_Kumar_S_Resume.pdf"
              className="btn-primary resume__download-btn"
              id="resume-download-btn"
              aria-label="Download Vimal Kumar S's official resume PDF"
            >
              <DownloadIcon /> Download Resume (PDF)
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;
