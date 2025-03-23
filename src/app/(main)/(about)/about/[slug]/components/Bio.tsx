import { Container, Section } from "@/components/layouts/Layouts";
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
              <p className="text-xl md:text-2xl text-stone-600 mt-1">{member.role}</p>
            </div>

            <div className="mt-4 sm:mt-6 space-y-3">
              {member.description?.map((paragraph, idx) => (
                <p key={idx} className="text-sm md:text-base">{paragraph.text}</p>
              ))}
            </div>
          </div>

          {/* Portrait */}
          <div className="mx-auto aspect-[3/4] relative overflow-hidden rounded-sm">
            {member.imageURL && (
              <Image
                src={member.imageURL}
                alt={member.name}
                fill
                className="object-cover object-center"
                priority
                sizes="75vw"
              />
            )}
          </div>
        </div>

        {/* Desktop Layout - Side by Side */}
        <div className="w-full max-w-7xl mx-auto hidden sm:grid sm:grid-cols-5 gap-12">
          {/* Bio Content */}
          <div className="col-span-3 flex flex-col gap-6">
            <div>
              <h1 className="text-4xl font-bold tracking-tight">{member.name}</h1>
              <p className="text-lg text-stone-600 mt-1">{member.role}</p>
            </div>

            <div className="space-y-3">
              {member.description?.map((paragraph, idx) => (
                <p key={idx}>{paragraph.text}</p>
              ))}
            </div>
          </div>

          {/* Portrait */}
          <div className="col-span-2 aspect-[3/4] relative overflow-hidden rounded-sm h-full max-h-[600px]">
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