// src/utils/dates.ts
// "2026-06-20" -> "20 juin 2026"
export function formatDate(iso: string): string {
  const [y, m, d] = String(iso).split("-").map(Number);
  return new Date(Date.UTC(y, m - 1, d)).toLocaleDateString("fr-FR", {
    day: "numeric", month: "long", year: "numeric", timeZone: "UTC",
  });
}
