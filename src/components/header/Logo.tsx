import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  className?: string;
}

export const Logo = ({ className = "" }: LogoProps) => (
  <Link href="/" aria-label="Home">
    <div className="group relative lg:h-[88px] lg:w-[88px] md:w-[82px] md:h-[82px] w-[74px] h-[74px] overflow-hidden rounded-full flex justify-center items-center transition-transform duration-300 hover:scale-105 active:scale-95">
      <Image
        src="/cdmc-logo.png" // Use WebP if possible (fallback to PNG if not available)
        alt="CDMC"
        width={176} // 2x size for high-DPI displays
        height={176}
        quality={100} // Ensures high-quality image rendering
        className={`h-full w-full object-cover rounded-full transition-transform duration-300 ${className}`}
        priority
      />
    </div>
  </Link>
);
