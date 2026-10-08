import React, { useState } from 'react';
import { Reveal } from './Reveal';

/**
 * Contact Section & Footer component.
 * Features:
 * - Centered compact paper card displaying direct email, phone, location, and social links
 * - Copy email button with interactive feedback
 * - External links opening in new tabs (target="_blank" rel="noreferrer")
 * - Clean footer bar with Back to Top button
 */
export function Contact({ contactInfo, personalInfo }) {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="contact" className="section contact-section" aria-label="Contact & Get in Touch">
      <div className="container">
        <Reveal direction="up">
          <div className="section-header text-center">
            <span className="section-stamp">SECTION 04</span>
            <h2 className="section-title">Get In Touch</h2>
            <p className="section-subtitle">Feel free to reach out for inquiries, junior developer roles, or project collaborations.</p>
          </div>
        </Reveal>

        {/* Centered Compact Contact Paper Card */}
        <div className="contact-centered-wrapper">
          <Reveal direction="up" delay={150}>
            <div className="contact-info-paper compact-contact-card">
              <div className="washi-tape tape-top-center" aria-hidden="true" />
              <div className="stamp-badge stamp-terracotta">POSTAGE PAID</div>

              <h3 className="contact-heading">Let's connect & build together.</h3>
              <p className="contact-note">{contactInfo.note}</p>

              {/* Direct Details Grid */}
              <div className="contact-details-grid">
                <div className="contact-detail-item">
                  <span className="detail-label">Location:</span>
                  <span className="detail-value">{contactInfo.location}</span>
                </div>

                {contactInfo.phone && (
                  <div className="contact-detail-item">
                    <span className="detail-label">Phone:</span>
                    <a href={`tel:${contactInfo.phone}`} className="detail-value detail-link">
                      {contactInfo.phone}
                    </a>
                  </div>
                )}
              </div>

              {/* Copy Email Box */}
              <div className="email-copy-box">
                <span className="email-label">Direct Email:</span>
                <div className="email-row">
                  <a
                    href={`mailto:${contactInfo.email}`}
                    target="_blank"
                    rel="noreferrer"
                    className="email-address"
                  >
                    {contactInfo.email}
                  </a>
                  <button
                    type="button"
                    className="copy-btn"
                    onClick={handleCopyEmail}
                    aria-label="Copy email address to clipboard"
                  >
                    {copiedEmail ? (
                      <span className="copy-success">✓ Copied!</span>
                    ) : (
                      <>
                        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2">
                          <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                        </svg>
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Social Channels List (Opens in new tab) */}
              <div className="socials-container">
                <span className="socials-title">Connect on Social Channels:</span>
                <div className="socials-list">
                  {contactInfo.socials.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      className="social-stamp-btn"
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Visit ${social.name} profile`}
                    >
                      <span className="social-icon" aria-hidden="true">
                        {getSocialIcon(social.icon)}
                      </span>
                      <span className="social-name">{social.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Footer Bar */}
        <footer className="portfolio-footer">
          <div className="footer-line" />
          <div className="footer-content">
            <div className="footer-left">
              <p className="footer-copyright">
                © {new Date().getFullYear()} <strong>{personalInfo.name}</strong>. Built with React & Vite.
              </p>
              <p className="footer-tagline">Crafted with paper textures & custom CSS variables.</p>
            </div>

            <button
              type="button"
              className="back-to-top-btn"
              onClick={scrollToTop}
              aria-label="Back to top of page"
            >
              <span>Back to top</span>
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M18 15l-6-6-6 6" />
              </svg>
            </button>
          </div>
        </footer>
      </div>
    </section>
  );
}

function getSocialIcon(iconName) {
  switch (iconName) {
    case 'github':
      return (
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
        </svg>
      );
    case 'facebook':
      return (
        <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
          <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.99 3.66 9.12 8.44 9.88v-6.99H7.9v-2.89h2.54V9.79c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.89h-2.34v6.99C18.34 21.12 22 16.99 22 12z" />
        </svg>
      );
    case 'gmail':
    case 'mail':
      return (
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      );
    case 'linkedin':
      return (
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 8v8M8 12h8" />
        </svg>
      );
  }
}
