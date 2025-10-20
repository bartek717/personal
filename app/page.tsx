'use client';

import { useState } from 'react';
import { colorSchemes, type ColorSchemeKey } from './components/config/colorSchemes';
import ColorPaletteSelector from './components/ui/ColorPaletteSelector';
import BackgroundGradient from './components/ui/BackgroundGradient';
import Header from './components/ui/Header';
import Footer from './components/ui/Footer';
import KeyboardNavigation from './components/ui/KeyboardNavigation';
import HeroBio from './components/sections/HeroBio';
import EssaysSection from './components/sections/EssaysSection';
import FilmSection from './components/sections/FilmSection';
import ProjectsSection from './components/sections/ProjectsSection';
import ExperienceSection from './components/sections/ExperienceSection';

export default function Home() {
  const [currentScheme, setCurrentScheme] = useState<ColorSchemeKey>('sage');
  const currentColors = colorSchemes[currentScheme];

  // Section opacity configuration - Adjust these values to control transparency (0-100)
  const sectionOpacities = {
    projects: { base: 30, hover: 35 },      // Projects section background opacity
    experience: { base: 25, hover: 30 },    // Experience section background opacity
    essays: { base: 28, hover: 32 },        // Essays section background opacity
  };

  return (
    <div className="min-h-screen snap-y snap-mandatory overflow-y-scroll h-screen" style={{ scrollBehavior: 'smooth', scrollSnapType: 'y mandatory', backgroundColor: currentColors.secondaryBg }}>
      <KeyboardNavigation />

      {/* Hero Wrapper - includes top spacing and snap point */}
      <div className="snap-start">
        {/* Top Spacer to show background color */}
        <div className="h-8 sm:h-12" />

        <div className="px-4 sm:px-6 lg:px-8">
          {/* Main Homepage Section */}
          <section id="hero" className="relative flex flex-col rounded-[2rem] sm:rounded-[3rem] lg:rounded-[4rem] overflow-hidden" style={{ height: 'calc(100vh - 4rem)' }}>
          {/* Background with Noise */}
          <BackgroundGradient currentColors={currentColors} currentScheme={currentScheme} />

          {/* Color Palette Selector */}
          <ColorPaletteSelector
            currentScheme={currentScheme}
            setCurrentScheme={setCurrentScheme}
            currentColors={currentColors}
          />

          {/* Content */}
          <div className="relative z-10 flex flex-col min-h-full">
            <Header currentColors={currentColors} />
            <HeroBio currentColors={currentColors} />
          </div>
          </section>
        </div>
      </div>

      {/* Content Sections with Unified Background */}
      <div className="relative rounded-[2rem] sm:rounded-[3rem] lg:rounded-[4rem] overflow-hidden mt-4 sm:mt-6 lg:mt-8 snap-start px-4 sm:px-6 lg:px-8 mb-4 sm:mb-6 lg:mb-8" style={{ backgroundColor: currentColors.secondaryBg }}>
        {/* Film Section */}
        <div id="film" className="snap-start snap-always">
          <FilmSection currentColors={currentColors} />
        </div>

        {/* Essays Section */}
        <div id="essays" className="snap-start snap-always">
          <EssaysSection
            currentColors={currentColors}
            currentScheme={currentScheme}
            bgOpacity={sectionOpacities.essays.base}
            bgOpacityHover={sectionOpacities.essays.hover}
          />
        </div>

        {/* Projects Section */}
        <div id="projects" className="snap-start snap-always">
          <ProjectsSection
            currentColors={currentColors}
            currentScheme={currentScheme}
            bgOpacity={sectionOpacities.projects.base}
            bgOpacityHover={sectionOpacities.projects.hover}
          />
        </div>

        {/* Experience Section */}
        <div id="experience" className="snap-start snap-always">
          <ExperienceSection
            currentColors={currentColors}
            currentScheme={currentScheme}
            bgOpacity={sectionOpacities.experience.base}
            bgOpacityHover={sectionOpacities.experience.hover}
          />
          <Footer currentColors={currentColors} />
        </div>
      </div>
    </div>
  );
}