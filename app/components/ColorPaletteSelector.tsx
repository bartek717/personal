'use client';

import { useState, useEffect, useRef, Dispatch, SetStateAction } from 'react';
import { colorSchemes, type ColorSchemeKey, type ColorScheme } from './colorSchemes';

interface ColorPaletteSelectorProps {
  currentScheme: ColorSchemeKey;
  setCurrentScheme: Dispatch<SetStateAction<ColorSchemeKey>>;
  currentColors: ColorScheme;
}

export default function ColorPaletteSelector({
  currentScheme,
  setCurrentScheme,
  currentColors
}: ColorPaletteSelectorProps) {
  const [isPaletteOpen, setIsPaletteOpen] = useState(false);
  const paletteRef = useRef<HTMLDivElement>(null);

  // Close palette when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (paletteRef.current && !paletteRef.current.contains(event.target as Node)) {
        setIsPaletteOpen(false);
      }
    };

    if (isPaletteOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isPaletteOpen]);

  return (
    <div className="absolute top-8 right-8 z-20" ref={paletteRef}>
      <button
        onClick={() => setIsPaletteOpen(!isPaletteOpen)}
        className={`${currentColors.textColor} hover:opacity-80 transition-all duration-200 p-2 rounded-lg hover:bg-white/10`}
        aria-label="Color palette selector"
      >
        <div className="flex items-center gap-1">
          {currentColors.preview.map((color, index) => (
            <div
              key={index}
              className="w-6 h-6 rounded-full border border-gray-800/20 shadow-sm"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
      </button>

      {isPaletteOpen && (
        <div className="absolute right-0 mt-2 bg-white rounded-lg shadow-xl border border-gray-200 p-4 min-w-[240px]">
          <h3 className="text-sm font-semibold text-gray-700 mb-3 px-1">Color Schemes</h3>
          <div className="space-y-1">
            {(Object.entries(colorSchemes) as [ColorSchemeKey, ColorScheme][]).map(([key, scheme]) => (
              <button
                key={key}
                onClick={() => {
                  setCurrentScheme(key);
                  setIsPaletteOpen(false);
                }}
                className={`w-full flex items-center justify-between p-2.5 rounded-lg hover:bg-gray-50 transition-all ${
                  currentScheme === key ? 'bg-gray-100 shadow-sm' : ''
                }`}
              >
                <span className="text-sm font-medium text-gray-700">{scheme.name}</span>
                <div className="flex items-center gap-0.5">
                  {scheme.preview.map((color, index) => (
                    <div
                      key={index}
                      className="w-4 h-4 rounded-full border border-gray-200"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}