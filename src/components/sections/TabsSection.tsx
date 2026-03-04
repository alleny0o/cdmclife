import { Tab } from "@/sanity/lib/interface";
import { PortableText } from "@portabletext/react";
import { PortableTextBlock } from "@portabletext/types";
import Image from "next/image";
import Tabs from "@/components/tabs/Tabs";

function TabContent({ tab }: { tab: Tab }) {
  return (
    <div className="w-full pt-16 pb-20 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          {/* Content */}
          <div className="md:col-span-7 lg:col-span-8 prose prose-lg max-w-none text-gray-700 font-light leading-relaxed tracking-wide">
            {tab.body && <PortableText value={tab.body as PortableTextBlock[]} />}
          </div>

          {/* Image */}
          {tab.imageURL && (
            <div className="md:col-span-5 lg:col-span-4 relative flex flex-col">
              <div className="absolute top-0 left-0 h-full w-px bg-gray-200"></div>
              <div className="pl-8">
                <div className="p-6 bg-gray-50 rounded-lg shadow-sm border border-gray-200">
                  <div className="relative w-full aspect-[3/4]">
                    <Image
                      src={tab.imageURL}
                      alt={tab.imageCaption || tab.title}
                      fill
                      className="object-contain rounded-lg"
                    />
                  </div>
                  {tab.imageCaption && (
                    <p className="text-sm text-gray-500 italic mt-4 text-center">&ldquo;{tab.imageCaption}&rdquo;</p>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function TabsSection({ tabs }: { tabs: Tab[] }) {
  const tabItems = tabs.map((tab) => ({
    title: tab.title,
    content: <TabContent tab={tab} />,
  }));

  return <Tabs tabs={tabItems} />;
}
