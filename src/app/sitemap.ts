import { MetadataRoute } from "next";
import { client } from "@/sanity/lib/client";

const baseUrl = (process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000").replace(/\/$/, "");

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const pages: { slug: string | null; isHomePage: boolean }[] = await client.fetch(
    `*[_type == "page" && defined(slug.current)]{ "slug": slug.current, isHomePage }`,
    {},
    { next: { revalidate: 3600 } }
  );

  return pages.map((page) => ({
    url: page.isHomePage ? `${baseUrl}/` : `${baseUrl}/${page.slug}`,
    priority: page.isHomePage ? 1 : 0.8,
  }));
}
