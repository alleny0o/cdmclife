export type SubLink = {
    header?: string;
    subMenu?: {
      icon?: string;
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
    href: string;
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
      href: "/more",
      subLinks: [
        {
          header: "Church Life",
          subMenu: [
            { label: "Leaders", href: "/leaders", caption: "Meet our leaders." },
            { label: "Fellowship", href: "/fellowship", caption: "Fellowship makes us special." },
            { label: "Calendar", href: "/calendar", caption: "See what's happening." },
          ],
        },
        {
          header: "Spiritual Growth",
          subMenu: [
            { label: "Devotionals", href: "/devotionals", caption: "Grow in your faith." },
            { label: "Prayer Requests", href: "/prayer-requests", caption: "Share your prayer requests." },
            { label: "Contact Us", href: "/contact-us", caption: "Get in touch with us." },
          ],
        },
        {
          header: "Gallery",
          subImages: [
            { label: "Church Life", href: "/resources/gallery/1", image: "/images/gallery1.jpg" },
            { label: "Community Events", href: "/resources/gallery/2", image: "/images/gallery2.jpg" },
          ],
        },
      ],
    },
  ];
  