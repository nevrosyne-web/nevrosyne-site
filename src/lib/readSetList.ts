import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import * as XLSX from "xlsx";

export type SetItem = {
  Titre?: string;
  Artiste?: string;
  Durée?: string;
  BPM?: number | string;
  Tonalité?: string;
  Notes?: string;
  [key: string]: any;
};

export function loadSetlist(): SetItem[] {
  // 1) Construis une liste de chemins candidats (source + public), avec les deux casses possibles.
  const root = process.cwd();
  const here = path.dirname(fileURLToPath(import.meta.url));
  const candidates = [
    // Relatif au fichier source (quand ça marche)
    path.resolve(here, "../content/setListNevro.xlsx"),
    path.resolve(here, "../content/setListNevro.xlsx"),
    // Relatif à la racine du projet (build/prerender, Netlify)
    path.resolve(root, "src/content/setListNevro.xlsx"),
    path.resolve(root, "src/content/setListNevro.xlsx"),
    // Option: si tu préfères mettre le fichier dans /public
    path.resolve(root, "public/setListNevro.xlsx"),
    path.resolve(root, "public/setListNevro.xlsx"),
  ];

  const found = candidates.find((p) => fs.existsSync(p));
  if (!found) {
    throw new Error(
      "Setlist XLSX introuvable. Chemins testés:\n" + candidates.join("\n")
    );
  }

  const buf = fs.readFileSync(found);
  const wb = XLSX.read(buf, { type: "buffer" });
  const ws = wb.Sheets[wb.SheetNames[0]];
  return XLSX.utils.sheet_to_json(ws, { defval: "" });
}