import { type ColorScheme } from '../config/colorSchemes';

interface HeroBioProps {
  currentColors: ColorScheme;
}

export default function HeroBio({ currentColors }: HeroBioProps) {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="flex-1 flex flex-col px-16 pt-8 pb-20">
      <div className="max-w-4xl mb-auto">
        <h1
          className="text-6xl md:text-6xl font-serif mb-6"
          style={{
            fontWeight: 300,
            letterSpacing: '-0.02em',
            color: currentColors.textPrimary
          }}
        >
          Bartek Kowalski
        </h1>
        <p
          className="text-lg md:text-xl font-serif leading-relaxed"
          style={{
            fontWeight: 300,
            color: currentColors.textSecondary
          }}
        >
          I build technology, write evidence-backed opinions, and cultivate culture through meetups, projects, and everyday practice. Currently @ Queens.
        </p>
      </div>

      <nav className="flex gap-8 items-center mt-auto">
        <button
          onClick={() => scrollToSection('essays')}
          className="text-sm font-serif transition-all duration-300 hover:opacity-70 flex items-center gap-2"
          style={{ color: currentColors.textSecondary, fontWeight: 300 }}
        >
          Essays & Opinions <span style={{ fontSize: '0.7rem' }}>↓</span>
        </button>
        <button
          onClick={() => scrollToSection('film')}
          className="text-sm font-serif transition-all duration-300 hover:opacity-70 flex items-center gap-2"
          style={{ color: currentColors.textSecondary, fontWeight: 300 }}
        >
          Film <span style={{ fontSize: '0.7rem' }}>↓</span>
        </button>
        <button
          onClick={() => scrollToSection('projects')}
          className="text-sm font-serif transition-all duration-300 hover:opacity-70 flex items-center gap-2"
          style={{ color: currentColors.textSecondary, fontWeight: 300 }}
        >
          Projects <span style={{ fontSize: '0.7rem' }}>↓</span>
        </button>
        <button
          onClick={() => scrollToSection('experience')}
          className="text-sm font-serif transition-all duration-300 hover:opacity-70 flex items-center gap-2"
          style={{ color: currentColors.textSecondary, fontWeight: 300 }}
        >
          Experience <span style={{ fontSize: '0.7rem' }}>↓</span>
        </button>
      </nav>
    </div>
  );
}