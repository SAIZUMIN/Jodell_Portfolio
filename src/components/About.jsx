import React from 'react';
import { Reveal } from './Reveal';

/**
 * About Section component - Jodell D. Doños.
 * Displays:
 * - Polaroid photo frame with user's official photo
 * - Biography & professional summary based on resume
 * - Specification table displaying Education, Certifications, Location, and Experience
 */
export function About({ personalInfo }) {
  return (
    <section id="about" className="section about-section" aria-label="About Me">
      <div className="container">
        <Reveal direction="up">
          <div className="section-header">
            <span className="section-stamp">SECTION 01</span>
            <h2 className="section-title">About Me</h2>
            <p className="section-subtitle">Background, education & technical methodology</p>
          </div>
        </Reveal>

        <div className="about-grid">
          {/* Left: Polaroid Photo Frame with User Profile Picture */}
          <Reveal direction="right" delay={150}>
            <div className="polaroid-wrapper">
              <div className="washi-tape tape-top-left" aria-hidden="true" />
              <div className="polaroid-frame">
                <div className="photo-placeholder">
                  <img
                    src="/profile.jpg"
                    alt={`${personalInfo.name} Profile Picture`}
                    className="profile-portrait-img"
                  />
                  <span className="photo-stamp">CTU GRAD 2027</span>
                </div>
                <div className="polaroid-caption">
                  <span className="caption-text">{personalInfo.name}</span>
                  <span className="caption-subtext">Backend & Frontend Developer</span>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right: Bio & Professional Summary */}
          <Reveal direction="left" delay={250}>
            <div className="bio-paper-card">
              <div className="paper-clip clip-top-left" aria-hidden="true" />
              <div className="card-stamp stamp-outline">CANDIDATE DOSSIER</div>

              <h3 className="bio-heading">Building User-Centered Web Apps & AI RAG Systems</h3>
              
              <div className="bio-paragraphs">
                <p>{personalInfo.shortBio}</p>
                <p>
                  Experienced in the full software development lifecycle—from initial requirements analysis and feature implementation 
                  to unit testing, debugging, and collaborative version control delivery using Git.
                </p>
              </div>

              {/* Specification Table */}
              <div className="spec-card">
                <div className="spec-card-header">
                  <span className="spec-title">CANDIDATE SPECIFICATIONS</span>
                </div>
                <div className="spec-grid">
                  <div className="spec-item">
                    <span className="spec-label">Location</span>
                    <span className="spec-value">{personalInfo.location}</span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-label">Education</span>
                    <span className="spec-value">B.S. Information Technology (2023–2027)</span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-label">University</span>
                    <span className="spec-value">Cebu Technological University</span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-label">Certification</span>
                    <span className="spec-value">TESDA NC II Certified</span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-label">Core Focus</span>
                    <span className="spec-value">React, TypeScript, Python, RAG AI</span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-label">Experience</span>
                    <span className="spec-value">IT Developer (April 2025–Present)</span>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
