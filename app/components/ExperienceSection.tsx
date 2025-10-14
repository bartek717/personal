'use client';

import { useState } from 'react';
import { type ColorScheme } from './colorSchemes';

interface Experience {
  id: number;
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  highlights: string[];
  tags: string[];
}

interface ExperienceSectionProps {
  currentColors: ColorScheme;
}

const experiences: Experience[] = [
  {
    id: 1,
    company: "Company Name",
    role: "Senior Software Engineer",
    period: "2023 - Present",
    location: "San Francisco, CA",
    description: "Leading development of core platform features and mentoring junior developers. Architecting scalable solutions for high-traffic applications.",
    highlights: [
      "Led migration to microservices architecture",
      "Improved system performance by 40%",
      "Mentored team of 5 engineers"
    ],
    tags: ["React", "Node.js", "AWS", "TypeScript"]
  },
  {
    id: 2,
    company: "Previous Company",
    role: "Software Engineer",
    period: "2021 - 2023",
    location: "New York, NY",
    description: "Built and maintained full-stack web applications. Collaborated with product and design teams to deliver user-focused features.",
    highlights: [
      "Shipped 15+ major features",
      "Reduced load times by 50%",
      "Implemented CI/CD pipeline"
    ],
    tags: ["JavaScript", "Python", "PostgreSQL", "Docker"]
  },
  {
    id: 3,
    company: "First Company",
    role: "Junior Developer",
    period: "2019 - 2021",
    location: "Remote",
    description: "Started career building web applications and learning best practices. Contributed to multiple client projects and internal tools.",
    highlights: [
      "Built 10+ client websites",
      "Learned agile methodologies",
      "Contributed to open source"
    ],
    tags: ["HTML/CSS", "JavaScript", "Git", "REST APIs"]
  }
];

