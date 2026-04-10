import type { ReactNode } from "react";

export default function MediaPlaceholder({
  title,
  description,
  className = "",
  footer,
  compact = false,
}: {
  title: string;
  description?: string;
  className?: string;
  footer?: ReactNode;
  /** Mniejszy padding i typografia – np. pod zdjęciem w hero o stałej szerokości */
  compact?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl border-2 border-dashed border-cream-dark/80 bg-white/60 text-center ${
        compact ? "p-4" : "p-6"
      } ${className}`}
      role="note"
      aria-label={`Placeholder: ${title}`}
    >
      <div className={`flex flex-col items-center ${compact ? "gap-2" : "gap-3"}`}>
        <p className="text-[10px] font-semibold uppercase tracking-widest text-warm-gray-light">
          Placeholder
        </p>
        <p className={`font-bold text-text ${compact ? "text-sm leading-snug" : "text-base"}`}>
          {title}
        </p>
        {description && (
          <p
            className={`text-text-light leading-relaxed ${
              compact ? "text-xs" : "text-sm"
            } max-w-md mx-auto`}
          >
            {description}
          </p>
        )}
        {footer ? <div>{footer}</div> : null}
      </div>
    </div>
  );
}

