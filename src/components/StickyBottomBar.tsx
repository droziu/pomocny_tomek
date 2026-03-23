"use client";

import { Phone } from "lucide-react";

export default function StickyBottomBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      <div className="bg-white/95 backdrop-blur-md border-t border-cream-dark/50 shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
        <a
          href="tel:+48517363915"
          className="flex items-center justify-center gap-3 py-3.5 px-4"
        >
          <span className="flex items-center justify-center h-10 w-10 rounded-full bg-cta shadow-lg">
            <Phone className="h-5 w-5 text-white" />
          </span>
          <span className="font-bold text-text text-lg">
            Zadzwoń: <span className="text-cta">517 363 915</span>
          </span>
        </a>
      </div>
    </div>
  );
}
