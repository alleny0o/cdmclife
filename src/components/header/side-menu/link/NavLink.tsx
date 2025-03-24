"use client";
import { Links } from "@/constants/nav-links";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLinkProps = {
  link: Links;
  setIsActive: () => void;
};

const NavLink = ({link, setIsActive}: NavLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === link.href;

  return (
    <div>
      <Link
        href={link.href ?? "/"}
        className={`
          block font-medium text-base lg:text-lg py-2
          transition-colors duration-300
          relative group
          ${isActive ? "text-dustyBlue tracking-wider" : "text-softWhite"}
        `}
        onClick={setIsActive}
      >
        {link.label.toUpperCase()}
        <span className={`
          absolute -bottom-1 left-0 w-0 h-[1px] 
          transition-all duration-300 ease-in-out
          group-hover:w-full
          ${isActive ? "w-full bg-dustyBlue" : "bg-softWhite"}
        `}/>
      </Link>
      <div className={`
        h-[1px] w-full transition-colors duration-300
        ${isActive ? "bg-dustyBlue" : "bg-softWhite"}
      `}/>
    </div>
  );
};

export default NavLink;