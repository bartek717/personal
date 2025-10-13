'use client';

import { useState } from 'react';
import { colorSchemes, type ColorSchemeKey } from './components/colorSchemes';
import ColorPaletteSelector from './components/ColorPaletteSelector';
import BackgroundGradient from './components/BackgroundGradient';
import Header from './components/Header';
import HeroBio from './components/HeroBio';
import ContactSection from './components/ContactSection';
import ScrollArrow from './components/ScrollArrow';

export default function Home() {
  const [currentScheme, setCurrentScheme] = useState<ColorSchemeKey>('gradient');
  const currentColors = colorSchemes[currentScheme];

  return (
    <div className="min-h-screen">
      {/* Main Homepage Section */}
      <section className="relative min-h-screen flex flex-col">
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

      {/* Next Section (Blank for now) */}
      <section id="next-section" className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-serif text-gray-800 mb-4">Next Section</h2>
          <p className="text-gray-600">This section is blank for now as requested.</p>
        </div>
      </section>
    </div>
  );
}