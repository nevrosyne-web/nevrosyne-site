/**
 * Ajoute la BASE_URL d’Astro si nécessaire.
 * - Conserve tel quel les URL absolues (http/https, mailto:, tel:, //cdn…)
 * - Supprime le slash de tête pour éviter les doubles (//)
 * - Gère correctement query (?...) et hash (#...)
 */
export function withBase(p: string): string {
  if (!p) return p;
  const s = String(p).trim();

  // 1) Laisse passer les URLs absolues et schémas spéciaux
  if (/^(https?:)?\/\//i.test(s) || /^[a-z]+:/i.test(s)) return s;

  // 2) Récupère la base d’Astro ("/" ou "/<repo>/")
  const base = import.meta.env.BASE_URL || "/";

  // 3) Normalise: enlève le slash de tête du chemin fourni
  const clean = s.replace(/^\//, "");

  // 4) Concat propre (BASE_URL a déjà un slash final garanti par Astro)
  return base + clean;
}