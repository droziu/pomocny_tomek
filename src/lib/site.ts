/**
 * Kanoniczny adres produkcji (Netlify / hosting). Ustaw NEXT_PUBLIC_SITE_URL w panelu lub .env — bez końcowego slasha.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://pomocnytomek.pl"
).replace(/\/$/, "");

export const SITE_NAME = "Pomocny Tomek";

export const DEFAULT_LOCALE = "pl_PL";

export const BUSINESS = {
  name: SITE_NAME,
  phones: ["+48790302007", "+48517363915"],
  email: "pomocnytom@gmail.com",
  areaLabel: "Jastrzębie-Zdrój, Cieszyn i okolice",
} as const;
