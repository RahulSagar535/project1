import type { Metadata } from "next";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/lib/data";

export const metadata: Metadata = {
  title: "Selected Works",
  description:
    "Selected hospitality and retail work by Cavalier, including Selby's, La Connessa, Gap, Old Navy, Athleta, and Banana Republic.",
};

export default function WorksPage() {
  return (
    <section className="container-x section-y">
      <div className="mb-12 flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="eyebrow mb-5">Filter</p>
          <h1 className="display">Selected Works</h1>
        </div>
        <div className="flex flex-wrap gap-2" aria-label="Project categories">
          {["All", "Hospitality", "Retail"].map((filter) => (
            <span
              key={filter}
              className="rounded-full border border-black/10 bg-white/50 px-4 py-2 text-sm font-semibold text-muted"
            >
              {filter}
            </span>
          ))}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
