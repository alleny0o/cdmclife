import { Container, Section } from "@/components/layouts/Layouts";
import { P } from "@/components/text/P";
import { TeamMember } from "@/sanity/lib/interface";
import Image from "next/image";
import React from "react";

type BioProps = {
  member: TeamMember;
};

function Bio({ member }: BioProps) {
  return (
    <Section className="min-h-screen bg-white text-stone-800">
      <Container className="pt-16 py-20">
        {/* Mobile Layout - Stacked */}
        <div className="w-full max-w-7xl mx-auto block sm:hidden">
          {/* Bio Content */}
          <div className="flex flex-col gap-4 md:gap-6 mb-8">
            <div>
              <h1 className="text-3xl md:text-4xl lg::text-5xl font-bold tracking-tight">{member.name}</h1>
              <p className="text-xl lg:text-2xl text-stone-600 mt-1">{member.role}</p>
            </div>

            <div className="mt-6 space-y-6">
              {member.description?.map((paragraph, idx) => (
                <P className="!text-lg font-light leading-relaxed text-deepGray tracking-wide" key={idx}>
                  {paragraph.text}
                </P>
              ))}
            </div>
          </div>

          {/* Portrait */}
          <div className="mx-auto aspect-[3/4] relative overflow-hidden rounded-sm">
            {member.imageURL && (
              <Image src={member.imageURL} alt={member.name} fill className="object-cover object-center" priority sizes="75vw" />
            )}
          </div>
        </div>

        {/* Desktop Layout - Side by Side */}
        <div className="w-full max-w-7xl mx-auto hidden sm:grid sm:grid-cols-7 gap-12">
          {/* Bio Content */}
          <div className="col-span-4 flex flex-col gap-6">
            <div>
              <h1 className="text-3xl md:text-4xl lg::text-5xl font-bold tracking-tight">{member.name}</h1>
              <p className="text-xl lg:text-2xl text-stone-600 mt-1">{member.role}</p>
            </div>

            <div className="mt-2 space-y-6">
              {member.description?.map((paragraph, idx) => (
                <P className="!text-lg font-light leading-relaxed text-deepGray tracking-wide" key={idx}>
                  {paragraph.text}
                </P>
              ))}
            </div>
          </div>

          {/* Portrait */}
          <div className="col-span-3 md:aspect-[3/4] sm:aspect-[3/5] aspect-[3/4] relative overflow-hidden rounded-sm h-full max-h-[600px]">
            {member.imageURL && (
              <Image
                src={member.imageURL}
                alt={member.name}
                fill
                className="object-cover object-top"
                priority
                sizes="(max-width: 1024px) 40vw, 33vw"
              />
            )}
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default Bio;
