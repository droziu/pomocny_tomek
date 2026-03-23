import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  href: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function ServiceCard({ href, icon: Icon, title, description }: ServiceCardProps) {
  return (
    <Link
      href={href}
      className="group flex flex-col rounded-2xl border border-cream-dark/50 bg-white p-6 transition-colors hover:border-forest/20"
    >
      <span className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-forest/10 text-forest">
        <Icon className="h-7 w-7" />
      </span>
      <h3 className="text-lg font-bold text-text mb-2">{title}</h3>
      <p className="text-text-light text-[15px] leading-relaxed mb-4 flex-1">{description}</p>
      <span className="inline-flex items-center gap-2 text-sm font-semibold text-forest">
        Zobacz szczegóły
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
