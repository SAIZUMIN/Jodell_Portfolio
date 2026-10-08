import React from 'react';

/**
 * ProjectCard component - Stacking Paper Sheet / Index Card.
 * Features:
 * - Alternating fasteners: Push Pin (SVG with 3D drop shadow) or 2 Corner Washi Tapes
 * - Stamp label ("PROJECT 01"), date, serif title with SVG hand-drawn underline
 * - Printed photo frame with white border, tape details, and custom artwork
 * - "VIEW PROJECT ↗" link with animated underline
 * - CSS variables for theme adaptation & scroll-driven stacking
 */
export function ProjectCard({ project, index, isDimmed, isReducedMotion }) {
  const pinType = project.pinType || (index % 2 === 0 ? 'pin' : 'tape');
  const rotation = project.rotation || (index % 2 === 0 ? '-1.5deg' : '1.5deg');
  const pinColor = project.pinColor || 'var(--accent)';

  // Calculate sticky stacking top offset (top: ~12vh + index * 24px)
  const stickyTop = `calc(10vh + ${index * 24}px)`;

  return (
    <article
      id={`project-card-${project.id}`}
      className={`project-paper-card ${isDimmed ? 'card-dimmed' : ''}`}
      style={{
        top: stickyTop,
        zIndex: index + 1,
        '--card-initial-rotate': rotation,
        transform: isReducedMotion
          ? `rotate(${rotation})`
          : isDimmed
          ? `scale(0.95) rotate(${rotation})`
          : `rotate(${rotation})`
      }}
      aria-labelledby={`project-title-${project.id}`}
    >
      {/* Fastener: Push Pin */}
      {pinType === 'pin' && (
        <div className="card-push-pin-wrapper" aria-hidden="true">
          <svg viewBox="0 0 32 38" width="30" height="36" className="push-pin-svg">
            {/* 3D Pin Shadow */}
            <ellipse cx="16" cy="35" rx="10" ry="3" fill="rgba(0,0,0,0.25)" />
            {/* Needle */}
            <path d="M16 22L16 35" stroke="#777" strokeWidth="2.5" strokeLinecap="round" />
            {/* Pin Body */}
            <circle cx="16" cy="12" r="10" fill={pinColor} />
            <circle cx="14" cy="9" r="3" fill="rgba(255,255,255,0.4)" />
            <path d="M8 12C8 16.5 12 21 16 22C20 21 24 16.5 24 12" fill={pinColor} />
            {/* Top Cap */}
            <ellipse cx="16" cy="7" rx="8" ry="3" fill="rgba(255,255,255,0.3)" />
          </svg>
        </div>
      )}

      {/* Fastener: Corner Washi Tapes */}
      {pinType === 'tape' && (
        <>
          <div className="corner-tape corner-tape-left" aria-hidden="true" />
          <div className="corner-tape corner-tape-right" aria-hidden="true" />
        </>
      )}

      <div className="card-inner-grid">
        {/* Left Column: Project Details */}
        <div className="card-info-col">
          {/* Header Row: Stamp Label & Date */}
          <div className="card-meta-row">
            <span className="project-stamp-label">
              ✦ {project.projectNumber || `PROJECT 0${index + 1}`}
            </span>
            <span className="project-date-stamp">
              ● {project.date || project.year}
            </span>
          </div>

          {/* Large Serif Title with Hand-drawn Underline */}
          <div className="project-title-wrapper">
            <h3 id={`project-title-${project.id}`} className="card-project-title">
              {project.title}
            </h3>
            <svg className="title-hand-underline" viewBox="0 0 260 16" preserveAspectRatio="none" aria-hidden="true">
              <path d="M3,10 C70,3 190,14 255,7 C190,15 70,8 3,10 Z" fill="var(--accent)" />
            </svg>
          </div>

          {/* One-line Short Description */}
          <p className="card-project-description">
            {project.shortDescription}
          </p>

          {/* Tool Tags styled like small paper labels */}
          <div className="card-tools-list" aria-label="Tools and technologies used">
            {project.tools.map((tool, idx) => (
              <span key={idx} className="tool-paper-chip">
                {tool}
              </span>
            ))}
          </div>

          {/* Action Links */}
          <div className="card-action-row">
            {project.link && (
              <a
                href={project.link}
                className="view-project-link"
                target="_blank"
                rel="noreferrer"
                aria-label={`View project ${project.title}`}
              >
                <span>VIEW PROJECT</span>
                <span className="arrow-icon">↗</span>
              </a>
            )}

            {project.githubLink && (
              <a
                href={project.githubLink}
                className="source-code-link"
                target="_blank"
                rel="noreferrer"
                aria-label={`Source code for ${project.title}`}
              >
                <span>Source Code</span>
              </a>
            )}
          </div>
        </div>

        {/* Right Column: Printed Photo Frame */}
        <div className="card-photo-col">
          <div className="printed-photo-frame">
            <div className="photo-tape-top" aria-hidden="true" />
            <div className="photo-container">
              <ProjectArtwork imageType={project.imageType} title={project.title} />
            </div>
            <div className="photo-caption-strip">
              <span>FIG 0{index + 1} — {project.category}</span>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

/**
 * Render custom responsive vector artwork for each project photo frame
 */
function ProjectArtwork({ imageType, title }) {
  switch (imageType) {
    case 'wayline':
      return (
        <svg viewBox="0 0 340 220" width="100%" height="100%" fill="none" aria-label={title}>
          <rect width="340" height="220" fill="#2b3a4a" />
          <path d="M30 180 C 100 120, 160 200, 240 80 C 280 20, 310 90, 320 40" stroke="var(--accent)" strokeWidth="4" fill="none" strokeDasharray="6 4" />
          <circle cx="100" cy="138" r="8" fill="#e59866" />
          <circle cx="240" cy="80" r="10" fill="#ffffff" stroke="var(--accent)" strokeWidth="3" />
          <rect x="180" y="130" width="120" height="60" rx="6" fill="#1c2633" stroke="rgba(255,255,255,0.15)" />
          <text x="195" y="165" fill="#f0e9dc" fontSize="12" fontFamily="monospace" fontWeight="bold">ROUTE 04 — BUS</text>
        </svg>
      );
    case 'tandem':
      return (
        <svg viewBox="0 0 340 220" width="100%" height="100%" fill="none" aria-label={title}>
          <rect width="340" height="220" fill="#1a1c1e" />
          <rect x="70" y="20" width="200" height="180" rx="12" fill="#26292d" stroke="rgba(255,255,255,0.1)" />
          <text x="95" y="65" fill="#888a95" fontSize="11" fontFamily="sans-serif">Total Split This Month</text>
          <text x="95" y="95" fill="#f3f3f6" fontSize="22" fontFamily="sans-serif" fontWeight="bold">$560.42</text>
          <rect x="95" y="120" width="150" height="40" rx="6" fill="var(--accent)" />
          <text x="135" y="145" fill="#ffffff" fontSize="12" fontWeight="bold">Split Bill</text>
        </svg>
      );
    case 'zenith':
      return (
        <svg viewBox="0 0 340 220" width="100%" height="100%" fill="none" aria-label={title}>
          <rect width="340" height="220" fill="#f0e9dc" />
          <rect x="40" y="30" width="120" height="70" rx="6" fill="#ffffff" stroke="rgba(0,0,0,0.1)" />
          <rect x="180" y="30" width="120" height="70" rx="6" fill="var(--accent)" />
          <rect x="40" y="120" width="260" height="70" rx="6" fill="#1c1d21" />
          <circle cx="70" cy="155" r="12" fill="#e59866" />
          <line x1="95" y1="155" x2="260" y2="155" stroke="rgba(255,255,255,0.2)" strokeWidth="4" strokeLinecap="round" />
        </svg>
      );
    case 'chronicle':
      return (
        <svg viewBox="0 0 340 220" width="100%" height="100%" fill="none" aria-label={title}>
          <rect width="340" height="220" fill="#25221d" />
          <line x1="40" y1="40" x2="300" y2="40" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
          <line x1="40" y1="70" x2="300" y2="70" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
          <line x1="40" y1="100" x2="300" y2="100" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
          <line x1="40" y1="130" x2="300" y2="130" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
          <text x="45" y="62" fill="#e59866" fontSize="16" fontFamily="serif" italic="true">October 8, 2026 — Reflections</text>
          <text x="45" y="92" fill="#b3a594" fontSize="12" fontFamily="monospace">Writing on fountain pen grain paper...</text>
        </svg>
      );
    case 'spectrum':
    default:
      return (
        <svg viewBox="0 0 340 220" width="100%" height="100%" fill="none" aria-label={title}>
          <rect width="340" height="220" fill="#141210" />
          <path d="M20 110 Q 80 40, 140 110 T 260 110 T 320 110" stroke="var(--accent)" strokeWidth="3" fill="none" />
          <circle cx="140" cy="110" r="30" fill="rgba(200,90,50,0.2)" stroke="var(--accent)" strokeWidth="2" />
          <circle cx="200" cy="90" r="20" fill="rgba(229,152,102,0.15)" stroke="#e59866" strokeWidth="1.5" />
        </svg>
      );
  }
}
