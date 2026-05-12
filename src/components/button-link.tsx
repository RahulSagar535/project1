import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  showArrow?: boolean;
};

export function ButtonLink({
  href,
  children,
  className,
  showArrow = false,
}: ButtonLinkProps) {
  return (
    <Link className={cn("btn-dark", className)} href={href}>
      {children}
      {showArrow ? <ArrowRight aria-hidden="true" size={18} /> : null}
    </Link>
  );
}
