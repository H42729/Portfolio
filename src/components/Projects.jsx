import React, { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Projects.css';

function ExternalLinkIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
      <polyline points="15 3 21 3 21 9"/>
      <line x1="10" y1="14" x2="21" y2="3"/>
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
  );
}

const projects = [
  {
    id: 'proj-ecommerce',
    title: 'Full-Stack E-Commerce Platform',
    description: 'Full-stack e-commerce application with authentication, product management, REST APIs, and database integration.',
    image: '/images/project-ecommerce.png',
    tags: ['React', 'Node.js', 'Express', 'MongoDB'],
    problem: 'Small businesses needed a complete, scalable e-commerce solution with modern UI and secure user flows.',
    solution: 'Developed a full-stack platform with JWT authentication, real-time cart, product search/filtering, and order management.',
    techList: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT Auth'],
    impact: 'Seamless end-to-end product flow from product discovery to secure user authentication and order processing.',
    caseUrl: '#',
    githubUrl: 'https://github.com/vimalkumar',
  },
  {
    id: 'proj-attendance',
    title: 'AI Attendance Management System',
    description: 'Modern attendance management platform with role-based workflows and AI-assisted functionality.',
    image: '/images/project-attendance.png',
    tags: ['React', 'JavaScript', 'Bootstrap', 'Axios', 'AI'],
    problem: 'Manual attendance tracking was inefficient, error-prone, and lacked proper role-based access control.',
    solution: 'Created an intelligent attendance system with AI assistance, multiple role workflows (Admin, Staff, Student), and automated reporting.',
    techList: ['React', 'JavaScript', 'Bootstrap 5', 'Axios', 'Context API', 'AI'],
    impact: 'Streamlined attendance tracking with automated analytics and granular role-based access control.',
    caseUrl: '#',
    githubUrl: 'https://github.com/vimalkumar',
  },
];

function ProjectCard({ project, delay }) {
  const [imgError, setImgError] = useState(false);

  return (
    <article
      id={project.id}
      className={`project-card reveal reveal-delay-${delay}`}
      aria-labelledby={`${project.id}-title`}
    >
      {/* Image */}
      <div className="project-card__image-wrap">
        {!imgError ? (
          <img
            src={project.image}
            alt={`Screenshot of ${project.title} application`}
            className="project-card__image"
            onError={() => setImgError(true)}
            loading="lazy"
          />
        ) : (
          <div className="project-card__image-fallback" aria-hidden="true">
            <div className="project-card__fallback-inner">
              <div className="fallback-bar fallback-bar--nav" />
              <div className="fallback-content">
                <div className="fallback-sidebar" />
                <div className="fallback-main">
                  <div className="fallback-card" />
                  <div className="fallback-card" />
                  <div className="fallback-card fallback-card--wide" />
                </div>
              </div>
            </div>
          </div>
        )}
        {/* Technology overlay tags with DARK background & LIGHT crisp font */}
        <div className="project-card__tags">
          {project.tags.map((tag) => (
            <span key={tag} className="tech-badge-dark">{tag}</span>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="project-card__body">
        <h3 id={`${project.id}-title`} className="project-card__title">{project.title}</h3>
        <p className="project-card__desc">{project.description}</p>

        <dl className="project-card__meta">
          <div className="project-card__meta-item">
            <dt>Problem</dt>
            <dd>{project.problem}</dd>
          </div>
          <div className="project-card__meta-item">
            <dt>Solution</dt>
            <dd>{project.solution}</dd>
          </div>
          <div className="project-card__meta-item">
            <dt>Technology</dt>
            <dd className="project-card__tech-pills">
              {project.techList.map((tech) => (
                <span key={tech} className="tech-pill-dark">{tech}</span>
              ))}
            </dd>
          </div>
          <div className="project-card__meta-item">
            <dt>Impact</dt>
            <dd>{project.impact}</dd>
          </div>
        </dl>

        <div className="project-card__actions">
          <a
            href={project.caseUrl}
            className="btn-primary"
            id={`${project.id}-case-study`}
            aria-label={`View case study for ${project.title}`}
          >
            View Case Study <ExternalLinkIcon />
          </a>
          <a
            href={project.githubUrl}
            className="btn-secondary"
            target="_blank"
            rel="noopener noreferrer"
            id={`${project.id}-github`}
            aria-label={`View ${project.title} on GitHub`}
          >
            <GitHubIcon /> GitHub
          </a>
        </div>
      </div>
    </article>
  );
}

function Projects() {
  const sectionRef = useScrollReveal();

  return (
    <section id="projects" className="section projects" ref={sectionRef} aria-labelledby="projects-heading">
      <div className="container">
        <div className="projects__header reveal">
          <span className="section-eyebrow">Featured Work</span>
          <h2 id="projects-heading" className="section-title">Projects That Show What I Can Build</h2>
          <p className="section-subtitle">
            Practical full-stack and AI applications where I combined development skills with real-world problem solving.
          </p>
        </div>

        <div className="projects__grid">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} delay={i + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
