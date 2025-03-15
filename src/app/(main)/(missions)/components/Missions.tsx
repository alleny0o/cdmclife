import { Section, Container } from "@/components/layouts/Layouts";
import { H2 } from "@/components/text/H2";
import { P } from "@/components/text/P";

function Missions() {
  return (
    <Section className="sm:px-6">
      <Container className="py-20">
        <div className="w-full max-w-7xl mx-auto">
          {/* Title Section */}
          <div className="mb-8 max-w-xl relative">
            <div className="h-px w-16 bg-dustyBlue absolute -top-4 left-0"></div>
            <H2 className="font-medium tracking-tight">Missions</H2>
          </div>

          {/* Mission Information */}
          <div className="text-lg text-deepGray leading-relaxed space-y-6">
            <P className="!text-lg font-light leading-relaxed text-gray-700 tracking-wide">
              Every year, we travel to <strong>Guatemala</strong> to serve, build, and grow alongside local communities. From
              constructing homes to sharing meals, every moment is an opportunity to make a difference.
            </P>
            <P className="!text-lg font-light leading-relaxed text-gray-700 tracking-wide">
              Our mission includes building and repairing homes, constructing chicken coops for sustainable food sources, and
              forming meaningful relationships through fellowship. We also dedicate time to praying with children at orphanages,
              bringing hope and encouragement to the communities we visit.
            </P>
            <P className="!text-lg font-light leading-relaxed text-gray-700 tracking-wide">
              Join us for this <strong>yearly mission</strong>—build with your hands, grow in faith, and experience the joy of
              serving others.
            </P>
          </div>

          {/* Image Grid */}
          <div className="sm:w-full sm:max-w-5xl mx-auto max-w-[90%] columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4 mt-10">
            <img
              className="w-full h-[280px] rounded-xl shadow object-cover break-inside-avoid"
              src="/missions/missions-03.jpeg"
              alt="Image 03"
            />
            <img
              className="w-full h-[250px] rounded-xl shadow object-cover break-inside-avoid"
              src="/missions/missions-01.jpeg"
              alt="Image 01"
            />
            <img
              className="w-full md:h-[260px] h-[375] rounded-xl shadow object-cover break-inside-avoid"
              src="/missions/missions-07.jpeg"
              alt="Image 07"
            />
            <img
              className="w-full h-[350px] rounded-xl shadow object-cover break-inside-avoid"
              src="/missions/missions-02.jpg"
              alt="Image 02"
            />
            <img
              className="w-full md:h-[280px] h-[375px] rounded-xl shadow object-cover break-inside-avoid"
              src="/missions/missions-04.jpeg"
              alt="Image 04"
            />
            <img
              className="w-full h-[250px] rounded-xl shadow object-cover break-inside-avoid"
              src="/missions/missions-05.jpeg"
              alt="Image 05"
            />
            <img
              className="w-full h-[280px] rounded-xl shadow object-cover break-inside-avoid"
              src="/missions/missions-06.jpg"
              alt="Image 06"
            />
            <img
              className="w-full h-[200px] rounded-xl shadow object-cover break-inside-avoid"
              src="/missions/missions-08.jpeg"
              alt="Image 08"
            />
            <img
              className="w-full h-[250px] rounded-xl shadow object-cover break-inside-avoid"
              src="/missions/missions-09.jpeg"
              alt="Image 09"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default Missions;
