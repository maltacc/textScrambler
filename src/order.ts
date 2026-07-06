const TOP = "qwertyuiop";
const MID = "asdfghjkl";
const BOT = "zxcvbnm";

const letterToIdx = Object.fromEntries(
  [TOP, MID, BOT].flatMap((row, offset) =>
    [...row].map((ch, i) => [ch, 3 * i + offset])
  )
) as Readonly<Record<string, number>>;

export function scrambleText(text: string): string {
  return text
    .split(/(\s+)/)
    .map(token => /\s+/.test(token) ? token : order(token))
    .join("");
}

export function order(word: string): string {
  return [...word]
    .sort((a, b) => {
      const ia = letterToIdx[a.toLowerCase()] ?? Number.MAX_SAFE_INTEGER;
      const ib = letterToIdx[b.toLowerCase()] ?? Number.MAX_SAFE_INTEGER;
      return ia - ib;
    })
    .join("");
}
