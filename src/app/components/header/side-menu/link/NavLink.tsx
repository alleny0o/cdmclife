"use client";

import { Links } from "@/app/constants/nav-links";
import Link from "next/link";
import { motion } from "framer-motion";

function NavLink(input: Links) {

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
        className="flex items-center text-softWhite font-medium lg:text-3xl text-2xl lg:px-3 md:px-2 py-2 transition-colors hover:text-dustyBlue"
      >
        {input.label.toUpperCase()}
      </Link>
      <div className="h-[1px] bg-white w-full"></div>
    </motion.div>
  );
}

export default NavLink;
