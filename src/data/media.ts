import type { CarouselItem, GalleryItem } from "@/types/media";

// Swap these files with real photos as you collect more party content.
export const heroImage: CarouselItem = {
  id: "hero-bottle",
  src: "/images/source/pink-whitney-hero.svg",
  alt: "Pink Whitney bottle front and center with beach energy.",
  caption: "Fort Lauderdale Fuel",
  tag: "bottle"
};

export const homeCarouselItems: CarouselItem[] = [
  {
    id: "home-1",
    src: "/images/source/pink-whitney-party-1.svg",
    alt: "Friends raising Pink Whitney drinks at a party table.",
    caption: "House Party Kickoff",
    tag: "party"
  },
  {
    id: "home-2",
    src: "/images/source/pink-whitney-party-2.svg",
    alt: "Pink Whitney bottle with crowd cheering in the background.",
    caption: "Game Night Surge",
    tag: "bottle"
  },
  {
    id: "home-3",
    src: "/images/placeholders/spring-break-neon-1.svg",
    alt: "Spring break themed placeholder photo with neon lighting.",
    caption: "Spring Break Run",
    tag: "beach"
  }
];

export const galleryCarouselItems: CarouselItem[] = [
  ...homeCarouselItems,
  {
    id: "gallery-4",
    src: "/images/placeholders/spring-break-neon-2.svg",
    alt: "Placeholder shot of a beach party crowd at sunset.",
    caption: "Sunset Rally",
    tag: "beach"
  },
  {
    id: "gallery-5",
    src: "/images/placeholders/spring-break-neon-3.svg",
    alt: "Placeholder image of friends dancing with drinks under pink lights.",
    caption: "Neon Wave",
    tag: "party"
  }
];

export const galleryItems: GalleryItem[] = [
  {
    id: "grid-1",
    src: "/images/source/pink-whitney-hero.svg",
    alt: "Pink Whitney bottle held outdoors.",
    orientation: "portrait"
  },
  {
    id: "grid-2",
    src: "/images/source/pink-whitney-party-1.svg",
    alt: "Friends enjoying Pink Whitney drinks.",
    orientation: "landscape"
  },
  {
    id: "grid-3",
    src: "/images/source/pink-whitney-party-2.svg",
    alt: "Bottle and shot glasses at a sports watch party.",
    orientation: "landscape"
  },
  {
    id: "grid-4",
    src: "/images/placeholders/spring-break-neon-1.svg",
    alt: "Neon beach party placeholder visual.",
    orientation: "square"
  },
  {
    id: "grid-5",
    src: "/images/placeholders/spring-break-neon-2.svg",
    alt: "Crowd silhouette placeholder visual at sunset.",
    orientation: "portrait"
  },
  {
    id: "grid-6",
    src: "/images/placeholders/spring-break-neon-3.svg",
    alt: "Party floor placeholder visual with bright pink highlights.",
    orientation: "square"
  }
];