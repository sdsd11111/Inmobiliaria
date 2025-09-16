"use client";

import { ReactNode, useEffect, useRef } from 'react';

interface ParallaxSectionProps {
  children: ReactNode;
  imageUrl: string;
  className?: string;
}

export function ParallaxSection({ children, imageUrl, className = '' }: ParallaxSectionProps) {
  const parallaxRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const frameId = useRef<number>();
  const lastScrollY = useRef(0);

  useEffect(() => {
    // Set background image immediately
    if (parallaxRef.current) {
      parallaxRef.current.style.backgroundImage = `url(${imageUrl})`;
    }

    const updateParallax = () => {
      if (parallaxRef.current && contentRef.current) {
        const scrollPosition = window.scrollY + (window.innerHeight * 0.5);
        const elementOffset = contentRef.current.offsetTop;
        const elementHeight = contentRef.current.offsetHeight;
        const windowHeight = window.innerHeight;
        
        // Always update for smoother effect
        lastScrollY.current = scrollPosition;
        
        // Calculate scroll percentage (0 to 1)
        const scrollPercent = (scrollPosition - elementOffset) / (elementHeight - windowHeight);
        
        // Apply parallax effect (increased intensity)
        const yPos = scrollPercent * 100; // Increased from 30% to 100% of scroll
        
        // Only apply if element is in view
        if (scrollPosition + windowHeight > elementOffset && 
            scrollPosition < elementOffset + elementHeight) {
          parallaxRef.current.style.transform = `translate3d(0, ${yPos}px, 0)`;
        }
        
        frameId.current = requestAnimationFrame(updateParallax);
      }
    };

    // Use requestAnimationFrame for smoother performance
    frameId.current = requestAnimationFrame(updateParallax);

    // Cleanup
    return () => {
      if (frameId.current) {
        cancelAnimationFrame(frameId.current);
      }
    };
  }, [imageUrl]);

  return (
    <div 
      className={`relative overflow-hidden ${className}`} 
      ref={contentRef}
      style={{ minHeight: '600px' }}
    >
      <div 
        ref={parallaxRef}
        className="absolute inset-0 w-full h-[120%] bg-cover bg-center bg-no-repeat"
        style={{
          willChange: 'transform',
          backgroundAttachment: 'fixed',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transition: 'transform 0.05s ease-out',
          transform: 'translate3d(0, 0, 0)'
        }}
      >
        <div className="absolute inset-0 bg-black/30" />
      </div>
      <div className="relative z-10 h-full">
        {children}
      </div>
    </div>
  );
}
