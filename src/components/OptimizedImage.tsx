/**
 * Optimized Image Component with Lazy Loading and Responsive Support
 * Implements Google's image optimization best practices
 */

import React, { useState, useEffect, useRef } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  placeholder?: string;
  srcSet?: string;
  sizes?: string;
  priority?: boolean;
}

/**
 * OptimizedImage Component
 * - Lazy loads images using Intersection Observer
 * - Supports responsive srcSet
 * - Shows placeholder while loading
 * - Prevents layout shift with proper aspect ratio
 */
export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  placeholder,
  srcSet,
  sizes,
  priority = false,
}) => {
  const [imageSrc, setImageSrc] = useState<string>(priority ? src : placeholder || '');
  const imageRef = useRef<HTMLImageElement>(null);
  const [isLoaded, setIsLoaded] = useState(priority);

  useEffect(() => {
    if (priority) {
      // For priority images, load immediately
      setImageSrc(src);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && imageRef.current) {
          const img = entry.target as HTMLImageElement;
          img.src = src;
          if (srcSet) img.srcset = srcSet;
          observer.unobserve(img);
        }
      },
      { rootMargin: '50px' }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, [src, srcSet, priority]);

  const aspectRatioStyle = width && height ? { aspectRatio: `${width}/${height}` } : {};

  return (
    <img
      ref={imageRef}
      src={imageSrc}
      alt={alt}
      width={width}
      height={height}
      srcSet={srcSet}
      sizes={sizes}
      className={`${className} ${!isLoaded ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
      style={{ ...aspectRatioStyle }}
      onLoad={() => setIsLoaded(true)}
      loading={priority ? 'eager' : 'lazy'}
    />
  );
};

export default OptimizedImage;
