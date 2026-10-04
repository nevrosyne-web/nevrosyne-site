import type { ImageMetadata } from "astro";

// Toutes les images de src/assets, indexées par leur chemin relatif à ce dossier
// (ex. "gallery/xxx.jpg"), c'est-à-dire la forme utilisée dans src/content/*.json.
// Contrairement à public/, ces images passent par l'optimisation d'Astro
// (redimensionnement, WebP, srcset) au moment du build.
const modules = import.meta.glob<{ default: ImageMetadata }>(
  "/src/assets/**/*.{jpg,jpeg,png,webp,avif,gif}",
  { eager: true }
);

const byPath = new Map<string, ImageMetadata>(
  Object.entries(modules).map(([file, mod]) => [file.replace(/^\/src\/assets\//, ""), mod.default])
);

export function isExternal(p: string): boolean {
  return /^(https?:)?\/\//i.test(p) || /^[a-z]+:/i.test(p);
}

// Renvoie l'image correspondant à un chemin des JSON de contenu.
// Un chemin introuvable fait échouer le build : une faute de frappe dans un JSON
// est ainsi détectée avant la mise en ligne au lieu de produire une image cassée.
export function assetImage(p: string): ImageMetadata {
  const key = String(p || "").trim().replace(/^\//, "");
  const img = byPath.get(key);
  if (!img) {
    throw new Error(
      `Image introuvable dans src/assets : "${p}".\n` +
      "Vérifie le chemin dans le JSON de contenu (relatif à src/assets, ex. \"gallery/photo.jpg\")."
    );
  }
  return img;
}
