'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { type ColorScheme } from '../config/colorSchemes';

interface FilmSectionProps {
  currentColors: ColorScheme;
}

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

export default function FilmSection({ currentColors }: FilmSectionProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);


  // Show only 8 images in the preview
  const displayedImages = filmImages.slice(0, 8);

  return (
    <section className="h-screen relative overflow-hidden">
      {/* Film sprocket holes pattern on sides */}
      <div className="absolute left-0 top-0 bottom-0 w-12 opacity-[0.1] pointer-events-none">
        <div
          className="h-full"
          style={{
            backgroundImage: `repeating-linear-gradient(
              0deg,
              transparent,
              transparent 20px,
              ${currentColors.textPrimary} 20px,
              ${currentColors.textPrimary} 30px
            )`
          }}
        />
      </div>
      <div className="absolute right-0 top-0 bottom-0 w-12 opacity-[0.1] pointer-events-none">
        <div
          className="h-full"
          style={{
            backgroundImage: `repeating-linear-gradient(
              0deg,
              transparent,
              transparent 20px,
              ${currentColors.textPrimary} 20px,
              ${currentColors.textPrimary} 30px
            )`
          }}
        />
      </div>

      {/* Subtle grain texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.015] pointer-events-none mix-blend-multiply"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.95' numOctaves='1' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 px-8 lg:px-16 py-16 h-full flex flex-col">
        {/* Header Section */}
        <div className="max-w-7xl mx-auto w-full mb-10">
          <div className="border-b border-opacity-20 pb-6" style={{ borderColor: currentColors.borderColor }}>
            <h2
              className="mb-1"
              style={{
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 100,
                letterSpacing: '-0.02em',
                lineHeight: 1,
                color: currentColors.textPrimary
              }}
            >
              Film
            </h2>
            <p
              className="opacity-60"
              style={{
                fontWeight: 200,
                fontSize: '0.9rem',
                fontStyle: 'italic',
                letterSpacing: '0.05em',
                color: currentColors.textSecondary
              }}
            >
              perfectly imperfect
            </p>
          </div>
        </div>

        {/* Film Grid - Editorial Asymmetric Layout */}
        <div className="max-w-6xl mx-auto w-full flex-1 flex items-center">
          <div className="w-full grid grid-cols-6 gap-3 auto-rows-[100px] lg:auto-rows-[120px]">
            {displayedImages.map((image, index) => {
              // Create a pattern that fills a 6-column grid perfectly
              const gridClasses = [
                'col-span-2 row-span-2',  // 1: Large square (cols 1-2)
                'col-span-2 row-span-1',  // 2: Wide (cols 3-4, row 1)
                'col-span-2 row-span-2',  // 3: Large square (cols 5-6)
                'col-span-2 row-span-1',  // 4: Wide (cols 3-4, row 2)
                'col-span-3 row-span-1',  // 5: Half width (cols 1-3, row 3)
                'col-span-3 row-span-1',  // 6: Half width (cols 4-6, row 3)
                'col-span-1 row-span-1',  // 7: Small (col 1, row 4)
                'col-span-5 row-span-1',  // 8: Very wide (cols 2-6, row 4)
              ];

              return (
                <div
                  key={index}
                  className={`${gridClasses[index]} relative cursor-pointer group overflow-hidden bg-gray-50`}
                  onClick={() => setSelectedImage(image)}
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={`/film/${image}`}
                      alt={`Film photo ${index + 1}`}
                      fill
                      className="object-cover transition-all duration-700 ease-out group-hover:scale-105"
                      sizes="(max-width: 768px) 50vw, 33vw"
                      loading="lazy"
                    />

                    {/* Subtle film effect overlay */}
                    <div className="absolute inset-0 mix-blend-multiply bg-gradient-to-t from-gray-100/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Film frame marking */}
                    <div className="absolute inset-0 flex items-end justify-between p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <span
                        className="text-xs"
                        style={{ fontWeight: 100, letterSpacing: '0.1em', color: currentColors.accentColor }}
                      >
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span
                        className="text-xs"
                        style={{ fontWeight: 100, color: currentColors.accentColor }}
                      >
                        ◦
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="max-w-7xl mx-auto w-full mt-10 flex justify-between items-center relative z-20">
          <div className="opacity-50" style={{ color: currentColors.textSecondary }}>
            <span style={{ fontWeight: 200, fontSize: '0.875rem' }}>
              {filmImages.length} photos
            </span>
          </div>

          <Link
            href="/photos"
            className="group relative overflow-hidden px-6 sm:px-10 py-3 sm:py-4 transition-all duration-500 hover:border-opacity-60 cursor-pointer inline-block"
            style={{
              fontWeight: 200,
              fontSize: '0.875rem',
              letterSpacing: '0.05em',
              borderWidth: '0.5px',
              borderColor: currentColors.borderColor,
              borderStyle: 'solid',
              color: currentColors.textPrimary
            }}
          >
            <span className="relative z-10">VIEW ALL PHOTOS</span>
            <div
              className="absolute inset-0 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out opacity-5"
              style={{ backgroundColor: currentColors.accentColor }}
            />
          </Link>
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
    </section>
  );
}