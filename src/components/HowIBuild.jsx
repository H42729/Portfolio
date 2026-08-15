import React, { useEffect, useRef, useState } from 'react';
import './HowIBuild.css';

const steps = [
  { id: 'understand', label: 'Understand', desc: 'Define the real problem' },
  { id: 'design', label: 'Design', desc: 'Plan the architecture' },
  { id: 'build', label: 'Build', desc: 'Write clean, working code' },
  { id: 'test', label: 'Test', desc: 'Verify correctness & edge cases' },
  { id: 'improve', label: 'Improve', desc: 'Refine and optimize' },
];

function HowIBuild() {
  const sectionRef = useRef(null);
  const lineRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(-1);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !visible) {
          setVisible(true);
          // Stagger step activation
          steps.forEach((_, i) => {
            setTimeout(() => setActiveStep(i), 200 + i * 180);
          });
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [visible]);

  return (
    <section id="howibuild" className="section howibuild" ref={sectionRef} aria-labelledby="howibuild-heading">
      <div className="container">
        <div className={`howibuild__header ${visible ? 'howibuild__header--in' : ''}`}>
          <span className="section-eyebrow">My Process</span>
          <h2 id="howibuild-heading" className="section-title">How I Build</h2>
        </div>

        {/* Process Steps */}
        <div className="howibuild__process" role="list" aria-label="Development process steps">
          {/* Progress line */}
          <div className="howibuild__line-track" aria-hidden="true">
            <div
              ref={lineRef}
              className="howibuild__line-fill"
              style={{ width: visible ? '100%' : '0%' }}
            />
          </div>

          {steps.map((step, i) => (
            <div
              key={step.id}
              className={`howibuild__step ${activeStep >= i ? 'howibuild__step--active' : ''}`}
              role="listitem"
              aria-label={`Step ${i + 1}: ${step.label} — ${step.desc}`}
            >
              <div className="howibuild__step-number" aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </div>
              <div className="howibuild__step-dot" aria-hidden="true" />
              <div className="howibuild__step-info">
                <span className="howibuild__step-label">{step.label}</span>
                <span className="howibuild__step-desc">{step.desc}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Quote */}
        <blockquote
          className={`howibuild__quote ${visible ? 'howibuild__quote--in' : ''}`}
        >
          <p>
            I don't just write code. I focus on building software that solves a meaningful problem and provides a clear, useful experience for real users.
          </p>
        </blockquote>
      </div>
    </section>
  );
}

export default HowIBuild;
