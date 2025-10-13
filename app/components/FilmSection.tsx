'use client';

import { useState } from 'react';
import Image from 'next/image';
import { type ColorScheme } from './colorSchemes';

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
  const [showGallery, setShowGallery] = useState(false);

  // Determine text colors based on background
  const needsDarkText = currentColors.textColor === 'text-gray-800';
  const textColor = needsDarkText ? 'text-gray-900' : currentColors.textColor;
  const lightTextColor = needsDarkText ? 'text-gray-600' : currentColors.textColor;
  const borderColor = needsDarkText ? 'border-gray-300' : currentColors.borderColor;

  // Show only 8 images in the preview
  const displayedImages = filmImages.slice(0, 8);

  return (
    <section
      className={`h-screen ${currentColors.background} relative`}
      style={currentColors.customGradient ? { background: currentColors.customGradient } : {}}
    >
      <div className="relative z-10 px-8 lg:px-16 py-16 h-full flex flex-col">
        {/* Header Section */}
        <div className="max-w-7xl mx-auto w-full mb-10">
          <div className={`border-b ${borderColor} border-opacity-20 pb-6`}>
            <h2
              className={`${textColor} mb-1`}
              style={{
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 100,
                letterSpacing: '-0.02em',
                lineHeight: 1
              }}
            >
              Film
            </h2>
            <p
              className={`${lightTextColor} opacity-60`}
              style={{
                fontWeight: 200,
                fontSize: '0.9rem',
                fontStyle: 'italic',
                letterSpacing: '0.05em'
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
                        className={`${textColor} text-xs`}
                        style={{ fontWeight: 100, letterSpacing: '0.1em' }}
                      >
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span
                        className={`${textColor} text-xs`}
                        style={{ fontWeight: 100 }}
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
        <div className="max-w-7xl mx-auto w-full mt-10 flex justify-between items-center">
          <div className={`${lightTextColor} opacity-50`}>
            <span style={{ fontWeight: 200, fontSize: '0.875rem' }}>
              {filmImages.length} photos
            </span>
          </div>

          <button
            onClick={() => setShowGallery(true)}
            className={`px-10 py-4 border ${borderColor} ${textColor} transition-all duration-300 hover:opacity-70`}
            style={{
              fontWeight: 200,
              fontSize: '0.875rem',
              letterSpacing: '0.05em',
              borderWidth: '0.5px'
            }}
          >
            VIEW ALL PHOTOS
          </button>
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

        {/* Full Gallery Modal */}
        {showGallery && (
          <div className="fixed inset-0 bg-white z-50 overflow-y-auto">
            <div className="px-8 lg:px-16 py-12">
              <div className="max-w-7xl mx-auto">
                <div className="flex items-center justify-between mb-8">
                  <h3 className={`${textColor} text-2xl`} style={{ fontWeight: 100 }}>
                    All Photos
                  </h3>
                  <button
                    onClick={() => setShowGallery(false)}
                    className={`text-3xl ${textColor} hover:opacity-70 transition-opacity`}
                    style={{ fontWeight: 100 }}
                  >
                    ×
                  </button>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                  {filmImages.map((image, index) => (
                    <div
                      key={index}
                      className="relative aspect-[3/4] cursor-pointer group overflow-hidden"
                      onClick={() => {
                        setSelectedImage(image);
                        setShowGallery(false);
                      }}
                    >
                      <Image
                        src={`/film/${image}`}
                        alt={`Film photo ${index + 1}`}
                        fill
                        className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                        sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
                        loading="lazy"
                      />
                      <div className={`absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}