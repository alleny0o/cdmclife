import Hero from "@/components/hero/Hero";
import SectionOne from "../components/Section-One";
import Breadcrumbs from "@/components/breadcrumbs/Breadcrumbs";

function SermonsPage() {
  return (
    <div className="w-full h-full">
        <Hero title="Sermons" image="mustard-seed-bible.jpg" />
        <Breadcrumbs />
        <SectionOne />
    </div>
  )
}

export default SermonsPage;