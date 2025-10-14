import { type ColorScheme } from '../config/colorSchemes';

interface HeaderProps {
  currentColors: ColorScheme;
}

export default function Header({ currentColors }: HeaderProps) {
  return (
    <div className="pt-12 px-16 pb-16">
      <h1
        className="text-3xl md:text-4xl font-serif mb-4"
        style={{
          fontWeight: 500,
          letterSpacing: '0.02em',
          fontStyle: 'oblique 12deg',
          color: currentColors.textPrimary
        }}
      >
        moja droga
      </h1>

      <div className="flex gap-6 items-center">
        <a
          href="https://www.linkedin.com/in/bartek-kowalski-68117b1ab/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-serif transition-all duration-300 hover:opacity-70"
          style={{ color: currentColors.accentColor, fontWeight: 300 }}
        >
          linkedin →
        </a>
        <a
          href="https://x.com/bartekkowalski_"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-serif transition-all duration-300 hover:opacity-70"
          style={{ color: currentColors.accentColor, fontWeight: 300 }}
        >
          twitter →
        </a>
        <a
          href="mailto:bartekkowalski465@gmail.com"
          className="text-sm font-serif transition-all duration-300 hover:opacity-70"
          style={{ color: currentColors.accentColor, fontWeight: 300 }}
        >
          email →
        </a>
      </div>
    </div>
  );
}