import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { LogoCloud } from "@/components/logo-cloud";
import { PageCta, StudioCta } from "@/components/page-cta";
import { Reveal } from "@/components/reveal";
import { StatsBlock } from "@/components/stats-block";
import { Timeline } from "@/components/timeline";
import { asset, press } from "@/lib/data";

export const metadata: Metadata = {
  title: "About",
  description:
    "Craft, leadership, and consequence behind Cavalier and founder Craig Cavalier.",
};

export default function AboutPage() {
  return (
    <>
      <section className="container-x section-y pb-8">
        <Reveal>
          <h1 className="display max-w-6xl">Craft. Leadership. Consequence.</h1>
        </Reveal>
      </section>
      <LogoCloud dense />

      <section className="container-x section-y grid gap-10 lg:grid-cols-[0.85fr_1fr] lg:items-center">
        <Reveal className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-card">
          <Image
            src={asset("/_next/static/media/8.0sahry3eijhdh.webp")}
            alt="Retail interior"
            fill
            sizes="(max-width: 1024px) 100vw, 42vw"
            className="object-cover"
            unoptimized
          />
        </Reveal>
        <Reveal delay={0.1}>
          <p className="eyebrow mb-5">Studio pedigree</p>
          <h2 className="section-heading">Pedigree Meets Precision.</h2>
          <p className="body-large mt-7 max-w-2xl">
            From visionary new concepts to global asset refreshes. We bring three decades
            of pedigree in flagship retail and recognized hospitality direction to every
            project.
          </p>
        </Reveal>
      </section>

      <StatsBlock />
      <Timeline />

      <section className="container-x section-y" aria-labelledby="press-heading">
        <Reveal className="mb-10">
          <h2 id="press-heading" className="section-heading">
            Press & Recognition
          </h2>
        </Reveal>
        <div className="grid gap-3 md:grid-cols-2">
          {press.map((item) => (
            <a
              key={item.title}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="group flex min-h-36 flex-col justify-between rounded-2xl border border-black/8 bg-white/58 p-6 shadow-soft transition hover:-translate-y-1 hover:bg-white"
            >
              <span className="text-sm font-semibold uppercase tracking-[0.12em] text-muted">
                {item.source}
              </span>
              <span className="mt-6 flex items-end justify-between gap-4 text-xl font-semibold leading-tight">
                {item.title}
                <ArrowUpRight
                  aria-hidden="true"
                  className="shrink-0 transition group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </span>
            </a>
          ))}
        </div>
      </section>

      <StudioCta />
      <LogoCloud />
      <PageCta />
    </>
  );
}
