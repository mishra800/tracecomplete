import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const useAOS = () => {
  useEffect(() => {
    // Always re-init so SPA navigations pick up new DOM elements.
    // refreshHard() rescans the entire DOM — unlike refresh() which only
    // updates positions of already-known elements.
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
      easing: 'ease-in-out',
    });

    AOS.refreshHard();

    return () => {
      // Rescan on unmount so the next route's elements start clean
      AOS.refreshHard();
    };
  });  // no dependency array — runs after every render, matching route changes
};
