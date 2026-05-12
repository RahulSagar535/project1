"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { CSSProperties, PointerEvent } from "react";
import { useRef } from "react";
import { projects } from "@/lib/data";

const particles = Array.from({ length: 24 }, (_, index) => ({
  id: index,
  left: `${(index * 37) % 100}%`,
  top: `${(index * 53) % 100}%`,
  delay: `${(index % 8) * 0.42}s`,
  size: `${2 + (index % 3)}px`,
}));

export function FeaturedWorkOrbit() {
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const featured = projects.slice(0, 10);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 0.26, 0.78, 1], [0.82, 1, 1, 0.9]);
  const opacity = useTransform(scrollYProgress, [0, 0.18, 0.84, 1], [0.24, 1, 1, 0.34]);
  const y = useTransform(scrollYProgress, [0, 1], [80, -90]);

  function updateTilt(event: PointerEvent<HTMLDivElement>) {
    if (prefersReducedMotion) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const yy = (event.clientY - rect.top) / rect.height - 0.5;
    event.currentTarget.style.setProperty("--orbit-tilt-x", `${yy * -7}deg`);
    event.currentTarget.style.setProperty("--orbit-tilt-y", `${x * 9}deg`);
  }

  function resetTilt(event: PointerEvent<HTMLDivElement>) {
    event.currentTarget.style.setProperty("--orbit-tilt-x", "0deg");
    event.currentTarget.style.setProperty("--orbit-tilt-y", "0deg");
  }

  return (
    <section
      ref={sectionRef}
      className="featured-work-orbit relative isolate overflow-hidden bg-[#030304] py-24 text-white md:py-32"
      aria-labelledby="featured-work-orbit-heading"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_12%,rgba(255,255,255,0.16),transparent_28%),linear-gradient(180deg,#050506_0%,#0b0808_44%,#020202_100%)]" />
      <div className="cinematic-grid absolute inset-0 opacity-35" aria-hidden="true" />
      <div className="cinematic-beams absolute inset-0" aria-hidden="true" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.84)_78%)]" />
      <div className="absolute inset-0 opacity-35 mix-blend-screen" aria-hidden="true">
        {particles.map((particle) => (
          <span
            key={particle.id}
            className="orbit-particle"
            style={{
              left: particle.left,
              top: particle.top,
              width: particle.size,
              height: particle.size,
              animationDelay: particle.delay,
            }}
          />
        ))}
      </div>

      <div className="container-x relative z-10">
        <div className="mb-12 max-w-4xl">
          <p className="eyebrow mb-5 text-white/52">Featured Work Showcase</p>
          <h2 id="featured-work-orbit-heading" className="section-heading max-w-4xl">
            Projects Suspended in Motion.
          </h2>
          <p className="body-large mt-7 max-w-3xl text-white/62">
            A rotating spatial portfolio of flagship retail, hospitality, and brand
            environments, staged like a digital installation.
          </p>
        </div>

        <motion.div
          className="orbit-shell relative mx-auto min-h-[31rem] md:min-h-[39rem]"
          style={
            prefersReducedMotion
              ? undefined
              : {
                  scale,
                  opacity,
                  y,
                }
          }
          onPointerMove={updateTilt}
          onPointerLeave={resetTilt}
        >
          <div className="absolute inset-x-8 top-1/2 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />
          <div className="absolute inset-x-16 top-[58%] h-24 bg-white/10 blur-3xl" />
          <div className="orbit-stage">
            <div className="orbit-ring" style={{ "--orbit-count": featured.length } as CSSProperties}>
              {featured.map((project, index) => (
                <Link
                  key={project.slug}
                  href={`/works/${project.slug}`}
                  className="orbit-card group"
                  style={{ "--orbit-index": index } as CSSProperties}
                  aria-label={`View ${project.title}`}
                >
                  <span className="orbit-card-surface">
                    <span className="orbit-card-background" aria-hidden="true">
                      <Image
                        src={project.image}
                        alt=""
                        fill
                        sizes="(max-width: 768px) 34vw, 14vw"
                        className="object-cover"
                        unoptimized
                      />
                    </span>
                    <span className="orbit-card-media">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 34vw, 14vw"
                        className="orbit-card-image"
                        unoptimized
                      />
                    </span>
                    <span className="orbit-card-shade" />
                    <span className="absolute inset-0 z-20 rounded-[1.55rem] border border-white/16" />
                    <span className="absolute left-4 right-4 top-4 z-20 flex items-center justify-between text-[0.65rem] font-bold uppercase tracking-[0.16em] text-white/62">
                      {project.type}
                      <ArrowUpRight size={16} aria-hidden="true" />
                    </span>
                    <span className="absolute bottom-0 left-0 right-0 z-20 p-4">
                      <span className="block text-xl font-semibold leading-tight">
                        {project.title}
                      </span>
                      <span className="mt-2 block text-sm text-white/58">
                        {project.shortLocation}
                      </span>
                      <span className="mt-4 inline-flex translate-y-2 rounded-full border border-white/18 bg-white/10 px-3 py-1 text-xs font-semibold opacity-0 backdrop-blur transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                        Enter case study
                      </span>
                    </span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
