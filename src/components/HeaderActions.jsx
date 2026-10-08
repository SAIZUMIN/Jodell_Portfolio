import React from 'react';

/**
 * Top-Right Header Actions Component.
 * Displays only the clean rectangular framed CONTACT button.
 */
export function HeaderActions() {
  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="header-actions-container">
      {/* Rectangular CONTACT Framed Button */}
      <button
        type="button"
        className="header-contact-btn"
        onClick={scrollToContact}
        aria-label="Scroll to contact section"
      >
        <span className="contact-btn-text">CONTACT</span>
      </button>
    </div>
  );
}
