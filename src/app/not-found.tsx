import React from "react";
import { Home } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "404",
};

function NotFound() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center text-gray-100 p-4">
      <div className="text-center space-y-8">
        <div className="relative h-[120px] w-[120px] sm:h-[160px] sm:w-[160px] md:h-[190px] md:w-[190px] mx-auto">
          <Image
            src="/cdmc-logo.png"
            alt="CDMC"
            width={176}
            height={176}
            quality={100}
            className="h-full w-full scale-[1.3] object-cover rounded-xl"
            priority
          />
        </div>

        <div className="space-y-2 max-w-sm sm:max-w-lg mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold">404</h1>
          <h2 className="text-base sm:text-lg lg:text-xl text-gray-300">Page Not Found</h2>
          <p className="text-xs sm:text-sm text-gray-400">
            We&rsquo;re sorry, but the page you&rsquo;re looking for could not be found. It may have been moved, or the link you
            followed is incorrect. Please return to our homepage to continue exploring our church.
          </p>
        </div>

        <Link
          href="/"
          className="inline-flex items-center gap-2.5 px-5 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-all duration-200 hover:scale-105 active:scale-95"
        >
          <Home size={18} />
          <span className="text-sm font-medium">Return Home</span>
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
