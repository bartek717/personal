import { type ColorScheme } from '../config/colorSchemes';
import ColorWave from './ColorWave';

interface BackgroundGradientProps {
  currentColors: ColorScheme;
  currentScheme?: string;
}

export default function BackgroundGradient({ currentColors, currentScheme }: BackgroundGradientProps) {
  // Use wave animation for the wave color scheme
  const isWaveScheme = currentScheme === 'wave';
  const waveColors = ['#777C6D', '#B7B89F', '#CBCBCB', '#EEEEEE'];

  return (
    <div
      className="absolute inset-0"
      style={{ backgroundColor: currentColors.primaryBg }}
    >
      {isWaveScheme ? (
        <ColorWave
          colors={waveColors}
          opacity={0.8}
          speed={25}
          waveHeight={200}
        />
      ) : (
        /* Subtle noise pattern for texture */
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }} />
      )}
    </div>
  );
}