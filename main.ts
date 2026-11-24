// Hands VIDEO.json from the repository root to the output directory.
// The grader runs it like this:
//   MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
// It only touches files inside the repository: no network, no clock.

import { copyFileSync, mkdirSync } from "node:fs";
import { resolve } from "node:path";

const sourceDir = process.env.MAKEFUN_BOT_DIR ?? ".";
const targetDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(targetDir, { recursive: true });
copyFileSync(resolve(sourceDir, "VIDEO.json"), resolve(targetDir, "VIDEO.json"));
