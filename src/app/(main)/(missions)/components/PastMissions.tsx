import ButtonLink from "@/components/ButtonLink";
import { Container, Section } from "@/components/layouts/Layouts";
import { H2 } from "@/components/text/H2";
import { client } from "@/sanity/lib/client";
import { PastMission } from "@/sanity/lib/interface";
import Image from "next/image";
import React from "react";

async function getData() {
  const query = `*[_type == "missions"] {
    _id,
    year,
    title,
    description,
    "imageURL": image.asset->url,
    link,
    order,
  }`;

  const data: PastMission[] = await client.fetch(query);
  return data;
};
interface ContentBoxProps {
  item: PastMission;
  extraClasses?: string;
}

const ContentBox: React.FC<ContentBoxProps> = ({ item, extraClasses = "" }) => {
  return (
    <div
      className={`w-full bg-[#F8FAFC] rounded-lg shadow-md border border-[#E2E8F0] 
        px-6 py-4 text-left ${extraClasses}`}
    >
      <h1 className="text-2xl font-semibold text-[#1E293B] mb-2">{item.year}</h1>
      <h3 className="text-lg font-medium text-[#475569] mb-3">{item.title}</h3>
      <p className="text-base text-[#64748B] leading-relaxed">{item.description}</p>
      <ButtonLink
        href={item.link}
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
  item: PastMission;
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
            src={item.imageURL}
            alt={item.title}
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
  item: PastMission;
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
              src={item.imageURL}
              alt={item.title}
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
              src={item.imageURL}
              alt={item.title}
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

const PastMissions: React.FC = async () => {

  const data: PastMission[] = await getData();
  const sortedData = data.sort((a, b) => a.order - b.order);

  return (
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
              {sortedData.map((item, index) => (
                <React.Fragment key={item._id}>
                  <MobileTimelineItem item={item} index={index} totalCount={sortedData.length} />
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
