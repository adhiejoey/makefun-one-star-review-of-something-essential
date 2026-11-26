import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const review =
  "One star. Sleep takes a third of my life, demands eight hours, darkness and silence, and still returns me tired. I will be back tonight.";

// The gate allows at most 160 characters; stay safely inside it.
if (review.length > 155 || review.includes("\n") || review.includes("!")) {
  throw new Error("review does not meet the entry limits");
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), review, "utf8");
