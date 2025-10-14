'use client';

import { type ColorScheme } from '../config/colorSchemes';
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
    excerpt: "Exploring the intersection of technology and artistic expression.",
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

  return (
    <section className="min-h-screen relative">
      <div className="relative z-10 px-8 lg:px-16 py-16">
        {/* Header Section */}
        <div className="max-w-7xl mx-auto">
          <div
            className="flex items-end justify-between border-b border-opacity-20"
            style={{ borderColor: currentColors.borderColor }}
          >
            <h2
              className="pb-8"
              style={{
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 100,
                letterSpacing: '-0.02em',
                lineHeight: 1,
                color: currentColors.textPrimary
              }}
            >
              Essays & Opinions
            </h2>
            <div className="pb-4 opacity-50" style={{ color: currentColors.textSecondary }}>
              <span style={{ fontWeight: 200, fontSize: '0.875rem' }}>
                {essays.length} pieces
              </span>
            </div>
          </div>
        </div>

        {/* Essays Grid - Modern Asymmetric Layout */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6">
            {essays.map((essay, index) => (
              <article
                key={essay.id}
                className={`
                  lg:col-span-12 group cursor-pointer
                  border border-opacity-10
                  transition-all duration-500 ease-out
                  overflow-hidden
                  ${hoveredId === essay.id ? 'border-opacity-20 shadow-lg' : 'shadow-sm'}
                `}
                style={{
                  borderColor: currentColors.borderColor,
                  backgroundColor: hoveredId === essay.id ? `${currentColors.primaryBg}20` : `${currentColors.primaryBg}08`,
                  borderRadius: '12px',
                  padding: 'clamp(1.5rem, 3vw, 2.5rem)',
                  transform: hoveredId === essay.id ? 'translateY(-2px)' : 'translateY(0)',
                  boxShadow: hoveredId === essay.id
                    ? `0 8px 24px ${currentColors.primaryBg}20`
                    : `0 2px 8px ${currentColors.primaryBg}10`
                }}
                onMouseEnter={() => setHoveredId(essay.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-start">
                  {/* Left Column - Meta */}
                  <div className="lg:col-span-2 flex lg:flex-col flex-row gap-4 lg:gap-2">
                    <div
                      className={`transition-opacity duration-300 ${
                        hoveredId === essay.id ? 'opacity-70' : 'opacity-50'
                      }`}
                      style={{ color: currentColors.textSecondary }}
                    >
                      <span style={{ fontWeight: 200, fontSize: '0.8rem', letterSpacing: '0.05em' }}>
                        {essay.date}
                      </span>
                    </div>
                    <div className="opacity-40" style={{ color: currentColors.textSecondary }}>
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
                          transition-all duration-300
                          ${hoveredId === essay.id ? 'opacity-70 tracking-widest' : 'opacity-50'}
                        `}
                        style={{
                          fontWeight: 300,
                          fontSize: '0.65rem',
                          color: currentColors.textSecondary
                        }}
                      >
                        {essay.type}
                      </span>
                    </div>

                    <h3
                      className={`
                        mb-3
                        transition-all duration-300
                        ${hoveredId === essay.id ? 'translate-x-2' : ''}
                      `}
                      style={{
                        fontWeight: 200,
                        fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)',
                        letterSpacing: '-0.01em',
                        lineHeight: 1.2,
                        color: currentColors.textPrimary
                      }}
                    >
                      {essay.title}
                    </h3>

                    <p
                      className={`
                        transition-all duration-300
                        ${hoveredId === essay.id ? 'opacity-80' : 'opacity-60'}
                      `}
                      style={{
                        fontWeight: 300,
                        fontSize: '0.95rem',
                        lineHeight: 1.6,
                        maxWidth: '60ch',
                        color: currentColors.textSecondary
                      }}
                    >
                      {essay.excerpt}
                    </p>
                  </div>

                  {/* Right Column - Arrow */}
                  <div className="lg:col-span-2 flex justify-start lg:justify-end items-start mt-4 lg:mt-0">
                    <span
                      className={`
                        transition-all duration-500 ease-out
                        ${hoveredId === essay.id
                          ? 'translate-x-2 opacity-100'
                          : 'translate-x-0 opacity-0 lg:opacity-30'
                        }
                      `}
                      style={{
                        fontWeight: 100,
                        fontSize: '1.5rem',
                        color: currentColors.accentColor
                      }}
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
        <div className="max-w-7xl mx-auto mt-12 flex justify-between items-center">
          <div className="opacity-50" style={{ color: currentColors.textSecondary }}>
            <span style={{ fontWeight: 200, fontSize: '0.875rem' }}>
              {essays.length} pieces
            </span>
          </div>

          <button
            className="group relative overflow-hidden px-10 py-4 transition-all duration-500 hover:border-opacity-60 cursor-pointer"
            style={{
              fontWeight: 200,
              fontSize: '0.875rem',
              letterSpacing: '0.05em',
              borderWidth: '0.5px',
              borderColor: currentColors.borderColor,
              borderStyle: 'solid',
              color: currentColors.textPrimary
            }}
          >
            <span className="relative z-10">VIEW ARCHIVE</span>
            <div
              className="absolute inset-0 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out opacity-5"
              style={{ backgroundColor: currentColors.accentColor }}
            />
          </button>
        </div>
      </div>
    </section>
  );
}
