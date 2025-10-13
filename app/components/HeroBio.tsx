import { type ColorScheme } from './colorSchemes';

interface HeroBioProps {
  currentColors: ColorScheme;
}

export default function HeroBio({ currentColors }: HeroBioProps) {
  return (
    <div className="flex-1 flex items-center px-8 py-16">
      <div className="max-w-4xl">
        <p className={`text-lg md:text-xl font-serif ${currentColors.textColor} leading-relaxed`}>
          Hi, I'm Inga Hampton. Also known as{' '}
          <span className="font-medium">@ingapng</span> & I make{' '}
          <em className="italic">over complicated</em>{' '}
          <em className="italic">art</em> on Figma. I'm based on a micro-farm in N. Ireland—
          <em className="italic">proud donkey mom!</em> I'm a very happy Product & Brand designer at{' '}
          <em className="italic">Raycast</em>.
        </p>
      </div>
    </div>
  );
}