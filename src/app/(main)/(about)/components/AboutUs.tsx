import TabLayout from "./layouts/TabLayout";
import { H2 } from "@/components/text/H2";
import { P } from "@/components/text/P";

function AboutUs() {
  return (
    <TabLayout>
      {/* Title Section */}
      <div className="w-full pb-8">
        <div className="max-w-7xl mx-auto">
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
    </TabLayout>
  );
}

export default AboutUs;
