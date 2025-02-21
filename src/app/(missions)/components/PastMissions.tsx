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
    missionTitle: "Guatamala",
    description:
      "In 2021, our team traveled to Haiti to provide aid and support. We built homes and offered medical assistance to those in need. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
    image: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
  },
  {
    id: 2,
    year: "2020",
    missionTitle: "Guatamala",
    description:
      "Our local outreach in 2020 focused on supporting families in need. We distributed food and essentials to those affected by the pandemic.",
    image: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
  },
  {
    id: 3,
    year: "2019",
    missionTitle: "Guatamala",
    description:
      "In 2019, we ventured to Kenya to support education initiatives. Our efforts helped build schools and provide resources for local children.",
    image: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
  },
  {
    id: 4,
    year: "2018",
    missionTitle: "Guatamala",
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
      className={`w-full bg-white/10 rounded-md shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-[1px] border border-white/10 ${extraClasses} px-4 py-2`}
    >
      <h1 className="text-xl font-bold mb-1">{item.year}</h1>
      <h3 className="text-lg font-semibold mb-2">{item.missionTitle}</h3>
      <p className="text-sm mb-4">{item.description}</p>
      <button className="px-4 py-1.5 text-sm border border-black/50 rounded hover:bg-black hover:text-white transition-colors">
        More Details
      </button>
    </div>
  );
};

const TimelineDot: React.FC = () => (
  <div className="relative bg-black w-full h-full">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[15px] h-[15px] bg-black rounded-full" />
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
        {/* Text Box */}
        <ContentBox item={item} extraClasses="text-left" />

        {/* Image (Properly Aligned) */}
        <div className="w-full flex justify-center">
          <Image
            src={item.image}
            alt={item.missionTitle}
            width={400} // Make image wider but controlled
            height={250} // Maintain consistent height
            className="w-full h-full object-cover rounded-lg shadow-md"
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
          {/* Left column (Image) */}
          <div className="col-span-1 pb-[30px] px-[20px] w-full">
            <Image
              src={item.image}
              alt={item.missionTitle}
              width={150}
              height={150}
              className="w-full lg:h-96 md:h-80 object-cover"
            />
          </div>
          <TimelineDot />
          {/* Right column (Content) */}
          <div className="col-span-1 flex items-start w-full">
            <ContentBox item={item} extraClasses="mx-[20px] mb-[30px]" />
          </div>
        </>
      ) : (
        <>
          {/* Left column (Content) */}
          <div className="col-span-1 flex items-start w-full">
            <ContentBox item={item} extraClasses="mx-[20px] mb-[30px]" />
          </div>
          <TimelineDot />
          {/* Right column (Image) */}
          <div className="col-span-1 pb-[30px] px-[20px] w-full">
            <Image
              src={item.image}
              alt={item.missionTitle}
              width={150}
              height={150}
              className="w-full lg:h-96 md:h-80 object-cover"
            />
          </div>
        </>
      )}
    </div>
  );
};

const PastMissions: React.FC = () => {
  return (
    <div className="relative w-full h-full bg-lightGray">
      <section className="w-full max-w-5xl mx-auto py-16 px-6">
        {/* Section Title */}
        <div className="text-left mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Past Missions</h2>
        </div>

        {/* Section Timeline */}
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
      </section>
    </div>
  );
};

export default PastMissions;
