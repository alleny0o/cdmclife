import { BiChevronDown } from "react-icons/bi";
import { Links, links } from "@/constants/nav-links";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Navigation = () => {
  const pathname = usePathname();

  return (
    <nav className="hidden md:flex justify-center items-center col-span-8 lg:gap-9 md:gap-5 gap-1">
      {links.map((link, index) => {
        const isActive = (pathname: string, link: Links) => {
          return (
            pathname === link.href ||
            (link.subLinks && link.subLinks.some((subLink) => subLink.subMenu?.some((menuItem) => pathname === menuItem.href)))
          );
        };

        return (
          <div key={index} className="relative group">
            <Link
              href={link.href ?? "/"}
              onClick={(e) => link.subLinks && e.preventDefault()}
              className={`flex items-center text-softWhite text-sm font-medium lg:text-base text-md rounded-lg lg:px-3 md:px-2 py-1 transition-all duration-300 hover:scale-110
                        ${
                          isActive(pathname, link)
                            ? "bg-[rgba(255,255,255,0.1)] shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-[2px] border border-[rgba(255,255,255,0.1)] hover:border-[rgba(255,255,255,0.2)]"
                            : "border border-transparent hover:border-[rgba(255,255,255,0.08)]"
                        }`}
            >
              {link.label.toUpperCase()}
              {link.subLinks && <BiChevronDown className="ml-1 w-4 h-4" />}
            </Link>
          </div>
        );
      })}
    </nav>
  );
};
