'use client';

import { type ColorScheme } from './colorSchemes';
import { useState } from 'react';

interface EssayItem {
  id: number;
  title: string;
  date: string;
  excerpt: string;
  type: 'essay' | 'opinion';
  readTime: string;
}

interface EssaysSectionProps {
  currentColors: ColorScheme;
}

const essays: EssayItem[] = [
  {
    id: 1,
    title: "On the Nature of Digital Creativity",
    date: "Dec 2024",
    excerpt: "Exploring the intersection of technology and artistic expression in the modern age.",
    type: 'essay',
    readTime: "5 min"
  },
  {
    id: 2,
    title: "The Paradox of Choice in Modern Software",
    date: "Nov 2024",
    excerpt: "Why having too many options might be limiting our potential.",
    type: 'opinion',
    readTime: "3 min"
  },
  {
    id: 3,
    title: "Building in Public: A Personal Journey",
    date: "Oct 2024",
    excerpt: "Lessons learned from sharing work before it's perfect.",
    type: 'essay',
    readTime: "7 min"
  }
];

export default function EssaysSection({ currentColors }: EssaysSectionProps) {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  // All gradients have light areas, so we'll use darker text for better contrast
  // Only use the original text color if it's already dark enough
  const needsDarkText = currentColors.textColor === 'text-gray-800';

  const textColor = needsDarkText ? 'text-gray-900' : currentColors.textColor;
  const lightTextColor = needsDarkText ? 'text-gray-600' : currentColors.textColor;
  const borderColor = needsDarkText ? 'border-gray-300' : currentColors.borderColor;

  return (
    <section
      className={`min-h-screen ${currentColors.background} relative`}
      style={currentColors.customGradient ? { background: currentColors.customGradient } : {}}
    >
      {/* Large background "Words" - very faint */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none">
        <span
          className={`text-[25vw] ${textColor}`}
          style={{
            fontWeight: 100,
            opacity: 0.015,
            letterSpacing: '-0.05em'
          }}
        >
          Words
        </span>
      </div>

      <div className="relative z-10 px-8 lg:px-16 py-24">
        {/* Header Section */}
        <div className="max-w-7xl mx-auto mb-20">
          <div className={`flex items-end justify-between border-b ${borderColor} border-opacity-20`}>
            <h2
              className={`${textColor} pb-8`}
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                fontWeight: 100,
                letterSpacing: '-0.02em',
                lineHeight: 1
              }}
            >
              Essays & Opinions
            </h2>
            <div className={`pb-8 ${lightTextColor} opacity-50`}>
              <span style={{ fontWeight: 200, fontSize: '0.875rem' }}>
                {essays.length} pieces
              </span>
            </div>
          </div>
        </div>

        {/* Essays Grid - Modern Asymmetric Layout */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-1">
            {essays.map((essay, index) => (
              <article
                key={essay.id}
                className={`
                  lg:col-span-12 group cursor-pointer
                  ${borderColor} border-b border-opacity-10
                  transition-all duration-500 ease-out
                  ${hoveredId === essay.id ? 'lg:pl-4' : ''}
                `}
                onMouseEnter={() => setHoveredId(essay.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div className="py-10 lg:py-12 grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-start">
                  {/* Left Column - Meta */}
                  <div className="lg:col-span-2 flex lg:flex-col flex-row gap-4 lg:gap-2">
                    <div
                      className={`${lightTextColor} transition-opacity duration-300 ${
                        hoveredId === essay.id ? 'opacity-70' : 'opacity-50'
                      }`}
                    >
                      <span style={{ fontWeight: 200, fontSize: '0.8rem', letterSpacing: '0.05em' }}>
                        {essay.date}
                      </span>
                    </div>
                    <div className={`${lightTextColor} opacity-40`}>
                      <span style={{ fontWeight: 200, fontSize: '0.8rem' }}>
                        {essay.readTime}
                      </span>
                    </div>
                  </div>

                  {/* Middle Column - Content */}
                  <div className="lg:col-span-8">
                    <div className="mb-1">
                      <span
                        className={`
                          inline-block text-xs uppercase tracking-wider
                          ${lightTextColor}
                          transition-all duration-300
                          ${hoveredId === essay.id ? 'opacity-70 tracking-widest' : 'opacity-50'}
                        `}
                        style={{ fontWeight: 300, fontSize: '0.65rem' }}
                      >
                        {essay.type}
                      </span>
                    </div>

                    <h3
                      className={`
                        ${textColor} mb-4
                        transition-all duration-300
                        ${hoveredId === essay.id ? 'translate-x-2' : ''}
                      `}
                      style={{
                        fontWeight: 200,
                        fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                        letterSpacing: '-0.01em',
                        lineHeight: 1.2
                      }}
                    >
                      {essay.title}
                    </h3>

                    <p
                      className={`
                        ${lightTextColor}
                        transition-all duration-300
                        ${hoveredId === essay.id ? 'opacity-80' : 'opacity-60'}
                      `}
                      style={{
                        fontWeight: 300,
                        fontSize: '0.95rem',
                        lineHeight: 1.6,
                        maxWidth: '60ch'
                      }}
                    >
                      {essay.excerpt}
                    </p>
                  </div>

                  {/* Right Column - Arrow */}
                  <div className="lg:col-span-2 flex justify-start lg:justify-end items-start mt-4 lg:mt-0">
                    <span
                      className={`
                        ${textColor}
                        transition-all duration-500 ease-out
                        ${hoveredId === essay.id
                          ? 'translate-x-2 opacity-100'
                          : 'translate-x-0 opacity-0 lg:opacity-30'
                        }
                      `}
                      style={{ fontWeight: 100, fontSize: '1.5rem' }}
                    >
                      →
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="max-w-7xl mx-auto mt-20 flex justify-between items-center">
          <div className={`${lightTextColor} opacity-50`}>
            <span style={{ fontWeight: 200, fontSize: '0.875rem' }}>
              More writings coming soon
            </span>
          </div>

          <button
            className={`
              group relative overflow-hidden
              px-10 py-4
              ${borderColor}
              ${textColor}
              transition-all duration-500
              hover:border-opacity-60
            `}
            style={{
              fontWeight: 200,
              fontSize: '0.875rem',
              letterSpacing: '0.05em',
              borderWidth: '0.5px'
            }}
          >
            <span className="relative z-10">VIEW ARCHIVE</span>
            <div
              className={`
                absolute inset-0
                ${needsDarkText ? 'bg-gray-900' : 'bg-white'}
                transform -translate-x-full group-hover:translate-x-0
                transition-transform duration-500 ease-out
                opacity-5
              `}
            />
          </button>
        </div>
      </div>
    </section>
  );
}