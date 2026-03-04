import { Section, Container } from "@/components/layouts/Layouts";
import { H2 } from "@/components/text/H2";
import { P } from "@/components/text/P";
import { MissionsBlock, MissionItem } from "@/sanity/lib/interface";
import Image from "next/image";
import React from "react";

// ─── Past Missions sub-components ────────────────────────────────────────────

interface ContentBoxProps {
  item: MissionItem;
  extraClasses?: string;
}

const ContentBox: React.FC<ContentBoxProps> = ({ item, extraClasses = "" }) => (
  <div className={`w-full bg-[#F8FAFC] rounded-lg shadow-md border border-[#E2E8F0] px-6 py-4 text-left ${extraClasses}`}>
    <h1 className="text-2xl font-semibold text-[#1E293B] mb-2">{item.year}</h1>
    <h3 className="text-lg font-medium text-[#475569] mb-3">{item.title}</h3>
    <p className="text-base text-[#64748B] leading-relaxed">{item.description}</p>
  </div>
);

const TimelineDot: React.FC = () => (
  <div className="relative bg-black w-full h-full">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[15px] h-[15px] bg-[#0F172A] rounded-full" />
  </div>
);

interface MobileTimelineItemProps {
  item: MissionItem;
  index: number;
  totalCount: number;
}

const MobileTimelineItem: React.FC<MobileTimelineItemProps> = ({ item, index, totalCount }) => (
  <div className="md:hidden contents">
    <TimelineDot />
    <div className={`w-full flex flex-col gap-4 items-center ${index !== totalCount - 1 ? "pb-[30px]" : ""}`}>
      <ContentBox item={item} extraClasses="text-left" />
      <div className="w-full flex justify-center">
        <Image src={item.imageURL} alt={item.title} width={400} height={250} className="w-full h-full max-h-[32rem] object-cover rounded-lg shadow-md" />
      </div>
    </div>
  </div>
);

interface DesktopTimelineItemProps {
  item: MissionItem;
  index: number;
}

const DesktopTimelineItem: React.FC<DesktopTimelineItemProps> = ({ item, index }) => {
  const isEven = index % 2 === 0;
  return (
    <div className="hidden md:contents">
      {isEven ? (
        <>
          <div className="col-span-1 pb-[30px] px-[20px] w-full">
            <Image src={item.imageURL} alt={item.title} width={150} height={150} className="w-full lg:h-96 md:h-80 object-cover rounded-md shadow-md" />
          </div>
          <TimelineDot />
          <div className="col-span-1 flex items-start w-full">
            <ContentBox item={item} extraClasses="mx-[20px] mb-[30px]" />
          </div>
        </>
      ) : (
        <>
          <div className="col-span-1 flex items-start w-full">
            <ContentBox item={item} extraClasses="mx-[20px] mb-[30px]" />
          </div>
          <TimelineDot />
          <div className="col-span-1 pb-[30px] px-[20px] w-full">
            <Image src={item.imageURL} alt={item.title} width={150} height={150} className="w-full lg:h-96 md:h-80 object-cover rounded-md shadow-md" />
          </div>
        </>
      )}
    </div>
  );
};

// ─── Main component ───────────────────────────────────────────────────────────

function MissionsSection({ block }: { block: MissionsBlock }) {
  return (
    <>
      {/* Current missions info */}
      <Section className="sm:px-6">
        <Container className="py-20">
          <div className="w-full max-w-7xl mx-auto">
            <div className="mb-8 max-w-xl relative">
              <div className="h-px w-16 bg-dustyBlue absolute -top-4 left-0"></div>
              <H2 className="font-medium tracking-tight">Missions</H2>
            </div>
            <div className="text-lg text-deepGray leading-relaxed space-y-6">
              <P className="!text-lg font-light leading-relaxed text-gray-700 tracking-wide">
                Every year, we travel to <strong>Guatemala</strong> to serve, build, and grow alongside local communities. From
                constructing homes to sharing meals, every moment is an opportunity to make a difference.
              </P>
              <P className="!text-lg font-light leading-relaxed text-gray-700 tracking-wide">
                Our mission includes building and repairing homes, constructing chicken coops for sustainable food sources, and
                forming meaningful relationships through fellowship. We also dedicate time to praying with children at orphanages,
                bringing hope and encouragement to the communities we visit.
              </P>
              <P className="!text-lg font-light leading-relaxed text-gray-700 tracking-wide">
                Join us for this <strong>yearly mission</strong>—build with your hands, grow in faith, and experience the joy of
                serving others.
              </P>
            </div>
            <div className="sm:w-full sm:max-w-5xl mx-auto max-w-[90%] columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4 mt-10">
              <img className="w-full h-[280px] rounded-xl shadow object-cover break-inside-avoid" src="/missions/missions-03.jpeg" alt="Image 03" />
              <img className="w-full h-[250px] rounded-xl shadow object-cover break-inside-avoid" src="/missions/missions-01.jpeg" alt="Image 01" />
              <img className="w-full md:h-[260px] h-[375] rounded-xl shadow object-cover break-inside-avoid" src="/missions/missions-07.jpeg" alt="Image 07" />
              <img className="w-full h-[350px] rounded-xl shadow object-cover break-inside-avoid" src="/missions/missions-02.jpg" alt="Image 02" />
              <img className="w-full md:h-[280px] h-[375px] rounded-xl shadow object-cover break-inside-avoid" src="/missions/missions-04.jpeg" alt="Image 04" />
              <img className="w-full h-[250px] rounded-xl shadow object-cover break-inside-avoid" src="/missions/missions-05.jpeg" alt="Image 05" />
              <img className="w-full h-[280px] rounded-xl shadow object-cover break-inside-avoid" src="/missions/missions-06.jpg" alt="Image 06" />
              <img className="w-full h-[200px] rounded-xl shadow object-cover break-inside-avoid" src="/missions/missions-08.jpeg" alt="Image 08" />
              <img className="w-full h-[250px] rounded-xl shadow object-cover break-inside-avoid" src="/missions/missions-09.jpeg" alt="Image 09" />
            </div>
          </div>
        </Container>
      </Section>

      {/* Past missions timeline */}
      <Section className="relative w-full h-full bg-lightGray sm:px-6">
        <Container className="w-full py-20">
          <div className="w-full max-w-7xl mx-auto">
            <div className="mb-10 max-w-xl relative">
              <div className="h-px w-16 bg-[#64748B] absolute -top-4 left-0"></div>
              <H2 className="font-light tracking-tight text-[#1E293B]">
                Past <span className="font-medium">Missions</span>
              </H2>
            </div>
            <div className="w-full h-full mx-auto max-w-7xl">
              <div className="grid grid-cols-[2px_1fr] md:grid-cols-[1fr_3px_1fr] gap-x-4">
                {block.missions.map((item, index) => (
                  <React.Fragment key={item._key}>
                    <MobileTimelineItem item={item} index={index} totalCount={block.missions.length} />
                    <DesktopTimelineItem item={item} index={index} />
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}

export default MissionsSection;
