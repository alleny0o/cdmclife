import { H2 } from "@/components/text/H2";
import TabLayout from "./layouts/TabLayout";
// import Link from "next/link";
// import { FaFacebook, FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";
// import { text } from "stream/consumers";

interface SocialMedia {
  facebook?: string;
  instagram?: string;
  linkedin?: string;
  twitter?: string;
}

interface Bio {
  slug: string;
  description: string[];
}

interface TeamMember {
  name: string;
  role: string;
  image: string;
  socialMedia?: SocialMedia;
  bio?: Bio;
}

const leadership_team = {
  title: "Leadership Team",
  background_color: "bg-white",
  text_color: "text-gray-900",
  team: [
    {
      name: "Soo Lee",
      role: "C.E.O. & Chief Executive Director",
      image: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
      socialMedia: {
        linkedin: "https://www.linkedin.com/in/soolee",
        twitter: "https://twitter.com/soolee",
      },
      bio: {
        slug: "soo-lee",
        description: [
          "Soo Lee has led the company with innovation and strategic vision.",
          "She is passionate about leadership and fostering growth within the organization.",
        ],
      },
    },
    {
      name: "Jeremy Manning",
      role: "Secretary & General Counsel",
      image: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
      socialMedia: {
        linkedin: "https://www.linkedin.com/in/jeremymanning",
      },
      bio: {
        slug: "jeremy-manning",
        description: ["Jeremy ensures the company’s legal compliance and corporate governance."],
      },
    },
    {
      name: "Peter Lee",
      role: "Treasurer",
      image: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
      socialMedia: {
        facebook: "https://www.facebook.com/peterlee",
      },
      bio: {
        slug: "peter-lee",
        description: ["Peter manages the company's financial health and budgeting strategies."],
      },
    },
    {
      name: "Noah Lee",
      role: "Founder & President",
      image: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
      socialMedia: {
        instagram: "https://www.instagram.com/noahlee",
        linkedin: "https://www.linkedin.com/in/noahlee",
      },
      bio: {
        slug: "noah-lee",
        description: ["Noah founded the company with a vision to revolutionize the industry."],
      },
    },
  ] as TeamMember[],
};

const trustees_team = {
  title: "Trustees Team",
  background_color: "bg-gray-50",
  text_color: "text-gray-900",
  team: [
    {
      name: "Michael Brown",
      role: "Chairman",
      image: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
      socialMedia: {
        linkedin: "https://www.linkedin.com/in/michaelbrown",
        facebook: "https://www.facebook.com/michaelbrown",
      },
      bio: {
        slug: "michael-brown",
        description: [
          "Michael Brown has been serving as the chairman for 5 years.",
          "He oversees the church’s financial and operational responsibilities, ensuring that all ministries are well-supported and aligned with the church’s mission.",
        ],
      },
    },
    {
      name: "Sarah Davis",
      role: "Secretary",
      image: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
      socialMedia: {
        linkedin: "https://www.linkedin.com/in/sarahdavis",
        facebook: "https://www.facebook.com/sarahdavis",
      },
    },
  ] as TeamMember[],
};

const result = {
  leadership_team,
  trustees_team,
};

function OurTeam() {
  return (
    <TabLayout>
      {/* Hero Section with Visual Element */}
      <div className="w-full pt-16 pb-20 relative">
        <div className="max-w-7xl mx-auto">
          {/* Elegant Title with Decorative Element */}
          <div className="relative mb-12">
            <div className="h-px w-16 bg-dustyBlue absolute -top-4 left-0"></div>
            <H2 className="font-light tracking-tight text-gray-900">
              Our <span className="font-medium">Team</span>
            </H2>
          </div>
        </div>
      </div>
    </TabLayout>
  );
}

export default OurTeam;
