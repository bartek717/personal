'use client';

import { useEffect, useState } from 'react';

interface ColorWaveProps {
  colors: string[];
  opacity?: number;
  speed?: number;
  waveHeight?: number;
}

export default function ColorWave({
  colors = ['#777C6D', '#B7B89F', '#CBCBCB', '#EEEEEE'],
  opacity = 0.8,
  speed = 20,
  waveHeight = 150
}: ColorWaveProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 overflow-hidden">
      <style jsx>{`
        @keyframes wave-animation {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .wave-container {
          animation: wave-animation ${speed}s linear infinite;
        }
      `}</style>

      <svg
        className="absolute bottom-0 left-0 w-[200%] wave-container"
        viewBox="0 0 2400 320"
        preserveAspectRatio="none"
        style={{
          height: `${waveHeight}px`,
          opacity: opacity
        }}
      >
        <defs>
          <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            {colors.map((color, index) => (
              <stop
                key={index}
                offset={`${(index / (colors.length - 1)) * 100}%`}
                stopColor={color}
              />
            ))}
          </linearGradient>
        </defs>

        {/* Multiple wave layers for depth */}
        <path
          d="M0,160 C240,250,480,50,720,160 C960,270,1200,70,1440,160 C1680,250,1920,50,2160,160 C2400,270,2400,160,2400,160 L2400,320 L0,320 Z"
          fill="url(#waveGradient)"
          opacity="0.3"
        />
        <path
          d="M0,190 C240,100,480,280,720,190 C960,100,1200,280,1440,190 C1680,100,1920,280,2160,190 C2400,100,2400,190,2400,190 L2400,320 L0,320 Z"
          fill="url(#waveGradient)"
          opacity="0.5"
        />
        <path
          d="M0,220 C240,280,480,160,720,220 C960,280,1200,160,1440,220 C1680,280,1920,160,2160,220 C2400,280,2400,220,2400,220 L2400,320 L0,320 Z"
          fill="url(#waveGradient)"
          opacity="0.7"
        />
      </svg>

      {/* Second wave for seamless loop */}
      <svg
        className="absolute bottom-0 left-[100%] w-[200%] wave-container"
        viewBox="0 0 2400 320"
        preserveAspectRatio="none"
        style={{
          height: `${waveHeight}px`,
          opacity: opacity
        }}
      >
        <defs>
          <linearGradient id="waveGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            {colors.map((color, index) => (
              <stop
                key={index}
                offset={`${(index / (colors.length - 1)) * 100}%`}
                stopColor={color}
              />
            ))}
          </linearGradient>
        </defs>

        <path
          d="M0,160 C240,250,480,50,720,160 C960,270,1200,70,1440,160 C1680,250,1920,50,2160,160 C2400,270,2400,160,2400,160 L2400,320 L0,320 Z"
          fill="url(#waveGradient2)"
          opacity="0.3"
        />
        <path
          d="M0,190 C240,100,480,280,720,190 C960,100,1200,280,1440,190 C1680,100,1920,280,2160,190 C2400,100,2400,190,2400,190 L2400,320 L0,320 Z"
          fill="url(#waveGradient2)"
          opacity="0.5"
        />
        <path
          d="M0,220 C240,280,480,160,720,220 C960,280,1200,160,1440,220 C1680,280,1920,160,2160,220 C2400,280,2400,220,2400,220 L2400,320 L0,320 Z"
          fill="url(#waveGradient2)"
          opacity="0.7"
        />
      </svg>
    </div>
  );
}