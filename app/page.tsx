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

      {/* Essays Section */}
      <EssaysSection currentColors={currentColors} />

      {/* Film Section */}
      <FilmSection currentColors={currentColors} />
    </div>
  );
}