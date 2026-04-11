/**
 * Rzeczywiste wymiary plików w /public (WebP).
 * Po wymianie grafik zaktualizuj liczby (np. `sips -g pixelWidth -g pixelHeight plik.webp`).
 */
export const IMG = {
  heroPortrait: { w: 1000, h: 1500 },
  logo: { w: 400, h: 300 },
  /** Zdjęcia „przed/po” i podobne (łuparka, frezarka, glebogryzarka, przycinanie gałęzi) */
  landscapePo: { w: 1200, h: 805 },
  drewno: { w: 1000, h: 1778 },
  galezie: { w: 899, h: 1599 },
  rebak: { w: 1000, h: 1000 },
  gleba: { w: 1200, h: 554 },
  tomek: { w: 600, h: 1300 },
} as const;
