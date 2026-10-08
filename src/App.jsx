import React, { useState } from 'react';
import { useTheme } from './useTheme';
import { ThemeToggle } from './components/ThemeToggle';
import { HeaderActions } from './components/HeaderActions';
import { Sidebar } from './components/Sidebar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { ScrollProgress } from './components/Reveal';

import { personalInfo, navLinks, projectsData, skillsData, contactInfo } from './data';
import './App.css';

/**
 * Main Application Component.
 * Orchestrates theme state, active section navigation, paper background lines,
 * top-right header actions, and component mounting.
 */
export default function App() {
  const { theme, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState('hero');

  return (
    <div className="portfolio-app-root">
      {/* Scroll Progress Bar at very top */}
      <ScrollProgress />

      {/* SVG Grain/Paper Grid Lines */}
      <div className="paper-grain-overlay" aria-hidden="true" />
      <div className="paper-grid-lines" aria-hidden="true" />

      {/* Fixed Top Center Theme Toggle */}
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />

      {/* Fixed Top Right Header Actions (Social Buttons + Contact Button) */}
      <HeaderActions />

      {/* Fixed Left Navigation Sidebar */}
      <Sidebar
        navLinks={navLinks}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      {/* Main Content Layout */}
      <main className="main-content-area">
        <Hero personalInfo={personalInfo} />
        <About personalInfo={personalInfo} />
        <Projects projects={projectsData} />
        <Skills skillsData={skillsData} />
        <Contact contactInfo={contactInfo} personalInfo={personalInfo} />
      </main>
    </div>
  );
}
