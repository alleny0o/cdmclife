import ButtonLink from "@/components/ButtonLink";
import { Container, Section } from "@/components/layouts/Layouts";
import { H2 } from "@/components/text/H2";
import Image from "next/image";
import React from "react";

interface TimelineItem {
  id: number;
  year: string;
  missionTitle: string;
  description: string;
  image: string;
}

const timelineData: TimelineItem[] = [
  {
    id: 1,
    year: "2021",
    missionTitle: "Guatemala",
    description:
      "In 2021, our team traveled to Guatemala to provide aid and support. We built homes and offered medical assistance to those in need.",
    image: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
  },
  {
    id: 2,
    year: "2020",
    missionTitle: "Guatemala",
    description:
      "Our local outreach in 2020 focused on supporting families in need. We distributed food and essentials to those affected by the pandemic.",
    image: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
  },
  {
    id: 3,
    year: "2019",
    missionTitle: "Guatemala",
    description:
      "In 2019, we ventured to Kenya to support education initiatives. Our efforts helped build schools and provide resources for local children.",
    image: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
  },
  {
    id: 4,
    year: "2018",
    missionTitle: "Guatemala",
    description:
      "Our 2018 disaster relief efforts provided immediate assistance to hurricane victims. We delivered supplies and support to affected communities.",
    image: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
  },
];

interface ContentBoxProps {
  item: TimelineItem;
  extraClasses?: string;
}

const ContentBox: React.FC<ContentBoxProps> = ({ item, extraClasses = "" }) => {
  return (
    <div
      className={`w-full bg-[#F8FAFC] rounded-lg shadow-md border border-[#E2E8F0] 
        px-6 py-4 text-left ${extraClasses}`}
    >
      <h1 className="text-2xl font-semibold text-[#1E293B] mb-2">{item.year}</h1>
      <h3 className="text-lg font-medium text-[#475569] mb-3">{item.missionTitle}</h3>
      <p className="text-base text-[#64748B] leading-relaxed">{item.description}</p>
      <ButtonLink
        href="#"
        target="_blank"
        className="mt-4 inline-block px-4 py-2 rounded-md text-sm font-medium transition"
      >
        More Details
      </ButtonLink>
    </div>
  );
};

const TimelineDot: React.FC = () => (
  <div className="relative bg-black w-full h-full">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[15px] h-[15px] bg-[#0F172A] rounded-full" />
  </div>
);

interface MobileTimelineItemProps {
  item: TimelineItem;
  index: number;
  totalCount: number;
}

const MobileTimelineItem: React.FC<MobileTimelineItemProps> = ({ item, index, totalCount }) => {
  return (
    <div className="md:hidden contents">
      <TimelineDot />
      <div className={`w-full flex flex-col gap-4 items-center ${index !== totalCount - 1 ? "pb-[30px]" : ""}`}>
        <ContentBox item={item} extraClasses="text-left" />
        <div className="w-full flex justify-center">
          <Image
            src={item.image}
            alt={item.missionTitle}
            width={400}
            height={250}
            className="w-full h-full max-h-[32rem] object-cover rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

interface DesktopTimelineItemProps {
  item: TimelineItem;
  index: number;
}

const DesktopTimelineItem: React.FC<DesktopTimelineItemProps> = ({ item, index }) => {
  const isEven = index % 2 === 0;
  return (
    <div className="hidden md:contents">
      {isEven ? (
        <>
          <div className="col-span-1 pb-[30px] px-[20px] w-full">
            <Image
              src={item.image}
              alt={item.missionTitle}
              width={150}
              height={150}
              className="w-full lg:h-96 md:h-80 object-cover rounded-md shadow-md"
            />
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
            <Image
              src={item.image}
              alt={item.missionTitle}
              width={150}
              height={150}
              className="w-full lg:h-96 md:h-80 object-cover rounded-md shadow-md"
            />
          </div>
        </>
      )}
    </div>
  );
};

const PastMissions: React.FC = () => {
  return (
    <Section className="relative w-full h-full bg-lightGray sm:px-6">
      <Container className="w-full py-20">
        <div className="w-full max-w-7xl mx-auto">
          <div className="mb-8 max-w-xl relative">
            <div className="h-px w-16 bg-[#64748B] absolute -top-4 left-0"></div>
            <H2 className="text-4xl sm:text-5xl font-light tracking-tight text-[#1E293B]">
              Past <span className="font-semibold">Missions</span>
            </H2>
            <div className="mt-4 w-16 h-1 bg-gradient-to-r from-[#64748B] to-[#94A3B8] rounded-full"></div>
          </div>

          <div className="w-full h-full mx-auto max-w-7xl">
            <div className="grid grid-cols-[2px_1fr] md:grid-cols-[1fr_3px_1fr] gap-x-4">
              {timelineData.map((item, index) => (
                <React.Fragment key={item.id}>
                  <MobileTimelineItem item={item} index={index} totalCount={timelineData.length} />
                  <DesktopTimelineItem item={item} index={index} />
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default PastMissions;
