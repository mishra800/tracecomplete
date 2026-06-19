import { useEffect } from 'react';

export const useCustomCursor = () => {
  useEffect(() => {
    // Check if device supports hover (not mobile/tablet)
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    
    if (isTouchDevice) {
      // Hide custom cursor on touch devices
      const cursors = document.querySelectorAll('.custom-cursor__cursor, .custom-cursor__cursor-two');
      cursors.forEach(cursor => {
        if (cursor) cursor.style.display = 'none';
      });
      return;
    }

    const cursor = document.querySelector('.custom-cursor__cursor');
    const cursorTwo = document.querySelector('.custom-cursor__cursor-two');

    if (!cursor || !cursorTwo) return;

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    let cursorTwoX = 0;
    let cursorTwoY = 0;

    const moveCursor = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animateCursor = () => {
      // Smooth follow for main cursor
      cursorX += (mouseX - cursorX) * 0.2;
      cursorY += (mouseY - cursorY) * 0.2;
      
      // Slower follow for second cursor
      cursorTwoX += (mouseX - cursorTwoX) * 0.1;
      cursorTwoY += (mouseY - cursorTwoY) * 0.1;

      cursor.style.transform = `translate(${cursorX}px, ${cursorY}px)`;
      cursorTwo.style.transform = `translate(${cursorTwoX}px, ${cursorTwoY}px)`;

      requestAnimationFrame(animateCursor);
    };

    // Add hover effect on links and buttons
    const addHoverEffect = () => {
      const hoverElements = document.querySelectorAll('a, button, .btn-get-started');
      
      hoverElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
          cursor.classList.add('cursor-hover');
          cursorTwo.classList.add('cursor-hover');
        });
        
        el.addEventListener('mouseleave', () => {
          cursor.classList.remove('cursor-hover');
          cursorTwo.classList.remove('cursor-hover');
        });
      });
    };

    document.addEventListener('mousemove', moveCursor);
    animateCursor();
    addHoverEffect();

    return () => {
      document.removeEventListener('mousemove', moveCursor);
    };
  }, []);
};
