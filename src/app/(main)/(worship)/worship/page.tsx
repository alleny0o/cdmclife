import Hero from "@/components/hero/Hero";
import WorshipInfo from "../components/WorshipInfo";
import Breadcrumbs from "@/components/breadcrumbs/Breadcrumbs";
import { Metadata } from "next";
import { client } from "@/sanity/lib/client";
import { Hero as HeroType } from "@/sanity/lib/interface";

export const metadata: Metadata = {
  title: "Worship",
  description: "Hearts united, Spirits lifted \uD83D\uDE4C",
  openGraph: {
    title: "Worship",
    description: "Hearts united, Spirits lifted \uD83D\uDE4C",
  },
};

async function getData() {
  const query = `*[_type == "worshipHero"] {
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

async function WorshipPage() {
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
      <WorshipInfo />
    </div>
  );
}

export default WorshipPage;
