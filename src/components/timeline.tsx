"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { timeline } from "@/lib/data";

export function Timeline() {
  return (
    <section className="container-x section-y" aria-labelledby="timeline-heading">
      <div className="mb-12 max-w-4xl">
        <h2 id="timeline-heading" className="section-heading">
          The Story Behind the Studio
        </h2>
      </div>

      <div className="relative">
        <div className="absolute left-4 top-0 hidden h-full w-px bg-black/12 md:block" />
        <div className="space-y-8">
          {timeline.map((item, index) => (
            <motion.article
              key={item.year}
              className="grid gap-6 rounded-2xl border border-black/8 bg-white/48 p-5 shadow-soft backdrop-blur md:grid-cols-[7rem_1fr_18rem]"
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.65, delay: index * 0.05 }}
            >
              <div className="font-mono text-2xl font-semibold">{item.year}</div>
              <div>
                <h3 className="mb-3 text-2xl font-semibold">{item.title}</h3>
                <p className="leading-7 text-muted">{item.text}</p>
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                <Image
                  src={item.image}
                  alt={item.year}
                  fill
                  sizes="288px"
                  className="object-cover"
                  unoptimized
                />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
