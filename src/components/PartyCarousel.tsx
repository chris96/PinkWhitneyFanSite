"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import type { CarouselItem } from "@/types/media";

interface PartyCarouselProps {
  items: CarouselItem[];
  id: string;
  intervalMs?: number;
}

export default function PartyCarousel({ items, id, intervalMs = 4200 }: PartyCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const total = items.length;

  useEffect(() => {
    if (paused || total < 2) {
      return;
    }

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % total);
    }, intervalMs);

    return () => window.clearInterval(timer);
  }, [intervalMs, paused, total]);

  const activeItem = useMemo(() => items[activeIndex], [activeIndex, items]);

  const goNext = () => setActiveIndex((current) => (current + 1) % total);
  const goPrev = () => setActiveIndex((current) => (current - 1 + total) % total);

  return (
    <section
      className="carousel reveal"
      aria-roledescription="carousel"
      aria-label="Pink Whitney party gallery"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <div className="carousel-frame" id={id}>
        <Image
          key={activeItem.id}
          src={activeItem.src}
          alt={activeItem.alt}
          width={1280}
          height={720}
          className="carousel-image"
        />
        {activeItem.caption ? <p className="carousel-caption">{activeItem.caption}</p> : null}
      </div>

      <div className="carousel-controls">
        <button type="button" className="carousel-btn" onClick={goPrev} aria-controls={id} aria-label="Previous slide">
          Prev
        </button>
        <button type="button" className="carousel-btn" onClick={goNext} aria-controls={id} aria-label="Next slide">
          Next
        </button>
      </div>

      <div className="carousel-dots" role="tablist" aria-label="Select slide">
        {items.map((item, index) => (
          <button
            key={item.id}
            type="button"
            role="tab"
            aria-selected={index === activeIndex}
            aria-label={`Go to slide ${index + 1}`}
            className={index === activeIndex ? "dot active" : "dot"}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </section>
  );
}