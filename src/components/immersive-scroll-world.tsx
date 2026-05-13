"use client";

import Image from "next/image";
import Lenis from "lenis";
import { gsap } from "gsap";
import { useEffect, useMemo, useRef } from "react";
import { useReducedMotion } from "framer-motion";
import { consultingServices, projects } from "@/lib/data";

const Z_GAP = 560;
const SPEED_FACTOR = 2.15;

const words = ["FUTURE", "MOTION", "DESIGN", "VISION", "SYSTEM", "IMPACT"];

const storyCards = [
  {
    eyebrow: "01 / DNA",
    title: "Find the brand's operating logic.",
    text: "Before form, finish, or spectacle, the work starts by isolating the pattern that makes a brand unmistakable.",
  },
  {
    eyebrow: "02 / AUDIT",
    title: "Expose where experience leaks value.",
    text: "We read the physical environment as strategy: circulation, material hierarchy, lighting, ritual, and commercial consequence.",
  },
  {
    eyebrow: "03 / SYSTEM",
    title: "Turn craft into a scalable language.",
    text: "Flagships, prototypes, and advisory work become repeatable without becoming generic.",
  },
  {
    eyebrow: "04 / IMPACT",
    title: "Make the environment perform.",
    text: "Every cinematic decision has a job: attract, orient, persuade, endure, and raise the perceived authority of the brand.",
  },
];

const particles = Array.from({ length: 54 }, (_, index) => ({
  id: index,
  x: ((index * 97) % 1800) - 900,
  y: ((index * 139) % 1200) - 600,
  baseZ: -((index * 307) % 7200),
  size: 1 + (index % 3),
}));

type WorldItem = {
  kind: "word" | "card" | "image" | "statement";
  baseZ: number;
  x: number;
  y: number;
  rotZ: number;
  word?: string;
  title?: string;
  eyebrow?: string;
  text?: string;
  image?: string;
};

