import Hero from "@/components/hero/Hero";
import WorshipInfo from "../components/WorshipInfo";
import Breadcrumbs from "@/components/breadcrumbs/Breadcrumbs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Worship",
  description: "Join us for worship— Our service times and location details.",
};

function WorshipPage() {
  return (
    <div className="w-full h-full bg-stone-50">
      <Hero
        title="Worship"
        image="hero/og-mustard-seed.jpg"
        verse={{
          text: `Sing to God, sing in praise of his name,
          extol him who rides on the clouds;
          rejoice before him—his name is the Lord.
          A father to the fatherless, a defender of widows,
          is God in his holy dwelling.`,
          reference: "Psalm 68:4-5",
        }}
      />
      <Breadcrumbs />
      <WorshipInfo />
    </div>
  );
}

export default WorshipPage;
