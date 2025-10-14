'use client';

import { useEffect } from 'react';
import { type ColorScheme } from './colorSchemes';

interface ScrollArrowProps {
  currentColors: ColorScheme;
}

export default function ScrollArrow({ currentColors }: ScrollArrowProps) {
  const scrollToNext = () => {
    const contentSection = document.querySelector('[id="essays"]')?.parentElement;
    if (contentSection) {
      contentSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        e.preventDefault();

        const sections = [
          'hero',
          'essays',
          'film',
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

  return (
    <button
      onClick={scrollToNext}
      className="absolute bottom-8 left-8 hover:opacity-70 transition-opacity cursor-pointer z-20"
      style={{ color: currentColors.accentColor }}
      aria-label="Scroll to next section"
    >
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="animate-bounce"
      >
        <path d="M12 5v14M5 12l7 7 7-7"/>
      </svg>
    </button>
  );
}