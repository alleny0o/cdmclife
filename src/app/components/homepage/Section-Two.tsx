"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

const articles = [
  {
    id: 1,
    title: "Community Services",
    description:
      "Join us in making a difference through community service and outreach programs.",
    imageUrl:
      "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
    imageAlt: "Community Services Image",
    link: "#",
    tags: ["Outreach Program", "Community Service", "Volunteer Opportunities"],
  },
  {
    id: 2,
    title: "Missions",
    description:
      "Expanding our reach through local and global mission initiatives.",
    imageUrl:
      "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
    imageAlt: "Missions Image",
    link: "#",
    tags: ["Global Missions", "Local Missions", "Mission Trips"],
  },
];

function SectionTwo() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        {/* Header */}
        <div className="mb-12 max-w-xl text-left">
          <p className="font-handlee mb-2 font-semibold text-dustyBlue md:mb-3 text-base sm:text-lg">
            Welcome to
          </p>
          <h2 className="mb-4 text-3xl md:text-4xl font-bold text-deepBlack">
            Christ Disciple Mission Church
          </h2>
          <p className="text-deepBlack text-base md:text-sm">
            Discover the impactful work we do in our community.
          </p>
        </div>

        {/* Articles List */}
        <div>
          {articles.map((article) => (
            <article
              key={article.id}
              className="grid grid-cols-1 items-center gap-x-12 gap-y-6 border-t border-border-primary py-8 md:grid-cols-2 md:gap-y-0 lg:gap-x-[4.9rem] lg:py-12"
            >
              <div>
                <h3 className="mb-2 text-xl md:text-2xl lg:text-3xl font-bold text-deepBlack md:leading-[1.3]">
                  <Link href={article.link}>{article.title}</Link>
                </h3>
                <p className="text-deepBlack text-sm md:text-base">
                  {article.description}
                </p>
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
      </div>
    </section>
  );
}

export default SectionTwo;
