import type { Metadata } from "next";
import Image from "next/image";
import { ButtonLink } from "@/components/button-link";
import { LogoCloud } from "@/components/logo-cloud";
import { PageCta } from "@/components/page-cta";
import { Reveal } from "@/components/reveal";
import { asset, audiences, consultingServices, consultingSteps } from "@/lib/data";

export const metadata: Metadata = {
  title: "Consulting",
  description:
    "Design leadership consulting for hospitality owners, retail executives, real estate developers, boards, and leadership teams.",
};

export default function ConsultingPage() {
  return (
    <>
      <section className="container-x section-y grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
        <Reveal>
          <h1 className="display max-w-5xl">Design Leadership. At the Highest Level.</h1>
        </Reveal>
        <Reveal delay={0.1} className="relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-lift">
          <Image
            src={asset("/_next/static/media/consultancy.0~iau-3kv3b1~.webp")}
            alt="Craig Cavalier in Boardroom"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 52vw"
            className="object-cover"
            unoptimized
          />
        </Reveal>
      </section>

      <section className="container-x section-y pt-0" aria-labelledby="services-heading">
        <h2 id="services-heading" className="section-heading max-w-5xl">
          Services Built on 30 Years of Design Leadership
        </h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {consultingServices.map((service) => (
            <article
              key={service.title}
              className="overflow-hidden rounded-2xl border border-black/8 bg-white/60 shadow-soft"
            >
              <div className="relative aspect-[4/3] bg-black/5">
                <Image
                  src={service.image}
                  alt={`${service.title} Wireframe`}
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                  unoptimized
                />
              </div>
              <h3 className="p-5 text-xl font-semibold leading-tight">{service.title}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="container-x pb-16">
        <div className="rounded-[2rem] bg-black p-8 text-white shadow-lift md:p-14">
          <h2 className="section-heading max-w-4xl">Strategic Design. Elevated Impact.</h2>
          <p className="body-large mt-7 max-w-3xl text-white/72">
            Every engagement starts with a candid conversation to ensure total alignment.
            I prioritize deep strategic focus to deliver custom design solutions that are
            as precise as they are impactful for your organization.
          </p>
          <ButtonLink href="/contact" className="mt-9">
            Start The Conversation
          </ButtonLink>
        </div>
      </section>

      <section className="container-x section-y pt-0">
        <div className="grid gap-5">
          {consultingSteps.map((step) => (
            <Reveal
              key={step.number}
              className="grid overflow-hidden rounded-[2rem] border border-black/8 bg-white/58 shadow-card lg:grid-cols-[0.45fr_0.55fr]"
            >
              <div className="relative min-h-80">
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover"
                  unoptimized
                />
              </div>
              <div className="flex flex-col justify-center p-8 md:p-12">
                <p className="mb-7 font-mono text-6xl font-semibold text-black/20">
                  {step.number}
                </p>
                <h3 className="mb-5 text-4xl font-medium">{step.title}</h3>
                <p className="body-large">{step.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-x section-y pt-0">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <h2 className="section-heading">Who Craig Works With</h2>
            <ul className="mt-8 grid gap-3">
              {audiences.map((audience) => (
                <li
                  key={audience}
                  className="rounded-xl border border-black/8 bg-white/58 px-5 py-4 text-xl font-semibold shadow-soft"
                >
                  {audience}
                </li>
              ))}
            </ul>
          </div>
          <figure className="overflow-hidden rounded-[2rem] bg-black text-white shadow-lift">
            <div className="relative min-h-[28rem]">
              <Image
                src={asset("/_next/static/media/HOSPITALITY%20OWNERS.0mpuqk2fqz7zo.webp")}
                alt="Hospitality Owners"
                fill
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover"
                unoptimized
              />
            </div>
            <figcaption className="p-8 md:p-10">
              <h3 className="mb-3 text-3xl font-medium">
                Bespoke Michelin-Standard Environments
              </h3>
              <p className="leading-7 text-white/68">
                Engineering one-of-a-kind guest experiences where every detail is a
                clinical study in precision. We refine atmosphere, lighting, and spatial
                flow to meet the world's exacting standards.
              </p>
            </figcaption>
          </figure>
        </div>
      </section>

      <LogoCloud dense />
      <PageCta />
    </>
  );
}
