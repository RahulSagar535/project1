import Image from "next/image";
import { ButtonLink } from "@/components/button-link";
import { asset } from "@/lib/data";

type PageCtaProps = {
  heading?: string;
  description?: string;
};

export function StudioCta() {
  return (
    <section className="container-x pb-20">
      <div className="grid overflow-hidden rounded-[2rem] bg-gradient-to-r from-white via-white to-black/20 shadow-card lg:grid-cols-2">
        <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-16">
          <h2 className="section-heading max-w-xl">The Studio Behind the Work.</h2>
          <p className="body-large mt-7 max-w-xl">
            Founded in San Francisco in 2020, Trettau Studio brings executive
            creative leadership to hospitality, retail, and advisory engagements across the
            globe.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <ButtonLink href="/consulting">Explore advisory</ButtonLink>
            <ButtonLink href="/works" showArrow>
              Explore The Work
            </ButtonLink>
          </div>
        </div>
        <div className="relative min-h-[26rem]">
          <Image
            src={asset("/_next/static/media/craig.0hecvw4dpwx_i.webp")}
            alt="Craig Trettau"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-right"
            unoptimized
          />
        </div>
      </div>
    </section>
  );
}

export function PageCta({
  heading = "Start My Project",
  description = "Let's build. Every standout project begins with one simple conversation. Tell us your vision, and Craig will reach out personally to help you execute.",
}: PageCtaProps) {
  return (
    <section className="container-x py-16">
      <div className="grain overflow-hidden rounded-[2rem] bg-black px-8 py-14 text-white shadow-lift md:px-14">
        <div className="relative z-10 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="section-heading max-w-3xl">{heading}</h2>
            <p className="body-large mt-6 max-w-2xl text-white/70">{description}</p>
          </div>
          <ButtonLink href="/contact" className="shrink-0 bg-white text-white">
            Contact Us
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
