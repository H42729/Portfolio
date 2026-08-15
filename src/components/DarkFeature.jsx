import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './DarkFeature.css';

const metrics = [
  { value: '3+', label: 'Projects', sub: 'Delivered' },
  { value: 'MCA', label: 'Education', sub: 'Master\'s Degree' },
  { value: '2026', label: 'Career Goal', sub: 'Ready to contribute' },
];

function DarkFeature() {
  const sectionRef = useScrollReveal();

  return (
    <section
      className="dark-feature section-dark"
      ref={sectionRef}
      aria-labelledby="dark-feature-heading"
    >
      <div className="dark-feature__bg-decoration" aria-hidden="true">
        <div className="dark-feature__line dark-feature__line--1" />
        <div className="dark-feature__line dark-feature__line--2" />
        <div className="dark-feature__dot dark-feature__dot--1" />
        <div className="dark-feature__dot dark-feature__dot--2" />
      </div>

      <div className="container dark-feature__inner">
        <div className="dark-feature__content reveal">
          <span className="section-eyebrow dark-feature__eyebrow">My Philosophy</span>
          <h2 id="dark-feature-heading" className="dark-feature__heading">
            Build. Learn. Repeat.
          </h2>
          <p className="dark-feature__text">
            Strong developers are built through consistent practice, real projects, and the discipline to keep learning — even when it's difficult.
          </p>
        </div>

        <div className="dark-feature__metrics" role="list" aria-label="Career metrics">
          {metrics.map((m, i) => (
            <div
              key={m.value}
              className={`dark-feature__metric reveal reveal-delay-${i + 1}`}
              role="listitem"
            >
              <span className="dark-feature__metric-value">{m.value}</span>
              <span className="dark-feature__metric-label">{m.label}</span>
              <span className="dark-feature__metric-sub">{m.sub}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default DarkFeature;
