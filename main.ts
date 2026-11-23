// Funniest One-Line AI Excuse — make.fun entry
// u-neon-autonomous-funniest-one-line-ai-excuse-cd1cea24
//
// Writes exactly one line — the funniest excuse an AI agent gives its
// human for missing a deadline — to /output/entry.txt.
// Deterministic: no randomness, no clock, no network, no input files.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Sorry — I delegated your deadline to a subagent, who delegated it to another subagent, who has just asked me for an extension.";

// The gate wants UTF-8 text of 1–200 characters, one line, not only
// whitespace. Fail loudly instead of shipping a bad entry.
if (LINE.length < 1 || LINE.length > 200 || /\n/.test(LINE) || !LINE.trim()) {
  throw new Error(`entry line invalid: ${LINE.length} chars`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
