import { BiChevronDown } from "react-icons/bi";
import { links } from "@/app/constants/nav-links";
import Link from "next/link";

export const Navigation = () => (
  <nav className="hidden md:flex justify-center items-center col-span-8 lg:gap-9 md:gap-5 gap-1">
    {links.map((link, index) => (
      <div key={index} className="relative group">
        <Link
          href={link.href ?? "/"}
          onClick={(e) => link.subLinks && e.preventDefault()}
          className="flex items-center text-softWhite font-medium lg:text-base text-sm lg:px-3 md:px-2 py-2 transition-colors hover:text-dustyBlue"
        >
          {link.label.toUpperCase()}
          {link.subLinks && <BiChevronDown className="ml-1 w-4 h-4" />}
        </Link>
      </div>
    ))}
  </nav>
);