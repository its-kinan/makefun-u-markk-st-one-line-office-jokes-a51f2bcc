// One-Line Office Jokes — make.fun program/v1 entry.
// Writes a single original one-line office joke to /output/entry.txt.
// Deterministic: fixed string, no network, no clock, no randomness.

import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "I replied-all asking everyone to stop replying-all, and now the " +
  "thread is 47 messages long, my name is on all of them, and HR booked " +
  "a meeting about it.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
