import React from 'react';
import { Reveal } from './Reveal';

/**
 * Hero Section component - Open Brownish Kraft Folder Aesthetic.
 * Features:
 * - Open Manila/Kraft Paper Folder outer sleeve with top folder tab
 * - White/Cream inner paper document peeking inside the opened folder
 * - Animated paper unfolding title & hand-drawn SVG underline
 * - Action button for "View Resume" opening official resume PDF in a new tab
 */
export function Hero({ personalInfo }) {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="section hero-section" aria-label="Hero Introduction">
      <div className="container">
        <Reveal direction="up" delay={100}>
          {/* Open Brownish Kraft Folder Outer Container */}
          <div className="kraft-open-folder">
            {/* Top Folder Tab */}
            <div className="folder-top-tab">
              <span className="tab-folder-label">DOSSIER // VOL. 01 — CONFIDENTIAL</span>
              <span className="folder-tab-hole" />
            </div>

            {/* Top Washi Tape and Paperclip Details */}
            <div className="washi-tape tape-top-center" aria-hidden="true" />
            <div className="paper-clip clip-top-right" aria-hidden="true" />

            {/* Inner Opened Paper Document */}
            <div className="folder-inner-document">
              {/* Header Row: Stamp & File ID */}
              <div className="hero-header-row">
                <span className="stamp-badge stamp-terracotta">
                  ★ STRICTLY CONFIDENTIAL — EST. 2026
                </span>
                <span className="hero-date-tag">FILE REF: JD-2026-HQ</span>
              </div>

              {/* Main Greeting & Name with animated paper unfolding effect */}
              <div className="hero-title-container">
                <p className="hero-subtitle-handwriting">Hello there, my name is</p>
                <h1 className="hero-name-unfold">
                  <span className="unfold-text">{personalInfo.name}</span>
                  <svg className="handdrawn-underline" viewBox="0 0 300 20" preserveAspectRatio="none" aria-hidden="true">
                    <path d="M5,15 C80,5 220,18 295,10 C220,20 80,12 5,15 Z" fill="currentColor" />
                  </svg>
                </h1>
              </div>

              {/* Profession / Role */}
              <div className="hero-role-wrapper">
                <span className="role-label">Profession / Role:</span>
                <h2 className="hero-role-title">{personalInfo.role}</h2>
              </div>

              {/* Short Tagline / Intro */}
              <p className="hero-tagline-text">
                {personalInfo.tagline}
              </p>

              {/* Call To Action Buttons */}
              <div className="hero-cta-group">
                <a
                  href={personalInfo.resumeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary"
                  title="Open official Resume PDF in a new tab"
                >
                  <span>View Resume</span>
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </a>

                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => scrollTo('contact')}
                >
                  <span>Get in Touch</span>
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </button>
              </div>

              {/* Pinned Note inside folder */}
              <div className="pinned-paper-note">
                <div className="pin-head" aria-hidden="true" />
                <div className="note-content">
                  <span className="note-status-dot" aria-hidden="true" />
                  <span className="note-text"><strong>Status:</strong> {personalInfo.availability}</span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
