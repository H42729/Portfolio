import React, { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Contact.css';

function MailIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
      <polyline points="22,6 12,13 2,6"/>
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect x="2" y="9" width="4" height="12"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  );
}

function GitHubContactIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
  );
}

function SendIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="22" y1="2" x2="11" y2="13"/>
      <polygon points="22 2 15 22 11 13 2 9 22 2"/>
    </svg>
  );
}

const contactLinks = [
  {
    id: 'contact-email',
    icon: <MailIcon />,
    label: 'Email',
    value: 'vimalkumar.s1245@gmail.com',
    href: 'mailto:vimalkumar.s1245@gmail.com',
  },
  {
    id: 'contact-linkedin',
    icon: <LinkedInIcon />,
    label: 'LinkedIn',
    value: 'linkedin.com/in/vimal-kumar-s-2842b9291',
    href: 'https://www.linkedin.com/in/vimal-kumar-s-2842b9291/',
  },
  {
    id: 'contact-github',
    icon: <GitHubContactIcon />,
    label: 'GitHub',
    value: 'github.com/vimalkumar',
    href: 'https://github.com/vimalkumar',
  },
];

function Contact() {
  const sectionRef = useScrollReveal();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    // Simulate send
    await new Promise((r) => setTimeout(r, 1200));
    setStatus('sent');
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setStatus('idle'), 4000);
  };

  return (
    <section id="contact" className="section contact" ref={sectionRef} aria-labelledby="contact-heading">
      <div className="container">
        <div className="contact__header reveal">
          <span className="section-eyebrow">Get in Touch</span>
          <h2 id="contact-heading" className="section-title">Let's Build Something Useful.</h2>
          <p className="section-subtitle">
            I'm open to opportunities where I can learn, contribute, and build meaningful software.
          </p>
        </div>

        <div className="contact__layout">
          {/* Left — Contact Links */}
          <div className="contact__links-col reveal reveal-delay-1">
            <p className="contact__intro">
              Whether you're looking for a developer for your team, have a project in mind, or just want to connect — I'd love to hear from you.
            </p>

            <div className="contact__links" role="list" aria-label="Contact options">
              {contactLinks.map((link) => (
                <a
                  key={link.id}
                  id={link.id}
                  href={link.href}
                  target={link.href.startsWith('mailto') ? undefined : '_blank'}
                  rel={link.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                  className="contact__link-item"
                  role="listitem"
                  aria-label={`${link.label}: ${link.value}`}
                >
                  <div className="contact__link-icon" aria-hidden="true">{link.icon}</div>
                  <div className="contact__link-info">
                    <span className="contact__link-label">{link.label}</span>
                    <span className="contact__link-value">{link.value}</span>
                  </div>
                  <svg className="contact__link-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="5" y1="12" x2="19" y2="12"/>
                    <polyline points="12 5 19 12 12 19"/>
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Right — Form */}
          <div className="contact__form-col reveal reveal-delay-2">
            <form
              className="contact__form card"
              onSubmit={handleSubmit}
              noValidate
              aria-label="Contact form"
            >
              <h3 className="contact__form-title">Send a Message</h3>

              <div className="contact__field">
                <label htmlFor="contact-name" className="contact__label">Name</label>
                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  className="contact__input"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  autoComplete="name"
                />
              </div>

              <div className="contact__field">
                <label htmlFor="contact-email-input" className="contact__label">Email</label>
                <input
                  type="email"
                  id="contact-email-input"
                  name="email"
                  className="contact__input"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  autoComplete="email"
                />
              </div>

              <div className="contact__field">
                <label htmlFor="contact-message" className="contact__label">Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  className="contact__input contact__textarea"
                  placeholder="Tell me about the opportunity or project..."
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button
                type="submit"
                className="btn-primary contact__submit"
                id="contact-submit-btn"
                disabled={status === 'sending'}
                aria-live="polite"
                aria-label={status === 'sending' ? 'Sending message...' : 'Send message'}
              >
                {status === 'sending' ? (
                  <span className="contact__spinner" aria-hidden="true" />
                ) : (
                  <SendIcon />
                )}
                {status === 'sending' ? 'Sending...' : status === 'sent' ? 'Message Sent!' : 'Send Message'}
              </button>

              {status === 'sent' && (
                <p className="contact__success" role="status">
                  ✓ Thanks! I'll get back to you soon.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
