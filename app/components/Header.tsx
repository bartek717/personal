import { type ColorScheme } from './colorSchemes';

interface HeaderProps {
  currentColors: ColorScheme;
}

export default function Header({ currentColors }: HeaderProps) {
  return (
    <div className="pt-16 px-8">
      <h1 className={`text-4xl md:text-5xl font-serif ${currentColors.textColor} tracking-tight`}>
        ingapng
      </h1>
      <div className={`w-full h-px ${currentColors.borderColor} mt-8`}></div>
    </div>
  );
}