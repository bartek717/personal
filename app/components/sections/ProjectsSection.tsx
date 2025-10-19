'use client';

import { useState } from 'react';
import { type ColorScheme } from '../config/colorSchemes';
import VerticalColorWave from '../ui/VerticalColorWave';

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  year: string;
  link?: string;
  status: 'live' | 'in-progress' | 'archived';
}

interface ProjectsSectionProps {
  currentColors: ColorScheme;
  currentScheme?: string;
  bgOpacity?: number; // Base background opacity (0-100)
  bgOpacityHover?: number; // Hover background opacity (0-100)
}

const projects: Project[] = [
  {
    id: 1,
    title: "Efficient Fine-Tuning of LLMs using Coreset Selection",
    description: "Utilized coreset selection methods (KCenterGreedy, Active Learning) to reduce LLM fine-tuning time by 80% while retaining performance. Placed 2nd at ProjectX, the world's largest international undergraduate ML contest.",
    tags: ["Python", "PyTorch", "Machine Learning", "Coreset Selection", "NLP"],
    year: "2024",
    link: "https://drive.google.com/file/d/1IfwUNqBIgRo-SQ_JeLR_gn6TTh12475q/view?usp=sharing",
    status: 'live'
  },
  {
    id: 2,
    title: "QuSearch - Alumni Search Tool",
    description: "Alumni search platform for Queen's University students to connect with graduates. Built with Next.js frontend, Flask backend, Supabase database, deployed on Vercel and Railway.",
    tags: ["Next.js", "Flask", "Supabase", "Vercel", "Railway", "Full-Stack"],
    year: "2024",
    link: "https://www.qusearch.ca",
    status: 'live'
  },
  {
    id: 3,
    title: "Memoria",
    description: "LLM-powered voice note app to record, transcribe, and chat with your thoughts. Built with React, Node.js, Express.js, and Supabase. Reached 800+ active users and 10,000 page views.",
    tags: ["React", "Node.js", "Express.js", "Supabase", "LLM", "Voice AI"],
    year: "2023",
    status: 'archived'
  }
];

