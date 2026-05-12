import { logoCloud } from "@/lib/data";
import { cn } from "@/lib/utils";

type LogoCloudProps = {
  className?: string;
  dense?: boolean;
};

export function LogoCloud({ className, dense = false }: LogoCloudProps) {
  const logos = [...logoCloud, ...logoCloud];

  return (
    <section className={cn("overflow-hidden py-10", className)} aria-label="Client logos">
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-[#f4f1ea] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-[#f4f1ea] to-transparent" />
        <div className="logo-marquee gap-3">
          {logos.map((logo, index) => (
            <div
              key={`${logo.src}-${index}`}
              className={cn(
                "group mx-2 flex items-center justify-center rounded-xl border border-black/8 bg-white/55 shadow-soft backdrop-blur transition duration-300 hover:-translate-y-1 hover:bg-white/75 hover:shadow-card",
                dense ? "h-20 w-36" : "h-24 w-44",
              )}
              aria-hidden={index >= logoCloud.length}
            >
              <img
                src={logo.src}
                alt={index < logoCloud.length ? `${logo.name} logo` : ""}
                className="max-h-10 max-w-[70%] object-contain grayscale transition duration-300 group-hover:scale-110 group-hover:grayscale-0"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
