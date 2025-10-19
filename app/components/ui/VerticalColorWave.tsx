'use client';

import { useEffect, useState } from 'react';

interface VerticalColorWaveProps {
  colors?: string[];
  opacity?: number;
  speed?: number;
  waveWidth?: number;
  side?: 'left' | 'right';
  lighter?: boolean;
}

export default function VerticalColorWave({
  colors = ['#777C6D', '#B7B89F', '#CBCBCB', '#EEEEEE'],
  opacity = 0.3,
  speed = 15,
  waveWidth = 80,
  side = 'left',
  lighter = false
}: VerticalColorWaveProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // Create lighter shades by mixing with white
  const adjustedColors = lighter
    ? colors.map(color => {
        // Convert hex to RGB, mix with white, convert back
        const hex = color.replace('#', '');
        const r = parseInt(hex.substr(0, 2), 16);
        const g = parseInt(hex.substr(2, 2), 16);
        const b = parseInt(hex.substr(4, 2), 16);

        // Mix with white (255,255,255) at 40% strength
        const mixRatio = 0.4;
        const newR = Math.round(r + (255 - r) * mixRatio);
        const newG = Math.round(g + (255 - g) * mixRatio);
        const newB = Math.round(b + (255 - b) * mixRatio);

        return `#${newR.toString(16).padStart(2, '0')}${newG.toString(16).padStart(2, '0')}${newB.toString(16).padStart(2, '0')}`;
      })
    : colors;

  const isLeft = side === 'left';

  return (
    <div
      className={`absolute top-0 bottom-0 ${isLeft ? 'left-0' : 'right-0'} overflow-hidden pointer-events-none`}
      style={{ width: `${waveWidth}px` }}
    >
      <style jsx>{`
        @keyframes vertical-wave-animation {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-50%);
          }
        }
        .vertical-wave-container {
          animation: vertical-wave-animation ${speed}s linear infinite;
        }
      `}</style>

      <svg
        className="absolute top-0 h-[200%] vertical-wave-container"
        viewBox="0 0 200 2400"
        preserveAspectRatio="none"
        style={{
          width: `${waveWidth}px`,
          opacity: opacity,
          transform: isLeft ? 'scaleX(1)' : 'scaleX(-1)'
        }}
      >
        <defs>
          <linearGradient id={`verticalWaveGradient-${side}`} x1="0%" y1="0%" x2="0%" y2="100%">
            {adjustedColors.map((color, index) => (
              <stop
                key={index}
                offset={`${(index / (adjustedColors.length - 1)) * 100}%`}
                stopColor={color}
              />
            ))}
          </linearGradient>
        </defs>

        {/* Multiple wave layers for depth */}
        <path
          d="M0,0 C50,240,150,480,50,720 C-50,960,150,1200,50,1440 C-50,1680,150,1920,50,2160 C-50,2400,0,2400,0,2400 L0,0 Z"
          fill={`url(#verticalWaveGradient-${side})`}
          opacity="0.3"
        />
        <path
          d="M0,0 C80,240,20,480,80,720 C140,960,20,1200,80,1440 C140,1680,20,1920,80,2160 C140,2400,0,2400,0,2400 L0,0 Z"
          fill={`url(#verticalWaveGradient-${side})`}
          opacity="0.5"
        />
        <path
          d="M0,0 C30,240,100,480,30,720 C-40,960,100,1200,30,1440 C-40,1680,100,1920,30,2160 C-40,2400,0,2400,0,2400 L0,0 Z"
          fill={`url(#verticalWaveGradient-${side})`}
          opacity="0.7"
        />
      </svg>

      {/* Second wave for seamless loop */}
      <svg
        className="absolute top-[100%] h-[200%] vertical-wave-container"
        viewBox="0 0 200 2400"
        preserveAspectRatio="none"
        style={{
          width: `${waveWidth}px`,
          opacity: opacity,
          transform: isLeft ? 'scaleX(1)' : 'scaleX(-1)'
        }}
      >
        <defs>
          <linearGradient id={`verticalWaveGradient2-${side}`} x1="0%" y1="0%" x2="0%" y2="100%">
            {adjustedColors.map((color, index) => (
              <stop
                key={index}
                offset={`${(index / (adjustedColors.length - 1)) * 100}%`}
                stopColor={color}
              />
            ))}
          </linearGradient>
        </defs>

        <path
          d="M0,0 C50,240,150,480,50,720 C-50,960,150,1200,50,1440 C-50,1680,150,1920,50,2160 C-50,2400,0,2400,0,2400 L0,0 Z"
          fill={`url(#verticalWaveGradient2-${side})`}
          opacity="0.3"
        />
        <path
          d="M0,0 C80,240,20,480,80,720 C140,960,20,1200,80,1440 C140,1680,20,1920,80,2160 C140,2400,0,2400,0,2400 L0,0 Z"
          fill={`url(#verticalWaveGradient2-${side})`}
          opacity="0.5"
        />
        <path
          d="M0,0 C30,240,100,480,30,720 C-40,960,100,1200,30,1440 C-40,1680,100,1920,30,2160 C-40,2400,0,2400,0,2400 L0,0 Z"
          fill={`url(#verticalWaveGradient2-${side})`}
          opacity="0.7"
        />
      </svg>
    </div>
  );
}