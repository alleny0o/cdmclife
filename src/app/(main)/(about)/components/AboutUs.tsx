import Image from "next/image";
import TabLayout from "./layouts/TabLayout";
import { H2 } from "@/components/text/H2";
import { P } from "@/components/text/P";

function AboutUs() {
  return (
    <TabLayout>
      {/* Hero Section with Visual Element */}
      <div className="w-full pb-16 relative">

        <div className="max-w-7xl mx-auto pt-6">
          {/* Elegant Title with Decorative Element */}
          <div className="relative mb-12">
            <div className="h-px w-16 bg-dustyBlue absolute -top-4 left-0"></div>
            <H2 className="text-4xl sm:text-5xl font-light tracking-tight text-gray-900">
              About <span className="font-medium">Us</span>
            </H2>
          </div>

          {/* Enhanced Text Presentation */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-7 lg:col-span-8">
              <P className="text-base sm:text-lg md:text-xl font-light leading-relaxed text-gray-700 tracking-wide">
                Christ Disciple Mission Church (CDMC) is dedicated to fulfilling the Great Commission (Matthew 28:18-20) by making
                disciples who make disciples. This involves following Christ&apos;s example and growing in faith through Bible
                study, prayer, obedience, and community (Acts 2:42-47).
              </P>

              <div className="h-px w-full bg-gray-100 my-6"></div>

              <P className="text-base sm:text-lg md:text-xl font-light leading-relaxed text-gray-700 tracking-wide">
                CDMC emphasizes service to both local and global communities, reflecting Christ&apos;s heart for the poor and
                marginalized (Matthew 25:34-40) through outreach, evangelism, and missions. Worship is central to their community,
                with believers gathering to glorify God and build strong fellowships (Hebrews 10:24-25).
              </P>

              <div className="h-px w-full bg-gray-100 my-6"></div>

              <P className="text-base sm:text-lg md:text-xl font-light leading-relaxed text-gray-700 tracking-wide">
                The church prioritizes leadership development and empowering members for service (Ephesians 4:12). Ultimately,
                CDMC strives to live out the gospel in word and deed, reaching the lost, nurturing believers, and glorifying God
                in all aspects of life, reflecting His character and expanding His Kingdom on Earth.
              </P>
            </div>

            {/* Visual Accent Column */}
            <div className="hidden md:block md:col-span-5 lg:col-span-4 relative">
              <div className="absolute top-0 left-0 h-full w-px bg-gray-200"></div>
              <div className="pl-8">
                <div className="p-6 bg-gray-50 rounded-lg shadow-sm">
                  <div className="relative w-full h-40">
                    <Image
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                      alt="Church community worshiping"
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg shadow-md"
                    />
                  </div>
                  <p className="text-sm text-gray-500 italic mt-4">
                    &ldquo;Growing together in faith and love.&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </TabLayout>
  );
}

export default AboutUs;
