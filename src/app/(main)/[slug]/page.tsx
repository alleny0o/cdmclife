import { client } from "@/sanity/lib/client";
import { PageSection, SanityPage } from "@/sanity/lib/interface";
import SectionRenderer from "@/components/sections/SectionRenderer";
import { Metadata } from "next";
import { notFound } from "next/navigation";

const pageQuery = `*[_type == "page" && slug.current == $slug && !isHomePage][0] {
  _id,
  title,
  "slug": slug.current,
  transparentHeader,
  seo {
    metaTitle,
    metaDescription,
    "ogImageURL": ogImage.asset->url,
  },
  sections[] {
    _type, _key,
    // heroBlock
    title, "imageURL": image.asset->url, opacity, verse,
    // highlightsBlock
    highlights[] { _key, title, description, "imageURL": image.asset->url, href, tags },
    // sermonsBlock
    sermons[] { _key, title, pastor, link, duration, date },
    // galleryBlock
    images[] { _key, "imageURL": image.asset->url },
    // ourTeamBlock
    members[] { _key, name, "slug": slug.current, role, "imageURL": image.asset->url, description },
    // missionsBlock
    missions[] { _key, year, title, description, "imageURL": image.asset->url },
    // announcementsBlock
    weekStart, weekEnd,
    events[] { _key, title, description, date, startTime, endTime },
    // tabsBlock
    tabs[] { _key, title, body, "imageURL": image.asset->url, imageCaption },
    // worshipInfoBlock
    services[] { _key, name, time, description },
    jointService,
  }
}`;

export async function generateStaticParams() {
  const slugs: { slug: string }[] = await client.fetch(
    `*[_type == "page" && !isHomePage && defined(slug.current)]{ "slug": slug.current }`,
    {},
    { next: { revalidate: 30 } }
  );
  return slugs;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page: SanityPage | null = await client.fetch(
    pageQuery,
    { slug },
    { next: { revalidate: 30 } }
  );

  if (!page) return {};

  return {
    title: page.seo?.metaTitle || page.title,
    description: page.seo?.metaDescription,
    openGraph: {
      title: page.seo?.metaTitle || page.title,
      description: page.seo?.metaDescription || undefined,
      images: page.seo?.ogImageURL ? [page.seo.ogImageURL] : [],
    },
  };
}

export default async function DynamicPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page: SanityPage | null = await client.fetch(
    pageQuery,
    { slug },
    { next: { revalidate: 30 } }
  );

  if (!page) notFound();

  return (
    <div className="w-full h-full bg-stone-50">
      {page.sections?.map((section: PageSection) => (
        <SectionRenderer key={section._key} section={section} />
      ))}
    </div>
  );
}
