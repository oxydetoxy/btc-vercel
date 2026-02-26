import { Hero } from "@/components/Hero";
import { MediaBanner } from "@/components/MediaBanner";
import { AboutBlock } from "@/components/AboutBlock";
import { OfferingsGrid } from "@/components/OfferingsGrid";
import { Testimonials } from "@/components/Testimonials";
import { CtaStrip } from "@/components/CtaStrip";

export default function HomePage() {
  return (
    <>
      <Hero />
      <MediaBanner />
      <AboutBlock />
      <OfferingsGrid />
      <Testimonials />
      <CtaStrip />
    </>
  );
}
