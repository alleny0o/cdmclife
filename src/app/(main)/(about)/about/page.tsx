import Breadcrumbs from "@/components/breadcrumbs/Breadcrumbs";
import AboutUs from "../components/AboutUs";
import Hero from "@/components/hero/Hero";
import Tabs from "@/components/tabs/Tabs";
import { Metadata } from "next";
import OurTeam from "../components/OurTeam";
import OurHistory from "../components/OurHistory";
import { client } from "@/sanity/lib/client";
import { Hero as HeroType } from "@/sanity/lib/interface";

export const metadata: Metadata = {
  title: "About",
  description: "Our Story, our Hearts \uD83D\uDCD6\u2764\uFE0F",
  openGraph: {
    title: "About",
    description: "Our Story, our Hearts \uD83D\uDCD6\u2764\uFE0F",
  },
};

// fetch hero data from sanity
async function getData() {
  const query = `*[_type == "aboutHero"] {
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

// Tabs data
const tabs = [
  {
    title: "About Us",
    content: <AboutUs />,
  },
  {
    title: "Our History",
    content: <OurHistory />,
  },
  {
    title: "Our Team",
    content: <OurTeam />,
  },
];

async function AboutPage() {
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
      <div className="mt-10"></div>
      <Tabs tabs={tabs} />
    </div>
  );
}

export default AboutPage;
