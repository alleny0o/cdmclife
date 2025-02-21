import Hero from "@/components/hero/Hero";
import WorshipInfo from "../components/WorshipInfo";
import Breadcrumbs from "@/components/breadcrumbs/Breadcrumbs";

function SermonsPage() {
  return (
    <div className="w-full h-full bg-white">
        <Hero title="Worship" image="mustard-seed-bible.jpg" />
        <Breadcrumbs />
        <WorshipInfo />
    </div>
  )
}

export default SermonsPage;