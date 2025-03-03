import Image from "next/image";
import React from "react";

import { Section, Container } from "@/components/layouts/Layouts";
import { H2 } from "@/components/text/H2";
import { ItalicsP } from "@/components/text/ItalicsP";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { SermonCard } from "@/sanity/lib/interface";

async function getData() {
  const query = `*[_type == 'sermons'] {
    _id,
    title,
    pastor,
    link,
    duration,
    date,
    order
  }`;

  const sermons: SermonCard[] = await client.fetch(query);

  return sermons.map((sermon) => ({
    ...sermon,
    embedUrl: sermon.link.includes("/live/")
      ? `https://www.youtube.com/embed/${sermon.link.split("/live/")[1].split("?")[0]}`
      : sermon.link,
  }));
};


async function Sermons() {

  const data: SermonCard[] = await getData();  
  const sermons = data.sort((a, b) => a.order - b.order);

  return (
    <Section className="py-20">
      <Container>
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image src="/homepage/sermons-bg.png" alt="vintage texture or clouds" fill className="object-cover" sizes="100vw" quality={90} />
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto sm:px-6">
          {/* Header */}
          <div className="text-center mb-12">
            <ItalicsP className="text-dustyBlue">What a joy it is to</ItalicsP>
            <H2 className="mt-[0.25rem]">Experience Our Sermons</H2>
          </div>

          {/* Sermons List */}
          <div className="space-y-8 max-w-5xl mx-auto">
            {sermons.map((sermon) => (
              <div
                key={sermon._id}
                className="bg-softWhite rounded-lg border border-dustyBlue/20 p-6 flex flex-col md:flex-row items-start gap-6 shadow-sm hover:border-dustyBlue/30 transition-colors"
              >
                {/* Video Thumbnail Container */}
                <div className="w-full md:w-64 relative rounded-lg overflow-hidden bg-gray-100 flex-shrink-0 md:aspect-video sm:aspect-[21/9] aspect-video">
                  <iframe
                    className="w-full h-full absolute inset-0"
                    src={sermon.embedUrl}
                    title={sermon.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>

                {/* Sermon Details */}
                <div className="flex-1">
                  <div className="flex items-center gap-2 text-warmGray text-sm mb-2">
                    <span className="font-medium">{sermon.pastor}</span>
                    <span>•</span>
                    <span>{sermon.date}</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold text-deepBlack mb-4">{sermon.title}</h3>
                  <div className="flex items-center gap-4">
                    <span className="text-warmGray text-sm">Duration: {sermon.duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View All Button */}
          <div className="mt-10 text-center">
            <Link href="/worship" className="bg-transparent border-2 border-deepBlack text-deepBlack px-8 py-3 rounded-md font-medium text-sm md:text-base hover:bg-deepBlack hover:text-softWhite transition-colors">
              MORE INFO
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default Sermons;
