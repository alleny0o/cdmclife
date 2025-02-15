import { IconType } from "react-icons";
import { TfiAnnouncement } from "react-icons/tfi";
import { IoCalendarNumber } from "react-icons/io5";
import { FaPerson } from "react-icons/fa6";
import { FaPeopleRobbery } from "react-icons/fa6";
import { PiHandsPrayingDuotone } from "react-icons/pi";
import { RiContactsBook2Line } from "react-icons/ri";

export type SubLink = {
    header?: string;
    subMenu?: {
      icon?: IconType;
      label: string;
      caption?: string;
      href: string;
    }[];
    subImages?: {
      label: string;
      href: string;
      image: string;
    }[];
  };
  
  export type Links = {
    label: string;
    href?: string;
    navImage?: string;
    caption?: string;
    subLinks?: SubLink[];
  };
  
  export const links: Links[] = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Sermons",
      href: "/sermons",
    },
    {
      label: "Missions",
      href: "/missions",
    },
    {
      label: "More",
      subLinks: [
        {
          header: "Church Life",
          subMenu: [
            { label: "Leaders", href: "/leaders", caption: "Meet our leaders.", icon: FaPerson },
            { label: "Announcements", href: "/announcements", caption: "Stay updated with the latest events.", icon: TfiAnnouncement },
            { label: "Schedule", href: "/schedule", caption: "See what's happening.", icon: IoCalendarNumber},
          ],
        },
        {
          header: "Spiritual Growth",
          subMenu: [
            { label: "Fellowship", href: "/fellowship", caption: "Fellowship makes us special.", icon: FaPeopleRobbery },
            { label: "Prayer Requests", href: "/prayer-requests", caption: "Share your prayer requests.", icon: PiHandsPrayingDuotone },
            { label: "Contact Us", href: "/contact-us", caption: "Get in touch with us.", icon: RiContactsBook2Line },
          ],
        },
      ],
    },
  ];
  