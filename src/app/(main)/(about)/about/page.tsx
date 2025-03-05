import Breadcrumbs from "@/components/breadcrumbs/Breadcrumbs";
import AboutUs from "../components/AboutUs";
import Hero from "@/components/hero/Hero";
import Tabs from "@/components/tabs/Tabs";
import { Metadata } from "next";
import OurTeam from "../components/OurTeam";
import OurHistory from "../components/OurHistory";

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about our church.",
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

function AboutPage() {
  return (
    <div className="w-full h-full bg-stone-50">
      <Hero
        title="About"
        image="hero/og-mustard-seed.jpg"
        verse={{
          text: "Blessed are the merciful, for they will be shown mercy.",
          reference: "Matthew 5:7",
        }}
      />
      <Breadcrumbs />
      <div className="mt-10"></div>
      <Tabs tabs={tabs} />
    </div>
  );
}

export default AboutPage;
