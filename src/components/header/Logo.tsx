import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  className?: string;
}

export const Logo = ({ className = "" }: LogoProps) => (
  <Link href="/" aria-label="Home">
    <div className="group relative h-[88px] w-[88px] overflow-hidden rounded-full flex justify-center items-center transition-all duration-300 hover:scale-105 hover:shadow-[0px_4px_15px_rgba(255,255,255,0.1)] dark:hover:shadow-[0px_4px_15px_rgba(255,255,255,0.15)] border border-white/10">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-300 dark:from-gray-800 dark:to-gray-900 rounded-full opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
      <Image
        src="/logo-4.jpg"
        alt="CDMC"
        width={500}
        height={500}
        className={`h-full w-full scale-[1.65] object-cover rounded-full transition-transform duration-300 group-hover:scale-[1.55] ${className}`}
        priority
      />
    </div>
  </Link>
);
