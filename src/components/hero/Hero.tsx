"use client";

import { ChevronDown } from "lucide-react";

type HeroProps = {
  title: string;
  image: string;
  verse?: {
    text: string;
    reference: string;
  };
};

function Hero({ title, image, verse }: HeroProps) {
  // Function to determine text size based on length
  const getVerseTextSize = (text: string) => {
    if (text.length < 50) return "text-sm md:text-base"; // Short text → larger size
    if (text.length < 100) return "text-xs md:text-sm"; // Medium text → normal size
    return "text-[10.5px]"; // Longer text → smaller size
  };

  return (
    <section className="relative h-screen">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-center bg-cover bg-no-repeat bg-fixed bg-scroll-mobile"
        style={{ backgroundImage: `url('${image}')` }}
      >
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-deepBlack opacity-60" />
      </div>

      {/* Content Container */}
      <div className="relative h-full flex flex-col justify-center text-center px-4 sm:px-6 lg:px-8 z-10">
        {/* Title */}
        <h1 className="text-5xl md:text-7xl text-white font-bold tracking-tight uppercase leading-tight sm:leading-tight">
          {title}
        </h1>

        {/* Verse Box */}
        {verse && (
          <div className="hidden lg:block bg-white/10 backdrop-blur-md p-3 rounded-lg shadow-md max-w-96 text-white/80 text-right italic absolute bottom-16 right-8">
            <p className={`${getVerseTextSize(verse.text)}`}>{verse.text}</p>
            <p className={`mt-1 font-semibold text-white/70 ${getVerseTextSize(verse.text)}`}>
              - {verse.reference}
            </p>
          </div>
        )}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center text-center z-10">
        <button
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
          className="flex flex-col items-center text-white/60 hover:text-white transition-colors"
        >
          <ChevronDown size={28} />
          <p className="text-xs mt-1 uppercase tracking-widest">Scroll to explore</p>
        </button>
      </div>
    </section>
  );
}

export default Hero;
