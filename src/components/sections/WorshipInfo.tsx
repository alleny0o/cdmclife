import { H2 } from "@/components/text/H2";
import { H3 } from "@/components/text/H3";
import { P } from "@/components/text/P";
import Image from "next/image";
import Link from "next/link";
import { Clock, Calendar, Users } from "lucide-react";
import { Section, Container } from "@/components/layouts/Layouts";
import { WorshipInfoBlock } from "@/sanity/lib/interface";

function WorshipInfo({ data }: { data: WorshipInfoBlock }) {
  return (
    <Section className="sm:px-6">
      <Container className="py-20">
        <div className="w-full max-w-7xl mx-auto">
          <div className="mb-8 max-w-xl relative">
            <div className="h-px w-16 bg-dustyBlue absolute -top-4 left-0"></div>
            <H2 className="font-light tracking-tight">
              Worship <span className="font-medium">Services</span>
            </H2>
            <div className="mt-4 w-16 h-1 bg-gradient-to-r from-[var(--dusty-blue)] to-[var(--muted-blue)] rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {data.services.map((service) => (
              <div
                key={service._key}
                className="p-8 border border-stone-200 hover:border-[var(--muted-blue)]/30 rounded-xl shadow-sm hover:shadow-md bg-[var(--soft-white)] transition-all duration-300 relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--faded-blue)]/10 rounded-bl-full -z-10 transition-all duration-300 group-hover:bg-[var(--faded-blue)]/20"></div>
                <H3 className="!font-semibold">{service.name}</H3>
                <div className="mt-6 flex items-center gap-2 text-[var(--muted-blue)]">
                  <Clock size={18} strokeWidth={1.5} />
                  <P className="!text-[var(--muted-blue)] !font-medium">{service.time}</P>
                </div>
                {service.description && (
                  <P className="mt-4 text-[var(--soft-black)] leading-relaxed">{service.description}</P>
                )}
              </div>
            ))}
          </div>

          {data.jointService && (
            <div className="mt-16 p-8 bg-gradient-to-r from-[var(--faded-blue)]/20 to-[var(--soft-white)] border-l-4 border-[var(--dusty-blue)] rounded-xl shadow-sm relative overflow-hidden">
              <div className="absolute top-4 right-4">
                <Users size={40} className="text-[var(--dusty-blue)]/10" />
              </div>
              <div className="flex items-center gap-3 mb-4">
                <Calendar size={20} className="text-[var(--vintage-navy)]" />
                <H3 className="!text-lg !font-medium !text-[var(--vintage-navy)]">Joint Worship Service</H3>
              </div>
              <P className="text-[var(--soft-black)] leading-relaxed max-w-2xl">
                {data.jointService.description}{" "}
                {data.jointService.time && (
                  <strong className="text-[var(--muted-blue)]"> {data.jointService.time} </strong>
                )}
                <Link href="/announcements" className="text-[var(--vintage-navy)] font-medium underline hover:text-[var(--dusty-blue)] transition italic">
                  Click here
                </Link>{" "}
                to see the next joint worship sermon.
              </P>
            </div>
          )}

          {data.imageURL && (
            <div className="mt-16 relative">
              <div className="overflow-hidden rounded-xl shadow-md">
                <Image
                  src={data.imageURL}
                  alt="Worship Gathering"
                  width={800}
                  height={450}
                  className="w-full transition duration-700 hover:scale-105"
                />
              </div>
            </div>
          )}
        </div>
      </Container>
    </Section>
  );
}

export default WorshipInfo;
