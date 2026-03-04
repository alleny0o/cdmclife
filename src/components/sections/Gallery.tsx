import { GalleryBlock } from "@/sanity/lib/interface";
import ClientGallery from "./ClientGallery";

export default function Gallery({ block }: { block: GalleryBlock }) {
  const images = block.images.map((i) => i.imageURL);

  return (
    <section className={`${images && images.length > 0 ? "" : "hidden"} bg-lightGray flex flex-col items-center justify-between w-full px-6 py-20 sm:px-12 md:px-20 lg:px-24 lg:py-24 overflow-x-hidden`}>
      <ClientGallery images={images} />
    </section>
  );
}
