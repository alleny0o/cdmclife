import { H2 } from "@/components/text/H2";
import { P } from "@/components/text/P";
import TabLayout from "./layouts/TabLayout";
import Image from "next/image";

function OurHistory() {
  return (
    <TabLayout>
      <div className="w-full pt-16 pb-20 relative">
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <div className="relative mb-12">
            <div className="h-px w-16 bg-dustyBlue absolute -top-4 left-0"></div>
            <H2 className="font-light tracking-tight text-gray-900">
              Our <span className="font-medium">History</span>
            </H2>
          </div>

          {/* Two-column layout */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
            {/* Left Side - Historical Text & Founders */}
            <div className="md:col-span-7 lg:col-span-8">
              <P className="!text-lg font-light leading-relaxed text-gray-700 tracking-wide">
                <strong>March 2, 2025</strong> marks the day when these grounds and buildings officially become
                Christ Disciple Mission Church, carrying forward a legacy of faith.
              </P>
              <div className="h-px w-full bg-gray-100 my-6"></div>
              <P className="!text-lg font-light leading-relaxed text-deepGray tracking-wide">
                In <strong>1893</strong>, 12 members of Rockville Baptist Church and 3 members of Upper Seneca Baptist Church
                joined together to start a mission church known as <strong>Travilah Baptist Church</strong>. On
                <strong> February 18, 1894</strong>, the church doors were opened, beginning a journey dedicated to
                spreading Christ&apos;s teachings.
              </P>
              <div className="h-px w-full bg-gray-100 my-6"></div>
              <P className="!text-lg font-light leading-relaxed text-deepGray tracking-wide">
                In <strong>March 2020</strong>, 10 members of Travilah Church felt led by God to gift the buildings
                to Christ Disciple Mission Church. Their mission was to grow the church and continue the work of
                teaching others about Christ. As the remaining members of Travilah, we thank you for carrying forward
                this mission.
              </P>
              <div className="h-px w-full bg-gray-100 my-6"></div>
              <h3 className="text-xl font-semibold text-gray-900">Honoring Our Founders</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4 text-gray-700">
                <P>Pastor Hank & Haja</P>
                <P>Pastor Shin & Hannah</P>
                <P>Pastor Lee & Sonny</P>
                <P>Pastor Sam & Ashley</P>
                <P>Chang & Shinae</P>
                <P>Pascal & Sophia</P>
                <P>Sandy & Michelle</P>
                <P>Michael & Lauren</P>
                <P>Kris & Grace</P>
              </div>
            </div>

            {/* Right Side - Visual Elements */}
            <div className="md:col-span-5 lg:col-span-4 relative flex flex-col gap-y-6">
              <div className="absolute top-0 left-0 h-full w-px bg-gray-200"></div>
              {/* Image container - with adjusted height */}
              <div className="pl-8">
                <div className="p-6 bg-gray-50 rounded-lg shadow-sm border border-gray-200">
                  <div className="relative w-full aspect-[3/4]">
                    <Image
                      src="/about/pane-2.jpg"
                      alt="Special Glass Pane"
                      layout="fill"
                      objectFit="contain"
                      className="rounded-lg"
                    />
                  </div>
                  <p className="text-sm text-gray-500 italic mt-4 text-center">
                    &ldquo;Continuing a legacy of faith and service.&rdquo;
                  </p>
                </div>
              </div>

              <div className="pl-8">
                <div className="p-6 bg-gray-50 rounded-lg shadow-sm border border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-900 text-center">A Legacy of Faith</h3>
                  <P className="text-gray-700 mt-2 text-center">
                    &ldquo;As I stand before you today, we remember those who have gone before us.
                    Since 2020, some have left to be with our Lord, but their faith lives on in us.
                    May God continue to bless this church as He has for over 131 years.&rdquo;
                  </P>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </TabLayout>
  );
}

export default OurHistory;