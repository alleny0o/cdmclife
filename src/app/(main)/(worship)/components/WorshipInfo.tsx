"use client";
import { H2 } from "@/components/text/H2";
import { H3 } from "@/components/text/H3";
import { P } from "@/components/text/P";
import Image from "next/image";
import Link from "next/link";

import { Section, Container } from "@/components/layouts/Layouts";

function WorshipInfo() {
  return (
    <Section className="sm:px-6">
      <Container className="pt-14 pb-24">
        <div className="w-full max-w-7xl mx-auto">
          {/* Title */}
          <div className="mb-12 max-w-xl">
            <H2>Worship Services</H2>
          </div>

          {/* Worship Services Overview */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* English Worship */}
            <div className="p-6 md:p-8 border border-stone-200 hover:border-stone-300 rounded-xl shadow-md bg-[var(--soft-white)] transition hover:shadow-lg">
              <H3 className="!font-semibold">English Ministry</H3>
              <P className="mt-4 text-[var(--soft-black)]">
                Gather with us every <strong className="text-[var(--muted-blue)]">Sunday at 11:00 AM</strong> for our English
                worship service.
              </P>
            </div>

            {/* Korean Worship */}
            <div className="p-6 md:p-8 border border-stone-200 hover:border-stone-300 rounded-xl shadow-md bg-[var(--soft-white)] transition hover:shadow-lg">
              <H3 className="!font-semibold">Korean Ministry</H3>
              <P className="mt-4 text-[var(--soft-black)]">
                Gather with us every <strong className="text-[var(--muted-blue)]">Sunday at 9:00 AM</strong> for our Korean
                worship service.
              </P>
            </div>
          </div>

          {/* Joint Worship */}
          <div className="mt-12 p-8 border-l-4 border-[var(--dusty-blue)] bg-[var(--faded-blue)]/20 rounded-xl shadow-md">
            <P className="text-[var(--soft-black)]">
              <strong className="text-[var(--vintage-navy)]">Joint Worship Service:</strong> On the first Sunday of every month,
              we gather as one community at <strong className="text-[var(--muted-blue)]">11:00 AM</strong> for a combined service.{" "}
              <Link
                href="/announcements"
                className="text-vintageNavy font-medium underline hover:text-[var(--dusty-blue)] transition italic"
              >
                Click here
              </Link>{" "}
              to see the next joint worship sermon.
            </P>
            <P className="mt-2 text-[var(--deep-gray)] text-sm">(No separate Korean worship on these days.)</P>
          </div>

          {/* Worship Image */}
          <div className="mt-14">
            <Image
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
              alt="Worship Gathering"
              width={800}
              height={450}
              className="w-full rounded-xl shadow-md"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default WorshipInfo;
