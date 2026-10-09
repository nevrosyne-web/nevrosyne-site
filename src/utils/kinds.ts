// src/utils/kinds.ts
// Libellé affiché pour le champ `kind` des JSON (galerie, médias)
export function formatKind(kind: string): string {
  const map: Record<string, string> = {
    concert: "Concert",
    festival: "Festival",
    mariage: "Mariage",
    evenement: "Événement",
    anniversaire: "Anniversaire",
    composition: "Composition",
    repetition: "Répétition",
  };
  return map[kind] || kind || "";
}
