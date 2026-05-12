"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { ButtonLink } from "@/components/button-link";
import { homeHero } from "@/lib/data";
import { cn } from "@/lib/utils";

export function HeroCarousel() {
  const [active, setActive] = useState(0);
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.82]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 110]);
  const rotateX = useTransform(scrollYProgress, [0, 1], [0, 6]);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((value) => (value + 1) % homeHero.length);
    }, 5200);
    return () => window.clearInterval(timer);
  }, []);

  const current = homeHero[active];
  const showPrevious = () => {
    setActive((value) => (value - 1 + homeHero.length) % homeHero.length);
  };
  const showNext = () => {
    setActive((value) => (value + 1) % homeHero.length);
  };

  return (
    <section
      ref={ref}
      className="relative h-[calc(100dvh-4rem)] min-h-[500px] md:min-h-[640px] overflow-hidden bg-black text-white"
      aria-label="Featured work carousel"
    >
      <motion.div
        style={{ scale, y, rotateX, transformPerspective: 1200 }}
        className="absolute inset-4 overflow-hidden rounded-2xl shadow-lift"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={current.image}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 0.82, ease: "easeInOut" }}
          >
            <Image
              src={current.image}
              alt={current.title}
              fill
              priority
              sizes="100vw"
              className="object-cover"
              unoptimized
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-r from-black/72 via-black/28 to-black/6" />
      </motion.div>

      <div className="container-x relative z-10 flex h-full items-end pb-10">
        <div className="hero-copy mb-6 min-w-0">
          <p className="eyebrow mb-5 text-white/70">Trettau Studio</p>
          <h1 className="display hero-display">We Turn Legacy Into Authority.</h1>
          <p className="body-large mt-8 max-w-2xl text-white/76">
            Executive creative leadership for hospitality owners, retail brands, real
            estate developers, and organizations that need more than a designer.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/works" showArrow>
              Explore The Work
            </ButtonLink>
            <Link
              href="/consulting"
              className="inline-flex min-h-12 items-center justify-center rounded-xl border border-white/24 bg-white/10 px-5 font-semibold text-white shadow-lift backdrop-blur transition hover:bg-white/18"
            >
              Consulting
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 right-4 z-20 flex items-center gap-2 sm:hidden">
        <button
          type="button"
          onClick={showPrevious}
          className="inline-flex size-12 items-center justify-center rounded-full bg-white/86 text-black shadow-lift backdrop-blur transition hover:scale-105"
          aria-label="Show previous project"
        >
          <ChevronLeft aria-hidden="true" />
        </button>
        <span className="rounded-full bg-black/45 px-3 py-2 text-sm font-semibold text-white backdrop-blur">
          {String(active + 1).padStart(2, "0")} / {String(homeHero.length).padStart(2, "0")}
        </span>
        <button
          type="button"
          onClick={showNext}
          className="inline-flex size-12 items-center justify-center rounded-full bg-white/86 text-black shadow-lift backdrop-blur transition hover:scale-105"
          aria-label="Show next project"
        >
          <ChevronRight aria-hidden="true" />
        </button>
      </div>

      <div className="absolute bottom-8 right-4 z-20 hidden w-[min(36rem,42vw)] sm:block">
        <div className="mb-4 flex items-center gap-4 px-2 text-sm font-semibold text-white/80">
          <span>{String(active + 1).padStart(2, "0")}</span>
          <div className="h-0.5 flex-1 overflow-hidden rounded-full bg-white/22">
            <motion.div
              className="h-full rounded-full bg-white"
              animate={{ width: `${((active + 1) / homeHero.length) * 100}%` }}
              transition={{ duration: 0.45 }}
            />
          </div>
          <span>{String(homeHero.length).padStart(2, "0")}</span>
        </div>

        <div className="flex gap-3 overflow-hidden">
          {homeHero.map((item, index) => (
            <button
              type="button"
              key={`${item.title}-${index}`}
              onClick={() => setActive(index)}
              className={cn(
                "flex w-72 shrink-0 items-center gap-4 rounded-2xl border p-3 text-left transition",
                active === index
                  ? "border-white/18 bg-white/12 shadow-lift backdrop-blur"
                  : "border-white/8 bg-white/6 opacity-62 hover:opacity-90",
              )}
              aria-label={`Show ${item.title}`}
            >
              <span className="relative size-16 shrink-0 overflow-hidden rounded-lg">
                <Image
                  src={item.image}
                  alt=""
                  fill
                  sizes="64px"
                  className="object-cover"
                  unoptimized
                />
              </span>
              <span className="min-w-0">
                <span className="block truncate text-base font-semibold">{item.title}</span>
                <span className="mt-1 block truncate text-sm text-white/58">
                  {item.location}
                </span>
              </span>
            </button>
          ))}
        </div>
      </div>

      <a
        href={current.href}
        className="absolute right-4 top-4 md:right-6 md:top-6 z-30 inline-flex size-10 md:size-12 items-center justify-center rounded-full bg-black text-white shadow-lift backdrop-blur transition hover:scale-105"
        aria-label={`View ${current.title}`}
      >
        <ArrowUpRight aria-hidden="true" className="pointer-events-none size-5 md:size-6" />
      </a>
    </section>
  );
}
