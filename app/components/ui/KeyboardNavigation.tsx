'use client';

import { useEffect } from 'react';

export default function KeyboardNavigation() {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        e.preventDefault();

        const sections = [
          'hero',
          'film',
          'essays',
          'projects',
          'experience'
        ];

        // Find which section is currently visible
        let currentIndex = -1;
        for (let i = 0; i < sections.length; i++) {
          const element = document.getElementById(sections[i]);
          if (element) {
            const rect = element.getBoundingClientRect();
            // Check if section is in the middle of viewport
            if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
              currentIndex = i;
              break;
            }
          }
        }

        // Navigate to next or previous section
        let targetIndex = currentIndex;
        if (e.key === 'ArrowDown' && currentIndex < sections.length - 1) {
          targetIndex = currentIndex + 1;
        } else if (e.key === 'ArrowUp' && currentIndex > 0) {
          targetIndex = currentIndex - 1;
        }

        // Scroll to target section
        if (targetIndex !== currentIndex && targetIndex >= 0) {
          const targetElement = document.getElementById(sections[targetIndex]);
          if (targetElement) {
            // For hero, scroll to its parent wrapper to include top spacing
            if (sections[targetIndex] === 'hero') {
              const wrapper = targetElement.closest('.snap-start');
              wrapper?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            } else {
              targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return null;
}
