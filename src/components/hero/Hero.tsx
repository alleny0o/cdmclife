"use client";

import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

type HeroProps = {
  title: string;
  image: string;
  verse?: {
    text: string;
    reference: string;
  };
};

function Hero({ title, image, verse }: HeroProps) {
  return (
    <section className="relative h-screen">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-center bg-cover bg-no-repeat bg-fixed bg-scroll-mobile"
        style={{ backgroundImage: `url('${image}')` }}
      >
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-deepBlack opacity-60" />{" "}
      </div>
      {/* Content Container */}
      <div className="relative h-full flex flex-col justify-center text-center px-4 sm:px-6 lg:px-8 z-10">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl sm:text-5xl md:text-7xl text-white font-bold tracking-tight uppercase leading-tight sm:leading-tight"
        >
          {title}
        </motion.h1>

        {/* Verse Box */}
        {verse && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="hidden lg:block absolute bottom-16 right-8 bg-white/10 backdrop-blur-md p-3 rounded-lg shadow-md lg:max-w-96 text-white/80 text-[10px] text-right italic"
          >
            <p>{verse.text}</p>
            <p className="mt-1 font-semibold text-white/70">- {verse.reference}</p>
          </motion.div>
        )}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center text-center z-10">
        <button
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
          className="flex flex-col items-center text-white/60 hover:text-white transition-colors"
        >
          <ChevronDown size={28} className="animate-fade-in-down" />
          <p className="text-xs mt-1 uppercase tracking-widest">Scroll to explore</p>
        </button>
      </div>
    </section>
  );
}

export default Hero;
