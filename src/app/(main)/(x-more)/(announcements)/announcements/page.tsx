import Breadcrumbs from "@/components/breadcrumbs/Breadcrumbs";
import AnnouncementsContent from "../components/AnnouncementsContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Announcements",
  description: "Check out our latest announcements.",
};

function AnnouncementsPage() {
  return (
    <div className="w-full h-full bg-white">
      <Breadcrumbs />
      <AnnouncementsContent />
    </div>
  );
}

export default AnnouncementsPage;
