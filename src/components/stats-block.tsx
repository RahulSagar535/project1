"use client";

import { Lightbulb, Layers3, Star, Store, type LucideIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { stats } from "@/lib/data";

const statIcons: LucideIcon[] = [Layers3, Store, Lightbulb, Star];

function Count({
  value,
  prefix = "",
  suffix = "",
}: {
  value: number;
  prefix?: string;
  suffix?: string;
}) {
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const played = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || played.current) return;
        played.current = true;
        const start = performance.now();
        const duration = 1450;

        function tick(now: number) {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setDisplay(Math.round(value * eased));
          if (progress < 1) requestAnimationFrame(tick);
        }

        requestAnimationFrame(tick);
      },
      { threshold: 0.65 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}

function StatFlipCard({
  stat,
  icon: Icon,
}: {
  stat: (typeof stats)[number];
  icon: LucideIcon;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isPinned, setIsPinned] = useState(false);
  const flipped = isHovered || isFocused || isPinned;

  return (
    <article className="min-h-[19rem] [perspective:1200px]">
      <button
        type="button"
        aria-label={`${stat.label}. ${stat.description}`}
        aria-pressed={isPinned}
        className="group block min-h-[19rem] w-full cursor-pointer rounded-2xl text-left outline-none"
        onClick={() => setIsPinned((value) => !value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className="relative min-h-[19rem] w-full rounded-2xl transition-transform duration-700 ease-out [transform-style:preserve-3d] group-focus-visible:ring-4 group-focus-visible:ring-black/12"
          style={{ transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)" }}
        >
          <div className="absolute inset-0 flex flex-col justify-between rounded-2xl border border-black/8 bg-[#f9f6f0] p-7 shadow-card [backface-visibility:hidden] md:p-8">
            <div>
              <p className="mb-7 text-6xl font-medium leading-none md:text-7xl lg:text-6xl xl:text-7xl">
                <Count value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
              </p>
              <h2 className="text-xl font-semibold leading-tight">{stat.label}</h2>
            </div>
            <div className="h-1 w-16 rounded-full bg-accent" aria-hidden="true" />
          </div>

          <div className="absolute inset-0 flex flex-col justify-between rounded-2xl border border-black/8 bg-white p-7 shadow-card [backface-visibility:hidden] [transform:rotateY(180deg)] md:p-8">
            <Icon size={36} strokeWidth={1.8} aria-hidden="true" />
            <p className="text-xl leading-[1.28] tracking-normal text-foreground md:text-2xl lg:text-xl xl:text-2xl">
              {stat.description}
            </p>
          </div>
        </div>
      </button>
    </article>
  );
}

export function StatsBlock() {
  return (
    <section className="section-y container-x" aria-label="Studio performance statistics">
      <div className="grid gap-5 md:grid-cols-2 md:gap-6 lg:grid-cols-4 xl:gap-7">
        {stats.map((stat, index) => (
          <StatFlipCard
            key={stat.label}
            stat={stat}
            icon={statIcons[index] ?? Layers3}
          />
        ))}
      </div>
    </section>
  );
}
