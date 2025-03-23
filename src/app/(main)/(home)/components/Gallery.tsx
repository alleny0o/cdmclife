// GalleryWrapper.tsx - Server Component
import { client } from "@/sanity/lib/client";
import { GalleryImage } from "@/sanity/lib/interface";
import ClientGallery from "./ClientGallery";

async function fetchGalleryData() {
  const query = `*[_type == 'gallery'] {
    _id,
    "imageURL": image.asset->url,
    order,
  }`;

  const images = await client.fetch(query, {}, { next: { revalidate: 30 }});
  return images;
}

export default async function Gallery() {
  const data: GalleryImage[] = await fetchGalleryData();
  const sortedImages = data
    .sort((a, b) => a.order - b.order)
    .map(image => image.imageURL);

  return (
    <section className={`${sortedImages && sortedImages.length > 0 ? "" : "hidden"} bg-lightGray flex flex-col items-center justify-between w-full px-6 py-20 sm:px-12 md:px-20 lg:px-24 lg:py-24 overflow-x-hidden`}>
      <ClientGallery images={sortedImages} />
    </section>
  );
}