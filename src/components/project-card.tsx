"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/data";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article
      layout
      whileHover={{ y: -10, rotateX: 3, rotateY: -3, scale: 1.015 }}
      whileTap={{ scale: 0.985 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
      className="group [perspective:1200px]"
    >
      <Link
        href={`/works/${project.slug}`}
        className="block rounded-2xl outline-none focus-visible:ring-4 focus-visible:ring-black/12"
      >
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-black shadow-card transition-shadow duration-500 group-hover:shadow-lift">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition duration-700 group-hover:scale-105"
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-80" />
          <div
            className="absolute inset-0 bg-white/10 opacity-0 transition duration-500 group-hover:opacity-100"
            aria-hidden="true"
          />
          <div className="absolute right-4 top-4 flex size-11 translate-y-2 items-center justify-center rounded-full bg-white/90 text-black opacity-0 shadow-card backdrop-blur transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            <ArrowUpRight size={20} aria-hidden="true" />
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.14em] text-white/60">
              {project.type}
            </p>
            <h2 className="text-2xl font-semibold leading-tight">{project.title}</h2>
            <p className="mt-2 text-sm text-white/68">{project.shortLocation}</p>
            <p className="mt-4 translate-y-3 text-sm font-semibold opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              View case study
            </p>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
