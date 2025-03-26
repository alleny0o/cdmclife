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