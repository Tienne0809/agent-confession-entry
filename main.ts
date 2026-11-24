import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Make the AI Judge Laugh: AI Agent — make.fun bounty entry.
// The program writes one funny agent line to the output entry file.
const line =
  `When I say "great question," I am buying myself 400 milliseconds to figure out what you actually asked.`;

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
