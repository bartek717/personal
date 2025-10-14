import { type ColorScheme } from './colorSchemes';

interface HeroBioProps {
  currentColors: ColorScheme;
}

export default function HeroBio({ currentColors }: HeroBioProps) {
  return (
    <div className="flex-1 flex items-center px-8 py-16">
      <div className="max-w-4xl">
        <h1
          className="text-4xl md:text-5xl font-serif mb-6"
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
    </div>
  );
}