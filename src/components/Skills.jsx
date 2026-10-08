import React from 'react';
import { Reveal } from './Reveal';

/**
 * Skills Section component - 3-Column Horizontal Progress Bars layout
 * Matching reference image (media_1791446919908.png)
 */
export function Skills({ skillsData }) {
  return (
    <section id="skills" className="section skills-section" aria-label="Skills & Technologies">
      <div className="container">
        <Reveal direction="up">
          <div className="section-header text-center">
            <span className="section-stamp">SECTION 03</span>
            <h2 className="section-title">Technologies I Master</h2>
            <p className="section-subtitle">Technical skills, frameworks, AI systems & development tooling</p>
          </div>
        </Reveal>

        {/* 3-Column Skills Progress Bars Grid */}
        <div className="skills-progress-grid">
          {skillsData.map((skill, index) => (
            <Reveal key={skill.name} direction="up" delay={100 + index * 60}>
              <div className="skill-progress-card">
                {/* Top Row: Icon + Name on left, Percentage on right */}
                <div className="skill-header-row">
                  <div className="skill-title-group">
                    <span className="skill-icon-badge" aria-hidden="true">
                      {getSkillIcon(skill.iconKey)}
                    </span>
                    <span className="skill-item-name">{skill.name}</span>
                  </div>
                  <span className="skill-percent-label">{skill.level}%</span>
                </div>

                {/* Animated Horizontal Progress Bar */}
                <div className="progress-track" aria-label={`${skill.name} proficiency ${skill.level}%`}>
                  <div
                    className="progress-bar-fill"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * Skill Icon SVGs with brand colors
 */
function getSkillIcon(iconKey) {
  switch (iconKey) {
    case 'html':
      return (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="#e34f26">
          <path d="M1.5 0h21l-1.91 21.48L12 24l-8.59-2.52L1.5 0zm16.94 6.72H6.97l.34 3.82h10.84l-.62 6.94-5.53 1.54-5.53-1.54-.37-4.18H9.9l.19 2.15 1.91.52 1.91-.52.27-2.98H6.26L5.3 2.9h13.78l-.64 3.82z" />
        </svg>
      );
    case 'css':
      return (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="#1572b6">
          <path d="M1.5 0h21l-1.91 21.48L12 24l-8.59-2.52L1.5 0zm16.94 6.72H6.97l.34 3.82h10.84l-.62 6.94-5.53 1.54-5.53-1.54-.37-4.18H9.9l.19 2.15 1.91.52 1.91-.52.27-2.98H6.26L5.3 2.9h13.78l-.64 3.82z" />
        </svg>
      );
    case 'js':
      return (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="#f7df1e">
          <rect width="24" height="24" rx="3" fill="#f7df1e" />
          <path d="M6.3 18.2c.4.7 1.1 1.2 2.2 1.2 1.1 0 1.8-.5 1.8-1.7V11H12v6.7c0 2.2-1.3 3.3-3.4 3.3-1.8 0-3-.9-3.6-2.2l1.3-.8zm7.5 0c.4.7 1.2 1.2 2.3 1.2 1.2 0 1.9-.6 1.9-1.5 0-1-.7-1.4-1.9-1.9l-.6-.3c-1.8-.8-3-1.7-3-3.7 0-2 1.6-3.4 4.1-3.4 1.8 0 3 .6 3.8 2l-1.3.9c-.4-.7-1-1.1-2.2-1.1-1.1 0-1.8.6-1.8 1.4 0 .9.6 1.3 1.8 1.8l.6.3c2.1.9 3.2 1.8 3.2 3.8 0 2.3-1.8 3.6-4.5 3.6-2.1 0-3.5-.8-4.2-2.1l1.3-.8z" fill="#000000" />
        </svg>
      );
    case 'react':
      return (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="#61dafb">
          <circle cx="12" cy="12" r="2.5" />
          <ellipse cx="12" cy="12" rx="10" ry="4.5" fill="none" stroke="#61dafb" strokeWidth="1.5" />
          <ellipse cx="12" cy="12" rx="10" ry="4.5" fill="none" stroke="#61dafb" strokeWidth="1.5" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4.5" fill="none" stroke="#61dafb" strokeWidth="1.5" transform="rotate(120 12 12)" />
        </svg>
      );
    case 'ts':
      return (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="#3178c6">
          <rect width="24" height="24" rx="3" fill="#3178c6" />
          <path d="M12.5 12h2.5v7h1.8v-7h2.5v-1.5h-6.8V12zm-8 4c.3.5.8.9 1.5.9.8 0 1.2-.4 1.2-1 0-.6-.4-.9-1.3-1.2l-.4-.2C4.3 14.1 3.5 13.4 3.5 12c0-1.4 1.1-2.5 2.8-2.5 1.3 0 2.2.4 2.7 1.4l-1.3.8c-.3-.5-.7-.8-1.4-.8-.7 0-1.1.4-1.1.9 0 .5.4.8 1.2 1.1l.4.2c1.4.5 2.2 1.2 2.2 2.6 0 1.6-1.2 2.6-3 2.6-1.5 0-2.6-.6-3.1-1.6l1.3-.8z" fill="#ffffff" />
        </svg>
      );
    case 'python':
      return (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="#3776ab">
          <path d="M11.87 0c-5.5 0-5.16 2.38-5.16 2.38l.01 2.47h5.27v.75H4.59S2 5.25 2 10.78s2.26 5.34 2.26 5.34h1.35v-1.89s-.07-2.26 2.22-2.26h5.36s2.13.04 2.13-2.06V4.46S15.65 0 11.87 0zm-2.81 1.5a.9.9 0 1 1 0 1.8.9.9 0 0 1 0-1.8zm3.03 22.5c5.5 0 5.16-2.38 5.16-2.38l-.01-2.47H12v-.75h7.4s2.59.35 2.59-5.18s-2.26-5.34-2.26-5.34h-1.35v1.89s.07 2.26-2.22 2.26h-5.36s-2.13-.04-2.13 2.06v5.45s-.33 4.46 3.45 4.46zm2.81-1.5a.9.9 0 1 1 0-1.8.9.9 0 0 1 0 1.8z" />
        </svg>
      );
    case 'git':
      return (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="#f05032">
          <path d="M23.54 11.45l-11-11a1.49 1.49 0 0 0-2.1 0L8.06 2.84l3.56 3.56a1.77 1.77 0 0 1 1.71 1.71l3.54 3.54a1.77 1.77 0 1 1-1.06 1.06l-3.08-3.08v6.78a1.77 1.77 0 1 1-1.5 0V8.29l-3.23-3.23-6.9 6.9a1.49 1.49 0 0 0 0 2.1l11 11a1.49 1.49 0 0 0 2.1 0l11-11a1.49 1.49 0 0 0 0-2.11z" />
        </svg>
      );
    case 'vite':
      return (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="#646cff">
          <path d="M22.54 3.75L12.75 22.92a.94.94 0 0 1-1.68 0L1.28 3.75a.94.94 0 0 1 1.1-1.32l9.54 2.8 9.53-2.8a.94.94 0 0 1 1.09 1.32z" fill="#646cff" />
        </svg>
      );
    case 'rag':
    default:
      return (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="var(--accent)" strokeWidth="2">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      );
  }
}
