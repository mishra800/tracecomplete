import { useEffect } from 'react';

export const useStickyHeader = () => {
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('.stricky-header');
      if (!header) return;

      if (window.scrollY > 100) {
        header.classList.add('stricked-menu');
      } else {
        header.classList.remove('stricked-menu');
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Check initial scroll position
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
};
