import React, { useState, useEffect, useRef } from 'react';

/**
 * Reusable reveal animation component using IntersectionObserver.
 * Triggers fade & slide animation when scrolled into view.
 * Respects prefers-reduced-motion media query.
 */
export function Reveal({
  children,
  className = '',
  delay = 0,
  direction = 'up', // 'up', 'down', 'left', 'right', 'none'
  threshold = 0.15,
  once = true
}) {
  const [isVisible, setIsVisible] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    // Check reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleMotionChange = (e) => setPrefersReducedMotion(e.matches);
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleMotionChange);
    }

    // IntersectionObserver
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once && ref.current) {
            observer.unobserve(ref.current);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin: '0px 0px -40px 0px' }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener('change', handleMotionChange);
      }
    };
  }, [threshold, once]);

  // Direct render if reduced motion is preferred
  if (prefersReducedMotion) {
    return <div className={`reveal-item visible ${className}`}>{children}</div>;
  }

  const directionClass = direction !== 'none' ? `reveal-${direction}` : '';

  return (
    <div
      ref={ref}
      className={`reveal-item ${directionClass} ${isVisible ? 'visible' : ''} ${className}`}
      style={{ animationDelay: `${delay}ms`, transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

/**
 * Top thin scroll progress indicator component
 */
export function ScrollProgress() {
  const [scrollWidth, setScrollWidth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = height > 0 ? (winScroll / height) * 100 : 0;
      setScrollWidth(scrolled);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="scroll-progress-container" aria-hidden="true">
      <div
        className="scroll-progress-bar"
        style={{ width: `${scrollWidth}%` }}
      />
    </div>
  );
}
