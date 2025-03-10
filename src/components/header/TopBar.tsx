"use client";

import { MdLocationPin } from "react-icons/md";
import Link from "next/link";
import { SOCIAL_MEDIAS } from "@/constants/social-medias";
import { usePathname } from "next/navigation"; // Import to track route changes

export const TopBar = () => {
  const pathname = usePathname(); // Get current route

  return (
    <div className="block w-full h-full border-b-[1px] border-white/10">
      <div className="grid w-full grid-cols-12 px-2 max-w-7xl mx-auto">
        <div className="flex items-center gap-x-1 col-span-9">
          <MdLocationPin className="text-lg text-softWhite" />
          <span className="sm:text-sm text-[11px] text-softWhite">
            12811 Glen Rd, Gaithersburg, MD 20878
          </span>
        </div>
        <div className="flex justify-end items-center col-span-3">
          <div className="inline-block">
            <div className="flex">
              {SOCIAL_MEDIAS.map((socialMedia, index) => (
                <div
                  key={`${pathname}-${index}`}
                  className="flex justify-center items-center sm:h-12 sm:w-12 w-9 h-9 border-l-[1px] border-white/10 transition-colors duration-300 hover:bg-warmGray cursor-pointer"
                >
                  <Link href={socialMedia.url} target="_blank">
                    {socialMedia.icon({
                      className: "text-2xl text-softWhite",
                    })}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
