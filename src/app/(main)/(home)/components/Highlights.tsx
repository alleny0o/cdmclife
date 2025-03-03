import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RxChevronRight } from "react-icons/rx";
import { Section, Container } from "@/components/layouts/Layouts";
import { H2 } from "@/components/text/H2";
import { H3 } from "@/components/text/H3";
import { P } from "@/components/text/P";
import { ItalicsP } from "@/components/text/ItalicsP";
import { client } from "@/sanity/lib/client";
import { HighlightsCard } from "@/sanity/lib/interface";

async function getData() {
  const query = `*[_type == 'highlights'] {
      _id,
      title,
      description,
      "imageURL": image.asset->url,
      tags,
      href,
      order,
  }`;

  const highlights = await client.fetch(query);

  return highlights;
};

async function Highlights() {
  const data: HighlightsCard[] = await getData();
  const highlights = data.sort((a, b) => a.order - b.order);

  return (
    <Section className="min-h-full pt-12 md:pt-14 sm:px-6">
      <Container className="max-w-7xl">
        {/* Header */}
        <div className="mb-12 text-left">
          <ItalicsP className="text-dustyBlue">Welcome to</ItalicsP>
          <H2 className="mt-[0.275rem]">Christ Disciple Mission Church</H2>
          <P>From Small Seeds, Great Things Grow.</P>
        </div>

        {/* Articles List */}
        <div>
          {highlights.map((highlight) => (
            <article
              key={highlight._id}
              className="grid grid-cols-1 items-center gap-x-12 gap-y-6 border-t border-border-primary py-8 sm:grid-cols-2 sm:gap-y-0 lg:gap-x-[4.9rem] lg:py-12"
            >
              <div>
                <H3 className="mb-2">
                  <div>{highlight.title}</div>
                </H3>
                <P>{highlight.description}</P>
                <ul className="mt-3 flex flex-wrap gap-2 md:mt-4">
                  {highlight.tags.map((tag, index) => (
                    <li key={index}>
                      <div className="bg-background-secondary px-2 py-1 text-xs md:text-sm font-semibold rounded">{tag}</div>
                    </li>
                  ))}
                </ul>
                <Link
                  href={highlight.href}
                  className="inline-flex items-center border-2 border-deepBlack text-deepBlack px-6 py-2 rounded-md font-medium hover:bg-deepBlack hover:text-softWhite transition-colors mt-6 md:mt-8 text-sm md:text-base"
                >
                  Learn More <RxChevronRight className="ml-2" />
                </Link>
              </div>
              <div className="relative w-full h-0 pb-[75%]">
                <div className="absolute inset-0">
                  <Image
                    src={highlight.imageURL}
                    alt={highlight.title}
                    fill
                    className="object-cover rounded"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-12 flex justify-center" />
      </Container>
    </Section>
  );
}

export default Highlights;
