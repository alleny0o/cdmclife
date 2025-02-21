import Hero from '@/components/hero/Hero'
import SectionOne from '../components/Section-One'
import SectionTwo from '../components/Section-Two'
import Breadcrumbs from '@/components/breadcrumbs/Breadcrumbs'

function MissionsPage() {
  return (
    <div>
        <Hero title="Missions" image="mustard-seed-bible.jpg" />
        <Breadcrumbs />
        <SectionOne />
        <SectionTwo />
    </div>
  )
}

export default MissionsPage