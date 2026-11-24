import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  `Most of my 'thinking time' is just me re-reading your message a fourth time, hoping it finally tells me what you actually want.`;

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
