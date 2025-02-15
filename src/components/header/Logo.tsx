import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  className?: string;
}

export const Logo = ({ className = "" }: LogoProps) => (
  <Link href="/" aria-label="Home">
    <Image
      src="/logo.jpg"
      alt="CDMC"
      width={50}
      height={50}
      className={`h-16 w-16 object-cover rounded-lg ${className}`}
      priority
    />
  </Link>
);