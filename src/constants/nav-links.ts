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
            href: "/community-service",
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
            caption: "What’s happening & how to join in",
            icon: TfiAnnouncement,
          },
          {
            label: "Schedule",
            href: "/schedule",
            caption: "Services, events, and more",
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
            caption: "Fuel kingdom work with your gift",
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
        caption: "Step into something greater",
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
        caption: "Lift your voice, lift your spirit",
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
        label: "Missions",
        href: "/missions",
        icon: Globe,
        caption: "Hope and healing in Guatemala",
      },
      {
        label: "Love in Action",
        href: "/community-service",
        icon: FaRegHeart,
        caption: "Show up. Serve well. Repeat.",
      },
    ],
  },
  {
    header: "Support the Mission",
    subMenu: [
      {
        label: "Donate",
        href: "/donate",
        icon: BiDonateHeart,
        caption: "Fuel kingdom work with your gift",
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
        caption: "Learn what's happening this week",
      },
      {
        label: "Schedule",
        href: "/schedule",
        icon: IoCalendarNumber,
        caption: "Full calendar of events",
      },
      {
        label: "Contact Us",
        href: "/contact-us",
        icon: RiContactsBook2Line,
        caption: "Reach out — we’re here for you",
      },
    ],
  },
  {
    header: "More",
    subMenu: [
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
      { name: "Community Service", path: "/community-service" },
    ],
  },
  {
    title: "Stay Connected",
    links: [
      { name: "Announcements", path: "/announcements" },
      { name: "Schedule", path: "/schedule" },
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
