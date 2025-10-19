'use client';

import { useState } from 'react';
import { type ColorScheme } from '../config/colorSchemes';

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
  bgOpacity?: number; // Base background opacity (0-100)
  bgOpacityHover?: number; // Hover background opacity (0-100)
}

const experiences: Experience[] = [
  {
    id: 1,
    company: "Questrade",
    role: "Technical Product Manager Intern - Future Leaders Program",
    period: "May 2025 - Aug 2025",
    location: "Toronto, ON",
    description: "Led product initiatives across knowledge management, personal finance tools, and investment research for Canada's leading online brokerage.",
    highlights: [
      "Owned roadmap & launch of a new knowledge base; wrote PRDs, PRFAQs, led BigQuery/NLP on call transcripts to close content gaps, leading to 40% fewer Tier-1 CS tickets, $500,000 saved per year; docs used by 100,000+ per year.",
      "Supported a new Personal Financial Manager app, running 8 discovery interviews; instrumented Amplitude funnels, and iterated onboarding to drive +20% completion in alpha.",
      "Surveyed 27 respondents (ages 18-25) on investment-news habits; synthesized findings into 2 opportunity areas and presented recommendations to the C-suite."
    ],
    tags: ["Product Management", "BigQuery", "NLP", "PRD", "Amplitude", "User Research"]
  },
  {
    id: 2,
    company: "CallSmart",
    role: "Product & Full-Stack Developer Intern",
    period: "Apr 2023 - Sep 2023",
    location: "Toronto, ON",
    description: "Led product roadmap and development of an AI communications platform for dental clinics, driving significant business impact and operational efficiency.",
    highlights: [
      "Led product roadmap and full-stack development (Next.js, Supabase) of an AI communications platform adopted by 200+ dental clinics, contributing to $12M per year in potential revenue, and cutting manual follow-ups by 85%.",
      "Interviewed 4 clinic owners and 11 receptionists, distilled JTBD into PRDs and UI/UX recommendations.",
      "Created funnels and iterated onboarding, prioritized triage/templates/analytics to increase agent efficiency."
    ],
    tags: ["Next.js", "Supabase", "Product Management", "Full-Stack", "AI", "User Research"]
  },
  {
    id: 3,
    company: "Exavalu",
    role: "Software Engineering Intern",
    period: "Feb 2024 - Aug 2024",
    location: "Toronto, ON",
    description: "Developed vehicle fleet management features and optimized backend systems for improved cost efficiency and security.",
    highlights: [
      "Shipped vehicle fleet management features (Java, Spring Boot, MySQL) for internal ops users.",
      "Optimized third-party API usage; -$1,500/mo cost and improved latency/throughput; implemented Spring Security."
    ],
    tags: ["Java", "Spring Boot", "MySQL", "Spring Security", "API Optimization"]
  },
  {
    id: 4,
    company: "Distributive",
    role: "Software Engineering Intern",
    period: "Jan 2023 - Jul 2023",
    location: "Kingston, ON",
    description: "Enhanced user engagement through interactive frontend features and implemented secure backend authentication systems.",
    highlights: [
      "Boosted user engagement by 25% through responsive and interactive features, including parallax scrolling.",
      "Implemented features using React and TypeScript for optimized code performance and maintainability.",
      "Deployed a Node.js backend to handle user authentication and security."
    ],
    tags: ["React", "TypeScript", "Node.js", "Frontend Development"]
  },
  {
    id: 5,
    company: "University of Toronto",
    role: "Research Intern",
    period: "Jan 2022 - May 2022",
    location: "Toronto, ON",
    description: "Collaborated with graduate research lab on mathematics project applying machine learning to pattern recognition problems.",
    highlights: [
      "Collaborated with a graduate research lab on a mathematics project; scoped experiments/approach with faculty.",
      "Constructed a Gaussian Naive Bayes program in Python to classify corrupted number data with 97% accuracy.",
      "Communicated and presented my work to a panel of 20+ graduate students and faculty members."
    ],
    tags: ["Python", "Machine Learning", "Research", "Data Science"]
  }
];

