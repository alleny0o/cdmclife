"use client";
import { Links } from "@/app/constants/nav-links";
import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

function NavLink(input: Links) {
  const pathname = usePathname();
  const isActive = pathname === input.href;

  const variants = {
    initial: {
      y: "30vh",
      transition: {
        duration: 0.5,
        ease: [0.37, 0, 0.63, 1],
      },
    },
    open: {
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0, 0.55, 0.45, 1],
      },
    },
  };

  return (
    <motion.div variants={variants}>
      <Link
        href={input.href ?? "/"}
        onClick={(e) => input.subLinks && e.preventDefault()}
        className={`
          flex items-center 
          font-medium lg:text-3xl text-2xl lg:px-3 md:px-2 py-2
          transition-all duration-300
          relative
          group
          ${isActive ? 'text-dustyBlue tracking-wider' : 'text-softWhite'}
        `}
      >
        {input.label.toUpperCase()}
        <span className={`
          absolute -bottom-1 left-0 w-0 h-[1px] 
          bg-softWhite
          transition-all duration-300 ease-in-out
          group-hover:w-full
          ${isActive ? 'w-full bg-dustyBlue' : 'bg-softWhite'}
        `}/>
      </Link>
      <div className={`
        h-[1px] w-full
        ${isActive ? 'bg-dustyBlue' : 'bg-softWhite'}
      `}/>
    </motion.div>
  );
}

export default NavLink;