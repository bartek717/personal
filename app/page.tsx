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

  return (
    <div className="min-h-screen snap-y snap-mandatory overflow-y-scroll h-screen" style={{ scrollBehavior: 'smooth', scrollSnapType: 'y mandatory', backgroundColor: currentColors.secondaryBg }}>
      <KeyboardNavigation />

      {/* Hero Wrapper - includes top spacing and snap point */}
      <div className="snap-start">
        {/* Top Spacer to show background color */}
        <div className="h-12" />

        <div className="px-8">
          {/* Main Homepage Section */}
          <section id="hero" className="relative flex flex-col rounded-[4rem] overflow-hidden" style={{ height: 'calc(100vh - 6rem)' }}>
          {/* Background with Noise */}
          <BackgroundGradient currentColors={currentColors} />

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
      <div className="relative rounded-[4rem] overflow-hidden mt-8 snap-start px-8 mb-8" style={{ backgroundColor: currentColors.secondaryBg }}>
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