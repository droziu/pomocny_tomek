import { Check } from "lucide-react";

interface CheckItemProps {
  children: React.ReactNode;
}

export default function CheckItem({ children }: CheckItemProps) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-forest/10 text-forest">
        <Check className="h-3.5 w-3.5" strokeWidth={3} />
      </span>
      <span className="text-base md:text-lg text-text-light leading-relaxed">
        {children}
      </span>
    </li>
  );
}
