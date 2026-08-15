import React, { useEffect, useRef, useState } from 'react';
import './Hero.css';

function ArrowIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12"/>
      <polyline points="12 5 19 12 12 19"/>
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
      <polyline points="7 10 12 15 17 10"/>
      <line x1="12" y1="15" x2="12" y2="3"/>
    </svg>
  );
}

const techStack = ['React.js', 'Node.js', 'Express', 'MongoDB', 'AI Integration'];

const snapshotItems = [
  { label: 'Role', value: 'MERN Stack + AI Developer' },
  { label: 'Education', value: 'MCA (2025–2027) · PSNA College of Engineering and Technology' },
  { label: 'Core Stack', value: 'React · Node.js · Express · MongoDB' },
  { label: 'Strength', value: 'Problem Solving + Practical Development' },
  { label: 'Currently Improving', value: 'DSA · AI Integration · Cloud' },
];

const fullLine1 = "Building Digital Products";
const fullLine2 = "That Solve Real Problems.";

function Hero() {
  const heroRef = useRef(null);

  // Slow, elegant typewriter printing state
  const [displayedLine1, setDisplayedLine1] = useState("");
  const [displayedLine2, setDisplayedLine2] = useState("");
  const [line1Finished, setLine1Finished] = useState(false);
  const [typingComplete, setTypingComplete] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setDisplayedLine1(fullLine1);
      setDisplayedLine2(fullLine2);
      setLine1Finished(true);
      setTypingComplete(true);
      return;
    }

    let i = 0;
    const speed1 = 80;
    const timer1 = setInterval(() => {
      if (i <= fullLine1.length) {
        setDisplayedLine1(fullLine1.slice(0, i));
        i++;
      } else {
        clearInterval(timer1);
        setLine1Finished(true);

        setTimeout(() => {
          let j = 0;
          const speed2 = 85;
          const timer2 = setInterval(() => {
            if (j <= fullLine2.length) {
              setDisplayedLine2(fullLine2.slice(0, j));
              j++;
            } else {
              clearInterval(timer2);
              setTypingComplete(true);
            }
          }, speed2);
        }, 400);
      }
    }, speed1);

    return () => clearInterval(timer1);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (heroRef.current) {
        heroRef.current.querySelectorAll('.hero-reveal').forEach((el, i) => {
          setTimeout(() => el.classList.add('hero-reveal--in'), i * 110);
        });
      }
    }, 40);
    return () => clearTimeout(timer);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const el = document.getElementById(href.replace('#', ''));
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="home" className="hero" ref={heroRef} aria-labelledby="hero-heading">
      {/* Background decoration */}
      <div className="hero__bg-decoration" aria-hidden="true">
        <div className="hero__bg-blob hero__bg-blob--1" />
        <div className="hero__bg-blob hero__bg-blob--2" />
        <div className="hero__bg-grid" />
      </div>

      <div className="container hero__inner">
        {/* Left — Content */}
        <div className="hero__content">
          <div className="hero-reveal">
            <span className="hero__eyebrow badge">MCA · MERN · AI</span>
          </div>

          <h1 id="hero-heading" className="hero__headline hero-reveal reveal-delay-1">
            <span className="hero__headline-line1">
              {displayedLine1}
              {!line1Finished && <span className="typing-cursor" aria-hidden="true">|</span>}
            </span>
            <br />
            <span className="text-gradient hero__headline-line2">
              {displayedLine2}
              {line1Finished && !typingComplete && <span className="typing-cursor typing-cursor--gradient" aria-hidden="true">|</span>}
            </span>
          </h1>

          <p className="hero__description hero-reveal reveal-delay-2">
            I'm <strong>Vimal Kumar S</strong>, an MCA student and MERN Stack + AI Developer focused on building practical, high-impact web applications with modern technologies.
          </p>

          <div className="hero__actions hero-reveal reveal-delay-3">
            <a
              href="#projects"
              className="btn-primary"
              onClick={(e) => handleNavClick(e, '#projects')}
              id="hero-view-projects"
            >
              View Projects <ArrowIcon />
            </a>
            <a
              href="/resume.pdf"
              className="btn-secondary"
              download="Vimal_Kumar_S_Resume.pdf"
              id="hero-download-resume"
            >
              <DownloadIcon /> Download Resume
            </a>
          </div>

          <div className="hero-reveal reveal-delay-4">
            <a
              href="#contact"
              className="btn-ghost hero__connect-link"
              onClick={(e) => handleNavClick(e, '#contact')}
              id="hero-connect"
            >
              Let's Connect <ArrowIcon />
            </a>
          </div>

          <div className="hero__proof hero-reveal reveal-delay-4">
            {techStack.map((tech) => (
              <span key={tech} className="hero__proof-item">{tech}</span>
            ))}
          </div>
        </div>

        {/* Right — Candidate Snapshot Card with Profile Photo */}
        <div className="hero__snapshot-wrapper hero-reveal reveal-delay-2">
          {/* Abstract geometric decoration */}
          <div className="hero__geo-bg" aria-hidden="true">
            <div className="hero__geo-ring hero__geo-ring--1" />
            <div className="hero__geo-ring hero__geo-ring--2" />
            <div className="hero__geo-dot hero__geo-dot--1" />
            <div className="hero__geo-dot hero__geo-dot--2" />
            <div className="hero__geo-line hero__geo-line--1" />
            <div className="hero__geo-line hero__geo-line--2" />
          </div>

          <div className="glass-card hero__snapshot" role="complementary" aria-label="Candidate Snapshot">
            {/* Top Header: Photo First */}
            <div className="hero__snapshot-top">
              <div className="hero__profile-photo-wrapper">
                <img
                  src="/images/vimal-profile.png"
                  alt="Vimal Kumar S"
                  className="hero__profile-photo"
                />
                <span className="hero__profile-status-dot" title="Open to opportunities" />
              </div>

              <div className="hero__profile-details">
                <h2 className="hero__candidate-name">Vimal Kumar S</h2>
                <p className="hero__candidate-role">MERN Stack + AI Developer</p>
                <span className="badge badge-green hero__status-badge">
                  <span className="hero__status-dot" aria-hidden="true" />
                  Open to opportunities
                </span>
              </div>
            </div>

            <div className="hero__snapshot-divider" />

            {/* Candidate Details List Below */}
            <dl className="hero__snapshot-list">
              {snapshotItems.map((item) => (
                <div key={item.label} className="hero__snapshot-item">
                  <dt className="hero__snapshot-label">{item.label}</dt>
                  <dd className="hero__snapshot-value">{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
