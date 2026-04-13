import { Phone } from "lucide-react";

interface CTAButtonProps {
  large?: boolean;
  className?: string;
}

export default function CTAButton({ large, className = "" }: CTAButtonProps) {
  return (
    <a
      href="tel:+48790302007"
      className={`inline-flex items-center justify-center gap-2.5 rounded-full bg-cta font-bold text-white shadow-lg hover:bg-cta-hover hover:shadow-xl hover:-translate-y-0.5 active:scale-[0.98] active:translate-y-0 transition-all duration-300 ${
        large
          ? "px-8 py-4 text-lg md:text-xl"
          : "px-6 py-3.5 text-base"
      } ${className}`}
    >
      <Phone className={large ? "h-5 w-5" : "h-4 w-4"} />
      Zadzwoń: 790 302 007
    </a>
  );
}
