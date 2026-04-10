import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

const paths = [
  "/",
  "/cennik",
  "/kontakt",
  "/polityka-prywatnosci",
  "/uslugi/drewno",
  "/uslugi/galezie",
  "/uslugi/sprzatanie",
  "/uslugi/glebogryzarka",
  "/uslugi/frezowanie-pni",
  "/uslugi/wiercenie-otworow",
  "/uslugi/przycinka-drzew",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map((path) => ({
    url: path === "/" ? SITE_URL : `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority:
      path === "/"
        ? 1
        : path.startsWith("/uslugi/")
          ? 0.9
          : path === "/cennik" || path === "/kontakt"
            ? 0.85
            : 0.5,
  }));
}
