import { Home, Users, Church, Globe, MoreHorizontal } from "lucide-react";
import { IconType } from "react-icons";
import { TfiAnnouncement } from "react-icons/tfi";
import { IoCalendarNumber } from "react-icons/io5";
import { GiThreeFriends, GiClover } from "react-icons/gi";
import { RiContactsBook2Line } from "react-icons/ri";
import { BiBible, BiDonateHeart } from "react-icons/bi";

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
  label: string;
  href?: string;
  navImage?: string;
  caption?: string;
  icon?: IconType;
  subLinks?: SubLink[];
};

// Updated links array with icons
export const links: Links[] = [
  {
    label: "Home",
    href: "/",
    icon: Home
  },
  {
    label: "About",
    href: "/about",
    icon: Users
  },
  {
    label: "Sermons",
    href: "/sermons",
    icon: Church
  },
  {
    label: "Missions",
    href: "/missions",
    icon: Globe
  },
  {
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
            icon: TfiAnnouncement
          },
          {
            label: "Schedule",
            href: "/schedule",
            caption: "Upcoming events & services",
            icon: IoCalendarNumber
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
            icon: GiThreeFriends
          },
          {
            label: "Bible Study",
            href: "/bible-study",
            caption: "Explore God's Word",
            icon: BiBible
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
            icon: GiClover
          },
          {
            label: "Donate",
            href: "/donate",
            caption: "Support our mission",
            icon: BiDonateHeart
          },
          {
            label: "Contact Us",
            href: "/contact-us",
            caption: "Reach out to us",
            icon: RiContactsBook2Line
          },
        ],
      },
    ],
  },
];