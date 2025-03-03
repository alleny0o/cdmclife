"use client";

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
    <section
      className="relative h-screen bg-center bg-cover bg-no-repeat bg-fixed bg-scroll-mobile"
      style={{
        backgroundImage: `url('${image}')`,
      }}
    >
      {/* Gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-deepBlack opacity-60" />

      {/* Content */}
      <div className="relative h-full w-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-[90%] sm:max-w-4xl flex flex-col items-center text-center">
          <h1 className="text-4xl sm:text-5xl md:text-7xl text-white font-bold tracking-tight uppercase">
            {title}
          </h1>
        </div>
      </div>

      {verse && (
        <div className="absolute bottom-8 right-8 w-[425px] md:w-[590px] text-[9px] sm:text-xs md:text-sm text-white p-2 sm:p-4 hidden sm:block">
          <p className="leading-relaxed text-right">
            <span className="italic">{verse.text}</span>
          </p>
          <p className="mt-2 text-right font-semibold">- {verse.reference}</p>
        </div>
      )}
    </section>
  );
}

export default Hero;
