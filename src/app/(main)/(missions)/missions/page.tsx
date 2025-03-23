import Hero from "@/components/hero/Hero";
import Missions from "../components/Missions";
import PastMissions from "../components/PastMissions";
import Breadcrumbs from "@/components/breadcrumbs/Breadcrumbs";
import { Metadata } from "next";
import { client } from "@/sanity/lib/client";
import { Hero as HeroType } from "@/sanity/lib/interface";

export const metadata: Metadata = {
  title: "Missions",
  description: "Learn more about our missions.",
};

// fetch hero data from sanity
async function getData() {
  const query = `*[_type == "missionsHero"] {
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


async function MissionsPage() {
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
      <Missions />
      <PastMissions />
    </div>
  );
}

export default MissionsPage;
