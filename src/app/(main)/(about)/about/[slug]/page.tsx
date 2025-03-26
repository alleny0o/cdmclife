import Breadcrumbs from "@/components/breadcrumbs/Breadcrumbs";
import { TeamMember } from "@/sanity/lib/interface";
import { client } from "@/sanity/lib/client";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Bio from "./components/Bio";

// fetch person based on slug
async function getData(slug: string) {
  const query = `*[_type == "ourTeam" && slug.current == $slug][0] {
    _id,
    name,
    "slug": slug.current,
    role,
    "imageURL": image.asset->url,
    "description": description[]{
        "text": children[].text
    },
    order
  }`;      

  const member: TeamMember | null = await client.fetch(query, { slug }, { next: { revalidate: 30 } });

  return member ?? undefined;
};
  

// 👇 Dynamic metadata generator
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    // Await the params object first
    const resolvedParams = await params;
    const member = await getData(resolvedParams.slug);
  
    if (!member) {
      return {
        title: "404",
      };
    }
  
    return {
      title: `${member.name}`,
      description: `${member.name}'s profile.`,
    };
  }

  export default async function TeamMemberPage({ params }: { params: Promise<{ slug: string }> }) {
    // Await the params object first
    const resolvedParams = await params;
    const member: TeamMember | undefined = await getData(resolvedParams.slug);
  
    if (!member) {
      return notFound();
    }
  
    return (
      <div className="w-full h-full bg-stone-50">
        <Breadcrumbs />
        <Bio member={member} />
      </div>
    );
  }
