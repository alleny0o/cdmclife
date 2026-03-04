import {
  PageSection,
  HighlightsBlock,
  SermonsBlock,
  GalleryBlock,
  OurTeamBlock,
  MissionsBlock,
  AnnouncementsBlock,
} from "@/sanity/lib/interface";
import Hero from "@/components/hero/Hero";
import Highlights from "./Highlights";
import Sermons from "./Sermons";
import Gallery from "./Gallery";
import OurTeam from "./OurTeam";
import MissionsSection from "./MissionsSection";
import AnnouncementsSection from "./AnnouncementsSection";
import TabsSection from "./TabsSection";
import WorshipInfo from "./WorshipInfo";
import ContactForm from "./ContactForm";

export default function SectionRenderer({ section }: { section: PageSection }) {
  switch (section._type) {
    case "heroBlock":
      return (
        <Hero
          title={section.title}
          image={section.imageURL}
          verse={section.verse}
          opacity={section.opacity ?? 60}
        />
      );
    case "highlightsBlock":
      return <Highlights block={section as HighlightsBlock} />;
    case "sermonsBlock":
      return <Sermons block={section as SermonsBlock} />;
    case "galleryBlock":
      return <Gallery block={section as GalleryBlock} />;
    case "ourTeamBlock":
      return <OurTeam block={section as OurTeamBlock} />;
    case "missionsBlock":
      return <MissionsSection block={section as MissionsBlock} />;
    case "announcementsBlock":
      return <AnnouncementsSection block={section as AnnouncementsBlock} />;
    case "tabsBlock":
      return <TabsSection tabs={section.tabs} />;
    case "worshipInfoBlock":
      return <WorshipInfo data={section} />;
    case "contactFormBlock":
      return <ContactForm />;
    default:
      return null;
  }
}
