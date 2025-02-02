"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface ImageCarouselProps {
  images: {
    src: string;
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
  className = '',
}: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((current) => (current + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <div 
      className={`relative ${className}`}
      style={{ 
        width: '100%',
        height: '400px',
        maxWidth: '600px',
        margin: '0 auto'
      }}
    >
      {images.map((image, index) => (
        <div
          key={image.src}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100 z-[1]' : 'opacity-0 z-0'
          }`}
          style={{ position: 'relative', height: '100%' }}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
            className="rounded-lg shadow-xl object-cover"
            priority={index === 0}
          />
        </div>
      ))}
    </div>
  );
}
