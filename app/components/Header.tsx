import { type ColorScheme } from './colorSchemes';

interface HeaderProps {
  currentColors: ColorScheme;
}

export default function Header({ currentColors }: HeaderProps) {
  return (
    <div className="pt-16 px-8">
      <h1
        className="text-4xl md:text-5xl font-serif"
        style={{
          fontWeight: 300,
          letterSpacing: '0.02em',
          fontStyle: 'oblique 12deg',
          color: currentColors.textPrimary
        }}
      >
        moja droga
      </h1>
      <div
        className="w-full h-px mt-8"
        style={{ backgroundColor: currentColors.borderColor }}
      />
    </div>
  );
}