import React from 'react';

/**
 * Resume Modal Component - Formatted Resume document for Jodell D. Doños
 */
export function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="resume-modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-label="Resume Document Modal">
      <div className="resume-modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Top Actions Bar */}
        <div className="resume-modal-header">
          <span className="resume-modal-title">OFFICIAL RESUME DOCUMENT</span>
          <div className="modal-header-actions">
            <button type="button" className="btn-resume-action" onClick={handlePrint}>
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="6 9 6 2 18 2 18 9" />
                <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
                <rect x="6" y="14" width="12" height="8" />
              </svg>
              <span>Print / Save PDF</span>
            </button>
            <button type="button" className="btn-modal-close" onClick={onClose} aria-label="Close modal">
              ✕
            </button>
          </div>
        </div>

        {/* Printable Resume Paper Sheet */}
        <div className="printable-resume-sheet">
          {/* Header */}
          <div className="resume-document-header">
            <h1 className="resume-person-name">JODELL D. DOÑOS</h1>
            <h2 className="resume-person-role">Backend Developer</h2>
            <p className="resume-contact-bar">
              Cebu City, Philippines &nbsp;|&nbsp; +63 977 387 9813 &nbsp;|&nbsp;{' '}
              <a href="mailto:jodell272@gmail.com">jodell272@gmail.com</a> &nbsp;|&nbsp;{' '}
              GitHub:{' '}
              <a href="https://github.com/SAIZUMIN/" target="_blank" rel="noreferrer">
                github.com/SAIZUMIN/
              </a>
            </p>
          </div>

          <hr className="resume-divider" />

          {/* Professional Summary */}
          <div className="resume-section-block">
            <h3 className="resume-section-heading">PROFESSIONAL SUMMARY</h3>
            <p className="resume-body-text">
              Information Technology student (expected graduation 2027) with hands-on experience building full-stack
              web applications and IoT-based automation systems. Proficient in React, TypeScript, Python, and embedded
              systems development. Demonstrated ability to deliver end-to-end solutions—from hardware integration and
              cloud API configuration to responsive front-end interfaces. Seeking junior Backend or full stack developer
              roles where clean architecture and user-centered design drive impact.
            </p>
          </div>

          {/* Education */}
          <div className="resume-section-block">
            <h3 className="resume-section-heading">EDUCATION</h3>
            <div className="resume-item-row">
              <div>
                <strong>Bachelor of Science in Information Technology</strong>
                <div className="resume-sub-text">Cebu Technological University – Argao Campus, Cebu City, Philippines</div>
                <div className="resume-sub-text">
                  <em>Relevant Coursework:</em> Web Development, Object-Oriented Programming, Database Management, Computer Networking, Data Analytics
                </div>
              </div>
              <div className="resume-date-badge">2023 – 2027 (Expected)</div>
            </div>
          </div>

          {/* Professional Experience */}
          <div className="resume-section-block">
            <h3 className="resume-section-heading">PROFESSIONAL EXPERIENCE</h3>
            <div className="resume-item-row">
              <div>
                <strong>IT Developer — Project-Based Experience</strong>
              </div>
              <div className="resume-date-badge">April 2025 – Present</div>
            </div>
            <ul className="resume-bullet-list">
              <li>
                Developed and delivered responsive web applications using <strong>React, TypeScript, JavaScript, HTML, and Vite</strong>, producing clean, mobile-friendly interfaces that improved usability and accessibility.
              </li>
              <li>
                Implemented new software features, performed thorough testing and debugging against system requirements, and iteratively refined functionality to increase reliability and reduce defects.
              </li>
              <li>
                Collaborated effectively with team members using <strong>Git</strong> for version control and applied networking and programming skills to complete project deliverables on schedule.
              </li>
            </ul>
          </div>

          {/* Projects */}
          <div className="resume-section-block">
            <h3 className="resume-section-heading">PROJECTS</h3>
            
            {/* EnerSave */}
            <div className="resume-item-row">
              <div>
                <strong>EnerSave: IoT Smart Energy Management System</strong> — ESP8266, SinricPro, ThingSpeak
              </div>
              <div className="resume-date-badge">2025</div>
            </div>
            <p className="resume-body-text" style={{ margin: '2px 0 8px 0' }}>
              Motion-activated smart lighting with voice control and live analytics.
            </p>

            {/* Python Projects Portfolio */}
            <div className="resume-item-row">
              <div>
                <strong>Python Projects Portfolio:</strong> Python, OOP, File Handling
              </div>
              <div className="resume-date-badge">2025–Present</div>
            </div>
            <p className="resume-body-text" style={{ margin: '2px 0 8px 0' }}>
              applications covering banking, inventory, and data management; applied OOP, file I/O, and error handling.{' '}
              <a href="https://github.com/SAIZUMIN/python-projects" target="_blank" rel="noreferrer">
                github.com/SAIZUMIN/python-projects
              </a>
            </p>

            {/* AI RAG-Powered Knowledge System */}
            <div className="resume-item-row">
              <div>
                <strong>AI RAG-Powered Knowledge System:</strong> React, TypeScript, Python, Vite
              </div>
              <div className="resume-date-badge">2025–Present</div>
            </div>
            <p className="resume-body-text" style={{ margin: '2px 0 0 0' }}>
              RAG system with React front end for document retrieval and context-aware AI responses.
            </p>
          </div>

          {/* Certification */}
          <div className="resume-section-block">
            <h3 className="resume-section-heading">CERTIFICATION</h3>
            <p className="resume-body-text">
              <strong>National Certificate II (NC II)</strong> — TESDA (Technical Education and Skills Development Authority)
            </p>
          </div>

          {/* Technical Skills */}
          <div className="resume-section-block">
            <h3 className="resume-section-heading">TECHNICAL SKILLS</h3>
            <ul className="resume-skills-list">
              <li><strong>Frontend:</strong> React, TypeScript, JavaScript, HTML5, CSS3, Vite</li>
              <li><strong>Backend & Scripting:</strong> Python, Node.js (Basic), REST APIs</li>
              <li><strong>IoT & Embedded:</strong> ESP8266 (NodeMCU), Arduino IDE, PIR sensor integration, relay control</li>
              <li><strong>Cloud & APIs:</strong> SinricPro, ThingSpeak, WebSocket communication</li>
              <li><strong>Data & AI:</strong> Retrieval-Augmented Generation (RAG), data processing, analytics</li>
              <li><strong>Tools & Practices:</strong> Git, version control, software testing, debugging, Agile collaboration</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
