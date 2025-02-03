"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface ImageCarouselProps {
  images: {
    src: string;
    srcSet: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
    alt: string;
  }[];
  interval?: number;
  width: number;
  height: number;
  className?: string;
}

export default function ImageCarousel({
  images,
  interval = 5000,
  width,
  height,
  className = '',
}: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [loadedImages, setLoadedImages] = useState(() => new Set<number>([0]));

  // Preload next image
  useEffect(() => {
    const nextIndex = (currentIndex + 1) % images.length;
    if (!loadedImages.has(nextIndex)) {
      const img = document.createElement('img');
      img.src = images[nextIndex].src;
      img.onload = () => {
        setLoadedImages(prev => {
          const newSet = new Set(prev);
          newSet.add(nextIndex);
          return newSet;
        });
      };
    }
  }, [currentIndex, images, loadedImages]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((current) => (current + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <div 
      className={`relative bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden ${className}`}
      style={{ 
        width: '100%',
        height: `${height}px`,
        maxWidth: `${width}px`,
        margin: '0 auto',
        contain: 'layout paint'
      }}
    >
      {images.map((image, index) => {
        const shouldLoad = loadedImages.has(index);
        return shouldLoad ? (
          <div
            key={image.src}
            className={`absolute inset-0 transition-opacity duration-1000 will-change-opacity ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={image.srcSet.desktop}
              alt={image.alt}
              fill
              sizes="(max-width: 640px) 600px, (max-width: 768px) 800px, 1200px"
              className={`object-cover rounded-lg shadow-xl ${
                isLoading && index === 0 ? 'blur-sm' : ''
              }`}
              priority={index === 0}
              onLoadingComplete={() => {
                if (index === 0) setIsLoading(false);
              }}
              quality={75}
            />
          </div>
        ) : null;
      })}
    </div>
  );
}
