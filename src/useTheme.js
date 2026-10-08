import { useState, useEffect, useCallback } from 'react';

/**
 * Custom hook to manage Light/Dark paper themes with:
 * 1. localStorage persistence
 * 2. System preference detection (prefers-color-scheme)
 * 3. Smooth View Transitions API circular reveal animation (with fallback)
 * 4. DOM synchronization on documentElement data-theme attribute
 */
export function useTheme() {
  const [theme, setThemeState] = useState(() => {
    // Check saved local preference first
    try {
      const saved = localStorage.getItem('theme');
      if (saved === 'light' || saved === 'dark') {
        return saved;
      }
    } catch (e) {
      console.warn('Unable to access localStorage for theme preference', e);
    }

    // Default to system preference
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'light';
  });

  // Keep DOM attribute and localStorage synced
  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('data-theme', theme);
    try {
      localStorage.setItem('theme', theme);
    } catch (e) {
      // Ignore quota/private mode errors
    }
  }, [theme]);

  // Listen to system theme changes if user has not set an explicit override
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e) => {
      const hasSavedTheme = localStorage.getItem('theme');
      if (!hasSavedTheme) {
        setThemeState(e.matches ? 'dark' : 'light');
      }
    };

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }
  }, []);

  /**
   * Toggle theme with optional View Transitions API circular expansion
   */
  const toggleTheme = useCallback((event) => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';

    // Check if browser supports View Transitions API and motion is not reduced
    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const supportsViewTransition = typeof document.startViewTransition === 'function';

    if (!supportsViewTransition || isReducedMotion) {
      setThemeState(nextTheme);
      return;
    }

    // Determine click position or default to top center
    let x = window.innerWidth / 2;
    let y = 30;

    if (event && event.currentTarget) {
      const rect = event.currentTarget.getBoundingClientRect();
      x = rect.left + rect.width / 2;
      y = rect.top + rect.height / 2;
    } else if (event && typeof event.clientX === 'number') {
      x = event.clientX;
      y = event.clientY;
    }

    // Calculate maximum radius to cover the screen
    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    // Run transition
    const transition = document.startViewTransition(() => {
      setThemeState(nextTheme);
      document.documentElement.setAttribute('data-theme', nextTheme);
    });

    transition.ready.then(() => {
      // Circular reveal animation on the new snapshot
      const clipPath = [
        `circle(0px at ${x}px ${y}px)`,
        `circle(${endRadius}px at ${x}px ${y}px)`
      ];

      document.documentElement.animate(
        {
          clipPath: theme === 'dark' ? clipPath : [...clipPath].reverse()
        },
        {
          duration: 500,
          easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
          pseudoElement: theme === 'dark' ? '::view-transition-new(root)' : '::view-transition-old(root)'
        }
      );
    });
  }, [theme]);

  return {
    theme,
    toggleTheme,
    isDark: theme === 'dark'
  };
}
