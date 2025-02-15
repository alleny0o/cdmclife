"use client";
import { type FC } from "react";
import { Links } from "@/app/constants/nav-links";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink: FC<Links> = (props) => {
  const pathname = usePathname();
  const isActive = pathname === props.href;

  return (
    <div>
      <Link
        href={props.href ?? "/"}
        className={`
          block font-medium lg:text-3xl text-2xl py-2
          transition-colors duration-300
          relative group
          ${isActive ? "text-dustyBlue tracking-wider" : "text-softWhite"}
        `}
      >
        {props.label.toUpperCase()}
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