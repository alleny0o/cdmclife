"use client";
import { H2 } from "@/components/text/H2";
import { H3 } from "@/components/text/H3";
import { P } from "@/components/text/P";
import Image from "next/image";
import Link from "next/link";
import { Clock, Calendar, Users } from "lucide-react";

import { Section, Container } from "@/components/layouts/Layouts";

function WorshipInfo() {
  return (
    <Section className="sm:px-6">
      <Container className="py-20">
        <div className="w-full max-w-7xl mx-auto">
          {/* Enhanced Title with decorative element */}
          <div className="mb-8 max-w-xl relative">
            <div className="h-px w-16 bg-dustyBlue absolute -top-4 left-0"></div>
            <H2 className="text-4xl sm:text-5xl font-light tracking-tight">
              Worship <span className="font-medium">Services</span>
            </H2>
            <div className="mt-4 w-16 h-1 bg-gradient-to-r from-[var(--dusty-blue)] to-[var(--muted-blue)] rounded-full"></div>
          </div>

          {/* Worship Services Overview with improved cards */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* English Worship Enhanced */}
            <div className="p-8 border border-stone-200 hover:border-[var(--muted-blue)]/30 rounded-xl shadow-sm hover:shadow-md bg-[var(--soft-white)] transition-all duration-300 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--faded-blue)]/10 rounded-bl-full -z-10 transition-all duration-300 group-hover:bg-[var(--faded-blue)]/20"></div>
              
              <H3 className="!font-semibold flex items-center gap-2">
                English Ministry
              </H3>
              
              <div className="mt-6 flex items-center gap-2 text-[var(--muted-blue)]">
                <Clock size={18} strokeWidth={1.5} />
                <P className="!text-[var(--muted-blue)] !font-medium">Sunday at 11:00 AM</P>
              </div>
              
              <P className="mt-4 text-[var(--soft-black)] leading-relaxed">
                Gather with us every Sunday for our English worship service. Join our community in praise, prayer, and the study of God's Word.
              </P>
            </div>

            {/* Korean Worship Enhanced */}
            <div className="p-8 border border-stone-200 hover:border-[var(--muted-blue)]/30 rounded-xl shadow-sm hover:shadow-md bg-[var(--soft-white)] transition-all duration-300 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--faded-blue)]/10 rounded-bl-full -z-10 transition-all duration-300 group-hover:bg-[var(--faded-blue)]/20"></div>
              
              <H3 className="!font-semibold flex items-center gap-2">
                Korean Ministry
              </H3>
              
              <div className="mt-6 flex items-center gap-2 text-[var(--muted-blue)]">
                <Clock size={18} strokeWidth={1.5} />
                <P className="!text-[var(--muted-blue)] !font-medium">Sunday at 9:30 AM</P>
              </div>
              
              <P className="mt-4 text-[var(--soft-black)] leading-relaxed">
                Gather with us every Sunday for our Korean worship service. Join our community in praise, prayer, and the study of God's Word.
              </P>
            </div>
          </div>

          {/* Joint Worship Enhanced */}
          <div className="mt-16 p-8 bg-gradient-to-r from-[var(--faded-blue)]/20 to-[var(--soft-white)] border-l-4 border-[var(--dusty-blue)] rounded-xl shadow-sm relative overflow-hidden">
            <div className="absolute top-4 right-4">
              <Users size={40} className="text-[var(--dusty-blue)]/10" />
            </div>
            
            <div className="flex items-center gap-3 mb-4">
              <Calendar size={20} className="text-[var(--vintage-navy)]" />
              <H3 className="!text-lg !font-medium !text-[var(--vintage-navy)]">Joint Worship Service</H3>
            </div>
            
            <P className="text-[var(--soft-black)] leading-relaxed max-w-2xl">
              On the first Sunday of every month, we gather as one community at 
              <strong className="text-[var(--muted-blue)]"> 11:00 AM </strong> 
              for a combined service.{" "}
              <Link
                href="/announcements"
                className="text-[var(--vintage-navy)] font-medium underline hover:text-[var(--dusty-blue)] transition italic"
              >
                Click here
              </Link>{" "}
              to see the next joint worship sermon.
            </P>
            <P className="mt-2 text-[var(--deep-gray)] text-sm italic">(No separate Korean worship on these days.)</P>
          </div>

          {/* Worship Image with caption */}
          <div className="mt-16 relative">
            <div className="overflow-hidden rounded-xl shadow-md">
              <Image
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Worship Gathering"
                width={800}
                height={450}
                className="w-full transition duration-700 hover:scale-105"
              />
            </div>
            <div className="mt-3 text-center text-sm text-[var(--deep-gray)] italic">
              Join us as we worship together as a community of faith
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default WorshipInfo;