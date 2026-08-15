import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './HRValue.css';

function BrainIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"/>
      <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"/>
    </svg>
  );
}

function LayersIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 2 7 12 12 22 7 12 2"/>
      <polyline points="2 17 12 22 22 17"/>
      <polyline points="2 12 12 17 22 12"/>
    </svg>
  );
}

function TrendingIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
      <polyline points="17 6 23 6 23 12"/>
    </svg>
  );
}

const cards = [
  {
    icon: <BrainIcon />,
    title: 'Problem Solver',
    description: 'I focus on understanding the problem first and selecting the right technical approach — not just writing code quickly.',
    id: 'value-problem-solver',
  },
  {
    icon: <LayersIcon />,
    title: 'Full-Stack Builder',
    description: 'I can work across frontend, backend, APIs, databases, and application workflows to deliver complete, functional products.',
    id: 'value-full-stack',
  },
  {
    icon: <TrendingIcon />,
    title: 'Continuous Learner',
    description: 'I continuously strengthen my skills through real projects, DSA practice, AI integration, and adopting modern technologies.',
    id: 'value-learner',
  },
];

function HRValue() {
  const sectionRef = useScrollReveal();

  return (
    <section id="hrvalue" className="section hrvalue" ref={sectionRef} aria-labelledby="hrvalue-heading">
      <div className="container">
        <div className="hrvalue__header reveal">
          <span className="section-eyebrow">Why hire me</span>
          <h2 id="hrvalue-heading" className="section-title">Why Should You Interview Me?</h2>
          <p className="section-subtitle">
            Three reasons that make me a valuable addition to any development team.
          </p>
        </div>

        <div className="hrvalue__grid">
          {cards.map((card, i) => (
            <article
              key={card.id}
              id={card.id}
              className={`hrvalue__card reveal reveal-delay-${i + 1}`}
              aria-labelledby={`${card.id}-title`}
            >
              <div className="hrvalue__card-icon" aria-hidden="true">
                {card.icon}
              </div>
              <h3 id={`${card.id}-title`} className="hrvalue__card-title">{card.title}</h3>
              <p className="hrvalue__card-desc">{card.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HRValue;
