import type { Metadata } from "next";
import { IMG } from "@/lib/imageAssets";
import { DEFAULT_LOCALE, SITE_NAME, SITE_URL } from "@/lib/site";

const defaultOgImage = "/Pomocny%20Tomek%20HERO.webp";
const defaultOgW = IMG.heroPortrait.w;
const defaultOgH = IMG.heroPortrait.h;

function canonicalUrl(path: string): string {
  const p = path === "" || path === "/" ? "" : path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${p}`;
}

export function pageMetadata(
  path: string,
  opts: {
    title: string;
    description: string;
    /** Domyślny obraz OG (ścieżka od roota public) */
    ogImage?: string;
    /** Pełny tytuł strony głównej (bez szablonu z layoutu) */
    absoluteTitle?: boolean;
    /** Szerokość obrazu OG (dla kart podglądu) */
    ogImageWidth?: number;
    ogImageHeight?: number;
  }
): Metadata {
  const url = canonicalUrl(path);
  const ogImagePath = opts.ogImage ?? defaultOgImage;
  const ogW = opts.ogImageWidth ?? defaultOgW;
  const ogH = opts.ogImageHeight ?? defaultOgH;
  const displayTitle = opts.absoluteTitle
    ? opts.title
    : `${opts.title} | ${SITE_NAME}`;

  const base: Metadata = {
    description: opts.description,
    alternates: { canonical: url },
    openGraph: {
      title: displayTitle,
      description: opts.description,
      url,
      siteName: SITE_NAME,
      locale: DEFAULT_LOCALE,
      type: "website",
      images: [
        {
          url: ogImagePath,
          width: ogW,
          height: ogH,
          alt: `${SITE_NAME} — usługi przy drewnie i na działce`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: displayTitle,
      description: opts.description,
      images: [ogImagePath],
    },
    robots: { index: true, follow: true },
  };

  if (opts.absoluteTitle) {
    return { ...base, title: { absolute: opts.title } };
  }

  return { ...base, title: opts.title };
}
