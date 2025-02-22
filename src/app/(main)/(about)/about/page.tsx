import Breadcrumbs from "@/components/breadcrumbs/Breadcrumbs";
import AboutUs from "../components/AboutUs";
import Hero from "@/components/hero/Hero";
import Tabs from "@/components/tabs/Tabs";
import { Metadata } from "next";

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
    title: "Our Team",
    content: <div>Contact content</div>,
  },
];

function AboutPage() {
  return (
    <div className="w-full h-full bg-stone-50">
        <Hero title="About" image="hero/og-mustard-seed.jpg" />
        <Breadcrumbs />
        <div className="mt-10"></div>
        <Tabs tabs={tabs} />
    </div>
  )
}

export default AboutPage;