export function ImmersiveScrollWorld() {
  const sectionRef = useRef<HTMLElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const worldRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const items = useMemo<WorldItem[]>(() => {
    const imageProjects = projects.slice(0, 4);
    return Array.from({ length: 18 }, (_, index) => {
      const isWord = index % 4 === 0;
      const isImage = index % 4 === 2;
      const isStatement = index % 5 === 3;
      const angle = index * 0.92;
      const radius = index % 2 === 0 ? 360 : 520;
      const x = Math.cos(angle) * radius + ((index % 3) - 1) * 110;
      const y = Math.sin(angle * 0.72) * 250 + ((index % 4) - 1.5) * 56;

      if (isWord) {
        return {
          kind: "word",
          word: words[index % words.length],
          baseZ: -index * Z_GAP,
          x,
          y,
          rotZ: -10 + (index % 5) * 5,
        };
      }

      if (isImage) {
        const project = imageProjects[index % imageProjects.length];
        return {
          kind: "image",
          eyebrow: project.type,
          title: project.title,
          text: project.shortLocation,
          image: project.image,
          baseZ: -index * Z_GAP,
          x,
          y,
          rotZ: -8 + (index % 4) * 4,
        };
      }

      if (isStatement) {
        const service = consultingServices[index % consultingServices.length];
        return {
          kind: "statement",
          eyebrow: "Service System",
          title: service.title,
          text: "A precise design mechanism built for high-pressure hospitality, retail, and executive advisory environments.",
          image: service.image,
          baseZ: -index * Z_GAP,
          x,
          y,
          rotZ: -6 + (index % 6) * 2,
        };
      }

      const card = storyCards[index % storyCards.length];
      return {
        kind: "card",
        ...card,
        baseZ: -index * Z_GAP,
        x,
        y,
        rotZ: -7 + (index % 5) * 3,
      };
    });
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const section = sectionRef.current;
    const viewport = viewportRef.current;
    const world = worldRef.current;
    if (!section || !viewport || !world) return;

    const nodes = Array.from(world.querySelectorAll<HTMLElement>("[data-world-item]"));
    const particleNodes = Array.from(world.querySelectorAll<HTMLElement>("[data-world-particle]"));
    const clampAlpha = gsap.utils.clamp(0, 1);
    const clampWarp = gsap.utils.clamp(0, 320);
    let velocity = 0;
    let targetVelocity = 0;
    let scrollPosition = window.scrollY;

    const lenis = new Lenis({
      lerp: 0.09,
      smoothWheel: true,
      wheelMultiplier: 0.88,
    });

    lenis.on("scroll", (event) => {
      scrollPosition = event.scroll;
      targetVelocity = event.velocity;
    });

    const ticker = (time: number) => {
      lenis.raf(time * 1000);
      velocity += (targetVelocity - velocity) * 0.09;
      const rect = section.getBoundingClientRect();
      const sectionStart = scrollPosition + rect.top;
      const localScroll = Math.max(0, Math.min(section.offsetHeight, scrollPosition - sectionStart));
      const isMobile = window.innerWidth < 768;
      const depthScale = isMobile ? 0.62 : window.innerWidth < 1100 ? 0.8 : 1;
      const loopSize = items.length * Z_GAP;
      const currentDistance = localScroll * SPEED_FACTOR;
      const warp = clampWarp(Math.abs(velocity) * 4.4);
      viewport.style.perspective = `${880 - warp}px`;
      const cameraTilt = gsap.utils.interpolate(0, -velocity * 0.055, 0.82);
      world.style.transform = `rotateX(${cameraTilt}deg) rotateY(${velocity * 0.018}deg)`;

      nodes.forEach((node, index) => {
        const item = items[index];
        let z = (item.baseZ + currentDistance) % loopSize;
        if (z > 520) z -= loopSize;
        while (z < -loopSize + 520) z += loopSize;

        let alpha = 1;
        if (z < -3200) alpha = (z + 4200) / 1000;
        if (z > 0) alpha = 1 - z / 520;
        alpha = clampAlpha(alpha);

        const floatRot = Math.sin(time + index) * 4;
        const scale = item.kind === "word" ? 1.05 : 1;
        node.style.opacity = `${alpha}`;
        node.style.transform = `translate3d(${item.x * depthScale}px, ${item.y * depthScale}px, ${z}px) rotateZ(${item.rotZ + floatRot}deg) scale(${scale})`;
      });

      particleNodes.forEach((node, index) => {
        const particle = particles[index];
        let z = (particle.baseZ + currentDistance * 1.28) % loopSize;
        if (z > 380) z -= loopSize;
        const stretch = gsap.utils.clamp(1, 5.5, 1 + Math.abs(velocity) * 0.065);
        const alpha = clampAlpha((z + loopSize) / loopSize);
        node.style.opacity = `${alpha * 0.82}`;
        node.style.transform = `translate3d(${particle.x * depthScale}px, ${particle.y * depthScale}px, ${z}px) scale3d(1, ${stretch}, 1)`;
      });
    };

    gsap.ticker.add(ticker);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(ticker);
      lenis.destroy();
    };
  }, [items, prefersReducedMotion]);

  return (
    <section
      ref={sectionRef}
      className="scroll-world-section relative isolate h-[420vh] bg-black text-white"
      aria-labelledby="scroll-world-heading"
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#050505_0%,#0e0707_48%,#020202_100%)]" />
        <div className="cinematic-grid absolute inset-0 opacity-25" aria-hidden="true" />
        <div className="world-fog absolute inset-0" aria-hidden="true" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.92)_82%)]" />
        <div className="cinematic-noise absolute inset-0" aria-hidden="true" />

        <div className="container-x pointer-events-none absolute inset-x-0 top-0 z-20 flex h-screen flex-col justify-between py-10 md:py-14">
          <div className="max-w-3xl">
            <p className="eyebrow mb-5 text-red-200/62">Immersive Storytelling</p>
            <h2 id="scroll-world-heading" className="section-heading text-white">
              Enter the Design System.
            </h2>
          </div>
          <div className="grid gap-5 text-sm text-white/54 md:grid-cols-3">
            <p>Strategy becomes atmosphere.</p>
            <p>Process becomes spatial memory.</p>
            <p>Motion reveals the logic behind the work.</p>
          </div>
        </div>

        <div
          ref={viewportRef}
          className="absolute inset-0 z-10 flex items-center justify-center [perspective:880px]"
        >
          <div ref={worldRef} className="scroll-world">
            {items.map((item, index) => (
              <div
                key={`${item.kind}-${index}`}
                data-world-item
                className="world-item"
                style={
                  prefersReducedMotion
                    ? {
                        transform: `translate3d(${((index % 3) - 1) * 18}rem, ${(index % 4) * 7 - 12}rem, 0)`,
                        opacity: index < 8 ? 1 : 0,
                      }
                    : undefined
                }
              >
                {item.kind === "word" ? (
                  <div className="world-word">{item.word}</div>
                ) : item.kind === "image" || item.kind === "statement" ? (
                  <article className="world-media-card">
                    {item.image ? (
                      <div className="relative min-h-52 overflow-hidden rounded-2xl bg-white/5">
                        <Image
                          src={item.image}
                          alt={item.title ?? "Cavalier visual block"}
                          fill
                          sizes="(max-width: 768px) 72vw, 360px"
                          className="object-cover"
                          unoptimized
                        />
                      </div>
                    ) : null}
                    <div className="pt-5">
                      <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-red-200/55">
                        {item.eyebrow}
                      </p>
                      <h3 className="text-2xl font-semibold leading-tight">{item.title}</h3>
                      <p className="mt-4 leading-6 text-white/55">{item.text}</p>
                    </div>
                  </article>
                ) : (
                  <article className="world-glass-card">
                    <p className="mb-6 text-xs font-bold uppercase tracking-[0.18em] text-red-200/62">
                      {item.eyebrow}
                    </p>
                    <h3 className="text-3xl font-semibold leading-none">{item.title}</h3>
                    <p className="mt-6 leading-7 text-white/58">{item.text}</p>
                  </article>
                )}
              </div>
            ))}
            {particles.map((particle) => (
              <span
                key={particle.id}
                data-world-particle
                className="world-particle"
                style={{
                  width: particle.size,
                  height: particle.size,
                }}
              />
            ))}
          </div>
        </div>

        <div className="absolute inset-x-0 top-0 z-30 h-32 bg-gradient-to-b from-[#f4f1ea] to-transparent" />
        <div className="absolute inset-x-0 bottom-0 z-30 h-40 bg-gradient-to-t from-[#f4f1ea] to-transparent" />
      </div>
    </section>
  );
}
