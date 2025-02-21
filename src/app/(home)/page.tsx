import Hero from "./components/Hero";
import CTA from "./components/CTA";
import Sermons from "./components/Sermons";
import Gallery from "./components/Gallery";
import Breadcrumbs from "@/components/breadcrumbs/Breadcrumbs";

export default function Home() {
  return (
    <div>
      <Hero />
      <Breadcrumbs />
      <CTA />
      <Sermons />
      <Gallery />
    </div>
  );
}
