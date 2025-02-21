"use client";
import { useState, useEffect, useRef } from "react";
import { BiChevronDown } from "react-icons/bi";
import { Links, links } from "@/constants/nav-links";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MegaMenu from "./mega-menu/MegaMenu";

export const Navigation = () => {
  const pathname = usePathname();
  const [activeMegaMenu, setActiveMegaMenu] = useState<Links["id"] | null>(null);
  const menuRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleSetSelected = (val: Links["id"] | null) => {
    setActiveMegaMenu(val);
  };

  const prevScrollY = useRef(0); // Default to 0 (safe for SSR)

  useEffect(() => {
    prevScrollY.current = window.scrollY; // Initialize after mounting
  }, []);

  useEffect(() => {
    if (!activeMegaMenu) return;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const prevY = prevScrollY.current;

      // If we are above 140 and now below 160, we are in range
      const inRange = currentScrollY >= 150 && currentScrollY <= 160;

      // If we jumped **past** the range in one scroll event (fast scrolling)
      const jumpedPast =
        (prevY < 150 && currentScrollY > 160) || // Fast scroll DOWN past range
        (prevY > 160 && currentScrollY < 150);  // Fast scroll UP past range

      if (inRange || jumpedPast) {
        setActiveMegaMenu(null);
      }

      prevScrollY.current = currentScrollY; // Update previous scroll position
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeMegaMenu]);

  const isActive = (link: Links) => pathname === link.href;
  const isSubLinkActive = (link: Links) =>
    link.subLinks?.some((subLink) => subLink.subMenu?.some((menuItem) => pathname === menuItem.href));

  useEffect(() => {
    if (!activeMegaMenu) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (!menuRefs.current.some((ref) => ref?.contains(event.target as Node))) {
        setActiveMegaMenu(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [activeMegaMenu]);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>, linkId: Links["id"]) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleSetSelected(activeMegaMenu === linkId ? null : linkId);
    }
  };

  const getLinkClasses = (link: Links) => {
    const active = isActive(link);
    const isSubActive = isSubLinkActive(link);
    const isMegaMenuActive = activeMegaMenu === link.id;
    const hoverGlassEffect = "hover:bg-white/10 hover:shadow-sm hover:backdrop-blur-sm";
    const glassEffect = "bg-white/10 shadow-sm backdrop-blur-sm";

    return `
      flex items-center text-softWhite text-sm font-medium lg:text-base rounded-sm
      px-3 py-1.5 transition-all duration-200 relative
      ${active || isSubActive ? `after:w-full !rounded-b-none` : "after:w-0"}
      ${isMegaMenuActive ? glassEffect : `${hoverGlassEffect}`}
      after:absolute after:bottom-0 after:left-0 after:h-[2px] 
      after:bg-softWhite after:transition-all after:duration-200
    `;
  };

  return (
    <nav className="hidden md:flex justify-center items-center col-span-8 lg:gap-9 md:gap-5 gap-1">
      {links.map((link, index) => (
        <div
          key={index}
          className="group"
          ref={(el) => {
            menuRefs.current[index] = el;
          }}
        >
          {!link.subLinks ? (
            <Link onMouseEnter={() => setActiveMegaMenu(null)} href={link.href ?? "/"} className={getLinkClasses(link)}>
              {link.label.toUpperCase()}
            </Link>
          ) : (
            <>
              <button
                id={`shift-tab-${link.id}`}
                onClick={() => handleSetSelected(activeMegaMenu === link.id ? null : link.id)}
                onMouseEnter={() => handleSetSelected(link.id)}
                onKeyDown={(event) => handleKeyDown(event, link.id)}
                className={getLinkClasses(link)}
                aria-expanded={activeMegaMenu === link.id}
                aria-haspopup="true"
              >
                {link.label.toUpperCase()}
                <BiChevronDown
                  className={`ml-1 w-4 h-4 transition-transform duration-300 ${activeMegaMenu === link.id ? "rotate-180" : ""}`}
                />
              </button>

              {activeMegaMenu && <MegaMenu activeMegaMenu={activeMegaMenu} />}
            </>
          )}
        </div>
      ))}
    </nav>
  );
};
