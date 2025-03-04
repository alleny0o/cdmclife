import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

interface ButtonLinkProps {
  href: string;
  target?: string;
  className?: string;
  children: React.ReactNode;
}

const ButtonLink: React.FC<ButtonLinkProps> = ({ href, className = "", target, children }) => {
  return (
    <Link
      href={href}
      target={target || "_self"}
      className={`group inline-flex items-center border-2 border-deepBlack text-deepBlack px-6 py-2 rounded-md font-medium hover:bg-deepBlack hover:text-softWhite transition-all duration-300 text-sm md:text-base relative overflow-hidden ${className}`}
    >
      <span className="relative z-10">{children}</span>
      <span className="relative z-10 ml-2 transition-transform duration-300 group-hover:translate-x-1">
        <ArrowUpRight size={18} />
      </span>
      <span className="absolute inset-0 bg-deepBlack -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
    </Link>
  );
};

export default ButtonLink;
