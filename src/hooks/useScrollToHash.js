import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Custom hook to handle scrolling to hash anchors in React Router.
 * Accounts for fixed header height and waits for the DOM to fully render.
 */
export function useScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash;

    if (!hash) {
      // No hash — scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const elementId = decodeURIComponent(hash.substring(1)); // strip the leading # and decode URL encoding

    const scrollToElement = () => {
      const element = document.getElementById(elementId);
      if (!element) return false;

      const header =
        document.querySelector('.stricky-header.stricky-fixed') ||
        document.querySelector('.main-header') ||
        document.querySelector('header');
      const headerHeight = header ? header.offsetHeight : 80;

      const targetPosition =
        element.getBoundingClientRect().top + window.pageYOffset - headerHeight - 24;

      window.scrollTo({ top: targetPosition, behavior: 'smooth' });
      return true;
    };

    // Retry with increasing delays to handle async/lazy renders after page navigation
    const delays = [100, 300, 600, 1000, 1500];
    const timers = [];

    for (const delay of delays) {
      const t = setTimeout(() => {
        scrollToElement();
      }, delay);
      timers.push(t);
    }

    return () => timers.forEach(clearTimeout);
  // location.key changes on every navigation, ensuring this fires even when
  // pathname + hash are the same but the page was re-navigated to
  }, [location.key, location.pathname, location.hash]);
}
