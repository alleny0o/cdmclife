import Hero from "./components/Hero";
import Missions from "./components/Missions";
import Sermons from "./components/Sermons";
import Gallery from "./components/Gallery";

export default function Home() {
  return (
    <div>
      <Hero />
      <Missions />
      <Sermons />
      <Gallery />
    </div>
  );
}
