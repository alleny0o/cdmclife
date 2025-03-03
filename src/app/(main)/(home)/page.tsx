import Highlights from "./components/Highlights";
import Sermons from "./components/Sermons";
import Gallery from "./components/Gallery";
import Breadcrumbs from "@/components/breadcrumbs/Breadcrumbs";
import Hero from "@/components/hero/Hero";

export default function Home() {
  return (
    <div className="w-full h-full bg-stone-50">
      <Hero
        title="Home"
        image="/homepage/hero/hero-img.png"
        verse={{
          text: "He gives snow like wool; he scatters the frost like ashes. He casts forth his ice like morsels; who can stand before his cold? He sends out his word, and melts them; he causes his wind to blow, and the waters flow.",
          reference: "Psalm 147:16-18",
        }}
      />
      <Breadcrumbs />
      <Highlights />
      <Sermons />
      <Gallery />
    </div>
  );
}