export default function ProjectsSection({
  currentColors,
  currentScheme,
  bgOpacity = 30,
  bgOpacityHover = 35
}: ProjectsSectionProps) {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const isWaveScheme = currentScheme === 'wave';
  const waveColors = ['#777C6D', '#B7B89F', '#CBCBCB', '#EEEEEE'];

  const handleProjectClick = (link?: string) => {
    if (link) {
      window.open(link, '_blank', 'noopener,noreferrer');
    }
  };

  const getStatusColor = (status: Project['status'], colors: ColorScheme) => {
    switch(status) {
      case 'live': return colors.accentColor;
      case 'in-progress': return colors.secondaryBg;
      case 'archived': return colors.borderColor;
    }
  };

  const getStatusLabel = (status: Project['status']) => {
    switch(status) {
      case 'live': return 'LIVE';
      case 'in-progress': return 'IN PROGRESS';
      case 'archived': return 'ARCHIVED';
    }
  };

  return (
    <section className="relative overflow-hidden">
      {/* Decorative Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(0deg, ${currentColors.textPrimary} 0px, transparent 1px, transparent 40px),
                             repeating-linear-gradient(90deg, ${currentColors.textPrimary} 0px, transparent 1px, transparent 40px)`
          }}
        />
      </div>

      <div className="relative z-10 px-8 lg:px-16 py-6">
        {/* Header Section */}
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between border-b border-opacity-20" style={{ borderColor: currentColors.borderColor }}>
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
              Projects
            </h2>
            <div className="pb-3 opacity-50" style={{ color: currentColors.textSecondary }}>
              <span style={{ fontWeight: 200, fontSize: '0.8rem' }}>
                {projects.length} projects
              </span>
            </div>
          </div>
        </div>

        {/* Projects Grid - Asymmetric & Dynamic */}
        <div className="max-w-7xl mx-auto mt-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-6">
            {projects.map((project, index) => {
              const isHovered = hoveredId === project.id;

              // Make first project span full width on desktop
              const spanClass = index === 0 ? 'lg:col-span-2' : '';

              return (
                <article
                  key={project.id}
                  className={`
                    ${spanClass}
                    group relative
                    cursor-pointer
                    transition-all duration-700 ease-out
                  `}
                  onMouseEnter={() => setHoveredId(project.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  onClick={() => handleProjectClick(project.link)}
                >
                  {/* Project Card Container */}
                  <div
                    className={`
                      relative overflow-hidden
                      border rounded-xl
                      transition-all duration-500 ease-out
                    `}
                    style={{
                      height: index === 0 ? '320px' : '280px',
                      borderColor: isHovered ? `${currentColors.accentColor}80` : `${currentColors.secondaryAccent}60`,
                      backgroundColor: isWaveScheme ? `${currentColors.primaryBg}` : `${currentColors.secondaryAccent}${Math.round(bgOpacity * 2.55).toString(16).padStart(2, '0')}`,
                      background: isHovered && !isWaveScheme
                        ? `linear-gradient(135deg, ${currentColors.secondaryAccent}${Math.round(bgOpacityHover * 2.55).toString(16).padStart(2, '0')} 0%, ${currentColors.accentColor}20 100%)`
                        : isWaveScheme ? currentColors.primaryBg : `${currentColors.secondaryAccent}${Math.round(bgOpacity * 2.55).toString(16).padStart(2, '0')}`,
                      transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
                      boxShadow: isHovered
                        ? `0 12px 24px -8px ${currentColors.secondaryAccent}50, 0 6px 12px -4px ${currentColors.accentColor}30`
                        : `0 2px 8px -4px ${currentColors.secondaryAccent}40`
                    }}
                  >
                    {/* Vertical Wave Animations for Wave Scheme */}
                    {isWaveScheme && (
                      <>
                        <VerticalColorWave
                          colors={waveColors}
                          side="left"
                          opacity={0.3}
                          speed={18}
                          waveWidth={70}
                          lighter={true}
                        />
                        <VerticalColorWave
                          colors={waveColors}
                          side="right"
                          opacity={0.3}
                          speed={18}
                          waveWidth={70}
                          lighter={true}
                        />
                      </>
                    )}
                    {/* Project Number - Large Format */}
                    <div
                      className={`
                        absolute top-0 right-0
                        transition-all duration-700
                        ${isHovered ? 'opacity-10 scale-110' : 'opacity-[0.03]'}
                      `}
                      style={{
                        fontSize: 'clamp(6rem, 12vw, 12rem)',
                        fontWeight: 100,
                        lineHeight: 0.8,
                        transform: 'translate(10%, -10%)',
                        pointerEvents: 'none',
                        color: currentColors.textPrimary
                      }}
                    >
                      {String(project.id).padStart(2, '0')}
                    </div>

                    {/* Content Container */}
                    <div className="relative h-full p-4 lg:p-6 flex flex-col justify-between">
                      {/* Top Section */}
                      <div>
                        {/* Status & Year Bar */}
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-2.5">
                            <div
                              className="w-1.5 h-1.5 rounded-full"
                              style={{ backgroundColor: getStatusColor(project.status, currentColors) }}
                            />
                            <span
                              className="opacity-70 uppercase"
                              style={{ fontWeight: 300, fontSize: '0.6rem', letterSpacing: '0.1em', color: currentColors.textSecondary }}
                            >
                              {getStatusLabel(project.status)}
                            </span>
                          </div>
                          <span
                            className="opacity-40"
                            style={{ fontWeight: 200, fontSize: '0.75rem', letterSpacing: '0.05em', color: currentColors.textSecondary }}
                          >
                            {project.year}
                          </span>
                        </div>

                        {/* Project Title */}
                        <h3
                          className={`
                            mb-2
                            transition-all duration-500
                            ${isHovered ? 'translate-x-2' : ''}
                          `}
                          style={{
                            fontWeight: 200,
                            fontSize: index === 0 ? 'clamp(1.35rem, 3vw, 2rem)' : 'clamp(1.15rem, 2.5vw, 1.65rem)',
                            letterSpacing: '-0.02em',
                            lineHeight: 1.1,
                            color: currentColors.textPrimary
                          }}
                        >
                          {project.title}
                        </h3>

                        {/* Project Description */}
                        <p
                          className={`
                            transition-all duration-500
                            ${isHovered ? 'opacity-80' : 'opacity-60'}
                          `}
                          style={{
                            fontWeight: 300,
                            fontSize: '0.8rem',
                            lineHeight: 1.4,
                            maxWidth: '55ch',
                            color: currentColors.textSecondary
                          }}
                        >
                          {project.description}
                        </p>
                      </div>

                      {/* Bottom Section */}
                      <div className="mt-3">
                        {/* Technology Tags */}
                        <div className="flex flex-wrap gap-1.5 mb-3">
                          {project.tags.map((tag, index) => (
                            <span
                              key={tag}
                              className={`
                                px-2.5 py-1 rounded-md
                                border
                                transition-all duration-500
                                ${isHovered ? 'border-opacity-60' : 'border-opacity-40'}
                              `}
                              style={{
                                fontWeight: 300,
                                fontSize: '0.65rem',
                                letterSpacing: '0.04em',
                                backgroundColor: index % 2 === 0 ? `${currentColors.secondaryBg}08` : `${currentColors.accentColor}06`,
                                borderColor: index % 2 === 0 ? `${currentColors.secondaryBg}40` : `${currentColors.accentColor}40`,
                                color: currentColors.textPrimary
                              }}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* Action Bar */}
                        <div className="flex items-center">
                          <div
                            className={`
                              flex items-center gap-2
                              transition-all duration-500
                              ${isHovered ? 'translate-x-2' : ''}
                            `}
                          >
                            {project.link && (
                              <span
                                className={`
                                  uppercase
                                  transition-opacity duration-300
                                  ${isHovered ? 'opacity-70' : 'opacity-40'}
                                `}
                                style={{ fontWeight: 300, fontSize: '0.7rem', letterSpacing: '0.1em', color: currentColors.accentColor }}
                              >
                                EXPLORE
                              </span>
                            )}
                            <span
                              className={`
                                transition-all duration-500
                                ${isHovered ? 'opacity-100 translate-x-2' : 'opacity-30'}
                              `}
                              style={{ fontSize: '1.5rem', fontWeight: 100, color: currentColors.accentColor }}
                            >
                              →
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="max-w-7xl mx-auto mt-6 flex justify-between items-center">
          <div className="opacity-50" style={{ color: currentColors.textSecondary }}>
            <span style={{ fontWeight: 200, fontSize: '0.875rem' }}>
              {projects.length} projects
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
            <span className="relative z-10">VIEW FULL ARCHIVE</span>
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