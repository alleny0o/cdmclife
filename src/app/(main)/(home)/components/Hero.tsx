"use client";

function Hero() {
  return (
    <section
      className="relative h-screen bg-cover bg-center bg-no-repeat bg-fixed bg-scroll-mobile"
      style={{ backgroundImage: "url('/homepage/snow-church.png')" }}
    >
      {/* Dark overlay using a custom deepBlack with adjusted opacity */}
      <div className="absolute inset-0 bg-deepBlack opacity-60" />

      {/* Content */}
      <div className="relative h-full w-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div
          className="max-w-[90%] sm:max-w-4xl flex flex-col items-center text-center"
        >
          {/* Animated Paragraph */}
          <p
            className="pt-10 landscape:mb-0 max-w-2xl sm:max-w-3xl text-sm sm:text-base md:text-lg lg:text-xl text-softWhite leading-relaxed"
          >
            He gives snow like wool; he scatters the frost like ashes. He casts forth his ice like morsels; who can stand
            before his cold? He sends out his word, and melts them; he causes his wind to blow, and the waters flow.
          </p>
          <p
            className="mt-2 text-right text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-softWhite"
          >
            - Psalm 147:16-18
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
