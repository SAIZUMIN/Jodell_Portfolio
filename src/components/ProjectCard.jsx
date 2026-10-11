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
    case 'python-journey':
      return (
        <svg viewBox="0 0 340 220" width="100%" height="100%" fill="none" aria-label={title}>
          <rect width="340" height="220" fill="#1b2028" />
          {/* Terminal / Code Editor card */}
          <rect x="25" y="24" width="290" height="172" rx="8" fill="#12151b" stroke="rgba(255,255,255,0.12)" />
          {/* Window controls */}
          <circle cx="45" cy="42" r="4.5" fill="#e06c75" />
          <circle cx="60" cy="42" r="4.5" fill="#e5c07b" />
          <circle cx="75" cy="42" r="4.5" fill="#98c379" />
          <text x="100" y="46" fill="#717688" fontSize="10" fontFamily="monospace">journey.py — 31+ Projects</text>
          
          {/* Code preview lines */}
          <text x="45" y="78" fill="#3572A5" fontSize="12" fontFamily="monospace" fontWeight="bold">class</text>
          <text x="88" y="78" fill="#e5c07b" fontSize="12" fontFamily="monospace" fontWeight="bold">PythonJourney</text>
          <text x="180" y="78" fill="#abb2bf" fontSize="12" fontFamily="monospace">:</text>
          
          <text x="65" y="104" fill="#c678dd" fontSize="12" fontFamily="monospace">def</text>
          <text x="95" y="104" fill="#61afef" fontSize="12" fontFamily="monospace">__init__</text>
          <text x="148" y="104" fill="#abb2bf" fontSize="12" fontFamily="monospace">(self, level="OOP"):</text>
          
          <text x="85" y="130" fill="#e59866" fontSize="12" fontFamily="monospace">self.milestones = [1..31]</text>
          <text x="85" y="152" fill="#98c379" fontSize="12" fontFamily="monospace"># Fundamentals → OOP &amp; Files</text>

          {/* Badge */}
          <rect x="195" y="162" width="105" height="22" rx="4" fill="rgba(53, 114, 165, 0.25)" stroke="#3572A5" strokeWidth="1" />
          <text x="204" y="177" fill="#61afef" fontSize="10" fontFamily="monospace" fontWeight="bold">✦ 31 LABS BUILT</text>
        </svg>
      );
    case 'enersave-iot':
      return (
        <svg viewBox="0 0 340 220" width="100%" height="100%" fill="none" aria-label={title}>
          <rect width="340" height="220" fill="#0d1816" />
          
          {/* NodeMCU ESP8266 & Circuit Board visual container */}
          <rect x="20" y="18" width="300" height="184" rx="8" fill="#122420" stroke="rgba(16, 185, 129, 0.35)" />
          
          {/* Header Bar */}
          <rect x="20" y="18" width="300" height="28" rx="8" fill="#16312b" />
          <circle cx="36" cy="32" r="4" fill="#10b981" />
          <text x="48" y="36" fill="#6ee7b7" fontSize="10" fontFamily="monospace" fontWeight="bold">NODEMCU ESP8266 // ENERSAVE</text>
          <text x="210" y="36" fill="#a7f3d0" fontSize="9" fontFamily="monospace">PIR + RELAY</text>

          {/* Microcontroller Pinout / Circuit diagram element */}
          <g transform="translate(32, 56)">
            {/* ESP8266 Chip */}
            <rect x="0" y="0" width="110" height="80" rx="4" fill="#0a1513" stroke="#10b981" strokeWidth="1" />
            <text x="12" y="24" fill="#a7f3d0" fontSize="10" fontFamily="monospace" fontWeight="bold">ESP8266</text>
            <text x="12" y="40" fill="#7ba096" fontSize="8" fontFamily="monospace">D5 → PIR (GPIO14)</text>
            <text x="12" y="52" fill="#7ba096" fontSize="8" fontFamily="monospace">D1 → Relay 1</text>
            <text x="12" y="64" fill="#7ba096" fontSize="8" fontFamily="monospace">D2/D3 → Relay 2/3</text>
            
            {/* Microcontroller Pins */}
            <line x1="-6" y1="20" x2="0" y2="20" stroke="#10b981" strokeWidth="2" />
            <line x1="-6" y1="36" x2="0" y2="36" stroke="#10b981" strokeWidth="2" />
            <line x1="-6" y1="52" x2="0" y2="52" stroke="#10b981" strokeWidth="2" />
            <line x1="-6" y1="68" x2="0" y2="68" stroke="#10b981" strokeWidth="2" />
          </g>

          {/* Cloud Integrations side panel (SinricPro & ThingSpeak) */}
          <g transform="translate(155, 56)">
            {/* SinricPro Box */}
            <rect x="0" y="0" width="150" height="38" rx="4" fill="#0a1513" stroke="rgba(255,255,255,0.08)" />
            <circle cx="16" cy="19" r="6" fill="rgba(59, 130, 246, 0.2)" stroke="#3b82f6" strokeWidth="1" />
            <text x="30" y="16" fill="#93c5fd" fontSize="9" fontFamily="sans-serif" fontWeight="bold">SinricPro Cloud</text>
            <text x="30" y="28" fill="#64748b" fontSize="8" fontFamily="sans-serif">"Hey Google, turn on Light 1"</text>

            {/* ThingSpeak Analytics Box */}
            <rect x="0" y="44" width="150" height="38" rx="4" fill="#0a1513" stroke="rgba(255,255,255,0.08)" />
            <circle cx="16" cy="63" r="6" fill="rgba(16, 185, 129, 0.2)" stroke="#10b981" strokeWidth="1" />
            <text x="30" y="60" fill="#a7f3d0" fontSize="9" fontFamily="sans-serif" fontWeight="bold">ThingSpeak Dashboard</text>
            <text x="30" y="72" fill="#64748b" fontSize="8" fontFamily="sans-serif">4 Fields Telemetry / 20s Log</text>
          </g>

          {/* 3 Relay Status Indicator Badges & PIR Motion status */}
          <g transform="translate(32, 148)">
            <rect x="0" y="0" width="62" height="26" rx="4" fill="#0b1715" stroke="rgba(16, 185, 129, 0.2)" />
            <circle cx="10" cy="13" r="3" fill="#10b981" />
            <text x="18" y="17" fill="#ffffff" fontSize="9" fontFamily="monospace">Light 1</text>

            <rect x="70" y="0" width="62" height="26" rx="4" fill="#0b1715" stroke="rgba(16, 185, 129, 0.2)" />
            <circle cx="80" cy="13" r="3" fill="#10b981" />
            <text x="88" y="17" fill="#ffffff" fontSize="9" fontFamily="monospace">Light 2</text>

            <rect x="140" y="0" width="62" height="26" rx="4" fill="#0b1715" stroke="rgba(16, 185, 129, 0.2)" />
            <circle cx="150" cy="13" r="3" fill="#10b981" />
            <text x="158" y="17" fill="#ffffff" fontSize="9" fontFamily="monospace">Light 3</text>

            {/* Auto-off / PIR Motion status */}
            <rect x="210" y="0" width="65" height="26" rx="4" fill="#0b1715" stroke="rgba(229, 152, 102, 0.3)" />
            <text x="218" y="12" fill="#e59866" fontSize="7.5" fontFamily="monospace">MOTION: ACTIVE</text>
            <text x="218" y="21" fill="#7ba096" fontSize="7" fontFamily="monospace">10s Auto-Off</text>
          </g>
        </svg>
      );
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
