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

  return (
    <section className="relative">
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
              Experience
            </h2>
            <div className="pb-3 opacity-50" style={{ color: currentColors.textSecondary }}>
              <span style={{ fontWeight: 200, fontSize: '0.8rem' }}>
                {experiences.length} positions
              </span>
            </div>
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="max-w-7xl mx-auto mt-4">
          <div className="relative">
            {/* Vertical Timeline Line */}
            <div
              className="absolute left-0 top-0 bottom-0 w-px opacity-20 hidden lg:block"
              style={{ left: '2rem', backgroundColor: currentColors.borderColor }}
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
                      border-b border-opacity-10
                      transition-all duration-500 ease-out
                      ${isHovered ? 'lg:pl-6' : ''}
                    `}
                    style={{
                      borderColor: currentColors.borderColor,
                      backgroundColor: isHovered ? `${currentColors.primaryBg}25` : 'transparent'
                    }}
                    onMouseEnter={() => setHoveredId(exp.id)}
                    onMouseLeave={() => setHoveredId(null)}
                  >
                    <div className="py-4 lg:py-6 lg:pl-20">
                      {/* Timeline Dot */}
                      <div
                        className={`
                          absolute left-0 top-1/2 -translate-y-1/2
                          w-3 h-3 rounded-full
                          border-2
                          transition-all duration-300
                          ${isHovered ? 'scale-150 border-opacity-60' : 'border-opacity-30'}
                          hidden lg:block
                        `}
                        style={{
                          left: 'calc(2rem - 6px)',
                          borderColor: currentColors.borderColor,
                          backgroundColor: currentColors.accentColor
                        }}
                      />

                      {/* Content Grid */}
                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6">
                        {/* Left Column - Period & Location */}
                        <div className="lg:col-span-3">
                          <div
                            className={`transition-opacity duration-300 mb-2 ${
                              isHovered ? 'opacity-70' : 'opacity-50'
                            }`}
                            style={{ color: currentColors.textSecondary }}
                          >
                            <span style={{ fontWeight: 200, fontSize: '0.8rem', letterSpacing: '0.05em' }}>
                              {exp.period}
                            </span>
                          </div>
                          <div className="opacity-40" style={{ color: currentColors.textSecondary }}>
                            <span style={{ fontWeight: 200, fontSize: '0.75rem' }}>
                              {exp.location}
                            </span>
                          </div>
                        </div>

                        {/* Right Column - Main Content */}
                        <div className="lg:col-span-9">
                          {/* Company & Role */}
                          <div className="mb-2">
                            <h3
                              className={`
                                mb-1
                                transition-all duration-300
                                ${isHovered ? 'translate-x-2' : ''}
                              `}
                              style={{
                                fontWeight: 200,
                                fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
                                letterSpacing: '-0.01em',
                                lineHeight: 1.2,
                                color: currentColors.textPrimary
                              }}
                            >
                              {exp.role}
                            </h3>
                            <div
                              className="opacity-60"
                              style={{ fontWeight: 300, fontSize: '0.8rem', color: currentColors.textSecondary }}
                            >
                              {exp.company}
                            </div>
                          </div>

                          {/* Description */}
                          <p
                            className={`
                              mb-2
                              transition-all duration-300
                              ${isHovered ? 'opacity-80' : 'opacity-60'}
                            `}
                            style={{
                              fontWeight: 300,
                              fontSize: '0.8rem',
                              lineHeight: 1.4,
                              maxWidth: '70ch',
                              color: currentColors.textSecondary
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
                                  className="opacity-60 text-sm leading-relaxed"
                                  style={{ listStyleType: '—', paddingLeft: '0.5rem', color: currentColors.textSecondary }}
                                >
                                  {highlight}
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Tags & Actions */}
                          <div className="flex flex-wrap items-center gap-1.5 mt-2">
                            {exp.tags.map(tag => (
                              <span
                                key={tag}
                                className={`
                                  px-2.5 py-0.5
                                  transition-opacity duration-300
                                  ${isHovered ? 'opacity-50' : 'opacity-30'}
                                `}
                                style={{
                                  fontWeight: 200,
                                  fontSize: '0.65rem',
                                  letterSpacing: '0.03em',
                                  color: currentColors.textSecondary
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
                                transition-all duration-300
                                ${isHovered ? 'opacity-60' : 'opacity-30'}
                                hover:opacity-80
                              `}
                              style={{ fontWeight: 200, fontSize: '0.7rem', letterSpacing: '0.05em', color: currentColors.accentColor }}
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
        <div className="max-w-7xl mx-auto mt-6 flex justify-end items-center">

          <a
            href="https://drive.google.com/file/d/1iuQtqLn_bgixLeMDdDbBMLOVnINRVgLS/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden px-10 py-4 transition-all duration-500 hover:border-opacity-60 inline-block"
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
            <span className="relative z-10">DOWNLOAD CV</span>
            <div
              className="absolute inset-0 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out opacity-5"
              style={{ backgroundColor: currentColors.accentColor }}
            />
          </a>
        </div>
      </div>
    </section>
  );
}
