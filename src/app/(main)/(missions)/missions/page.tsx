import Hero from "@/components/hero/Hero";
import Missions from "../components/Missions";
import PastMissions from "../components/PastMissions";
import Breadcrumbs from "@/components/breadcrumbs/Breadcrumbs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Missions",
  description: "Learn more about our missions.",
};

function MissionsPage() {
  return (
    <div className="w-full h-full bg-stone-50">
      <Hero
        title="Missions"
        image="missions/hero/hero-img.jpg"
        verse={{
          text: "How, then, can they call on the one they have not believed in? And how can they believe in the one of whom they have not heard? And how can they hear without someone preaching to them?",
          reference: "Romans 10:14",
        }}
      />
      <Breadcrumbs />
      <Missions />
      <PastMissions />
    </div>
  );
}

export default MissionsPage;
