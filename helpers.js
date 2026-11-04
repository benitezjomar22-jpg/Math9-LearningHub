// Small helpers shared by the lesson files and the site scripts.

const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => Array.from(el.querySelectorAll(s));

// Segment name with a bar over it, e.g. o("AB").
const o = t => `<span class="o">${t}</span>`;

// Numbers with a true minus sign: −3 instead of -3.
const showNum = v => typeof v === "number" ? (v < 0 ? "−" + Math.abs(v) : String(v)) : v;

// Table of values. rows: [["x", [-2, -1, 0, 1, 2]], ["y", [8, 2, 0, 2, 8]]]
const tov = (rows, caption) => `<div class="tbl-wrap"><table class="tov">${caption ? `<caption>${caption}</caption>` : ""}<tbody>${rows.map(([head, vals]) =>
  `<tr><th scope="row">${head}</th>${vals.map(v => `<td>${showNum(v)}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`;

// Concept table with column headings. head: ["Line", "What it does"], rows: [["Median", "..."], ...]
const ctable = (head, rows, caption) => `<div class="tbl-wrap"><table class="ctable">${caption ? `<caption>${caption}</caption>` : ""}<thead><tr>${head.map(h => `<th scope="col">${h}</th>`).join("")}</tr></thead><tbody>${rows.map(r =>
  `<tr>${r.map((c, i) => i === 0 ? `<th scope="row">${c}</th>` : `<td>${c}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`;

// Two-column proof. rows: [[statement, reason], ...]
const proof = (rows, cap) => `<div class="tbl-wrap"><table class="proof">${cap ? `<caption>${cap}</caption>` : ""}<thead><tr><th scope="col">Statements</th><th scope="col">Reasons</th></tr></thead><tbody>${rows.map(([st, r], i) =>
  `<tr><td>${i + 1}. ${st}</td><td>${r}</td></tr>`).join("")}</tbody></table></div>`;

// Supplementary video entry for a lesson's `videos` list.
const vid = (title, url, source = "Khan Academy") => ({ title, url, source });
