import { H2 } from "@/components/text/H2";
import { OurTeamBlock } from "@/sanity/lib/interface";
import Link from "next/link";

function OurTeam({ block }: { block: OurTeamBlock }) {
  return (
    <section className="min-h-screen lg:px-0">
      <div className="w-full pt-16 pb-20 relative">
        <div className="max-w-7xl mx-auto">
          <div className="relative mb-12">
            <div className="h-px w-16 bg-dustyBlue absolute -top-4 left-0"></div>
            <H2 className="font-light tracking-tight text-gray-900">
              Our <span className="font-medium">Team</span>
            </H2>
          </div>
        </div>
        <div className="sm:max-w-7xl max-w-[80%] mx-auto">
          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-12 md:gap-16">
            {block.members?.map((member) => (
              <div key={member._key} className="group">
                <div className="rounded-sm overflow-hidden shadow-md mb-3">
                  <img
                    src={member.imageURL}
                    alt={member.name}
                    className="w-full object-cover aspect-[3/4] rounded-sm"
                  />
                </div>
                <div className="text-left px-1">
                  <h3 className="text-gray-800 text-2xl font-medium">{member.name}</h3>
                  <p className="text-gray-500 text-base mb-2">{member.role}</p>
                  {member.slug && (
                    <Link
                      href={`/about/${member.slug}`}
                      className="inline-block px-4 py-2 text-sm text-gray-600 border border-gray-300 rounded-md hover:bg-gray-300 transition-colors duration-200"
                    >
                      Read Bio
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurTeam;
