import { MetadataRoute } from "next";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000/';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    return [
        {
            url: baseUrl,
            priority: 1,
        },
        {
            url: `${baseUrl}about`,
            priority: 0.9,
        },
        {
            url: `${baseUrl}worship`,
            priority: 0.8,
        },
        {
            url: `${baseUrl}missions`,
            priority: 0.7,
        },
    ];
};