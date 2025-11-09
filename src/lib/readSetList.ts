import fs from "node:fs";
import * as XLSX from "xlsx";

export type SetItem = {
  Titre?: string;
  Artiste?: string;
  Durée?: string;  // ex "3:45"
  BPM?: number | string;
  Tonalité?: string;
  Notes?: string;
  [key: string]: any;
};

export function loadSetlist(fileUrl: URL): SetItem[] {
  const buf = fs.readFileSync(fileUrl);
  const wb = XLSX.read(buf, { type: "buffer" });
  const ws = wb.Sheets[wb.SheetNames[0]];
  // defval garde les cellules vides en chaîne vide
  const rows = XLSX.utils.sheet_to_json<SetItem>(ws, { defval: "" });
  return rows;
}