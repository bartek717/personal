'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { colorSchemes, type ColorSchemeKey } from '../components/config/colorSchemes';

// List of all film images
const filmImages = [
  '0003_0A000067800003.jpg',
  '0026_13000067800026.jpg',
  '0028_14000067800028.jpg',
  'R1-09874-0016.JPG',
  'R1-09874-003A.JPG',
  'R1-09874-004A.JPG',
  'R1-09874-011A.JPG',
  'R1-09875-0001.JPG',
  'R1-09875-0014.JPG',
  'R1-09875-0019.JPG',
  'R1-09875-0020.JPG',
  'R1-09875-0023.JPG',
  'R1-09875-0029.JPG',
  'R1-09875-0030.JPG',
  'R1-09875-00322.JPG',
  'R1-09876-0002.JPG',
  'R1-09876-00022.JPG',
  'R1-09877-0002.JPG',
  'R1-09877-00042.JPG',
  'R1-09877-0006.JPG',
  'R1-09877-0007.JPG',
  'R1-09877-0009.JPG',
  'R1-09877-0010.JPG',
  'R1-09877-00152.JPG',
];

export default function PhotosPage() {
  const [currentScheme] = useState<ColorSchemeKey>('sage');
  const currentColors = colorSchemes[currentScheme];
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen" style={{ backgroundColor: currentColors.primaryBg }}>
      {/* Header */}
      <div className="sticky top-0 z-50 border-b" style={{
        backgroundColor: currentColors.primaryBg,
        borderColor: `${currentColors.borderColor}40`
      }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-4 sm:py-6 flex items-center justify-between">
          <div>
            <h1 className="text-2xl sm:text-3xl mb-1" style={{ fontWeight: 100, color: currentColors.textPrimary }}>
              Film Photography
            </h1>
            <p className="opacity-60" style={{
              fontWeight: 200,
              fontSize: 'clamp(0.75rem, 2vw, 0.9rem)',
              fontStyle: 'italic',
              letterSpacing: '0.05em',
              color: currentColors.textSecondary
            }}>
              perfectly imperfect
            </p>
          </div>
          <Link
            href="/"
            className="group relative overflow-hidden px-4 sm:px-8 py-2 sm:py-3 transition-all duration-500 hover:border-opacity-60"
            style={{
              fontWeight: 200,
              fontSize: 'clamp(0.7rem, 2vw, 0.875rem)',
              letterSpacing: '0.05em',
              borderWidth: '0.5px',
              borderColor: currentColors.borderColor,
              borderStyle: 'solid',
              color: currentColors.textPrimary
            }}
          >
            <span className="relative z-10">← BACK</span>
            <div
              className="absolute inset-0 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out opacity-5"
              style={{ backgroundColor: currentColors.accentColor }}
            />
          </Link>
        </div>
      </div>

      {/* Photos Grid */}
      <div className="px-4 sm:px-8 lg:px-16 py-8 sm:py-12">
        <div className="max-w-7xl mx-auto">
          <div className="mb-4 sm:mb-6 opacity-50" style={{ color: currentColors.textSecondary }}>
            <span style={{ fontWeight: 200, fontSize: 'clamp(0.75rem, 2vw, 0.875rem)' }}>
              {filmImages.length} photos
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {filmImages.map((image, index) => (
              <div
                key={index}
                className="relative aspect-[3/4] cursor-pointer group overflow-hidden rounded-lg"
                onClick={() => setSelectedImage(image)}
              >
                <Image
                  src={`/film/${image}`}
                  alt={`Film photo ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
                  loading="lazy"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300" />

                {/* Film frame marking on hover */}
                <div className="absolute inset-0 flex items-end justify-between p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span
                    className="text-xs"
                    style={{ fontWeight: 100, letterSpacing: '0.1em', color: currentColors.accentColor }}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4 cursor-zoom-out"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-6xl max-h-[90vh]">
            <Image
              src={`/film/${selectedImage}`}
              alt="Film photo expanded"
              width={1600}
              height={1200}
              className="object-contain max-h-[90vh] w-auto"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white text-4xl font-thin hover:opacity-70 transition-opacity"
              style={{ fontWeight: 100 }}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
