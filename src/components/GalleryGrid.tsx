import Image from "next/image";
import type { GalleryItem } from "@/types/media";

interface GalleryGridProps {
  items: GalleryItem[];
}

export default function GalleryGrid({ items }: GalleryGridProps) {
  return (
    <section className="gallery-grid reveal" aria-label="Pink Whitney party image gallery">
      {items.map((item) => (
        <article key={item.id} className={`gallery-item ${item.orientation}`}>
          <Image
            src={item.src}
            alt={item.alt}
            width={720}
            height={720}
            className="gallery-image"
          />
        </article>
      ))}
    </section>
  );
}