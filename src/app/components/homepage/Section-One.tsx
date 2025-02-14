"use client";

import { motion } from "framer-motion";

function SectionOne() {
  return (
    <section
      className="relative h-screen bg-fixed bg-center bg-cover bg-no-repeat -z-10"
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
          {/* Animated Heading */}
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 20, scale: 0.95 },
              visible: { opacity: 1, y: 0, scale: 1 },
            }}
            className="mb-4 md:mb-10 text-4xl sm:text-5xl md:text-7xl font-bold text-softWhite drop-shadow-md leading-tight"
          >
            Faith as Small as a Mustard Seed
          </motion.h1>

          {/* Animated Paragraph */}
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 },
            }}
            className="mb-8 max-w-xl text-sm sm:text-base md:text-xl text-softWhite leading-relaxed"
          >
            &quot;Blessed are the merciful, for they shall receive mercy.&quot;
            <br />- Matthew 5:7
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

export default SectionOne;
