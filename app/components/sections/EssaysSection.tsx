'use client';

import { type ColorScheme } from '../config/colorSchemes';
import { useState } from 'react';
import VerticalColorWave from '../ui/VerticalColorWave';

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
  currentScheme?: string;
  bgOpacity?: number; // Base background opacity (0-100)
  bgOpacityHover?: number; // Hover background opacity (0-100)
}

const essays: EssayItem[] = [
  {
    id: 1,
    title: "When Data Moves, Power Shifts: Canada's Open Banking Moment",
    date: "Oct 2025",
    excerpt: "Exploring how Canada's open banking framework is reshaping financial services and shifting power dynamics in the industry.",
    type: 'opinion',
    readTime: "5 min",
    link: "https://medium.com/@bartekmkowalski/when-data-moves-power-shifts-canadas-open-banking-moment-94bc7a934c8b"
  },
  {
    id: 2,
    title: "The Rise and Potential of Open Source Large Language Models in AI",
    date: "Jun 2024",
    excerpt: "Exploring how open-source LLMs are democratizing AI development and reshaping the technological landscape.",
    type: 'essay',
    readTime: "8 min",
    link: "https://medium.com/@bartekmkowalski/the-rise-and-potential-of-open-source-large-language-models-in-ai-0d30450f8b3c"
  },
  {
    id: 3,
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
  currentScheme,
  bgOpacity = 28,
  bgOpacityHover = 32
}: EssaysSectionProps) {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const isWaveScheme = currentScheme === 'wave';
  const isSageScheme = currentScheme === 'sage';
  const waveColors = ['#777C6D', '#B7B89F', '#CBCBCB', '#EEEEEE'];
  const sageColors = ['#ECE3CE', '#739072', '#4F6F52', '#3A4D39'];

  const handleEssayClick = (link?: string) => {
    if (link) {
      window.open(link, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section className="min-h-screen relative">
      <div className="relative z-10 px-4 sm:px-8 lg:px-16 py-8 sm:py-12 lg:py-16">
        {/* Header Section */}
        <div className="max-w-7xl mx-auto">
          <div
            className="flex items-end justify-between border-b border-opacity-20"
            style={{ borderColor: currentColors.borderColor }}
          >
            <h2
              className="pb-4 sm:pb-6 lg:pb-8"
              style={{
                fontSize: 'clamp(1.75rem, 4vw, 3rem)',
                fontWeight: 100,
                letterSpacing: '-0.02em',
                lineHeight: 1,
                color: currentColors.textPrimary
              }}
            >
              Essays & Opinions
            </h2>
            <div className="pb-2 sm:pb-4 opacity-50" style={{ color: currentColors.textSecondary }}>
              <span style={{ fontWeight: 200, fontSize: 'clamp(0.75rem, 2vw, 0.875rem)' }}>
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
                  backgroundColor: (isWaveScheme || isSageScheme) ? `${currentColors.primaryBg}` : `${currentColors.secondaryAccent}${Math.round(bgOpacity * 2.55).toString(16).padStart(2, '0')}`,
                  background: hoveredId === essay.id && !isWaveScheme && !isSageScheme
                    ? `linear-gradient(120deg, ${currentColors.secondaryAccent}${Math.round(bgOpacityHover * 2.55).toString(16).padStart(2, '0')} 0%, ${currentColors.accentColor}18 100%)`
                    : (isWaveScheme || isSageScheme) ? currentColors.primaryBg : `${currentColors.secondaryAccent}${Math.round(bgOpacity * 2.55).toString(16).padStart(2, '0')}`,
                  padding: 'clamp(1rem, 3vw, 2.5rem)',
                  transform: hoveredId === essay.id ? 'translateY(-4px)' : 'translateY(0)',
                  boxShadow: hoveredId === essay.id
                    ? `0 12px 24px -8px ${currentColors.secondaryAccent}50, 0 6px 12px -4px ${currentColors.accentColor}30`
                    : `0 2px 8px -4px ${currentColors.secondaryAccent}40`
                }}
                onMouseEnter={() => setHoveredId(essay.id)}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() => handleEssayClick(essay.link)}
              >
                {/* Vertical Wave Animations for Wave or Sage Scheme */}
                {isWaveScheme && (
                  <>
                    <VerticalColorWave
                      colors={waveColors}
                      side="left"
                      opacity={0.3}
                      speed={15}
                      waveWidth={60}
                      lighter={true}
                    />
                    <VerticalColorWave
                      colors={waveColors}
                      side="right"
                      opacity={0.3}
                      speed={15}
                      waveWidth={60}
                      lighter={true}
                    />
                  </>
                )}
                {isSageScheme && (
                  <>
                    <VerticalColorWave
                      colors={sageColors}
                      side="left"
                      opacity={0.25}
                      speed={20}
                      waveWidth={55}
                      lighter={false}
                    />
                    <VerticalColorWave
                      colors={sageColors}
                      side="right"
                      opacity={0.25}
                      speed={20}
                      waveWidth={55}
                      lighter={false}
                    />
                  </>
                )}
                {/* Accent bar on left */}
                <div
                  className={`
                    absolute left-0 top-0 bottom-0 w-1 transition-all duration-500
                    ${hoveredId === essay.id ? 'opacity-100' : 'opacity-60'}
                    ${(isWaveScheme || isSageScheme) ? 'z-20' : ''}
                  `}
                  style={{
                    backgroundColor: hoveredId === essay.id ? currentColors.secondaryAccent : currentColors.accentColor,
                    borderRadius: '0 4px 4px 0'
                  }}
                />
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-4 lg:gap-8 items-start">
                  {/* Left Column - Meta */}
                  <div className="lg:col-span-2 flex lg:flex-col flex-row gap-3 sm:gap-4 lg:gap-2">
                    <div
                      className={`transition-opacity duration-300 ${
                        hoveredId === essay.id ? 'opacity-70' : 'opacity-50'
                      }`}
                      style={{ color: currentColors.textSecondary }}
                    >
                      <span style={{ fontWeight: 200, fontSize: 'clamp(0.7rem, 1.5vw, 0.8rem)', letterSpacing: '0.05em' }}>
                        {essay.date}
                      </span>
                    </div>
                    <div className="opacity-40" style={{ color: currentColors.textSecondary }}>
                      <span style={{ fontWeight: 200, fontSize: 'clamp(0.7rem, 1.5vw, 0.8rem)' }}>
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
                        mb-2 sm:mb-3
                        transition-all duration-300
                        ${hoveredId === essay.id ? 'translate-x-2' : ''}
                      `}
                      style={{
                        fontWeight: 200,
                        fontSize: 'clamp(1.1rem, 2.5vw, 1.75rem)',
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
                        fontSize: 'clamp(0.85rem, 2vw, 0.95rem)',
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
        <div className="max-w-7xl mx-auto mt-8 sm:mt-12 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="opacity-50 order-2 sm:order-1" style={{ color: currentColors.textSecondary }}>
            <span style={{ fontWeight: 200, fontSize: 'clamp(0.75rem, 2vw, 0.875rem)' }}>
              {essays.length} pieces
            </span>
          </div>

          <button
            className="group relative overflow-hidden px-6 sm:px-10 py-3 sm:py-4 transition-all duration-500 hover:border-opacity-60 cursor-pointer order-1 sm:order-2"
            style={{
              fontWeight: 200,
              fontSize: 'clamp(0.75rem, 2vw, 0.875rem)',
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
