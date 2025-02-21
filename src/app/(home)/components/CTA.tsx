import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RxChevronRight } from "react-icons/rx";
import { Section, Container } from "@/components/layouts/Layouts";
import { H2 } from "@/components/text/H2";
import { H3 } from "@/components/text/H3";
import { P } from "@/components/text/P";
import { ItalicsP } from "@/components/text/ItalicsP";

const articles = [
  {
    id: 1,
    title: "Community Services",
    description: "Join us in making a difference through community service and outreach programs.",
    imageUrl: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
    imageAlt: "Community Services Image",
    link: "/community-services",
    tags: ["Outreach Program", "Community Service", "Volunteer Opportunities"],
  },
  {
    id: 2,
    title: "Missions",
    description: "Expanding our reach through local and global mission initiatives.",
    imageUrl: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
    imageAlt: "Missions Image",
    link: "#",
    tags: ["Global Missions", "Local Missions", "Mission Trips"],
  },
];

function CTA() {
  return (
    <Section className="min-h-screen pt-12 md:pt-14">
      <Container className="max-w-7xl">
        {/* Header */}
        <div className="mb-12 text-left">
          <ItalicsP className="text-dustyBlue">Welcome to</ItalicsP>
          <H2 className="mt-4">Christ Disciple Mission Church</H2>
          <P> Discover what we do!</P>
        </div>

        {/* Articles List */}
        <div>
          {articles.map((article) => (
            <article
              key={article.id}
              className="grid grid-cols-1 items-center gap-x-12 gap-y-6 border-t border-border-primary py-8 sm:grid-cols-2 sm:gap-y-0 lg:gap-x-[4.9rem] lg:py-12"
            >
              <div>
                <H3 className="mb-2">
                  <Link href={article.link}>{article.title}</Link>
                </H3>
                <P>{article.description}</P>
                <ul className="mt-3 flex flex-wrap gap-2 md:mt-4">
                  {article.tags.map((tag, index) => (
                    <li key={index}>
                      <Link
                        href={article.link}
                        className="bg-background-secondary px-2 py-1 text-xs md:text-sm font-semibold rounded"
                      >
                        {tag}
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link
                  href={article.link}
                  className="inline-flex items-center border-2 border-deepBlack text-deepBlack px-6 py-2 rounded-md font-medium hover:bg-deepBlack hover:text-softWhite transition-colors mt-6 md:mt-8 text-sm md:text-base"
                >
                  Learn More <RxChevronRight className="ml-2" />
                </Link>
              </div>
              <div>
                <Link href={article.link} className="flex aspect-[4/3] w-full">
                  <Image
                    src={article.imageUrl}
                    alt={article.imageAlt}
                    width={800}
                    height={600}
                    className="w-full object-cover rounded"
                  />
                </Link>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-12 flex justify-center" />
      </Container>
    </Section>
  );
}

export default CTA;
