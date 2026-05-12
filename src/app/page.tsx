import type { Metadata } from "next";
import { FeatureBand } from "@/components/feature-band";
import { FeaturedWorkOrbit } from "@/components/featured-work-orbit";
import { HeroCarousel } from "@/components/hero-carousel";
import { ImmersiveScrollWorld } from "@/components/immersive-scroll-world";
import { LogoCloud } from "@/components/logo-cloud";
import { PageCta, StudioCta } from "@/components/page-cta";
import { StatsBlock } from "@/components/stats-block";
import { asset, projects } from "@/lib/data";

export const metadata: Metadata = {
  title: "Trettau Studio | Luxury Hospitality & Retail Design",
};

export default function HomePage() {
  const hospitality = projects.filter((project) => project.type === "Hospitality");

  return (
    <>
      <HeroCarousel />
      <FeaturedWorkOrbit />
      <StatsBlock />
      <FeatureBand
        eyebrow="Retail & Brand"
        title="Global Formats. Brands."
        description="Store design, flagship formats, and retail experience strategy for some of the world's most recognized brands."
        images={[
          asset("/_next/static/media/1.0mmjnjdg~41pd.webp"),
          asset("/_next/static/media/2.0njywk.8y3~o~.avif"),
          asset("/_next/static/media/1.12j60.r2xk5y..webp"),
        ]}
      />
      <FeatureBand
        eyebrow="Fine Dining & Hospitality"
        title="Interiors People Come Back To."
        description="Restaurant interiors and hospitality environments recognized by the SF Chronicle, Forbes, and LUXE Interiors + Design."
        align="right"
        images={[hospitality[1].image, hospitality[0].image, hospitality[2].image]}
      />
      <ImmersiveScrollWorld />
      <StudioCta />
      <LogoCloud />
      <PageCta />
    </>
  );
}
