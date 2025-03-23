import Highlights from "./components/Highlights";
import Sermons from "./components/Sermons";
import Gallery from "./components/Gallery";
import Breadcrumbs from "@/components/breadcrumbs/Breadcrumbs";
import Hero from "@/components/hero/Hero";
import { client } from "@/sanity/lib/client";
import { Hero as HeroType } from "@/sanity/lib/interface";

// fetch hero data from sanity
async function getData() {
  const query = `*[_type == "homeHero"] {
    _id,
    title,
    "imageURL": image.asset->url,
    opacity,
    verse {
      text,
      reference
    }
  }[0]`;

  const data = client.fetch(query, {}, { next: { revalidate: 30 } });
  return data;
};

export default async function Home() {
  const heroData: HeroType = await getData();

  return (
    <div className="w-full h-full bg-stone-50">
      <Hero
        title={heroData.title}
        image={heroData.imageURL}
        verse={{
          text: heroData.verse.text,
          reference: heroData.verse.reference,
        }}
        opacity={heroData.opacity ? heroData.opacity : 60}
      />
      <Breadcrumbs />
      <Highlights />
      <Sermons />
      <Gallery />
    </div>
  );
}
