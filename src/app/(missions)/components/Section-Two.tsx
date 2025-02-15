"use client";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

const timelineData = [
  {
    id: 1,
    year: "2021",
    missionTitle: "Mission to Haiti",
    description:
      "In 2021, our team traveled to Haiti to provide aid and support. We built homes and offered medical assistance to those in need.",
    image: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
  },
  {
    id: 2,
    year: "2020",
    missionTitle: "Local Outreach Program",
    description:
      "Our local outreach in 2020 focused on supporting families in need. We distributed food and essentials to those affected by the pandemic.",
    image: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
  },
  {
    id: 3,
    year: "2019",
    missionTitle: "Mission to Kenya",
    description:
      "In 2019, we ventured to Kenya to support education initiatives. Our efforts helped build schools and provide resources for local children.",
    image: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
  },
  {
    id: 4,
    year: "2018",
    missionTitle: "Disaster Relief Efforts",
    description:
      "Our 2018 disaster relief efforts provided immediate assistance to hurricane victims. We delivered supplies and support to affected communities.",
    image: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
  },
];

function TimelineMarker() {
  return (
    <div className="relative flex items-center justify-center h-24">
      {/* Vertical line */}
      <div className="absolute top-0 bottom-0 w-px bg-gray-300" />
      {/* Dot */}
      <div className="z-10 w-4 h-4 bg-gray-900 rounded-full" />
    </div>
  );
}

function SectionTwo() {
  return (
    <section className="w-full max-w-5xl mx-auto py-16 px-6">
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Our Past Missions
        </h2>
        <p className="mt-3 text-base md:text-lg text-gray-600">
          Explore the impactful missions we have been a part of over the years.
        </p>
      </div>

      {/* Timeline Items */}
      <div className="space-y-12">
        {timelineData.map((item, index) => {
          const isEven = index % 2 === 0;
          return (
            <div
              key={item.id}
              className="grid grid-cols-1 md:grid-cols-3 md:items-center md:gap-8"
            >
              {isEven ? (
                <>
                  {/* Image on the Left */}
                  <div className="md:col-span-1">
                    <img
                      src={item.image}
                      alt={`${item.missionTitle} image`}
                      className="w-full rounded-md shadow-sm"
                    />
                  </div>
                  {/* Timeline Marker */}
                  <div className="flex justify-center my-4 md:my-0">
                    <TimelineMarker />
                  </div>
                  {/* Text on the Right */}
                  <div className="md:col-span-1 text-left">
                    <h3 className="text-2xl font-bold text-gray-900">
                      {item.year}
                    </h3>
                    <h4 className="mt-2 text-xl font-semibold text-gray-900">
                      {item.missionTitle}
                    </h4>
                    <p className="mt-3 text-base md:text-lg text-gray-700 leading-relaxed">
                      {item.description}
                    </p>
                    <button className="mt-4 inline-flex items-center text-base font-medium text-gray-900 hover:underline">
                      See More <RxChevronRight className="ml-1" />
                    </button>
                  </div>
                </>
              ) : (
                <>
                  {/* Text on the Left */}
                  <div className="md:col-span-1 text-right">
                    <h3 className="text-2xl font-bold text-gray-900">
                      {item.year}
                    </h3>
                    <h4 className="mt-2 text-xl font-semibold text-gray-900">
                      {item.missionTitle}
                    </h4>
                    <p className="mt-3 text-base md:text-lg text-gray-700 leading-relaxed">
                      {item.description}
                    </p>
                    <button className="mt-4 inline-flex items-center text-base font-medium text-gray-900 hover:underline">
                      See More <RxChevronRight className="ml-1" />
                    </button>
                  </div>
                  {/* Timeline Marker */}
                  <div className="flex justify-center my-4 md:my-0">
                    <TimelineMarker />
                  </div>
                  {/* Image on the Right */}
                  <div className="md:col-span-1">
                    <img
                      src={item.image}
                      alt={`${item.missionTitle} image`}
                      className="w-full rounded-md shadow-sm"
                    />
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default SectionTwo;
