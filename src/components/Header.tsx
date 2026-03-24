"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ChevronDown,
  Phone,
  Home,
  Coins,
  MessageCircle,
  Axe,
  Leaf,
  Tractor,
  TreeDeciduous,
} from "lucide-react";

const services = [
  { href: "/uslugi/drewno", label: "Rąbanie drewna", icon: Axe },
  { href: "/uslugi/galezie", label: "Rozdrabnianie gałęzi", icon: TreeDeciduous },
  { href: "/uslugi/sprzatanie", label: "Sprzątanie działek", icon: Leaf },
  { href: "/uslugi/glebogryzarka", label: "Glebogryzarka", icon: Tractor },
];

const navLinks = [
  { href: "/", label: "Strona Główna", icon: Home },
  { href: "/cennik", label: "Cennik", icon: Coins },
  { href: "/kontakt", label: "Kontakt", icon: MessageCircle },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    try {
      if (typeof document !== "undefined" && document.body) {
        document.body.style.overflow = mobileOpen ? "hidden" : "";
      }
    } catch {
      /* document.body może być niedostępny w niektórych edge cases */
    }
    return () => {
      try {
        if (typeof document !== "undefined" && document.body) {
          document.body.style.overflow = "";
        }
      } catch {
        /* ignore */
      }
    };
  }, [mobileOpen]);

  const handleDropdownEnter = () => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setServicesOpen(true);
  };

  const handleDropdownLeave = () => {
    dropdownTimeout.current = setTimeout(() => setServicesOpen(false), 150);
  };

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      suppressHydrationWarning
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        mobileOpen
          ? "bg-white shadow-md"
          : scrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm"
            : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between md:h-18">
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/Logo_1_2d2.png"
              alt="Pomocny Tomek"
              className="h-10 w-auto md:h-12 object-contain drop-shadow-sm"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive(link.href)
                    ? "text-forest bg-forest/5"
                    : "text-text hover:text-forest hover:bg-forest/5"
                }`}
              >
                <link.icon className="h-4 w-4" />
                {link.label}
              </Link>
            ))}

            {/* Services dropdown */}
            <div
              className="relative"
              onMouseEnter={handleDropdownEnter}
              onMouseLeave={handleDropdownLeave}
            >
              <button
                className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  pathname.startsWith("/uslugi")
                    ? "text-forest bg-forest/5"
                    : "text-text hover:text-forest hover:bg-forest/5"
                }`}
              >
                <Axe className="h-4 w-4" />
                Usługi
                <ChevronDown
                  className={`h-3.5 w-3.5 transition-transform duration-200 ${
                    servicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`absolute top-full left-0 mt-1 w-64 rounded-2xl bg-white shadow-xl border border-cream-dark/40 py-2 transition-all duration-200 origin-top ${
                  servicesOpen
                    ? "opacity-100 scale-100 translate-y-0"
                    : "opacity-0 scale-95 -translate-y-1 pointer-events-none"
                }`}
              >
                {services.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    className={`flex items-center gap-3 mx-2 px-3 py-3 rounded-xl text-sm transition-colors ${
                      isActive(s.href)
                        ? "text-forest bg-forest/5 font-medium"
                        : "text-text hover:bg-forest/5 hover:text-forest"
                    }`}
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-forest/8 text-forest">
                      <s.icon className="h-4 w-4" />
                    </span>
                    {s.label}
                  </Link>
                ))}
              </div>
            </div>

            <a
              href="tel:+48517363915"
              className="ml-3 inline-flex items-center gap-2 rounded-full bg-cta px-5 py-2.5 text-sm font-semibold text-white shadow-md hover:bg-cta-hover hover:shadow-lg active:scale-[0.97] transition-all duration-200"
            >
              <Phone className="h-4 w-4" />
              517 363 915
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden relative z-50 flex items-center justify-center h-10 w-10 -mr-2 rounded-xl text-text hover:bg-forest/5 active:bg-forest/10 transition-colors"
            aria-label={mobileOpen ? "Zamknij menu" : "Otwórz menu"}
          >
            <span className="relative h-6 w-6">
              <X
                className={`absolute inset-0 h-6 w-6 transition-all duration-300 ${
                  mobileOpen
                    ? "opacity-100 rotate-0 scale-100"
                    : "opacity-0 rotate-90 scale-75"
                }`}
              />
              <Menu
                className={`absolute inset-0 h-6 w-6 transition-all duration-300 ${
                  mobileOpen
                    ? "opacity-0 -rotate-90 scale-75"
                    : "opacity-100 rotate-0 scale-100"
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 top-16 z-40 md:hidden transition-all duration-300 ${
          mobileOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/20 transition-opacity duration-300 ${
            mobileOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setMobileOpen(false)}
        />

        {/* Panel */}
        <div
          className={`relative h-full bg-white overflow-y-auto shadow-2xl transition-transform duration-300 ease-out ${
            mobileOpen ? "translate-y-0" : "-translate-y-4"
          }`}
        >
          <nav className="flex flex-col px-5 pt-4 pb-32">
            {/* Main links */}
            {navLinks.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`flex items-center gap-3.5 py-3.5 px-4 text-[17px] font-medium rounded-2xl ${
                  isActive(link.href)
                    ? "text-forest bg-forest/5"
                    : "text-text hover:text-forest hover:bg-forest/5 active:bg-forest/10"
                }`}
                style={{
                  transition: mobileOpen ? `all 0.2s ease-out ${i * 50}ms` : "all 0.2s ease-out 0ms",
                  transform: mobileOpen ? "translateX(0)" : "translateX(-12px)",
                  opacity: mobileOpen ? 1 : 0,
                }}
              >
                <span
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-colors ${
                    isActive(link.href)
                      ? "bg-forest/10 text-forest"
                      : "bg-cream-dark/60 text-warm-gray"
                  }`}
                >
                  <link.icon className="h-5 w-5" />
                </span>
                {link.label}
              </Link>
            ))}

            {/* Services section */}
            <div
              className="mt-3 pt-3 border-t border-cream-dark/60"
              style={{
                transition: mobileOpen ? "all 0.3s ease-out 150ms" : "all 0.3s ease-out 0ms",
                transform: mobileOpen ? "translateX(0)" : "translateX(-12px)",
                opacity: mobileOpen ? 1 : 0,
              }}
            >
              <p className="px-4 py-2 text-xs font-bold uppercase tracking-widest text-warm-gray-light">
                Usługi
              </p>
              {services.map((s, i) => (
                <Link
                  key={s.href}
                  href={s.href}
                  onClick={() => setMobileOpen(false)}
                  className={`flex items-center gap-3.5 py-3.5 px-4 text-[17px] font-medium rounded-2xl ${
                    isActive(s.href)
                      ? "text-forest bg-forest/5"
                      : "text-text hover:text-forest hover:bg-forest/5 active:bg-forest/10"
                  }`}
                  style={{
                    transition: mobileOpen ? `all 0.2s ease-out ${200 + i * 50}ms` : "all 0.2s ease-out 0ms",
                    transform: mobileOpen ? "translateX(0)" : "translateX(-12px)",
                    opacity: mobileOpen ? 1 : 0,
                  }}
                >
                  <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-colors ${
                      isActive(s.href)
                        ? "bg-forest/10 text-forest"
                        : "bg-cream-dark/60 text-warm-gray"
                    }`}
                  >
                    <s.icon className="h-5 w-5" />
                  </span>
                  {s.label}
                </Link>
              ))}
            </div>

            {/* CTA */}
            <div
              className="mt-5 pt-5 border-t border-cream-dark/60"
              style={{
                transition: mobileOpen ? "all 0.3s ease-out 350ms" : "all 0.3s ease-out 0ms",
                transform: mobileOpen ? "translateY(0)" : "translateY(8px)",
                opacity: mobileOpen ? 1 : 0,
              }}
            >
              <a
                href="tel:+48517363915"
                className="flex items-center justify-center gap-2.5 rounded-2xl bg-cta px-6 py-4 text-lg font-bold text-white shadow-lg hover:bg-cta-hover active:scale-[0.98] transition-all duration-200"
              >
                <Phone className="h-5 w-5" />
                Zadzwoń: 517 363 915
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
