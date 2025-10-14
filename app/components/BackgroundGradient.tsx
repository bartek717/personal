import { type ColorScheme } from './colorSchemes';

interface BackgroundGradientProps {
  currentColors: ColorScheme;
}

export default function BackgroundGradient({ currentColors }: BackgroundGradientProps) {
  return (
    <div
      className={`absolute inset-0 ${currentColors.background}`}
      style={currentColors.customGradient ? { background: currentColors.customGradient } : {}}
    >
      {/* Original noise pattern for hero section */}
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
      }} />

      {/* Subtle radial gradient overlay for depth */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.1) 100%)`
        }}
      />
    </div>
  );
}