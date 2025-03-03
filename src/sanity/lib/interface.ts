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