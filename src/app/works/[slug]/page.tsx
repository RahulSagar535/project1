import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { LogoCloud } from "@/components/logo-cloud";
import { PageCta } from "@/components/page-cta";
import { projects, getProject } from "@/lib/data";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return {
      title: "Work",
    };
  }

  return {
    title: project.title,
    description: `${project.title} by Trettau Studio in ${project.location}.`,
    openGraph: {
      title: `${project.title} | Trettau Studio`,
      description: project.overview,
      images: [{ url: project.image }],
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) notFound();

  return (
    <>
      <article>
        <section className="container-x section-y pb-8">
          <p className="eyebrow mb-5">{project.type}</p>
          <h1 className="display max-w-6xl">{project.title}</h1>
          <dl className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-border bg-border shadow-card sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["Client", project.client],
              ["Project Type", project.type],
              ["Location", project.location],
              ["Year", project.year],
            ].map(([label, value]) => (
              <div key={label} className="bg-[#f9f6f0] p-5">
                <dt className="text-xs font-bold uppercase tracking-[0.14em] text-muted">
                  {label}
                </dt>
                <dd className="mt-3 text-lg font-semibold">{value}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="container-x">
          <div className="relative aspect-[2/1] min-h-[22rem] overflow-hidden rounded-[2rem] shadow-lift">
            <Image
              src={project.image}
              alt={project.title}
              fill
              priority
              sizes="100vw"
              className="object-cover"
              unoptimized
            />
          </div>
        </section>

        <section className="container-x section-y grid gap-10 lg:grid-cols-[0.65fr_1fr]">
          <div>
            <p className="eyebrow mb-5">Project Details</p>
            <h2 className="section-heading">Overview</h2>
          </div>
          <div className="grid gap-8 text-lg leading-8 text-muted">
            <section>
              <h3 className="mb-3 text-xl font-semibold text-foreground">Overview</h3>
              <p>{project.overview}</p>
            </section>
            <section>
              <h3 className="mb-3 text-xl font-semibold text-foreground">Collaborators</h3>
              <p>{project.collaborators}</p>
            </section>
            <section>
              <h3 className="mb-3 text-xl font-semibold text-foreground">Scale</h3>
              <p>{project.scale}</p>
            </section>
            <section>
              <h3 className="mb-3 text-xl font-semibold text-foreground">Outcome</h3>
              <p>{project.outcome}</p>
            </section>
          </div>
        </section>

        <section className="container-x pb-16">
          <figure className="grid overflow-hidden rounded-[2rem] bg-black text-white shadow-lift lg:grid-cols-[1.1fr_0.9fr]">
            <div className="relative min-h-[28rem]">
              <Image
                src={project.gallery[0]?.src ?? project.image}
                alt={project.featureCaption}
                fill
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover"
                unoptimized
              />
            </div>
            <figcaption className="flex flex-col justify-end p-8 md:p-12">
              <h2 className="mb-6 text-4xl font-medium leading-none md:text-6xl">
                {project.featureCaption}
              </h2>
              <p className="text-lg leading-8 text-white/68">{project.featureText}</p>
            </figcaption>
          </figure>
        </section>

        <section className="container-x grid gap-5 pb-20 md:grid-cols-2 lg:grid-cols-3">
          {project.gallery.slice(1).map((image) => (
            <figure key={image.src} className="group">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-black shadow-card">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                  unoptimized
                />
              </div>
              <figcaption className="mt-3 text-sm font-semibold text-muted">
                {image.alt}
              </figcaption>
            </figure>
          ))}
        </section>
      </article>
      <LogoCloud dense />
      <PageCta />
    </>
  );
}
