import { type ColorScheme } from './colorSchemes';

interface ContactSectionProps {
  currentColors: ColorScheme;
}

export default function ContactSection({ currentColors }: ContactSectionProps) {
  return (
    <div className="px-8 pb-16">
      <div
        className="w-full h-px mb-8"
        style={{ backgroundColor: currentColors.borderColor }}
      />
      <div className="flex justify-between items-center flex-wrap gap-4">
        <span
          className="text-lg font-serif"
          style={{ color: currentColors.textPrimary }}
        >
          
        </span>
        <div className="flex gap-6 items-center">
          <a
            href="https://www.linkedin.com/in/bartek-kowalski-68117b1ab/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg font-serif transition-all duration-300 hover:opacity-70"
            style={{ color: currentColors.accentColor }}
          >
            linkedin →
          </a>
          <a
            href="https://x.com/bartekkowalski_"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg font-serif transition-all duration-300 hover:opacity-70"
            style={{ color: currentColors.accentColor }}
          >
            twitter →
          </a>
          <a
            href="mailto:bartekkowalski465@gmail.com"
            className="text-lg font-serif transition-all duration-300 hover:opacity-70"
            style={{ color: currentColors.accentColor }}
          >
            email →
          </a>
        </div>
      </div>
    </div>
  );
}