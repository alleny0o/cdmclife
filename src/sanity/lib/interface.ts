// ─── Page Builder Block Types ──────────────────────────────────────────────

export interface HeroBlock {
  _type: "heroBlock";
  _key: string;
  title: string;
  imageURL: string;
  opacity?: number;
  verse: { text: string; reference: string };
}

export interface HighlightItem  { _key: string; title: string; description: string; imageURL: string; href: string; tags: string[]; }
export interface SermonItem     { _key: string; title: string; pastor: string; link: string; duration: string; date: string; }
export interface GalleryItem    { _key: string; imageURL: string; }
export interface TeamMemberItem { _key: string; name: string; slug: string; role: string; imageURL: string; description: unknown[]; }
export interface MissionItem    { _key: string; year: number; title: string; description: string; imageURL: string; }

export interface HighlightsBlock    { _type: "highlightsBlock";    _key: string; highlights: HighlightItem[]; }
export interface SermonsBlock       { _type: "sermonsBlock";       _key: string; sermons: SermonItem[]; }
export interface GalleryBlock       { _type: "galleryBlock";       _key: string; images: GalleryItem[]; }
export interface OurTeamBlock       { _type: "ourTeamBlock";       _key: string; members: TeamMemberItem[]; }
export interface MissionsBlock      { _type: "missionsBlock";      _key: string; missions: MissionItem[]; }
export interface AnnouncementsBlock { _type: "announcementsBlock"; _key: string; weekStart: string; weekEnd: string; events: Event[]; }
export interface ContactFormBlock   { _type: "contactFormBlock";   _key: string; }

export interface Tab {
  _key: string;
  title: string;
  body: unknown[]; // Portable Text
  imageURL?: string;
  imageCaption?: string;
}

export interface TabsBlock {
  _type: "tabsBlock";
  _key: string;
  tabs: Tab[];
}

export interface ServiceItem {
  _key: string;
  name: string;
  time: string;
  description: string;
}

export interface WorshipInfoBlock {
  _type: "worshipInfoBlock";
  _key: string;
  services: ServiceItem[];
  jointService: { time: string; description: string };
  imageURL?: string;
}

export type PageSection =
  | HeroBlock
  | HighlightsBlock
  | SermonsBlock
  | GalleryBlock
  | OurTeamBlock
  | MissionsBlock
  | AnnouncementsBlock
  | TabsBlock
  | WorshipInfoBlock
  | ContactFormBlock;

export interface SanityPage {
  _id: string;
  title: string;
  slug: string;
  isHomePage?: boolean;
  transparentHeader?: boolean;
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
    ogImageURL?: string;
  };
  sections: PageSection[];
}

export interface SiteSettings {
  siteName: string;
  defaultSeo?: {
    metaTitle?: string;
    metaDescription?: string;
    ogImageURL?: string;
  };
}

// ─── Legacy Collection Types ─────────────────────────────────────────────────

export interface HighlightsCard {
    _id: string;
    title: string;
    description: string;
    imageURL: string;
    href: string;
    tags: string[];
    order: number;
};

export interface SermonCard {
    _id: string;
    title: string;
    pastor: string;
    link: string;
    embedUrl: string;
    duration: string;
    date: string;
    order: number;
};

export interface GalleryImage {
    _id: string;
    imageURL: string;
    order: number;
};

export interface PastMission {
    _id: string;
    year: number;
    title: string;
    description: string;
    imageURL: string;
    order: number;
};

export interface Event {
    _key: string;
    title: string;
    description?: string;
    date?: string;
    startTime?: string;
    endTime?: string;
};

export interface Announcements {
    _id: string;
    weekStart: string;
    weekEnd: string;
    events: Event[];
}

export interface Hero {
    title: string;
    imageURL: string;
    opacity: number | null;
    verse: {
        text: string;
        reference: string;
    };
};

export interface TeamMember {
    _id: string;
    name: string;
    slug: string;
    role: string;
    imageURL: string;
    description: {
        text: string;
    }[];
    order: number;
};