import Breadcrumbs from "@/components/breadcrumbs/Breadcrumbs";
import ScheduleContent from "../components/ScheduleContent";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Schedule",
    description: "Check out our schedule of events.",
};

function SchedulePage() {
  return (
    <div className="w-full h-full bg-stone-50">
        <Breadcrumbs />
        <ScheduleContent />
    </div>
  )
}

export default SchedulePage;