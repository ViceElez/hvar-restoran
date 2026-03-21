'use client';

import Image from 'next/image';
import { useEffect, useMemo, useRef, useState } from 'react';
import styles from './styles/FullscreenSlideshow.module.css';

type FullscreenSlideshowProps = {
  images: Array<{ src: string; alt?: string }>;
  secondsPerImage?: number;
  fadeMs?: number;
  className?: string;
  priorityFirstImage?: boolean;
};

export default function FullscreenSlideshow({
  images,
  secondsPerImage = 8,
  fadeMs = 2000,
  className,
  priorityFirstImage = true,
}: FullscreenSlideshowProps) {
  const safeImages = useMemo(() => images.filter((img) => Boolean(img?.src)), [images]);
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    if (safeImages.length <= 1) return;
    const ms = Math.max(1000, secondsPerImage * 1000);

    intervalRef.current = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % safeImages.length);
    }, ms);

    return () => {
      if (intervalRef.current) {
        window.clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [safeImages.length, secondsPerImage]);

  if (safeImages.length === 0) return null;

  return (
    <div
      className={[styles.slideshow, className].filter(Boolean).join(' ')}
      style={{ ['--fade-ms' as any]: `${fadeMs}ms` }}
      aria-label="Image slideshow"
    >
      {safeImages.map((img, idx) => {
        const isActive = idx === activeIndex;
        return (
          <div
            key={`${img.src}-${idx}`}
            className={[styles.slide, isActive ? styles.slideActive : null]
              .filter(Boolean)
              .join(' ')}
            style={{ transitionDuration: `${fadeMs}ms` }}
            aria-hidden={!isActive}
          >
            <Image
              src={img.src}
              alt={img.alt ?? ''}
              fill
              sizes="100vw"
              className={styles.image}
              priority={priorityFirstImage && idx === 0}
            />
          </div>
        );
      })}
    </div>
  );
}

