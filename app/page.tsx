'use client';

import { useState } from 'react';
import { colorSchemes, type ColorSchemeKey } from './components/colorSchemes';
import ColorPaletteSelector from './components/ColorPaletteSelector';
import BackgroundGradient from './components/BackgroundGradient';
import Header from './components/Header';
import HeroBio from './components/HeroBio';
import ContactSection from './components/ContactSection';
import ScrollArrow from './components/ScrollArrow';
import EssaysSection from './components/EssaysSection';
import FilmSection from './components/FilmSection';
import ProjectsSection from './components/ProjectsSection';
import ExperienceSection from './components/ExperienceSection';
import Footer from './components/Footer';

export default function Home() {
  const [currentScheme, setCurrentScheme] = useState<ColorSchemeKey>('gradient');
  const currentColors = colorSchemes[currentScheme];

  return (
    <div className="min-h-screen snap-y snap-mandatory overflow-y-scroll h-screen" style={{ scrollBehavior: 'smooth', scrollSnapType: 'y mandatory', backgroundColor: currentColors.secondaryBg }}>
      {/* Main Homepage Section */}
      <section id="hero" className="relative min-h-screen flex flex-col snap-start snap-always rounded-b-[4rem] overflow-hidden">
        {/* Background with Noise */}
        <BackgroundGradient currentColors={currentColors} />

        {/* Color Palette Selector */}
        <ColorPaletteSelector
          currentScheme={currentScheme}
          setCurrentScheme={setCurrentScheme}
          currentColors={currentColors}
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col min-h-screen">
          <Header currentColors={currentColors} />
          <HeroBio currentColors={currentColors} />
          <ContactSection currentColors={currentColors} />
          <ScrollArrow currentColors={currentColors} />
        </div>
      </section>

      {/* Content Sections with Unified Background */}
      <div className="relative" style={{ backgroundColor: currentColors.secondaryBg }}>
        {/* Essays Section */}
        <div id="essays" className="snap-start snap-always">
          <EssaysSection currentColors={currentColors} />
        </div>

        {/* Film Section */}
        <div id="film" className="snap-start snap-always">
          <FilmSection currentColors={currentColors} />
        </div>

        {/* Projects Section */}
        <div id="projects" className="snap-start snap-always">
          <ProjectsSection currentColors={currentColors} />
        </div>

        {/* Experience Section */}
        <div id="experience" className="snap-start snap-always">
          <ExperienceSection currentColors={currentColors} />
          <Footer currentColors={currentColors} />
        </div>
      </div>
    </div>
  );
}