import { Section, Container } from "@/components/layouts/Layouts";
import { H2 } from "@/components/text/H2";
import { HiCheckCircle } from "react-icons/hi";

function Missions() {
  return (
    <Section className="sm:px-6">
      <Container className="pt-14 pb-24">
        <div className="w-full max-w-7xl mx-auto">
          {/* Title Section */}
          <div className="mb-12 relative text-left">
            <H2>Missions</H2>
            <p className="mt-3 text-base md:text-lg text-gray-600">
              Discover our mission work and the impact we&apos;re making around the world.
            </p>
          </div>

          {/* Mission Information */}
          <div className="space-y-6">
            <div className="border border-softBlack rounded-lg shadow-md overflow-hidden">
              <div className="p-8">
                <h2 className="text-2xl font-bold mb-4 text-darkerNavy">🌍 Guatemala Mission Trip</h2>
                <p className="text-deepGray leading-relaxed">
                  Every year, we travel to Guatemala to <strong>serve, build, and grow</strong> alongside local communities. From
                  constructing homes to sharing meals, every moment is an opportunity to make a difference.
                </p>

                <ul className="mt-6 space-y-3">
                  <li className="flex items-center gap-3 text-deepGray">
                    <HiCheckCircle className="w-5 h-5 text-mutedBlue" />
                    <span>
                      🏡 <strong>Build & repair homes</strong>—roofs, walls, and safe living spaces
                    </span>
                  </li>
                  <li className="flex items-center gap-3 text-deepGray">
                    <HiCheckCircle className="w-5 h-5 text-mutedBlue" />
                    <span>
                      🐓 <strong>Construct chicken coops</strong> for families to raise their own food
                    </span>
                  </li>
                  <li className="flex items-center gap-3 text-deepGray">
                    <HiCheckCircle className="w-5 h-5 text-mutedBlue" />
                    <span>
                      🤝 <strong>Fellowship with the community</strong>—share meals, laughter, and stories
                    </span>
                  </li>
                  <li className="flex items-center gap-3 text-deepGray">
                    <HiCheckCircle className="w-5 h-5 text-mutedBlue" />
                    <span>
                      🙏 <strong>Pray with children at orphanages</strong> and offer encouragement
                    </span>
                  </li>
                </ul>

                <p className="mt-6 text-deepGray font-semibold">
                  Join us for this <strong>yearly mission</strong>—build with your hands, grow in faith, and experience the joy of
                  serving others.
                </p>
              </div>
            </div>
          </div>

          {/* Image Grid */}
          <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4 mt-10">
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
