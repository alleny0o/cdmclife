"use client";
import { motion, MotionConfig } from "framer-motion";
import { useState } from "react";

const images = ["/gallery1.jpg", "/gallery2.jpg", "/gallery3.jpg"];

function Gallery() {
  const [current, setCurrent] = useState(0);

  return (
    <section className="bg-lightGray flex flex-col items-center justify-between w-full p-6 sm:p-12 md:p-20 lg:p-24 overflow-x-hidden">
      <MotionConfig transition={{ duration: 1, ease: [0.32, 0.72, 0, 1] }}>
        <div className="relative w-full max-w-5xl mx-auto">
          {/* MOBILE: Snap scroll */}
          <div className="flex gap-4 flex-nowrap overflow-x-auto scroll-smooth snap-x snap-mandatory sm:hidden scrollbar-hide">
            {images.map((image, index) => (
              <div key={index} className="w-[86.5%] flex-shrink-0 snap-center">
                <div
                  className="w-full aspect-video bg-cover bg-center rounded-lg"
                  style={{ backgroundImage: `url(${image})` }}
                />
              </div>
            ))}
          </div>

          {/* DESKTOP: Framer Motion with dots */}
          <motion.div
            className="hidden sm:flex gap-4 flex-nowrap"
            animate={{ x: `calc(-${current * 100}% - ${current}rem)` }}
          >
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

          {/* Navigation dots (desktop only) */}
          <div className="hidden sm:block absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
            <div className="flex gap-3 md:px-5 md:py-3 px-3 py-2 bg-black/70 rounded-full opacity-80">
              {images.map((_, index) => (
                <button key={index} onClick={() => setCurrent(index)}>
                  <div
                    className={`md:w-2.5 md:h-2.5 w-2 h-2 rounded-full ${
                      index === current ? "bg-white" : "bg-zinc-500"
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </MotionConfig>
    </section>
  );
}

export default Gallery;