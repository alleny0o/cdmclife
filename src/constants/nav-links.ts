// Imports
import { Church, Globe, MoreHorizontal } from "lucide-react";
import { IconType } from "react-icons";
import { TfiAnnouncement } from "react-icons/tfi";
import { IoCalendarNumber } from "react-icons/io5";
import { RiContactsBook2Line } from "react-icons/ri";
import { BiDonateHeart } from "react-icons/bi";
import { CiShop } from "react-icons/ci";
import { FaSeedling, FaHandsHelping, FaRegHeart } from "react-icons/fa";
import { BsWater } from "react-icons/bs";
import { LiaCrossSolid, LiaPeopleCarrySolid } from "react-icons/lia";

// Types
export type SubMenu = {
  icon: IconType;
  label: string;
  caption: string;
  href: string;
  external?: boolean;
};

export type SubLink = {
  header?: string;
  subMenu?: SubMenu[];
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

export type MobileLinks = {
  header: string;
  subMenu: SubMenu[];
};

// Desktop Navigation Links
export const LINKS: Links[] = [
  // Top-level nav
  { id: 1, label: "Home", href: "/", icon: Church },
  { id: 2, label: "About", href: "/about", icon: FaHandsHelping },
  { id: 3, label: "Worship", href: "/worship", icon: LiaCrossSolid },
  { id: 4, label: "Missions", href: "/missions", icon: Globe },

  // Dropdown
  {
    id: 5,
    label: "More",
    icon: MoreHorizontal,
    subLinks: [
      {
        header: "Faith Journey",
        subMenu: [
          {
            label: "Mustard Seed",
            href: "/mustard-seed",
            caption: "Big faith starts small",
            icon: FaSeedling,
          },
          {
            label: "Baptism",
            href: "/baptism",
            caption: "Public faith, personal renewal",
            icon: BsWater,
          },
        ],
      },
      {
        header: "Be the Church",
        subMenu: [
          {
            label: "Fellowship",
            href: "/fellowship",
            caption: "Life is better together",
            icon: LiaPeopleCarrySolid,
          },
          {
            label: "Love in Action",
            href: "/love-in-action",
            caption: "Show up. Serve well. Repeat.",
            icon: FaRegHeart,
          },
        ],
      },
      {
        header: "Stay Connected",
        subMenu: [
          {
            label: "Announcements",
            href: "/announcements",
            caption: "Weekly updates & news",
            icon: TfiAnnouncement,
          },
          {
            label: "Contact Us",
            href: "/contact-us",
            caption: "Questions, prayer, connection",
            icon: IoCalendarNumber,
          },
        ],
      },
      {
        header: "Support & Store",
        subMenu: [
          {
            label: "Donate",
            href: "/donate",
            caption: "Support the mission with love",
            icon: BiDonateHeart,
          },
          {
            label: "Store",
            href: "https://biblebrowsing.com",
            external: true,
            caption: "Faith-based gifts & apparel",
            icon: CiShop,
          },
        ],
      },
    ],
  },
];

// Mobile Navigation Links
export const MOBILE_LINKS: MobileLinks[] = [
  {
    header: "Walk With Us",
    subMenu: [
      {
        label: "Home",
        href: "/",
        icon: Church,
        caption: "Embrace grace, find community",
      },
      {
        label: "About",
        href: "/about",
        icon: FaHandsHelping,
        caption: "Our story, our heart",
      },
      {
        label: "Worship",
        href: "/worship",
        icon: LiaCrossSolid,
        caption: "Hearts united, spirits lifted",
      },
      {
        label: "Missions",
        href: "/missions",
        icon: Globe,
        caption: "Hope and healing in Guatemala",
      },
      {
        label: "Baptism",
        href: "/baptism",
        icon: BsWater,
        caption: "Public faith, personal renewal",
      },
      {
        label: "Mustard Seed",
        href: "/mustard-seed",
        icon: FaSeedling,
        caption: "Big faith starts small",
      },
    ],
  },
  {
    header: "Be the Church",
    subMenu: [
      {
        label: "Fellowship",
        href: "/fellowship",
        icon: LiaPeopleCarrySolid,
        caption: "Life is better together",
      },
      {
        label: "Love in Action",
        href: "/love-in-action",
        icon: FaRegHeart,
        caption: "Show up. Serve well. Repeat.",
      },
    ],
  },
  {
    header: "Stay Connected",
    subMenu: [
      {
        label: "Announcements",
        href: "/announcements",
        icon: TfiAnnouncement,
        caption: "Weekly updates & news",
      },
      {
        label: "Contact Us",
        href: "/contact-us",
        icon: RiContactsBook2Line,
        caption: "Questions, prayer, connection",
      },
    ],
  },
  {
    header: "Support & Store",
    subMenu: [
      {
        label: "Donate",
        href: "/donate",
        icon: BiDonateHeart,
        caption: "Support the mission with love",
      },
      {
        label: "Store",
        href: "https://biblebrowsing.com",
        external: true,
        icon: CiShop,
        caption: "Faith-based gifts & apparel",
      },
    ],
  },
];

// Footer Links (structured like main nav)
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
    title: "Faith Journey",
    links: [
      { name: "Baptism", path: "/baptism" },
      { name: "Mustard Seed", path: "/mustard-seed" },
    ],
  },
  {
    title: "Be the Church",
    links: [
      { name: "Fellowship", path: "/fellowship" },
      { name: "Love in Action", path: "/love-in-action" },
    ],
  },
  {
    title: "Stay Connected",
    links: [
      { name: "Announcements", path: "/announcements" },
      { name: "Contact Us", path: "/contact-us" },
    ],
  },
  {
    title: "Support & Store",
    links: [
      { name: "Donate", path: "/donate" },
      { name: "Store", path: "https://biblebrowsing.com", external: true },
    ],
  },
];
