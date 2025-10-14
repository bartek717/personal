'use client';

import { type ColorScheme } from './colorSchemes';

interface ScrollArrowProps {
  currentColors: ColorScheme;
}

export default function ScrollArrow({ currentColors }: ScrollArrowProps) {
  const scrollToNext = () => {
    const essaysSection = document.getElementById('essays');
    if (essaysSection) {
      essaysSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <button
      onClick={scrollToNext}
      className={`absolute bottom-8 left-8 ${currentColors.textColor} hover:opacity-70 transition-opacity cursor-pointer`}
      aria-label="Scroll to next section"
    >
      <svg
        width="24"
        height="24"
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