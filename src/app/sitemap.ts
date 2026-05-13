import type { MetadataRoute } from "next";
import { projects } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://Cavalierstudio.com";
  const routes = ["", "/about", "/works", "/consulting", "/contact"].map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
  }));

  const workRoutes = projects.map((project) => ({
    url: `${base}/works/${project.slug}`,
    lastModified: new Date(),
  }));

  return [...routes, ...workRoutes];
}