export default function ExperienceSection({
  currentColors,
  bgOpacity = 25,
  bgOpacityHover = 30
}: ExperienceSectionProps) {
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
            <div className="space-y-2">
              {experiences.map((exp, index) => {
                const isHovered = hoveredId === exp.id;
                const isExpanded = expandedId === exp.id;

                return (
                  <article
                    key={exp.id}
                    className={`
                      group relative
                      border rounded-xl
                      transition-all duration-500 ease-out
                      overflow-hidden mb-4
                    `}
                    style={{
                      borderColor: isHovered ? `${currentColors.accentColor}70` : `${currentColors.secondaryAccent}60`,
                      backgroundColor: `${currentColors.secondaryAccent}${Math.round(bgOpacity * 2.55).toString(16).padStart(2, '0')}`,
                      backgroundImage: isHovered
                        ? `linear-gradient(90deg, ${currentColors.secondaryAccent}${Math.round(bgOpacityHover * 2.55).toString(16).padStart(2, '0')} 0%, ${currentColors.accentColor}18 100%)`
                        : 'none',
                      transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
                      boxShadow: isHovered
                        ? `0 12px 24px -8px ${currentColors.secondaryAccent}45, 0 6px 12px -4px ${currentColors.accentColor}25`
                        : `0 2px 8px -4px ${currentColors.secondaryAccent}35`
                    }}
                    onMouseEnter={() => setHoveredId(exp.id)}
                    onMouseLeave={() => setHoveredId(null)}
                  >
                    {/* Left accent bar */}
                    <div
                      className={`
                        absolute left-0 top-0 bottom-0 w-1 transition-all duration-500
                        ${isHovered ? 'opacity-100' : 'opacity-60'}
                      `}
                      style={{
                        backgroundColor: isHovered ? currentColors.secondaryAccent : currentColors.accentColor,
                        borderRadius: '0 4px 4px 0'
                      }}
                    />
                    <div className="py-4 lg:py-6 lg:pl-20">
                      {/* Content Grid */}
                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 items-start">
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

                        {/* Middle Column - Main Content */}
                        <div className="lg:col-span-7">
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

                          {/* Tags */}
                          <div className="flex flex-wrap items-center gap-1.5 mt-2">
                            {exp.tags.map((tag, index) => (
                              <span
                                key={tag}
                                className={`
                                  px-2.5 py-0.5 rounded-md border
                                  transition-all duration-300
                                  ${isHovered ? 'opacity-80' : 'opacity-60'}
                                `}
                                style={{
                                  fontWeight: 300,
                                  fontSize: '0.65rem',
                                  letterSpacing: '0.03em',
                                  backgroundColor: index % 3 === 0
                                    ? `${currentColors.accentColor}05`
                                    : index % 3 === 1
                                      ? `${currentColors.secondaryBg}06`
                                      : `${currentColors.secondaryAccent}04`,
                                  borderColor: index % 3 === 0
                                    ? `${currentColors.accentColor}40`
                                    : index % 3 === 1
                                      ? `${currentColors.secondaryBg}40`
                                      : `${currentColors.secondaryAccent}40`,
                                  color: currentColors.textPrimary
                                }}
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Right Column - Arrow */}
                        <div className="lg:col-span-2 flex justify-start lg:justify-end items-start mt-4 lg:mt-0 lg:pr-4">
                          <button
                            onClick={() => setExpandedId(isExpanded ? null : exp.id)}
                            className={`
                              transition-all duration-500 ease-out
                              ${isHovered
                                ? 'translate-x-2 opacity-100'
                                : 'translate-x-0 opacity-0 lg:opacity-30'
                              }
                              hover:opacity-100
                            `}
                            style={{
                              fontWeight: 100,
                              fontSize: '1.5rem',
                              color: currentColors.accentColor
                            }}
                          >
                            {isExpanded ? '←' : '→'}
                          </button>
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
