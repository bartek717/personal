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
      <div className="flex justify-between items-center">
        <span
          className="text-lg font-serif"
          style={{ color: currentColors.textPrimary }}
        >
          contact
        </span>
        <a
          href="mailto:bartekkowalski465@gmail.com"
          className="text-lg font-serif transition-all duration-300"
          style={{ color: currentColors.accentColor }}
        >
          bartekkowalski465@gmail.com →
        </a>
      </div>
      <div
        className="w-full h-px mt-8"
        style={{ backgroundColor: currentColors.borderColor }}
      />
    </div>
  );
}