import { client } from "@/sanity/lib/client";
import { PageSection, SanityPage } from "@/sanity/lib/interface";
import SectionRenderer from "@/components/sections/SectionRenderer";

const homePageQuery = `*[_type == "page" && isHomePage == true][0] {
  _id,
  title,
  sections[] {
    _type, _key,
    title, "imageURL": image.asset->url, opacity, verse,
    highlights[] { _key, title, description, "imageURL": image.asset->url, href, tags },
    sermons[] { _key, title, pastor, link, duration, date },
    images[] { _key, "imageURL": image.asset->url },
    members[] { _key, name, "slug": slug.current, role, "imageURL": image.asset->url, description },
    missions[] { _key, year, title, description, "imageURL": image.asset->url },
    weekStart, weekEnd,
    events[] { _key, title, description, date, startTime, endTime },
    tabs[] { _key, title, body, "imageURL": image.asset->url, imageCaption },
    services[] { _key, name, time, description },
    jointService,
  }
}`;

export default async function Home() {
  const page: SanityPage | null = await client.fetch(
    homePageQuery,
    {},
    { next: { revalidate: 30 } }
  );

  if (!page) {
    return (
      <div className="w-full h-full bg-stone-50 flex items-center justify-center min-h-screen">
        <p className="text-gray-500">No homepage configured in Sanity yet.</p>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-stone-50">
      {page.sections?.map((section: PageSection) => (
        <SectionRenderer key={section._key} section={section} />
      ))}
    </div>
  );
}
