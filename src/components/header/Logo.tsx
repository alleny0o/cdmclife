import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  className?: string;
}

export const Logo = ({ className = "" }: LogoProps) => (
  <Link href="/" aria-label="Home">
    <div className="group relative lg:h-[80px] lg:w-[95px] sm:w-[85px] sm:h-[70px] w-[78px] h-[66px] overflow-hidden rounded-md flex justify-center items-center transition-all duration-300 hover:scale-[1] hover:shadow-[0px_4px_15px_rgba(255,255,255,0.1)] active:scale-95 active:shadow-[0px_2px_8px_rgba(255,255,255,0.15)] dark:hover:shadow-[0px_4px_15px_rgba(255,255,255,0.15)] dark:active:shadow-[0px_2px_8px_rgba(255,255,255,0.2)] border border-white/10 shadow-[0px_2px_8px_rgba(255,255,255,0.05)] dark:shadow-[0px_2px_8px_rgba(255,255,255,0.08)]">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-300 dark:from-gray-800 dark:to-gray-900 rounded-full opacity-50 group-hover:opacity-75 group-active:opacity-60 transition-opacity duration-300" />
      <Image
        src="/logo.jpg"
        alt="CDMC"
        width={1000}
        height={1000}
        className={`h-full w-full scale-[1.8] object-cover rounded-full transition-transform duration-300 group-hover:scale-[1.55] group-active:scale-[1.6] ${className}`}
        priority
      />
    </div>
  </Link>
);