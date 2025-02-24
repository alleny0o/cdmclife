// main nav links
import { Home, Users, Church, Globe, MoreHorizontal } from "lucide-react";
import { IconType } from "react-icons";
import { TfiAnnouncement } from "react-icons/tfi";
import { IoCalendarNumber } from "react-icons/io5";
import { GiThreeFriends, GiClover } from "react-icons/gi";
import { RiContactsBook2Line } from "react-icons/ri";
import { BiBible } from "react-icons/bi";
import { CiShop } from "react-icons/ci";

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

// Updated links array with Shopify store link
export const LINKS: Links[] = [
  {
    id: 1,
    label: "Home",
    href: "/",
    icon: Home,
  },
  {
    id: 2,
    label: "About",
    href: "/about",
    icon: Users,
  },
  {
    id: 3,
    label: "Worship",
    href: "/worship",
    icon: Church,
  },
  {
    id: 4,
    label: "Missions",
    href: "/missions",
    icon: Globe,
  },
  {
    id: 5,
    label: "More",
    icon: MoreHorizontal,
    subLinks: [
      {
        header: "Church Updates",
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
        header: "Community & Faith",
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
        ],
      },
      {
        header: "Serve & Connect",
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
        header: "Resources",
        subMenu: [
          {
            label: "Shop",
            href: "https://biblebrowsing.com",
            caption: "Christian merch",
            icon: CiShop,
          },
        ],
      },
    ],
  },
];

// footer nav links
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
    title: "Church Updates",
    links: [
      { name: "Announcements", path: "/announcements" },
      { name: "Schedule", path: "/schedule" },
    ],
  },
  {
    title: "Community & Faith",
    links: [
      { name: "Fellowship", path: "/fellowship" },
      { name: "Bible Study", path: "/bible-study" },
    ],
  },
  {
    title: "Serve & Connect",
    links: [
      { name: "Community Service", path: "/community-service" },
      { name: "Contact Us", path: "/contact" },
    ],
  },
  {
    title: "Resources",
    links: [{ name: "Shop", path: "https://biblebrowsing.com", external: true }],
  },
];