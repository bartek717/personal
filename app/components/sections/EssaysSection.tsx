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
  link?: string;
}

interface EssaysSectionProps {
  currentColors: ColorScheme;
  bgOpacity?: number; // Base background opacity (0-100)
  bgOpacityHover?: number; // Hover background opacity (0-100)
}

const essays: EssayItem[] = [
  {
    id: 1,
    title: "The Rise and Potential of Open Source Large Language Models in AI",
    date: "Jun 2024",
    excerpt: "Exploring how open-source LLMs are democratizing AI development and reshaping the technological landscape.",
    type: 'essay',
    readTime: "8 min",
    link: "https://medium.com/@bartekmkowalski/the-rise-and-potential-of-open-source-large-language-models-in-ai-0d30450f8b3c"
  },
  {
    id: 2,
    title: "ChatGPT: Is the Education Industry Ready?",
    date: "Mar 2023",
    excerpt: "Examining the implications of ChatGPT and generative AI on education systems and learning methodologies.",
    type: 'opinion',
    readTime: "6 min",
    link: "https://medium.com/qmind-ai/chatgpt-is-the-education-industry-ready-df8bd7575371"
  }
];

export default function EssaysSection({
  currentColors,
  bgOpacity = 28,
  bgOpacityHover = 32
}: EssaysSectionProps) {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const handleEssayClick = (link?: string) => {
    if (link) {
      window.open(link, '_blank', 'noopener,noreferrer');
    }
  };

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
                  lg:col-span-12 group cursor-pointer relative
                  border rounded-xl
                  transition-all duration-500 ease-out
                  overflow-hidden
                `}
                style={{
                  borderColor: hoveredId === essay.id ? `${currentColors.accentColor}80` : `${currentColors.secondaryAccent}60`,
                  backgroundColor: `${currentColors.secondaryAccent}${Math.round(bgOpacity * 2.55).toString(16).padStart(2, '0')}`,
                  background: hoveredId === essay.id
                    ? `linear-gradient(120deg, ${currentColors.secondaryAccent}${Math.round(bgOpacityHover * 2.55).toString(16).padStart(2, '0')} 0%, ${currentColors.accentColor}18 100%)`
                    : `${currentColors.secondaryAccent}${Math.round(bgOpacity * 2.55).toString(16).padStart(2, '0')}`,
                  padding: 'clamp(1.5rem, 3vw, 2.5rem)',
                  transform: hoveredId === essay.id ? 'translateY(-4px)' : 'translateY(0)',
                  boxShadow: hoveredId === essay.id
                    ? `0 12px 24px -8px ${currentColors.secondaryAccent}50, 0 6px 12px -4px ${currentColors.accentColor}30`
                    : `0 2px 8px -4px ${currentColors.secondaryAccent}40`
                }}
                onMouseEnter={() => setHoveredId(essay.id)}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() => handleEssayClick(essay.link)}
              >
                {/* Accent bar on left */}
                <div
                  className={`
                    absolute left-0 top-0 bottom-0 w-1 transition-all duration-500
                    ${hoveredId === essay.id ? 'opacity-100' : 'opacity-60'}
                  `}
                  style={{
                    backgroundColor: hoveredId === essay.id ? currentColors.secondaryAccent : currentColors.accentColor,
                    borderRadius: '0 4px 4px 0'
                  }}
                />
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
                          inline-block px-2 py-0.5 rounded-md
                          text-xs uppercase tracking-wider
                          transition-all duration-300
                          ${hoveredId === essay.id ? 'opacity-90' : 'opacity-70'}
                        `}
                        style={{
                          fontWeight: 400,
                          fontSize: '0.65rem',
                          backgroundColor: essay.type === 'essay' ? `${currentColors.accentColor}06` : `${currentColors.secondaryBg}08`,
                          color: essay.type === 'essay' ? currentColors.accentColor : currentColors.secondaryBg,
                          borderWidth: '1px',
                          borderStyle: 'solid',
                          borderColor: essay.type === 'essay' ? `${currentColors.accentColor}40` : `${currentColors.secondaryBg}40`
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
