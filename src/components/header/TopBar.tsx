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
          <Link
            href="https://www.google.com/maps/dir//12811+Glen+Rd,+Gaithersburg,+MD+20878/@39.070793,-77.3474369,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x89b633ca225da1d1:0xe546426bf399fd2e!2m2!1d-77.265036!2d39.070822?entry=ttu&g_ep=EgoyMDI1MDMxOS4yIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            className="text-white text-[9px] xs:text-[11px] sm:text-sm font-light transition-all duration-200 hover:opacity-75 active:opacity-50 hover:underline hover:underline-offset-2 hover:decoration-vintageCream/50 inline-flex items-center gap-1"
          >
            <MdLocationPin className="text-lg text-softWhite" />
            12811 Glen Rd, Gaithersburg, MD 20878
          </Link>
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
