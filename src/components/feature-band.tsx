import Image from "next/image";
import { ButtonLink } from "@/components/button-link";
import { Reveal } from "@/components/reveal";
import { cn } from "@/lib/utils";

type FeatureBandProps = {
  eyebrow: string;
  title: string;
  description: string;
  images: string[];
  align?: "left" | "right";
};

export function FeatureBand({
  eyebrow,
  title,
  description,
  images,
  align = "left",
}: FeatureBandProps) {
  const copy = (
    <Reveal
      className={cn(
        "flex flex-col justify-between",
        align === "right" ? "md:items-end md:text-right" : "",
      )}
    >
      <div>
        <p className="eyebrow mb-5">{eyebrow}</p>
        <h2 className="section-heading max-w-xl">{title}</h2>
        <p className="body-large mt-7 max-w-xl">{description}</p>
      </div>
      <ButtonLink href="/works" className="mt-9 w-fit" showArrow>
        Explore The Work
      </ButtonLink>
    </Reveal>
  );

  const media = (
    <Reveal delay={0.1} className="grid grid-cols-2 gap-3">
      {images.map((image, index) => (
        <div
          key={image}
          className={cn(
            "relative min-h-72 overflow-hidden rounded-2xl bg-black shadow-card",
            index === 0 ? "col-span-2 aspect-[16/9]" : "aspect-[4/5]",
          )}
        >
          <Image
            src={image}
            alt="Cavalier project image"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition duration-700 hover:scale-105"
            unoptimized
          />
        </div>
      ))}
    </Reveal>
  );

  return (
    <section className="container-x section-y">
      <div className="grid gap-10 lg:grid-cols-2">
        {align === "left" ? (
          <>
            {copy}
            {media}
          </>
        ) : (
          <>
            <div className="lg:order-2">{copy}</div>
            <div className="lg:order-1">{media}</div>
          </>
        )}
      </div>
    </section>
  );
}
