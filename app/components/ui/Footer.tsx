'use client';

import { type ColorScheme } from '../config/colorSchemes';

interface FooterProps {
  currentColors: ColorScheme;
}

export default function Footer({ currentColors }: FooterProps) {
  const needsDarkText = currentColors.textColor === 'text-gray-800';
  const textColor = needsDarkText ? 'text-gray-900' : currentColors.textColor;
  const lightTextColor = needsDarkText ? 'text-gray-600' : currentColors.textColor;
  const borderColor = needsDarkText ? 'border-gray-300' : currentColors.borderColor;

  return (
    <footer className="relative">
      <div className="relative z-10 px-8 lg:px-16 pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="pt-8">
            <div className="text-center">
              <p
                className={`${lightTextColor} opacity-50`}
                style={{
                  fontWeight: 200,
                  fontSize: '0.875rem',
                  letterSpacing: '0.05em'
                }}
              >
                built with <span className={`${textColor} opacity-70`}>♥</span> by bartek
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
