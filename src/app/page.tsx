import HeroSection from "@/components/HeroSection";
import PartyCarousel from "@/components/PartyCarousel";
import VibeCards from "@/components/VibeCards";
import { heroImage, homeCarouselItems } from "@/data/media";

export default function HomePage() {
  return (
    <>
      <HeroSection item={heroImage} />
      <VibeCards />
      <section className="section reveal" aria-labelledby="carousel-title">
        <div className="section-headline">
          <p className="eyebrow">Weekend Preview</p>
          <h2 id="carousel-title">Party Feed</h2>
        </div>
        <PartyCarousel items={homeCarouselItems} id="home-party-carousel" />
      </section>
    </>
  );
}