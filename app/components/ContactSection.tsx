import { type ColorScheme } from './colorSchemes';

interface ContactSectionProps {
  currentColors: ColorScheme;
}

export default function ContactSection({ currentColors }: ContactSectionProps) {
  return (
    <div className="px-8 pb-16">
      <div className={`w-full h-px ${currentColors.borderColor} mb-8`}></div>
      <div className="flex justify-between items-center">
        <span className={`text-lg font-serif ${currentColors.textColor}`}>contact</span>
        <a
          href="mailto:hello@ingahampton.com"
          className={`text-lg font-serif ${currentColors.textColor} hover:opacity-70 transition-opacity`}
        >
          hello@ingahampton.com →
        </a>
      </div>
      <div className={`w-full h-px ${currentColors.borderColor} mt-8`}></div>
    </div>
  );
}