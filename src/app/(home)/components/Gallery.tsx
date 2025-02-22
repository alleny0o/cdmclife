"use client";
import { motion, MotionConfig } from "framer-motion";
import { useState, useEffect } from "react";
import { GoChevronRight, GoChevronLeft } from "react-icons/go";

const images = ["/homepage/gallery1.jpg", "/homepage/gallery2.jpg", "/homepage/gallery3.jpg"];

function Gallery() {
  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(typeof window !== "undefined" ? window.innerWidth < 640 : false);

  useEffect(() => {
    const handleResize = () => {
      const newIsMobile = window.innerWidth < 640;
      if (newIsMobile !== isMobile) {
        setIsMobile(newIsMobile);
        setCurrent(0); // Reset to the first image when switching views
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMobile]);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {    if (!isMobile) return;
    const scrollPosition = (e.target as HTMLDivElement).scrollLeft;
    const itemWidth = (e.target as HTMLDivElement).offsetWidth * 0.84; // 84% width + gap
    const newIndex = Math.round(scrollPosition / itemWidth);
    setCurrent(newIndex);
  };

  const handleArrowClick = (direction: "left" | "right") => {
    if (direction === "left" && current > 0) {
      setCurrent(current - 1);
    } else if (direction === "right" && current < images.length - 1) {
      setCurrent(current + 1);
    }
  };

  return (
    <section className="bg-lightGray flex flex-col items-center justify-between w-full px-6 py-20 sm:px-12 md:px-20 lg:px-24 lg:py-24 overflow-x-hidden">
      <MotionConfig transition={{ duration: 1, ease: [0.32, 0.72, 0, 1] }}>
        <div className="relative w-full max-w-5xl mx-auto">
          {/* MOBILE: Snap scroll */}
          <div
            className="flex gap-4 flex-nowrap overflow-x-auto scroll-smooth snap-x snap-mandatory sm:hidden scrollbar-hide"
            onScroll={handleScroll}
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
                <div
                  key={index}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    index === current ? "bg-white w-3" : "bg-zinc-500 w-1.5"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* DESKTOP: Framer Motion with dots */}
          <motion.div className="hidden sm:flex gap-4 flex-nowrap" animate={{ x: `calc(-${current * 100}% - ${current}rem)` }}>
            {images.map((image, index) => (
              <div key={index} className="w-full flex-shrink-0">
                <motion.div
                  className="w-full aspect-video bg-cover bg-center rounded-lg"
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
                  className={`cursor-default transition-all duration-300 rounded-full ${
                    index === current ? "bg-white lg:w-6 w-5 lg:h-2.5 h-2" : "bg-zinc-500 lg:w-2.5 lg:h-2.5 w-2 h-2"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </MotionConfig>
    </section>
  );
}

export default Gallery;
