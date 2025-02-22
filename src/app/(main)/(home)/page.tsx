import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import Sermons from "./components/Sermons";
import Gallery from "./components/Gallery";
import Breadcrumbs from "@/components/breadcrumbs/Breadcrumbs";

export default function Home() {
  return (
    <div className="w-full h-full bg-white">
      <Hero />
      <Breadcrumbs />
      <Highlights />
      <Sermons />
      <Gallery />
    </div>
  );
}
