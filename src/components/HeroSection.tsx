import Link from "next/link";
import Image from "next/image";
import type { CarouselItem } from "@/types/media";

interface HeroSectionProps {
  item: CarouselItem;
}

export default function HeroSection({ item }: HeroSectionProps) {
  return (
    <section className="hero reveal" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow">Fort Lauderdale Spring Break Vibe</p>
        <h1 id="hero-title">Pink Whitney Party Central</h1>
        <p>
          Big beach days, loud game nights, and nonstop energy. Pull up the gallery and
          set the tone for the weekend.
        </p>
        <div className="hero-actions">
          <Link className="btn btn-primary" href="/gallery">
            View The Gallery
          </Link>
          <a className="btn btn-ghost" href="#vibe-zone">
            Explore The Vibe
          </a>
        </div>
      </div>
      <div className="hero-media">
        <Image
          src={item.src}
          alt={item.alt}
          width={700}
          height={860}
          priority
          className="hero-image"
        />
        {item.caption ? <span className="hero-tag">{item.caption}</span> : null}
      </div>
    </section>
  );
}