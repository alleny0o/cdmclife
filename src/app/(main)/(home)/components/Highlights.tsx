import Image from "next/image";
import React from "react";
import { Section, Container } from "@/components/layouts/Layouts";
import { H2 } from "@/components/text/H2";
import { H3 } from "@/components/text/H3";
import { P } from "@/components/text/P";
import { ItalicsP } from "@/components/text/ItalicsP";
import { client } from "@/sanity/lib/client";
import { HighlightsCard } from "@/sanity/lib/interface";
import ButtonLink from "@/components/ButtonLink";

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

  const highlights = await client.fetch(query, {}, { next: { revalidate: 30 }});

  return highlights;
};

async function Highlights() {
  const data: HighlightsCard[] = await getData();
  const highlights = data.sort((a, b) => a.order - b.order);

  return (
    <Section className="min-h-full pt-12 pb-20 sm:px-6">
      <Container className="max-w-7xl">
        {/* Enhanced Header with decorative elements */}
        <div className="mb-16 text-left relative">
          <ItalicsP className="text-dustyBlue tracking-wide">Welcome to</ItalicsP>
          <H2 className="mt-1 text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight">
            Christ Disciple Mission Church
          </H2>
          <P className="mt-4 text-lg text-deepBlack/80 max-w-xl font-light tracking-wide">
            Fall In Love, Again and Again.
          </P>
          <div className="absolute -bottom-6 left-0 w-40 h-px bg-gradient-to-r from-dustyBlue to-transparent"></div>
          </div>

        {/* Refined Articles List */}
        <div>
          {highlights.map((highlight, index) => (
            <article
              key={highlight._id}
              className={`grid grid-cols-1 items-center gap-x-16 gap-y-8 border-t border-border-primary py-12 sm:grid-cols-2 sm:gap-y-0 lg:gap-x-20 lg:py-16 ${
                index === highlights.length - 1 ? "border-b" : ""
              }`}
            >
              <div className="order-2 sm:order-1">
                <H3 className="mb-3 text-2xl md:text-3xl font-medium text-deepBlack tracking-tight">
                  <div>{highlight.title}</div>
                </H3>
                <P className="text-base md:text-lg font-light leading-relaxed text-deepBlack/80">
                  {highlight.description}
                </P>
                <ul className="mt-4 mb-8 flex flex-wrap gap-2 md:mt-6">
                  {highlight.tags.map((tag, index) => (
                    <li key={index}>
                      <div className="bg-background-secondary/80 px-3 py-1 text-xs md:text-sm font-medium rounded-full">
                        {tag}
                      </div>
                    </li>
                  ))}
                </ul>
                <ButtonLink href={highlight.href}>Learn More</ButtonLink>
              </div>
              
              <div className="relative w-full h-0 pb-[65%] order-1 sm:order-2 overflow-hidden rounded-lg shadow-md">
                <div className="absolute inset-0 group">
                  <div className="absolute inset-0 bg-gradient-to-t from-deepBlack/20 to-transparent z-10"></div>
                  <Image
                    src={highlight.imageURL}
                    alt={highlight.title}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export default Highlights;