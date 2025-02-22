import Hero from '@/components/hero/Hero'
import Missions from '../components/Missions'
import PastMissions from '../components/PastMissions'
import Breadcrumbs from '@/components/breadcrumbs/Breadcrumbs'

function MissionsPage() {
  return (
    <div className="w-full h-full bg-white">
        <Hero title="Missions" image="og-mustard-seed.jpg" />
        <Breadcrumbs />
        <Missions />
        <PastMissions />
    </div>
  )
}

export default MissionsPage