"use client";

import { motion, MotionConfig } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { GoChevronRight, GoChevronLeft } from "react-icons/go";

interface ClientGalleryProps {
  images: string[];
}

export default function ClientGallery({ images }: ClientGalleryProps) {
  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const touchStartRef = useRef({ x: 0, y: 0 });
  const isScrollingVertically = useRef(false);

  // Initialize mobile state after mount
  useEffect(() => {
    setIsMobile(window.innerWidth < 640);
    
    const handleResize = () => {
      const newIsMobile = window.innerWidth < 640;
      if (newIsMobile !== isMobile) {
        setIsMobile(newIsMobile);
        setCurrent(0); // Reset to first image when switching views
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMobile]);

  // Modified: Let the native snap behavior work and just observe
  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    if (!isMobile) return;
    
    const container = e.target as HTMLDivElement;
    const scrollPosition = container.scrollLeft;
    const itemWidth = container.offsetWidth * 0.84 + 16; // 84% width + gap
    const newIndex = Math.round(scrollPosition / itemWidth);
    
    if (newIndex !== current && newIndex >= 0 && newIndex < images.length) {
      setCurrent(newIndex);
    }
  };

  // For dot navigation on mobile
  const handleDotClick = (index: number) => {
    setCurrent(index);
    if (isMobile && scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const itemWidth = container.offsetWidth * 0.84 + 16; // 84% width + gap
      
      // Use requestAnimationFrame to ensure smooth scrolling
      requestAnimationFrame(() => {
        container.scrollTo({
          left: index * itemWidth,
          behavior: "smooth"
        });
      });
    }
  };

  const handleArrowClick = (direction: "left" | "right") => {
    if (direction === "left" && current > 0) {
      setCurrent(current - 1);
    } else if (direction === "right" && current < images.length - 1) {
      setCurrent(current + 1);
    }
  };

  // Touch event handlers to fix the vertical scrolling issue
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isMobile) return;
    
    const touch = e.touches[0];
    touchStartRef.current = { x: touch.clientX, y: touch.clientY };
    isScrollingVertically.current = false;
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isMobile || !scrollContainerRef.current) return;
    
    const touch = e.touches[0];
    const deltaX = Math.abs(touch.clientX - touchStartRef.current.x);
    const deltaY = Math.abs(touch.clientY - touchStartRef.current.y);
    
    // If we detect significant vertical movement, mark as vertical scrolling
    if (deltaY > deltaX && deltaY > 10) {
      isScrollingVertically.current = true;
    }
    
    // If we're trying to scroll vertically, prevent the carousel from capturing the event
    if (isScrollingVertically.current) {
      e.stopPropagation();
    }
  };

  return (
    <MotionConfig transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}>
      <div className="relative w-full max-w-5xl mx-auto">
        {/* MOBILE: Snap scroll */}
        <div
          ref={scrollContainerRef}
          className="flex gap-4 flex-nowrap overflow-x-auto sm:hidden scrollbar-hide snap-x snap-mandatory touch-pan-x"
          style={{ scrollBehavior: "smooth" }}
          onScroll={handleScroll}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
        >
          {images.map((image, index) => (
            <div key={index} className="w-[84%] flex-shrink-0 snap-center">
              <div
                className="w-full aspect-square bg-cover bg-center rounded-lg"
                style={{ backgroundImage: `url(${image})` }}
              />
            </div>
          ))}
        </div>

        {/* Mobile dots */}
        <div className="flex sm:hidden justify-center mt-4">
          <div className="flex gap-2 px-3 py-2 bg-black/70 rounded-full">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  index === current ? "bg-white w-3" : "bg-zinc-500 w-1.5"
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* DESKTOP: Framer Motion with dots */}
        <motion.div 
          className="hidden sm:flex gap-4 flex-nowrap" 
          animate={{ x: `calc(-${current * 100}% - ${current}rem)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <motion.div
                className="w-full aspect-[16/9] bg-cover bg-center rounded-lg"
                animate={{ opacity: index === current ? 1 : 0.3 }}
                style={{ backgroundImage: `url(${image})` }}
              />
            </div>
          ))}
        </motion.div>

        {/* Navigation arrows (desktop only) */}
        <div className="absolute hidden top-0 w-full h-full sm:flex justify-between items-center px-4">
          <button
            className={`p-1 rounded-full text-white lg:text-4xl text-3xl flex items-center justify-center transition-all duration-300 ease-in-out
            ${current === 0 ? "opacity-40 cursor-default" : "bg-black/50 hover:bg-black/80 hover:scale-110 active:opacity-70"}`}
            onClick={() => handleArrowClick("left")}
            disabled={current === 0}
            aria-label="Previous image"
          >
            <GoChevronLeft />
          </button>
          <button
            className={`p-1 rounded-full text-white lg:text-4xl text-3xl flex items-center justify-center transition-all duration-300 ease-in-out
            ${
              current === images.length - 1
                ? "opacity-40 cursor-default"
                : "bg-black/50 hover:bg-black/80 hover:scale-110 active:opacity-70"
            }`}
            onClick={() => handleArrowClick("right")}
            disabled={current === images.length - 1}
            aria-label="Next image"
          >
            <GoChevronRight />
          </button>
        </div>

        {/* Navigation dots (desktop only) */}
        <div className="hidden sm:block absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
          <div className="flex gap-3 lg:px-5 lg:py-3 px-3 py-2 bg-black/70 rounded-full opacity-80">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === current ? "bg-white lg:w-6 w-5 lg:h-2.5 h-2" : "bg-zinc-500 lg:w-2.5 lg:h-2.5 w-2 h-2"
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </MotionConfig>
  );
}