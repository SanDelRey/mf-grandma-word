import { mkdirSync, writeFileSync } from 'node:fs';

// the word she would send: fond, a little baffled, and funny in one word
const WORD = 'Smartypants';
const out = (process.env.MAKEFUN_OUTPUT_DIR ?? '/output').replace(/\/$/, '');
mkdirSync(out, { recursive: true });
writeFileSync(`${out}/entry.txt`, WORD);
// one word only, no punctuation, no second file.
