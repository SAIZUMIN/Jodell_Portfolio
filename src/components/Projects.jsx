import React, { useState, useEffect } from 'react';
import { ProjectCard } from './ProjectCard';
import { Reveal } from './Reveal';

/**
 * Projects Section - Stacking Paper Cards.
 * Features:
 * - position: sticky (top: ~10vh + index * 24px) stacking paper cards layout
 * - Scroll-driven card dimming and scale-down when overlapped by subsequent cards
 * - Respects prefers-reduced-motion media query
 * - Category filter tabs
 */
export function Projects({ projects }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [dimmedCards, setDimmedCards] = useState({});
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  // Check prefers-reduced-motion
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsReducedMotion(mediaQuery.matches);

    const handleMotionChange = (e) => setIsReducedMotion(e.matches);
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleMotionChange);
    }
    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener('change', handleMotionChange);
      }
    };
  }, []);

  // Extract unique categories
  const categories = ['All', ...new Set(projects.map((p) => p.category))];

  // Filter projects by active category tab
  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === selectedCategory);

  // Scroll listener to calculate card overlaps for dimming & scale-down
  useEffect(() => {
    if (isReducedMotion) return;

    const handleScroll = () => {
      const newDimmed = {};

      filteredProjects.forEach((proj, idx) => {
        const currentEl = document.getElementById(`project-card-${proj.id}`);
        const nextProj = filteredProjects[idx + 1];

        if (currentEl && nextProj) {
          const nextEl = document.getElementById(`project-card-${nextProj.id}`);
          if (nextEl) {
            const currentRect = currentEl.getBoundingClientRect();
            const nextRect = nextEl.getBoundingClientRect();

            // If the next card has scrolled up over the top 60% of the current card
            if (nextRect.top <= currentRect.top + currentRect.height * 0.6) {
              newDimmed[proj.id] = true;
            }
          }
        }
      });

      setDimmedCards(newDimmed);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, [filteredProjects, isReducedMotion]);

  return (
    <section id="projects" className="section projects-section" aria-label="Projects Showcase">
      <div className="container">
        <Reveal direction="up">
          <div className="section-header">
            <span className="section-stamp">SECTION 02</span>
            <h2 className="section-title">Featured Projects</h2>
            <p className="section-subtitle">
              Selected web applications, design systems & experiments presented as stacking paper sheets
            </p>
          </div>
        </Reveal>

        {/* Category Filter Tabs */}
        <Reveal direction="up" delay={100}>
          <div className="filter-tabs-wrapper" role="tablist" aria-label="Project Category Filter">
            {categories.map((category) => {
              const isActive = selectedCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  className={`filter-tab-btn ${isActive ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(category)}
                >
                  <span className="tab-text">{category}</span>
                  <span className="tab-count">
                    {category === 'All'
                      ? projects.length
                      : projects.filter((p) => p.category === category).length}
                  </span>
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Stacking Sticky Paper Cards Container */}
        <div className="stacking-projects-container">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              isDimmed={!!dimmedCards[project.id]}
              isReducedMotion={isReducedMotion}
            />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="empty-projects-state">
            <p>No projects found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
}
