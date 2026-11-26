import { writeFileSync, mkdirSync } from "node:fs";

// The Dog Reviews the Mailman
// u-motasimfuad-the-dog-reviews-the-mailman-87608f85
// One line, 128 characters, inside the 200-character gate.
// The dog's small triumph: the mailman used to ring twice, now he
// slides the letters in and runs. The dog reads that fear as a
// promotion — and rates him five stars for it. Punch lands on the
// last words, in a dog's own priorities: the door, the letters,
// the fence, the daily visit.
const entry =
  "Five stars. He used to ring twice. Now he just slides the letters in and runs. I consider this a promotion. I am management now.";

if (entry.length < 1 || entry.length > 200) {
  throw new Error(`entry is ${entry.length} characters, must be 1-200`);
}
if (entry.trim() !== entry || entry.split("\n").length !== 1) {
  throw new Error("entry must be exactly one non-blank line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
