import { Home, Users, Church, Globe } from "lucide-react";
import { MoreHorizontal } from "lucide-react";
import { IconType } from "react-icons";
import { TfiAnnouncement } from "react-icons/tfi";
import { IoCalendarNumber } from "react-icons/io5";
import { GiThreeFriends, GiClover } from "react-icons/gi";
import { RiContactsBook2Line } from "react-icons/ri";
import { BiBible, BiDonateHeart } from "react-icons/bi";
import { CiShop } from "react-icons/ci";
import { FaSeedling } from "react-icons/fa"; // Mustard Seed icon

export type SubLink = {
  header?: string;
  subMenu?: {
    icon?: IconType;
    label: string;
    caption?: string;
    href: string;
  }[];
};

export type Links = {
  id: number;
  label: string;
  href?: string;
  navImage?: string;
  caption?: string;
  icon?: IconType;
  subLinks?: SubLink[];
};

export const LINKS: Links[] = [
  { id: 1, label: "Home", href: "/", icon: Home },
  { id: 2, label: "About", href: "/about", icon: Users },
  { id: 3, label: "Worship", href: "/worship", icon: Church },
  { id: 4, label: "Missions", href: "/missions", icon: Globe },
  {
    id: 5,
    label: "More",
    icon: MoreHorizontal,
    subLinks: [
      {
        header: "Faith & Growth",
        subMenu: [
          {
            label: "Fellowship",
            href: "/fellowship",
            caption: "Grow together in faith",
            icon: GiThreeFriends,
          },
          {
            label: "Bible Study",
            href: "/bible-study",
            caption: "Explore God's Word",
            icon: BiBible,
          },
          {
            label: "Mustard Seed",
            href: "/mustard-seed",
            caption: "A tiny seed, a great kingdom",
            icon: FaSeedling,
          },
        ],
      },
      {
        header: "Church Life & Updates",
        subMenu: [
          {
            label: "Announcements",
            href: "/announcements",
            caption: "Latest news and updates",
            icon: TfiAnnouncement,
          },
          {
            label: "Schedule",
            href: "/schedule",
            caption: "Upcoming events & services",
            icon: IoCalendarNumber,
          },
        ],
      },
      {
        header: "Service & Outreach",
        subMenu: [
          {
            label: "Community Service",
            href: "/community-service",
            caption: "Make a difference",
            icon: GiClover,
          },
          {
            label: "Contact Us",
            href: "/contact-us",
            caption: "Reach out to us",
            icon: RiContactsBook2Line,
          },
        ],
      },
      {
        header: "Support & Store",
        subMenu: [
          {
            label: "Store",
            href: "https://biblebrowsing.com",
            caption: "Christian clothes and gifts",
            icon: CiShop,
          },
          {
            label: "Donate",
            href: "/donate",
            caption: "Support our mission",
            icon: BiDonateHeart,
          },
        ],
      },
    ],
  },
];

// Updated footer nav links to match
interface NavLink {
  name: string;
  path: string;
  external?: boolean;
}

export const FOOTER_LINKS: { title: string; links: NavLink[] }[] = [
  {
    title: "Main",
    links: [
      { name: "Home", path: "/" },
      { name: "About", path: "/about" },
      { name: "Worship", path: "/worship" },
      { name: "Missions", path: "/missions" },
    ],
  },
  {
    title: "Faith & Growth",
    links: [
      { name: "Fellowship", path: "/fellowship" },
      { name: "Bible Study", path: "/bible-study" },
      { name: "Mustard Seed", path: "/mustard-seed" },
    ],
  },
  {
    title: "Church Life & Updates",
    links: [
      { name: "Announcements", path: "/announcements" },
      { name: "Schedule", path: "/schedule" },
    ],
  },
  {
    title: "Service & Outreach",
    links: [
      { name: "Community Service", path: "/community-service" },
      { name: "Contact Us", path: "/contact-us" },
    ],
  },
  {
    title: "Support & Store",
    links: [
      { name: "Store", path: "https://biblebrowsing.com", external: true },
      { name: "Donate", path: "/donate" },
    ],
  },
];
