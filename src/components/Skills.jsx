import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Skills.css';

const skillGroups = [
  {
    id: 'frontend',
    label: 'Frontend',
    skills: ['React.js', 'JavaScript ES6+', 'HTML5', 'CSS3', 'Bootstrap 5'],
  },
  {
    id: 'backend',
    label: 'Backend',
    skills: ['Node.js', 'Express.js', 'REST APIs'],
  },
  {
    id: 'database',
    label: 'Database',
    skills: ['MongoDB', 'Mongoose'],
  },
  {
    id: 'ai-tools',
    label: 'AI & Dev Tools',
    skills: ['AI API Integration', 'Git', 'GitHub', 'Postman', 'VS Code'],
  },
  {
    id: 'learning',
    label: 'Currently Improving',
    skills: ['DSA', 'Cloud Computing', 'System Design'],
    isLearning: true,
  },
];

function Skills() {
  const sectionRef = useScrollReveal();

  return (
    <section id="skills" className="section skills" ref={sectionRef} aria-labelledby="skills-heading">
      <div className="container">
        <div className="skills__header reveal">
          <span className="section-eyebrow">What I Work With</span>
          <h2 id="skills-heading" className="section-title">Technical Skills</h2>
          <p className="section-subtitle">
            A focused skill set built through real projects and continuous practice.
          </p>
        </div>

        <div className="skills__grid">
          {skillGroups.map((group, gi) => (
            <div
              key={group.id}
              id={`skill-group-${group.id}`}
              className={`skills__group reveal reveal-delay-${Math.min(gi + 1, 4)} ${group.isLearning ? 'skills__group--learning' : ''}`}
              aria-labelledby={`skill-group-${group.id}-label`}
            >
              <div className="skills__group-header">
                <h3 id={`skill-group-${group.id}-label`} className="skills__group-label">
                  {group.label}
                </h3>
                {group.isLearning && (
                  <span className="skills__learning-badge">
                    <span className="skills__pulse-dot" />
                    In Progress
                  </span>
                )}
              </div>

              <ul className="skills__list" role="list" aria-label={`${group.label} skills`}>
                {group.skills.map((skill) => (
                  <li key={skill} className="skills__item">
                    <span className="skills__item-dot" aria-hidden="true" />
                    <span className="skills__item-text">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <p className="skills__note reveal">
          Skills demonstrated through hands-on projects — no fake percentages, just real experience.
        </p>
      </div>
    </section>
  );
}

export default Skills;
