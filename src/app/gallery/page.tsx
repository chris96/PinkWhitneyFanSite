import Link from "next/link";
import GalleryGrid from "@/components/GalleryGrid";
import PartyCarousel from "@/components/PartyCarousel";
import { galleryCarouselItems, galleryItems } from "@/data/media";

export default function GalleryPage() {
  return (
    <>
      <section className="section reveal" aria-labelledby="gallery-title">
        <div className="section-headline">
          <p className="eyebrow">All Night Archive</p>
          <h1 id="gallery-title">Pink Whitney Gallery</h1>
          <p>Scroll the highlights, then dive into the full shot wall.</p>
        </div>
        <PartyCarousel items={galleryCarouselItems} id="gallery-party-carousel" intervalMs={3600} />
      </section>

      <GalleryGrid items={galleryItems} />

      <section className="back-home reveal">
        <Link className="btn btn-primary" href="/">
          Back To Home
        </Link>
      </section>
    </>
  );
}