import Image from "next/image";

import TabLayout from "./layouts/TabLayout";
import { H2 } from "@/components/text/H2";
import { P } from "@/components/text/P";
import { H3 } from "@/components/text/H3";

function AboutUs() {
  return (
    <TabLayout>
      {/* Title Section */}
      <div className="w-full pb-8">
        <div className="max-w-5xl mx-auto">
          <H2>About Us</H2>
          <P className="md:!text-lg !text-base leading-relaxed !text-gray-700">
            Christ Disciple Mission Church (CDMC) is dedicated to fulfilling the Great Commission (Matthew 28:18-20) by making
            disciples who make disciples. This involves following Christ&apos;s example and growing in faith through Bible study,
            prayer, obedience, and community (Acts 2:42-47). CDMC emphasizes service to both local and global communities,
            reflecting Christ&apos;s heart for the poor and marginalized (Matthew 25:34-40) through outreach, evangelism, and
            missions. Worship is central to their community, with believers gathering to glorify God and build strong fellowships
            (Hebrews 10:24-25). The church prioritizes leadership development and empowering members for service (Ephesians 4:12).
            Ultimately, CDMC strives to live out the gospel in word and deed, reaching the lost, nurturing believers, and
            glorifying God in all aspects of life, reflecting His character and expanding His Kingdom on Earth.
          </P>
        </div>
      </div>

      {/* The Great Commission */}
      <div className="w-full py-10">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <H3 className="text-vintageGold md:!text-2xl !text-xl !font-semibold">The Great Commission</H3>
            <P className="mt-4 leading-relaxed !text-gray-700">
              Our foundation is built on the Great Commission (Matthew 28:18-20), where every believer is called to be a disciple
              and to make disciples. Through prayer, Bible study, and obedience, we grow together in faith (Acts 2:42-47).
            </P>
          </div>
          <div className="flex justify-center">
            <Image
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
              width={500}
              height={350}
              alt="The Great Commission"
              className="rounded-lg shadow-md w-full max-w-lg object-cover"
            />
          </div>
        </div>
      </div>

      {/* Service & Outreach */}
      <div className="w-full py-10">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="md:order-2">
            <H3 className="text-vintageGold md:!text-2xl !text-xl !font-semibold">Service & Outreach</H3>
            <P className="mt-4 leading-relaxed !text-gray-700">
              Jesus calls us to care for the poor, the lost, and the marginalized (Matthew 25:34-40). Our church serves both
              locally and globally, sharing Christ’s love through community outreach, missions, and personal connections.
            </P>
          </div>
          <div className="md:order-1 flex justify-center">
            <Image
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
              width={500}
              height={350}
              alt="Serving the Community"
              className="rounded-lg shadow-md w-full max-w-lg object-cover"
            />
          </div>
        </div>
      </div>

      {/* Worship & Community */}
      <div className="w-full py-10">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <H3 className="text-vintageGold md:!text-2xl !text-xl !font-semibold">Worship & Community</H3>
            <P className="mt-4 leading-relaxed !text-gray-700">
              Worship and fellowship are at the heart of our faith. Through prayer, the sacraments, and small group connections,
              we strengthen our relationship with God and one another (Hebrews 10:24-25).
            </P>
          </div>
          <div className="flex justify-center">
            <Image
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
              width={500}
              height={350}
              alt="Worship and Community"
              className="rounded-lg shadow-md w-full max-w-lg object-cover"
            />
          </div>
        </div>
      </div>

      {/* Living Out the Gospel */}
      <div className="w-full py-10">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="md:order-2">
            <H3 className="text-vintageGold md:!text-2xl !text-xl !font-semibold">Living Out the Gospel</H3>
            <P className="mt-4 leading-relaxed !text-gray-700">
              Our calling is to live out the gospel in every aspect of life. Through our words, actions, and relationships, we aim
              to reflect God’s character and expand His Kingdom on Earth.
            </P>
          </div>
          <div className="md:order-1 flex justify-center">
            <Image
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
              width={500}
              height={350}
              alt="Living Out the Gospel"
              className="rounded-lg shadow-md w-full max-w-lg object-cover"
            />
          </div>
        </div>
      </div>
    </TabLayout>
  );
}

export default AboutUs;
