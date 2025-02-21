"use client";

import { motion } from "framer-motion";

function Hero() {
  return (
    <section
      className="relative h-screen bg-cover bg-center bg-no-repeat bg-fixed"
      style={{ backgroundImage: "url('/snow-church.png')" }}
    >
      {/* Dark overlay using a custom deepBlack with adjusted opacity */}
      <div className="absolute inset-0 bg-deepBlack opacity-60" />

      {/* Content */}
      <div className="relative h-full w-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 1, staggerChildren: 0.3 },
            },
          }}
          className="max-w-[90%] sm:max-w-4xl flex flex-col items-center text-center"
        >
          {/* Animated Paragraph */}
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 },
            }}
            className="landscape:mb-0 max-w-2xl sm:max-w-3xl text-lg sm:text-xl md:text-2xl text-softWhite leading-relaxed"
          >
            &quot;Blessed are the merciful, for they shall receive mercy.&quot;
            <br />- Matthew 5:7
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
