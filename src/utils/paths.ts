// src/utils/paths.ts
export function withBase(p: string = ""): string {
  const s = String(p || "").trim();

  // URLs absolues (http, https, mailto:, tel:, data:, etc.) -> on ne touche pas
  if (/^(https?:)?\/\//i.test(s) || /^[a-z]+:/i.test(s)) return s;

  const base = import.meta.env.BASE_URL ?? "/"; // "/nevrosyne-site/" sur GH Pages
  if (!s) return base; // lien vers la home

  const clean = s.replace(/^\//, "");
  const b = base.endsWith("/") ? base.slice(0, -1) : base;
  return `${b}/${clean}`;
}