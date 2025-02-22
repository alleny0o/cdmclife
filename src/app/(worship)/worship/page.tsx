import Hero from "@/components/hero/Hero";
import WorshipInfo from "../components/WorshipInfo";
import Breadcrumbs from "@/components/breadcrumbs/Breadcrumbs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Worship",
  description: "Join us for worship— Our service times and location details.",
};

function SermonsPage() {
  return (
    <div className="w-full h-full bg-white">
        <Hero title="Worship" image="hero/og-mustard-seed.jpg" />
        <Breadcrumbs />
        <WorshipInfo />
    </div>
  )
}

export default SermonsPage;