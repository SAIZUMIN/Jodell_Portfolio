import React, { useState, useEffect } from 'react';

/**
 * Navigation Component - Responsive Drawer for Mobile + Standalone Square Buttons for Desktop.
 * Features:
 * - Upper-left fixed Hamburger Toggle on smaller devices (≤ 920px)
 * - Slide-out left paper drawer menu displaying full section labels & icons on mobile
 * - Desktop standalone rounded square cards on larger viewports
 */
export function Sidebar({ navLinks, activeSection, setActiveSection }) {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  // Scroll-spy observer across section IDs
  useEffect(() => {
    const sectionIds = navLinks.map((link) => link.id);
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0.1
    };

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      sectionIds.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, [navLinks, setActiveSection]);

  // Handle smooth scroll to target section
  const handleNavClick = (id) => {
    setActiveSection(id);
    setIsMobileOpen(false);

    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      {/* Upper Left Fixed Mobile Hamburger Toggle Button */}
      <button
        type="button"
        className={`mobile-nav-toggle ${isMobileOpen ? 'open' : ''}`}
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        aria-label={isMobileOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
        aria-expanded={isMobileOpen}
      >
        <span className="hamburger-line" />
        <span className="hamburger-line" />
        <span className="hamburger-line" />
      </button>

      {/* Backdrop overlay for mobile menu */}
      {isMobileOpen && (
        <div
          className="mobile-nav-backdrop"
          onClick={() => setIsMobileOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Navigation Bar (Desktop fixed squares / Mobile left drawer) */}
      <nav
        className={`sidebar-nav mini-sidebar-nav ${isMobileOpen ? 'mobile-open' : ''}`}
        aria-label="Main Portfolio Navigation"
      >
        {/* Mobile Menu Drawer Header */}
        <div className="mobile-drawer-header">
          <span className="drawer-stamp">NAVIGATION</span>
          <h3 className="drawer-title">PORTFOLIO MENU</h3>
        </div>

        <ul className="mini-square-nav-list">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;

            return (
              <li key={link.id} className={`square-nav-item ${isActive ? 'active' : ''}`}>
                <button
                  type="button"
                  className="square-nav-btn"
                  onClick={() => handleNavClick(link.id)}
                  aria-label={link.label}
                  aria-current={isActive ? 'page' : undefined}
                >
                  <span className="square-nav-icon" aria-hidden="true">
                    {getNavIcon(link.icon)}
                  </span>
                  
                  {/* Text Label visible in mobile drawer */}
                  <span className="mobile-nav-label-text">{link.label}</span>

                  {/* Desktop Tooltip Tag */}
                  <span className="square-nav-tooltip" role="tooltip">
                    {link.label}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}

/**
 * Solid / Clean Icons matching reference UI
 */
function getNavIcon(icon) {
  switch (icon) {
    case 'home':
      return (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
          <path d="M12 3L2 12h3v8h14v-8h3L12 3zm1 15h-2v-4h2v4z" />
        </svg>
      );
    case 'user':
      return (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
        </svg>
      );
    case 'grid':
      return (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
          <path d="M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z" />
        </svg>
      );
    case 'cpu':
      return (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
        </svg>
      );
    case 'mail':
    default:
      return (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
        </svg>
      );
  }
}
