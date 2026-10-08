import React from 'react';

/**
 * Paper-tag Theme Toggle Switch component.
 * Fixed top center of the viewport.
 * Features inline SVG sun/moon icons with morphing rotate/scale transitions.
 */
export function ThemeToggle({ theme, toggleTheme }) {
  const isDark = theme === 'dark';

  return (
    <div className="theme-toggle-wrapper">
      <button
        type="button"
        className={`theme-toggle-btn ${isDark ? 'is-dark' : 'is-light'}`}
        onClick={toggleTheme}
        aria-pressed={isDark}
        aria-label={`Switch to ${isDark ? 'light paper theme' : 'dark kraft paper theme'}`}
        title={`Current: ${isDark ? 'Dark Kraft Paper' : 'Light Warm Paper'} (Click to toggle)`}
      >
        {/* Paper tag string decoration */}
        <span className="tag-string" aria-hidden="true" />
        <span className="tag-hole" aria-hidden="true" />

        {/* Track content */}
        <span className="toggle-track">
          <span className={`icon-wrapper sun-icon ${!isDark ? 'active' : ''}`} aria-hidden="true">
            {/* Inline SVG Sun */}
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
            </svg>
          </span>

          <span className={`icon-wrapper moon-icon ${isDark ? 'active' : ''}`} aria-hidden="true">
            {/* Inline SVG Moon */}
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          </span>

          {/* Sliding paper knob */}
          <span className="toggle-knob">
            <span className="knob-texture" />
          </span>
        </span>

        {/* Theme Status Label */}
        <span className="toggle-label-text">
          {isDark ? 'KRAFT' : 'CREAM'}
        </span>
      </button>
    </div>
  );
}
