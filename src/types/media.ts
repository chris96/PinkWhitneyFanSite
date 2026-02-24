export type CarouselTag = "party" | "bottle" | "beach";

export interface CarouselItem {
  id: string;
  src: string;
  alt: string;
  caption?: string;
  tag?: CarouselTag;
}

export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  orientation: "portrait" | "landscape" | "square";
}