import { Check } from "lucide-react";

interface FeatureCheckListProps {
  items: string[];
  /** Wariant tła: 'cream' (na białym) lub 'white' (na cream) */
  variant?: "cream" | "white";
}

export default function FeatureCheckList({ items, variant = "cream" }: FeatureCheckListProps) {
  const bgClass = variant === "cream" ? "bg-cream/70" : "bg-white";
  return (
    <ul
      className={`rounded-xl ${bgClass} p-4 md:p-5 border border-cream-dark/30 space-y-3`}
      role="list"
    >
      {items.map((item) => (
        <li key={item} className="flex items-center gap-3 text-sm md:text-base text-text">
          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-forest/10 text-forest" aria-hidden>
            <Check className="h-3 w-3" strokeWidth={2.5} />
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
