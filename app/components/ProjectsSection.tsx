'use client';

import { useState } from 'react';
import { type ColorScheme } from './colorSchemes';

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
}

const projects: Project[] = [
  {
    id: 1,
    title: "Project Title One",
    description: "A comprehensive description of your first project. This should highlight the problem you solved, the technologies used, and the impact it had.",
    tags: ["React", "TypeScript", "Next.js"],
    year: "2024",
    link: "https://example.com",
    status: 'live'
  },
  {
    id: 2,
    title: "Project Title Two",
    description: "Description of your second project showcasing different skills and technologies. Explain what makes this project unique and interesting.",
    tags: ["Node.js", "PostgreSQL", "API"],
    year: "2024",
    status: 'in-progress'
  },
  {
    id: 3,
    title: "Project Title Three",
    description: "Your third project focusing on a different domain or technical challenge. Describe the technical decisions and outcomes.",
    tags: ["Python", "Machine Learning", "Data"],
    year: "2023",
    link: "https://example.com",
    status: 'live'
  }
];

export default function ProjectsSection({ currentColors }: ProjectsSectionProps) {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const needsDarkText = currentColors.textColor === 'text-gray-800';
  const textColor = needsDarkText ? 'text-gray-900' : currentColors.textColor;
  const lightTextColor = needsDarkText ? 'text-gray-600' : currentColors.textColor;
  const borderColor = needsDarkText ? 'border-gray-300' : currentColors.borderColor;

  const getStatusColor = (status: Project['status']) => {
    switch(status) {
      case 'live': return 'bg-green-500';
      case 'in-progress': return 'bg-yellow-500';
      case 'archived': return 'bg-gray-400';
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
            backgroundImage: `repeating-linear-gradient(0deg, ${needsDarkText ? '#000' : '#fff'} 0px, transparent 1px, transparent 40px),
                             repeating-linear-gradient(90deg, ${needsDarkText ? '#000' : '#fff'} 0px, transparent 1px, transparent 40px)`
          }}
        />
      </div>

      <div className="relative z-10 px-8 lg:px-16 py-6">
        {/* Header Section */}
        <div className="max-w-7xl mx-auto">
          <div className={`flex items-end justify-between border-b ${borderColor} border-opacity-20`}>
            <h2
              className={`${textColor} pb-4`}
              style={{
                fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
                fontWeight: 100,
                letterSpacing: '-0.02em',
                lineHeight: 1
              }}
            >
              Projects
            </h2>
            <div className={`pb-3 ${lightTextColor} opacity-50`}>
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
              const isExpanded = expandedId === project.id;
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
                    ${isExpanded ? 'lg:col-span-2' : ''}
                  `}
                  onMouseEnter={() => setHoveredId(project.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  onClick={() => setExpandedId(isExpanded ? null : project.id)}
                >
                  {/* Project Card Container */}
                  <div
                    className={`
                      relative overflow-hidden
                      border ${borderColor} border-opacity-20
                      transition-all duration-700 ease-out
                      ${isHovered ? 'border-opacity-40 shadow-2xl' : ''}
                      ${isExpanded ? 'border-opacity-50' : ''}
                    `}
                    style={{
                      minHeight: index === 0 ? '280px' : '240px',
                      background: isHovered || isExpanded
                        ? `linear-gradient(135deg, rgba(255,255,255,${needsDarkText ? '0.03' : '0.01'}) 0%, transparent 100%)`
                        : 'transparent'
                    }}
                  >
                    {/* Project Number - Large Format */}
                    <div
                      className={`
                        absolute top-0 right-0
                        ${textColor}
                        transition-all duration-700
                        ${isHovered ? 'opacity-10 scale-110' : 'opacity-[0.03]'}
                      `}
                      style={{
                        fontSize: 'clamp(6rem, 12vw, 12rem)',
                        fontWeight: 100,
                        lineHeight: 0.8,
                        transform: 'translate(10%, -10%)',
                        pointerEvents: 'none'
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
                            <div className={`w-1.5 h-1.5 rounded-full ${getStatusColor(project.status)}`} />
                            <span
                              className={`${lightTextColor} opacity-50 uppercase`}
                              style={{ fontWeight: 300, fontSize: '0.6rem', letterSpacing: '0.1em' }}
                            >
                              {getStatusLabel(project.status)}
                            </span>
                          </div>
                          <span
                            className={`${lightTextColor} opacity-40`}
                            style={{ fontWeight: 200, fontSize: '0.75rem', letterSpacing: '0.05em' }}
                          >
                            {project.year}
                          </span>
                        </div>

                        {/* Project Title */}
                        <h3
                          className={`
                            ${textColor} mb-2
                            transition-all duration-500
                            ${isHovered ? 'translate-x-2' : ''}
                          `}
                          style={{
                            fontWeight: 200,
                            fontSize: index === 0 ? 'clamp(1.35rem, 3vw, 2rem)' : 'clamp(1.15rem, 2.5vw, 1.65rem)',
                            letterSpacing: '-0.02em',
                            lineHeight: 1.1
                          }}
                        >
                          {project.title}
                        </h3>

                        {/* Project Description */}
                        <p
                          className={`
                            ${lightTextColor}
                            transition-all duration-500
                            ${isHovered ? 'opacity-80' : 'opacity-60'}
                          `}
                          style={{
                            fontWeight: 300,
                            fontSize: '0.8rem',
                            lineHeight: 1.4,
                            maxWidth: '55ch'
                          }}
                        >
                          {project.description}
                        </p>

                        {/* Expanded Details */}
                        <div
                          className={`
                            overflow-hidden
                            transition-all duration-700 ease-out
                            ${isExpanded ? 'max-h-40 opacity-100 mt-6' : 'max-h-0 opacity-0'}
                          `}
                        >
                          <div className={`${lightTextColor} opacity-50 text-sm leading-relaxed`}>
                            Additional project details and outcomes would go here when you expand the card.
                            This could include metrics, technologies in depth, or project outcomes.
                          </div>
                        </div>
                      </div>

                      {/* Bottom Section */}
                      <div className="mt-3">
                        {/* Technology Tags */}
                        <div className="flex flex-wrap gap-1.5 mb-3">
                          {project.tags.map(tag => (
                            <span
                              key={tag}
                              className={`
                                px-2.5 py-1
                                ${lightTextColor}
                                border ${borderColor} border-opacity-20
                                transition-all duration-500
                                ${isHovered ? 'opacity-60 border-opacity-40' : 'opacity-40'}
                              `}
                              style={{
                                fontWeight: 200,
                                fontSize: '0.65rem',
                                letterSpacing: '0.04em'
                              }}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* Action Bar */}
                        <div className="flex items-center justify-between">
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
                                  ${textColor} uppercase
                                  transition-opacity duration-300
                                  ${isHovered ? 'opacity-70' : 'opacity-40'}
                                `}
                                style={{ fontWeight: 300, fontSize: '0.7rem', letterSpacing: '0.1em' }}
                              >
                                EXPLORE
                              </span>
                            )}
                            <span
                              className={`
                                ${textColor}
                                transition-all duration-500
                                ${isHovered ? 'opacity-100 translate-x-2' : 'opacity-30'}
                              `}
                              style={{ fontSize: '1.5rem', fontWeight: 100 }}
                            >
                              →
                            </span>
                          </div>

                          {/* Expand Indicator */}
                          <div
                            className={`
                              ${lightTextColor}
                              transition-all duration-500
                              ${isExpanded ? 'rotate-180 opacity-60' : 'opacity-20'}
                            `}
                            style={{ fontSize: '1.25rem' }}
                          >
                            ↓
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Hover Gradient Overlay */}
                    <div
                      className={`
                        absolute inset-0 pointer-events-none
                        transition-opacity duration-700
                        ${isHovered ? 'opacity-100' : 'opacity-0'}
                      `}
                      style={{
                        background: `linear-gradient(135deg, transparent 0%, rgba(255,255,255,${needsDarkText ? '0.02' : '0.01'}) 100%)`
                      }}
                    />
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="max-w-7xl mx-auto mt-6 text-center">
          <div className={`${lightTextColor} opacity-40 mb-5`}>
            <span style={{ fontWeight: 200, fontSize: '0.8rem', letterSpacing: '0.05em' }}>
              More experiments & explorations on GitHub
            </span>
          </div>

          <button
            className={`
              group relative
              px-12 py-4
              border ${borderColor} border-opacity-30
              ${textColor}
              overflow-hidden
              transition-all duration-500
              hover:border-opacity-60 hover:scale-105
            `}
            style={{
              fontWeight: 200,
              fontSize: '0.8rem',
              letterSpacing: '0.12em',
              borderWidth: '1px'
            }}
          >
            <span className="relative z-10">VIEW FULL ARCHIVE</span>

            {/* Animated background */}
            <div
              className={`
                absolute inset-0
                ${needsDarkText ? 'bg-gray-900' : 'bg-white'}
                transform scale-x-0 group-hover:scale-x-100
                transition-transform duration-500 ease-out origin-left
                opacity-5
              `}
            />
          </button>
        </div>
      </div>
    </section>
  );
}