export default function ExperienceSection({ currentColors }: ExperienceSectionProps) {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const needsDarkText = currentColors.textColor === 'text-gray-800';
  const textColor = needsDarkText ? 'text-gray-900' : currentColors.textColor;
  const lightTextColor = needsDarkText ? 'text-gray-600' : currentColors.textColor;
  const borderColor = needsDarkText ? 'border-gray-300' : currentColors.borderColor;

  return (
    <section
      className={`min-h-screen ${currentColors.background} relative`}
      style={currentColors.customGradient ? { background: currentColors.customGradient } : {}}
    >
      <div className="relative z-10 px-8 lg:px-16 py-16">
        {/* Header Section */}
        <div className="max-w-7xl mx-auto">
          <div className={`flex items-end justify-between border-b ${borderColor} border-opacity-20`}>
            <h2
              className={`${textColor} pb-8`}
              style={{
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 100,
                letterSpacing: '-0.02em',
                lineHeight: 1
              }}
            >
              Experience
            </h2>
            <div className={`pb-4 ${lightTextColor} opacity-50`}>
              <span style={{ fontWeight: 200, fontSize: '0.875rem' }}>
                {experiences.length} positions
              </span>
            </div>
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="max-w-7xl mx-auto mt-8">
          <div className="relative">
            {/* Vertical Timeline Line */}
            <div
              className={`absolute left-0 top-0 bottom-0 w-px ${borderColor} opacity-20 hidden lg:block`}
              style={{ left: '2rem' }}
            />

            {/* Experience Items */}
            <div className="space-y-0">
              {experiences.map((exp, index) => {
                const isHovered = hoveredId === exp.id;
                const isExpanded = expandedId === exp.id;

                return (
                  <article
                    key={exp.id}
                    className={`
                      group relative
                      ${borderColor} border-b border-opacity-10
                      transition-all duration-500 ease-out
                      ${isHovered ? 'lg:pl-6' : ''}
                    `}
                    onMouseEnter={() => setHoveredId(exp.id)}
                    onMouseLeave={() => setHoveredId(null)}
                  >
                    <div className="py-8 lg:py-10 lg:pl-20">
                      {/* Timeline Dot */}
                      <div
                        className={`
                          absolute left-0 top-1/2 -translate-y-1/2
                          w-3 h-3 rounded-full
                          ${borderColor} border-2
                          ${currentColors.background}
                          transition-all duration-300
                          ${isHovered ? 'scale-150 border-opacity-60' : 'border-opacity-30'}
                          hidden lg:block
                        `}
                        style={{
                          left: 'calc(2rem - 6px)',
                          background: currentColors.customGradient || ''
                        }}
                      />

                      {/* Content Grid */}
                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6">
                        {/* Left Column - Period & Location */}
                        <div className="lg:col-span-3">
                          <div
                            className={`${lightTextColor} transition-opacity duration-300 mb-2 ${
                              isHovered ? 'opacity-70' : 'opacity-50'
                            }`}
                          >
                            <span style={{ fontWeight: 200, fontSize: '0.8rem', letterSpacing: '0.05em' }}>
                              {exp.period}
                            </span>
                          </div>
                          <div className={`${lightTextColor} opacity-40`}>
                            <span style={{ fontWeight: 200, fontSize: '0.75rem' }}>
                              {exp.location}
                            </span>
                          </div>
                        </div>

                        {/* Right Column - Main Content */}
                        <div className="lg:col-span-9">
                          {/* Company & Role */}
                          <div className="mb-4">
                            <h3
                              className={`
                                ${textColor} mb-1
                                transition-all duration-300
                                ${isHovered ? 'translate-x-2' : ''}
                              `}
                              style={{
                                fontWeight: 200,
                                fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)',
                                letterSpacing: '-0.01em',
                                lineHeight: 1.2
                              }}
                            >
                              {exp.role}
                            </h3>
                            <div
                              className={`${lightTextColor} opacity-60`}
                              style={{ fontWeight: 300, fontSize: '0.95rem' }}
                            >
                              {exp.company}
                            </div>
                          </div>

                          {/* Description */}
                          <p
                            className={`
                              ${lightTextColor} mb-4
                              transition-all duration-300
                              ${isHovered ? 'opacity-80' : 'opacity-60'}
                            `}
                            style={{
                              fontWeight: 300,
                              fontSize: '0.9rem',
                              lineHeight: 1.6,
                              maxWidth: '70ch'
                            }}
                          >
                            {exp.description}
                          </p>

                          {/* Expandable Highlights */}
                          <div
                            className={`
                              overflow-hidden
                              transition-all duration-500 ease-out
                              ${isExpanded ? 'max-h-96 opacity-100 mb-4' : 'max-h-0 opacity-0'}
                            `}
                          >
                            <ul className="space-y-2 ml-4">
                              {exp.highlights.map((highlight, idx) => (
                                <li
                                  key={idx}
                                  className={`${lightTextColor} opacity-60 text-sm leading-relaxed`}
                                  style={{ listStyleType: '—', paddingLeft: '0.5rem' }}
                                >
                                  {highlight}
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Tags & Actions */}
                          <div className="flex flex-wrap items-center gap-3 mt-4">
                            {exp.tags.map(tag => (
                              <span
                                key={tag}
                                className={`
                                  px-3 py-1
                                  ${lightTextColor}
                                  transition-opacity duration-300
                                  ${isHovered ? 'opacity-50' : 'opacity-30'}
                                `}
                                style={{
                                  fontWeight: 200,
                                  fontSize: '0.7rem',
                                  letterSpacing: '0.03em'
                                }}
                              >
                                {tag}
                              </span>
                            ))}

                            {/* Expand Toggle */}
                            <button
                              onClick={() => setExpandedId(isExpanded ? null : exp.id)}
                              className={`
                                ml-auto
                                ${lightTextColor}
                                transition-all duration-300
                                ${isHovered ? 'opacity-60' : 'opacity-30'}
                                hover:opacity-80
                              `}
                              style={{ fontWeight: 200, fontSize: '0.7rem', letterSpacing: '0.05em' }}
                            >
                              {isExpanded ? '← LESS' : 'MORE →'}
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="max-w-7xl mx-auto mt-12 flex justify-end items-center">

          <a
            href="https://drive.google.com/file/d/1iuQtqLn_bgixLeMDdDbBMLOVnINRVgLS/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className={`
              group relative overflow-hidden
              px-10 py-4
              ${borderColor}
              ${textColor}
              transition-all duration-500
              hover:border-opacity-60
              inline-block
            `}
            style={{
              fontWeight: 200,
              fontSize: '0.875rem',
              letterSpacing: '0.05em',
              borderWidth: '0.5px'
            }}
          >
            <span className="relative z-10">DOWNLOAD CV</span>
            <div
              className={`
                absolute inset-0
                ${needsDarkText ? 'bg-gray-900' : 'bg-white'}
                transform -translate-x-full group-hover:translate-x-0
                transition-transform duration-500 ease-out
                opacity-5
              `}
            />
          </a>
        </div>
      </div>
    </section>
  );
}
