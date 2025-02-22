"use client";

import { motion } from "framer-motion";

type HeroProps = {
  title: string;
  image: string;
};

function Hero(input: HeroProps) {
  return (
    <>
      <section
        className="relative h-screen bg-center bg-cover bg-no-repeat bg-fixed bg-scroll-mobile"
        style={{
          backgroundImage: `url('${input.image}')`,
        }}
      >
        {/* Gradient overlay for better text readability */}
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
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
              className="text-4xl sm:text-5xl md:text-7xl text-white font-bold tracking-tight uppercase"
            >
              {input.title}
            </motion.h1>
          </motion.div>
        </div>

        {/* Responsive & Animated Quote Section */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute bottom-8 right-8 w-[425px] md:w-[590px] text-[9px] sm:text-xs md:text-sm text-white p-2 sm:p-4 hidden sm:block"
        >
          <p className="leading-relaxed text-right">
            Jesus said the kingdom of heaven is{" "}
            <span className="italic">&ldquo;like a tiny mustard seed that grows into a large tree,&rdquo;</span> providing shelter
            for birds, showing how something small can become very big.
          </p>
          <p className="mt-2 text-right font-semibold">- Matthew 13:31-32</p>
        </motion.div>
      </section>
    </>
  );
}

export default Hero;
