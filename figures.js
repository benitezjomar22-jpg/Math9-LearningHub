// ---------- drawing helpers (SVG strings) ----------
const P = (x, y) => ({ x, y });
const f1 = n => Math.round(n * 10) / 10;
const sub = (a, b) => P(a.x - b.x, a.y - b.y);
const unit = v => { const l = Math.hypot(v.x, v.y) || 1; return P(v.x / l, v.y / l); };
const at = (a, b, t) => P(a.x + (b.x - a.x) * t, a.y + (b.y - a.y) * t);
const pts = arr => arr.map(p => `${f1(p.x)},${f1(p.y)}`).join(" ");
const seg = (a, b, cls = "ln") => `<line class="${cls}" x1="${f1(a.x)}" y1="${f1(a.y)}" x2="${f1(b.x)}" y2="${f1(b.y)}"/>`;
const dot = (p, r = 4, cls = "pt") => `<circle class="${cls}" cx="${f1(p.x)}" cy="${f1(p.y)}" r="${r}"/>`;
const lbl = (p, t, dx = 0, dy = 0, cls = "lbl") => `<text x="${f1(p.x + dx)}" y="${f1(p.y + dy)}" class="${cls}" text-anchor="middle">${t}</text>`;
const txt = (x, y, t, cls = "cap", anchor = "middle") => `<text x="${f1(x)}" y="${f1(y)}" class="${cls}" text-anchor="${anchor}">${t}</text>`;
// arc marking the angle at V between rays VA and VB (the smaller angle)
function arcM(V, A, B, r = 22, cls = "am") {
  const a1 = Math.atan2(A.y - V.y, A.x - V.x);
  let d = Math.atan2(B.y - V.y, B.x - V.x) - a1;
  while (d > Math.PI) d -= 2 * Math.PI;
  while (d <= -Math.PI) d += 2 * Math.PI;
  const s = P(V.x + r * Math.cos(a1), V.y + r * Math.sin(a1)), e = P(V.x + r * Math.cos(a1 + d), V.y + r * Math.sin(a1 + d));
  return `<path class="${cls}" d="M${f1(s.x)} ${f1(s.y)} A${r} ${r} 0 0 ${d > 0 ? 1 : 0} ${f1(e.x)} ${f1(e.y)}"/>`;
}
// n tick marks across the middle of segment AB
function ticks(A, B, n = 1) {
  const m = at(A, B, 0.5), u = unit(sub(B, A)), nv = P(-u.y, u.x);
  let out = "";
  for (let i = 0; i < n; i++) {
    const off = (i - (n - 1) / 2) * 6, c = P(m.x + u.x * off, m.y + u.y * off);
    out += seg(P(c.x - nv.x * 7, c.y - nv.y * 7), P(c.x + nv.x * 7, c.y + nv.y * 7), "tk");
  }
  return out;
}
// right-angle box at V, along the rays toward A and B
function rightM(V, A, B, s = 12) {
  const u = unit(sub(A, V)), w = unit(sub(B, V));
  const p1 = P(V.x + u.x * s, V.y + u.y * s), p3 = P(V.x + w.x * s, V.y + w.y * s), p2 = P(p1.x + w.x * s, p1.y + w.y * s);
  return `<path class="right" d="M${f1(p1.x)} ${f1(p1.y)} L${f1(p2.x)} ${f1(p2.y)} L${f1(p3.x)} ${f1(p3.y)}"/>`;
}
// arrowhead at `to`, pointing away from `from`
function arrow(from, to) {
  const u = unit(sub(to, from)), nv = P(-u.y, u.x), b = P(to.x - u.x * 11, to.y - u.y * 11);
  return `<path class="ink" d="M${f1(to.x)} ${f1(to.y)} L${f1(b.x + nv.x * 5)} ${f1(b.y + nv.y * 5)} L${f1(b.x - nv.x * 5)} ${f1(b.y - nv.y * 5)} Z"/>`;
}
// circle arc around c from angle a0 to a1 (radians, clockwise on screen)
function arcAt(c, r, a0, a1, cls = "ln") {
  const s = P(c.x + r * Math.cos(a0), c.y + r * Math.sin(a0)), e = P(c.x + r * Math.cos(a1), c.y + r * Math.sin(a1));
  return `<path class="${cls}" d="M${f1(s.x)} ${f1(s.y)} A${f1(r)} ${f1(r)} 0 0 1 ${f1(e.x)} ${f1(e.y)}"/>`;
}

// coordinate plane with curves; returns the SVG body
function plot(c) {
  const m = 8, sx = (c.W - 2 * m) / (c.x1 - c.x0), sy = (c.H - 2 * m) / (c.y1 - c.y0);
  const X = x => m + (x - c.x0) * sx, Y = y => m + (c.y1 - y) * sy;
  let s = `<defs><clipPath id="${c.id}"><rect x="${m}" y="${m}" width="${c.W - 2 * m}" height="${c.H - 2 * m}"/></clipPath></defs><g>`;
  for (let x = Math.ceil(c.x0); x <= c.x1; x++) s += `<line class="gl" x1="${f1(X(x))}" y1="${m}" x2="${f1(X(x))}" y2="${c.H - m}"/>`;
  for (let y = Math.ceil(c.y0); y <= c.y1; y++) s += `<line class="gl" x1="${m}" y1="${f1(Y(y))}" x2="${c.W - m}" y2="${f1(Y(y))}"/>`;
  s += `</g><line class="ax" x1="${m}" y1="${f1(Y(0))}" x2="${c.W - m}" y2="${f1(Y(0))}"/><line class="ax" x1="${f1(X(0))}" y1="${m}" x2="${f1(X(0))}" y2="${c.H - m}"/>`;
  for (let x = Math.ceil(c.x0); x <= c.x1; x++) if (x && x % (c.nx || 2) === 0) s += txt(X(x), Y(0) + 14, String(x).replace("-", "−"), "num");
  for (let y = Math.ceil(c.y0); y <= c.y1; y++) if (y && y % (c.ny || 2) === 0) s += txt(X(0) - 5, Y(y) + 4, String(y).replace("-", "−"), "num", "end");
  s += `<g clip-path="url(#${c.id})">`;
  (c.vlines || []).forEach(v => { s += `<line class="axis-sym" x1="${f1(X(v))}" y1="${m}" x2="${f1(X(v))}" y2="${c.H - m}"/>`; });
  (c.curves || []).forEach(cv => {
    let d = "";
    for (let i = 0; i <= 240; i++) { const x = c.x0 + (c.x1 - c.x0) * i / 240; d += `${i ? "L" : "M"}${f1(X(x))} ${f1(Math.max(-2000, Math.min(2000, Y(cv.f(x)))))}`; }
    s += `<path class="${cv.cls}" d="${d}"/>`;
  });
  (c.dots || []).forEach(p => { s += dot(P(X(p.x), Y(p.y)), p.r || 5, p.cls || "pt hot"); if (p.t) s += txt(X(p.x) + (p.dx || 0), Y(p.y) + (p.dy || -10), p.t, p.tcls || "cap strong", p.anchor || "middle"); });
  return s + `</g>`;
}

// number and equation formatting for the parabola explorers
const fmt = n => (n < 0 ? "−" : "") + Math.abs(n);
const coef = a => a === 1 ? "" : a === -1 ? "−" : fmt(a);
const inner = h => h === 0 ? "x" : `(x ${h > 0 ? "−" : "+"} ${Math.abs(h)})`;
const eqStr = (a, h, k) => `y = ${coef(a)}${inner(h)}²${k ? ` ${k > 0 ? "+" : "−"} ${Math.abs(k)}` : ""}`;
const units = n => `${Math.abs(n)} unit${Math.abs(n) === 1 ? "" : "s"}`;

const PB = {
  a:   { title: "Change a and watch the graph of y = ax²", a: 2, h: 0, k: 0 },
  ak:  { title: "Change a and b in y = ax² + b", a: 1, h: 0, k: 3 },
  ah:  { title: "Change a and b in y = a(x − b)²", a: 1, h: 2, k: 0 },
  ahk: { title: "Change a, h, and k in y = a(x − h)² + k", a: 2, h: 3, k: 1 }
};
function pbHTML(id, mode) {
  const c = PB[mode], hasH = mode.includes("h"), hasK = mode.includes("k");
  const hn = mode === "ah" ? "b" : "h", kn = mode === "ak" ? "b" : "k";
  const sl = (key, name, min, max, step, val, help) => `<label for="${id}-${key}">${name}${help ? ` <span class="muted">(${help})</span>` : ""}: <output data-o${key}></output></label><input type="range" id="${id}-${key}" min="${min}" max="${max}" step="${step}" value="${val}" data-${key}>`;
  return `<div class="explore" data-explore="pb" data-mode="${mode}" id="${id}">
    <div class="explore-head"><span class="eyebrow">Try it</span><b>${c.title}</b></div>
    <svg viewBox="0 0 320 320" class="fig" role="img" aria-label="Graph of a parabola that updates as the sliders change"><g data-g></g></svg>
    <div class="sliders ${hasH && hasK ? "s3" : ""}">
      ${sl("a", "a", -3, 3, 0.5, c.a, "shape and opening")}
      ${hasH ? sl("h", hn, -4, 4, 1, c.h, "left or right") : ""}
      ${hasK ? sl("k", kn, -4, 4, 1, c.k, "up or down") : ""}
    </div>
    <p class="result" data-res aria-live="polite"></p>
  </div>`;
}

// ---------- figures ----------
const FIG = {
  "terms": () => {
    const y1 = 78, y2 = 222;
    return `<svg viewBox="0 0 600 290" class="fig wide" role="img" aria-label="Undefined terms: point A, line BC, plane M. Defined terms: segment DE, ray FG, angle HIJ">
      ${txt(8, 20, "UNDEFINED TERMS", "cap strong", "start")}${txt(8, 166, "DEFINED TERMS", "cap strong", "start")}
      ${dot(P(100, y1), 5)}${lbl(P(100, y1), "A", 0, -14)}${txt(100, 140, "Point A")}
      ${seg(P(224, y1), P(376, y1))}${arrow(P(300, y1), P(380, y1))}${arrow(P(300, y1), P(220, y1))}${dot(P(262, y1))}${dot(P(338, y1))}${lbl(P(262, y1), "B", 0, -14)}${lbl(P(338, y1), "C", 0, -14)}${txt(300, 140, "Line BC")}
      <polygon class="plane" points="425,110 575,110 548,48 398,48"/>${lbl(P(540, 100), "M")}${txt(487, 140, "Plane M")}
      ${seg(P(35, y2), P(165, y2))}${dot(P(35, y2))}${dot(P(165, y2))}${lbl(P(35, y2), "D", 0, -14)}${lbl(P(165, y2), "E", 0, -14)}${txt(100, 278, "Segment DE")}
      ${seg(P(235, y2), P(376, y2))}${arrow(P(300, y2), P(380, y2))}${dot(P(235, y2))}${dot(P(310, y2))}${lbl(P(235, y2), "F", 0, -14)}${lbl(P(310, y2), "G", 0, -14)}${txt(305, 278, "Ray FG")}
      ${seg(P(430, 248), P(575, 248))}${seg(P(430, 248), P(525, 178))}${arcM(P(430, 248), P(575, 248), P(525, 178), 26)}${dot(P(430, 248))}${dot(P(560, 248))}${dot(P(510, 189))}${lbl(P(430, 248), "I", -12, 6)}${lbl(P(560, 248), "J", 0, -10)}${lbl(P(510, 189), "H", -8, -10)}${txt(500, 278, "∠HIJ")}
    </svg>`;
  },
  "vertical": () => {
    const O = P(170, 105), a = P(40, 40), b = P(300, 170), c = P(40, 170), d = P(300, 40);
    return `<svg viewBox="0 0 340 215" class="fig" style="max-width:440px" role="img" aria-label="Two lines intersect at O, forming vertical angles 1 and 2">
      ${seg(a, b)}${seg(c, d)}${arrow(O, a)}${arrow(O, b)}${arrow(O, c)}${arrow(O, d)}
      ${arcM(O, a, c, 30, "am hot")}${arcM(O, d, b, 30, "am hot")}${dot(O)}${lbl(O, "O", 0, -14, "lbl sm")}
      ${lbl(O, "1", -50, 7)}${lbl(O, "2", 50, 7)}
      ${txt(170, 208, "Vertical angles: m∠1 = m∠2")}
    </svg>`;
  },
  "congruence": () => {
    const cell = (ox, name, cap, hot) => {
      const A = P(ox + 18, 150), B = P(ox + 142, 150), C = P(ox + 58, 46);
      let s = `<polygon class="tri" points="${pts([A, B, C])}"/>`;
      if (hot.includes("AB")) s += seg(A, B, "acc");
      if (hot.includes("BC")) s += seg(B, C, "acc");
      if (hot.includes("CA")) s += seg(C, A, "acc");
      if (hot.includes("A")) s += arcM(A, B, C, 24, "am hot");
      if (hot.includes("B")) s += arcM(B, A, C, 24, "am hot");
      return s + lbl(P(ox + 80, 180), name) + txt(ox + 80, 200, cap);
    };
    return `<svg viewBox="0 0 640 210" class="fig wide" role="img" aria-label="The parts needed for SSS, SAS, ASA, and AAS, shown in red">
      ${cell(0, "SSS", "three sides", ["AB", "BC", "CA"])}${cell(160, "SAS", "included angle", ["AB", "CA", "A"])}${cell(320, "ASA", "included side", ["A", "B", "AB"])}${cell(480, "AAS", "non-included side", ["A", "B", "BC"])}
    </svg>`;
  },
  "cpctc": () => {
    const tri = (ox, n) => {
      const A = P(ox + 30, 170), B = P(ox + 250, 170), C = P(ox + 100, 45);
      return `<polygon class="tri" points="${pts([A, B, C])}"/>${ticks(A, B, 1)}${ticks(B, C, 2)}${ticks(C, A, 3)}
        ${arcM(A, B, C, 26)}${arcM(B, A, C, 24)}${arcM(B, A, C, 30)}${arcM(C, A, B, 20)}${arcM(C, A, B, 26)}${arcM(C, A, B, 32)}
        ${lbl(A, n[0], -14, 16)}${lbl(B, n[1], 14, 16)}${lbl(C, n[2], 0, -12)}`;
    };
    return `<svg viewBox="0 0 600 222" class="fig wide" role="img" aria-label="Congruent triangles ABC and DEF with matching marks on corresponding sides and angles">
      ${tri(10, "ABC")}${tri(310, "DEF")}${txt(300, 214, "Same marks = corresponding parts: AB ↔ DE, ∠C ↔ ∠F")}
    </svg>`;
  },
  "hl": () => {
    const t = (ox, n, q) => {
      const Pp = P(ox + 40, 100), Q = P(ox + 40, 175), R = P(ox + 208, 175);
      return `<polygon class="tri" points="${pts([Pp, Q, R])}"/>${seg(Pp, R, "acc")}${rightM(Q, Pp, R)}${ticks(Pp, R, 1)}${ticks(Pp, Q, 2)}
        ${lbl(Pp, n[0], -14, 2)}${lbl(Q, n[1], -14, 16)}${lbl(R, n[2], 12, 16)}
        ${txt(ox + 178, 140, "13 cm", "cap strong")}${txt(ox + 30, 142, "5 cm", "cap", "end")}${txt(ox + 124, 196, q)}`;
    };
    return `<svg viewBox="0 70 560 162" class="fig" role="img" aria-label="Right triangles PQR and XYZ with congruent hypotenuses of 13 cm and congruent legs of 5 cm">
      ${t(10, "PQR", "12 cm")}${t(300, "XYZ", "?")}${txt(280, 224, "HL: △PQR ≅ △XYZ, so YZ = QR = 12 cm", "cap strong")}
    </svg>`;
  },
  "iso-explorer": id => `
    <div class="explore" data-explore="iso" id="${id}">
      <div class="explore-head"><span class="eyebrow">Try it</span><b>Change a base angle and watch the vertex angle</b></div>
      <svg viewBox="0 0 340 245" class="fig" role="img" aria-label="Isosceles triangle ABC with AB = AC whose angles update as the base angle changes"><g data-g></g></svg>
      <div class="sliders"><label for="${id}-b">Base angle, m∠B: <output data-o></output>°</label>
        <input type="range" id="${id}-b" min="20" max="80" value="50" data-b></div>
      <p class="result" data-res aria-live="polite"></p>
    </div>`,
  "perp-mid": () => {
    const A = P(30, 170), B = P(250, 170), M = P(140, 170), Pp = P(140, 52);
    const T1 = P(330, 185), T2 = P(610, 185), T3 = P(420, 45), D = at(T3, T1, 0.5), E = at(T3, T2, 0.5);
    return `<svg viewBox="0 0 640 240" class="fig wide" role="img" aria-label="Point P on the perpendicular bisector of AB is the same distance from A and B. Midline DE of a triangle is half of the 20 m side.">
      ${seg(P(140, 28), P(140, 200), "ln dash")}${seg(A, B)}${seg(Pp, A, "acc")}${seg(Pp, B, "acc")}${ticks(Pp, A, 1)}${ticks(Pp, B, 1)}${ticks(A, M, 2)}${ticks(M, B, 2)}${rightM(M, B, Pp)}
      ${dot(A)}${dot(B)}${dot(M)}${dot(Pp)}${lbl(A, "A", -14, 6)}${lbl(B, "B", 14, 6)}${lbl(M, "M", 14, 24)}${lbl(Pp, "P", 16, -4)}
      ${txt(140, 228, "PA = PB")}
      <polygon class="tri" points="${pts([T1, T2, T3])}"/>${seg(D, E, "mid")}${ticks(T3, D, 1)}${ticks(D, T1, 1)}${ticks(T3, E, 2)}${ticks(E, T2, 2)}
      ${dot(D)}${dot(E)}${lbl(D, "D", -16, 2)}${lbl(E, "E", 16, 2)}
      ${txt(470, 206, "20 m")}${txt((D.x + E.x) / 2, D.y - 9, "10 m", "cap strong")}${txt(470, 228, "midline DE = ½ × 20 m")}
    </svg>`;
  },
  "secondary": () => {
    const cell = (ox, kind, name, center) => {
      const A = P(ox + 20, 160), B = P(ox + 160, 160), C = P(ox + 66, 40);
      let s = `<polygon class="tri" points="${pts([A, B, C])}"/>`;
      if (kind === "median") { const Mm = at(A, B, 0.5); s += seg(C, Mm, "acc") + ticks(A, Mm, 1) + ticks(Mm, B, 1) + dot(Mm, 3.5); }
      if (kind === "alt") { const F = P(C.x, 160); s += seg(C, F, "acc") + rightM(F, B, C, 10); }
      if (kind === "bis") {
        const u = unit(sub(A, C)), w = unit(sub(B, C)), dv = P(u.x + w.x, u.y + w.y), t = (160 - C.y) / dv.y, F = P(C.x + dv.x * t, 160);
        s += seg(C, F, "acc") + arcM(C, A, F, 24) + arcM(C, F, B, 24);
      }
      if (kind === "pb") { const Mm = at(A, B, 0.5); s += seg(P(Mm.x, 174), P(Mm.x, 36), "acc") + rightM(Mm, B, P(Mm.x, 36), 10) + ticks(A, Mm, 1) + ticks(Mm, B, 1); }
      return s + txt(ox + 90, 188, name, "lbl xs") + txt(ox + 90, 206, `→ ${center}`);
    };
    return `<svg viewBox="0 0 720 215" class="fig wide" role="img" aria-label="Median, altitude, angle bisector, and perpendicular bisector of a triangle, and the centers where each kind meets">
      ${cell(0, "median", "Median", "centroid")}${cell(180, "alt", "Altitude", "orthocenter")}${cell(360, "bis", "Angle bisector", "incenter")}${cell(540, "pb", "Perpendicular bisector", "circumcenter")}
    </svg>`;
  },
  "bisect-construct": () => {
    const Pv = P(40, 120), r = 140, A = P(40 + r * Math.cos(-Math.PI / 6), 120 + r * Math.sin(-Math.PI / 6)), B = P(A.x, 240 - A.y), M = P(282, 120);
    const rAM = Math.hypot(M.x - A.x, M.y - A.y), angA = Math.atan2(M.y - A.y, M.x - A.x), angB = Math.atan2(M.y - B.y, M.x - B.x);
    return `<svg viewBox="0 0 360 245" class="fig" style="max-width:460px" role="img" aria-label="Bisecting angle P with a compass: PA = PB and AM = BM, so triangles PAM and PBM are congruent by SSS">
      ${seg(Pv, P(40 + 200 * Math.cos(-Math.PI / 6), 120 - 100))}${seg(Pv, P(40 + 200 * Math.cos(Math.PI / 6), 120 + 100))}
      ${arcAt(Pv, r, -0.7, 0.7, "ln dash")}${arcAt(A, rAM, angA - 0.18, angA + 0.18, "ln dash")}${arcAt(B, rAM, angB - 0.18, angB + 0.18, "ln dash")}
      ${seg(Pv, P(330, 120), "acc")}${arrow(Pv, P(336, 120))}
      ${seg(A, M, "ln")}${seg(B, M, "ln")}${ticks(Pv, A, 1)}${ticks(Pv, B, 1)}${ticks(A, M, 2)}${ticks(B, M, 2)}
      ${arcM(Pv, A, M, 34, "am hot")}${arcM(Pv, M, B, 34, "am hot")}
      ${dot(Pv)}${dot(A)}${dot(B)}${dot(M)}${lbl(Pv, "P", -14, 6)}${lbl(A, "A", -18, -6)}${lbl(B, "B", -18, 20)}${lbl(M, "M", 6, -12)}
      ${txt(180, 238, "△PAM ≅ △PBM by SSS, so ∠APM ≅ ∠BPM")}
    </svg>`;
  },
  "truss": () => trussFig(false),
  "iso-median": () => trussFig(true),
  "fence-explorer": id => `
    <div class="explore" data-explore="fence" id="${id}">
      <div class="explore-head"><span class="eyebrow">Try it</span><b>Fence It, Plant It! Use all 20 m of bamboo fence</b></div>
      <svg viewBox="0 0 560 250" class="fig wide" role="img" aria-label="Rectangle with a 20 m perimeter beside a graph of its area against its length"><g data-g></g></svg>
      <div class="sliders"><label for="${id}-x">Length, x: <output data-o></output> m</label>
        <input type="range" id="${id}-x" min="1" max="9" value="3" data-x></div>
      <p class="result" data-res aria-live="polite"></p>
    </div>`,
  "pb-a": id => pbHTML(id, "a"),
  "pb-ak": id => pbHTML(id, "ak"),
  "pb-ah": id => pbHTML(id, "ah"),
  "pb-ahk": id => pbHTML(id, "ahk"),
  "zeros-plot": () => `
    <svg viewBox="0 0 330 300" class="fig" style="max-width:460px" role="img" aria-label="Graph of y = (x − 3)² − 4 with minimum point (3, −4) and zeros at x = 1 and x = 5">
      ${plot({ id: "zp-clip", W: 330, H: 300, x0: -2, x1: 8, y0: -5, y1: 6, nx: 2, ny: 2, vlines: [3],
        curves: [{ f: x => (x - 3) ** 2 - 4, cls: "curve" }],
        dots: [{ x: 3, y: -4, t: "minimum (3, −4)", dy: 22 }, { x: 1, y: 0, t: "(1, 0)", dx: -30, dy: 30 }, { x: 5, y: 0, t: "(5, 0)", dx: 30, dy: 30 }] })}
      ${txt(318, 222, "y = (x − 3)² − 4", "cap strong", "end")}${txt(318, 240, "axis: x = 3", "cap", "end")}
    </svg>`,
  "complete-square": () => `
    <svg viewBox="0 0 330 272" class="fig" style="max-width:440px" role="img" aria-label="Algebra tiles: x squared and two 3x strips need a 3 by 3 corner of 9 to make a square with side x + 3">
      <rect class="tile" x="40" y="30" width="140" height="140"/><rect class="tile" x="180" y="30" width="60" height="140"/>
      <rect class="tile" x="40" y="170" width="140" height="60"/><rect class="tile miss" x="180" y="170" width="60" height="60"/>
      ${txt(110, 108, "x²", "lbl")}${txt(210, 108, "3x", "lbl")}${txt(110, 207, "3x", "lbl")}${txt(210, 207, "+9", "lbl")}
      ${txt(110, 22, "x")}${txt(210, 22, "3")}${txt(30, 104, "x", "cap", "end")}${txt(30, 205, "3", "cap", "end")}
      ${txt(165, 260, "x² + 6x + 9 = (x + 3)²", "cap strong")}
    </svg>`,
  "trap-kite": () => `
    <svg viewBox="0 0 640 230" class="fig" role="img" aria-label="Trapezoid PALM with parallel bases PA and ML, and kite KITE with two pairs of equal adjacent sides">
      <g class="shape"><polygon points="90,50 240,50 290,180 30,180"/></g>
      <g class="mark"><path d="M160 44 l8 6 -8 6"/><path d="M155 174 l8 6 -8 6"/></g>
      <text x="80" y="38" class="lbl">P</text><text x="244" y="38" class="lbl">A</text>
      <text x="296" y="198" class="lbl">L</text><text x="14" y="198" class="lbl">M</text>
      <text x="160" y="222" class="cap" text-anchor="middle">Trapezoid PALM: PA ∥ ML</text>
      <g class="shape"><polygon points="480,30 555,95 480,190 405,95"/></g>
      <g class="mark"><path d="M437 57 l10 8"/><path d="M512 65 l10 -8"/>
        <path d="M437 140 l10 -6"/><path d="M441 147 l10 -6"/><path d="M513 134 l10 6"/><path d="M509 141 l10 6"/></g>
      <text x="472" y="22" class="lbl">K</text><text x="562" y="100" class="lbl">I</text>
      <text x="472" y="210" class="lbl">T</text><text x="386" y="100" class="lbl">E</text>
      <text x="480" y="226" class="cap" text-anchor="middle">Kite KITE: KE = KI, TE = TI</text>
    </svg>`,
  "kite-abcd": () => `
    <svg viewBox="0 0 340 280" class="fig" role="img" aria-label="Kite ABCD with perpendicular diagonals meeting at E; AC bisects BD">
      <g class="shape"><polygon points="170,30 260,100 170,250 80,100"/></g>
      <g class="diag"><line x1="170" y1="30" x2="170" y2="250"/><line x1="80" y1="100" x2="260" y2="100"/></g>
      <path class="right" d="M170 100 h12 v12 h-12"/>
      <g class="mark"><path d="M120 60 l10 10"/><path d="M210 70 l10 -10"/>
        <path d="M117 172 l10 -6"/><path d="M121 179 l10 -6"/><path d="M213 166 l10 6"/><path d="M209 173 l10 6"/></g>
      <g class="accent"><path d="M120 94 v12"/><path d="M215 94 v12"/></g>
      <text x="162" y="22" class="lbl">A</text><text x="268" y="106" class="lbl">B</text>
      <text x="162" y="272" class="lbl">C</text><text x="58" y="106" class="lbl">D</text>
      <text x="178" y="124" class="lbl sm">E</text>
      <text x="170" y="92" class="cap" text-anchor="middle" dx="-45">BE = ED</text>
    </svg>`,
  "bridge": () => `
    <svg viewBox="0 0 360 230" class="fig" role="img" aria-label="Bridge support: isosceles trapezoid with bases 16 m and 28 m and a 22 m midsegment">
      <g class="shape"><polygon points="116,48 244,48 292,180 68,180"/></g>
      <line class="mid" x1="92" y1="114" x2="268" y2="114"/>
      <text x="180" y="38" class="cap" text-anchor="middle">16 m</text>
      <text x="180" y="204" class="cap" text-anchor="middle">28 m</text>
      <text x="180" y="108" class="cap strong" text-anchor="middle">midsegment = 22 m</text>
      <text x="86" y="172" class="cap">70°</text><text x="250" y="172" class="cap">70°</text>
      <text x="118" y="66" class="cap">110°</text><text x="208" y="66" class="cap">110°</text>
    </svg>`,
  "midsegment-explorer": (id) => `
    <div class="explore" data-explore="mid" id="${id}">
      <div class="explore-head"><span class="eyebrow">Try it</span><b>Change the bases and watch the midsegment</b></div>
      <svg viewBox="0 0 360 200" class="fig" role="img" aria-label="Trapezoid whose midsegment updates as the bases change">
        <g class="shape"><polygon data-poly points=""/></g>
        <line class="mid" data-mid x1="0" y1="105" x2="0" y2="105"/>
        <text x="180" y="30" class="cap" text-anchor="middle" data-t1></text>
        <text x="180" y="192" class="cap" text-anchor="middle" data-t2></text>
      </svg>
      <div class="sliders">
        <label for="${id}-b1">Top base, b<sub>1</sub>: <output data-o1></output> cm</label>
        <input type="range" id="${id}-b1" min="4" max="30" value="12" data-b1>
        <label for="${id}-b2">Bottom base, b<sub>2</sub>: <output data-o2></output> cm</label>
        <input type="range" id="${id}-b2" min="10" max="40" value="20" data-b2>
      </div>
      <p class="result" data-res></p>
    </div>`,
  "kite-explorer": (id) => `
    <div class="explore" data-explore="kite" id="${id}">
      <div class="explore-head"><span class="eyebrow">Try it</span><b>Change the diagonals and watch the area</b></div>
      <svg viewBox="0 0 300 220" class="fig" role="img" aria-label="Kite inside a rectangle; the kite fills half the rectangle">
        <rect class="box" data-box x="0" y="0" width="0" height="0"/>
        <g class="shape"><polygon data-poly points=""/></g>
        <g class="diag"><line data-d1 x1="0" y1="0" x2="0" y2="0"/><line data-d2 x1="0" y1="0" x2="0" y2="0"/></g>
      </svg>
      <div class="sliders">
        <label for="${id}-d1">Diagonal d<sub>1</sub>: <output data-o1></output> cm</label>
        <input type="range" id="${id}-d1" min="6" max="30" value="18" data-d1in>
        <label for="${id}-d2">Diagonal d<sub>2</sub>: <output data-o2></output> cm</label>
        <input type="range" id="${id}-d2" min="6" max="40" value="30" data-d2in>
      </div>
      <p class="result" data-res></p>
    </div>`
};

function drawExplore(el) {
  if (el.dataset.explore === "mid") {
    const b1 = +$("[data-b1]", el).value, b2 = +$("[data-b2]", el).value, s = 8, c = 180, M = (b1 + b2) / 2;
    $("[data-poly]", el).setAttribute("points", `${c - b1 * s / 2},40 ${c + b1 * s / 2},40 ${c + b2 * s / 2},170 ${c - b2 * s / 2},170`);
    const m = $("[data-mid]", el);
    m.setAttribute("x1", c - M * s / 2); m.setAttribute("x2", c + M * s / 2);
    $("[data-t1]", el).textContent = `b₁ = ${b1} cm`; $("[data-t2]", el).textContent = `b₂ = ${b2} cm`;
    $("[data-o1]", el).textContent = b1; $("[data-o2]", el).textContent = b2;
    $("[data-res]", el).innerHTML = `M = (${b1} + ${b2}) ÷ 2 = <b>${M} cm</b>`;
  } else if (el.dataset.explore === "kite") {
    const d1 = +$("[data-d1in]", el).value, d2 = +$("[data-d2in]", el).value, s = 6, c = 150, y0 = 15;
    const yE = y0 + d1 * s * 0.3, yC = y0 + d1 * s, xl = c - d2 * s / 2, xr = c + d2 * s / 2;
    $("[data-poly]", el).setAttribute("points", `${c},${y0} ${xr},${yE} ${c},${yC} ${xl},${yE}`);
    const box = $("[data-box]", el);
    box.setAttribute("x", xl); box.setAttribute("y", y0); box.setAttribute("width", xr - xl); box.setAttribute("height", yC - y0);
    const l1 = $("[data-d1]", el), l2 = $("[data-d2]", el);
    [["x1", c], ["y1", y0], ["x2", c], ["y2", yC]].forEach(([k, v]) => l1.setAttribute(k, v));
    [["x1", xl], ["y1", yE], ["x2", xr], ["y2", yE]].forEach(([k, v]) => l2.setAttribute(k, v));
    $("[data-o1]", el).textContent = d1; $("[data-o2]", el).textContent = d2;
    $("[data-res]", el).innerHTML = `Rectangle: ${d1} × ${d2} = ${d1 * d2} cm². Kite: ½ × ${d1} × ${d2} = <b>${d1 * d2 / 2} cm²</b>`;
  } else if (el.dataset.explore === "iso") {
    const b = +$("[data-b]", el).value, L = 170, yb = 212, rad = b * Math.PI / 180, v = 180 - 2 * b;
    const A = P(170, yb - L * Math.sin(rad)), B = P(170 - L * Math.cos(rad), yb), C = P(170 + L * Math.cos(rad), yb);
    $("[data-g]", el).innerHTML = `<polygon class="tri" points="${pts([A, B, C])}"/>${ticks(A, B, 1)}${ticks(A, C, 1)}
      ${arcM(B, C, A, 28, "am hot")}${arcM(C, B, A, 28, "am hot")}${arcM(A, B, C, 20)}
      ${lbl(A, "A", 0, -10)}${lbl(B, "B", 0, 26)}${lbl(C, "C", 0, 26)}`;
    $("[data-o]", el).textContent = b;
    $("[data-res]", el).innerHTML = `AB = AC, so m∠C = m∠B = ${b}°.<br>Vertex angle: m∠A = 180° − 2(${b}°) = <b>${v}°</b>`;
  } else if (el.dataset.explore === "fence") {
    const x = +$("[data-x]", el).value, w = 10 - x, s = 20, A = x * w;
    const gx = L => 300 + L * 24, gy = a => 210 - a * 7.2;
    let g = `<rect class="tile" x="20" y="${f1(30 + (9 - w) * s / 2)}" width="${x * s}" height="${w * s}"/>
      ${txt(20 + x * s / 2, 30 + (9 - w) * s / 2 + w * s + 18, `${x} m`)}${txt(20 + x * s + 8, 30 + (9 - w) * s / 2 + w * s / 2 + 5, `${w} m`, "cap", "start")}
      ${txt(20 + x * s / 2, 30 + (9 - w) * s / 2 + w * s / 2 + 6, `${A} m²`, "lbl sm")}`;
    g += `<line class="ax" x1="${gx(0)}" y1="${gy(0)}" x2="${gx(10)}" y2="${gy(0)}"/><line class="ax" x1="${gx(0)}" y1="${gy(0)}" x2="${gx(0)}" y2="${gy(26)}"/>`;
    for (let a = 5; a <= 25; a += 5) g += `<line class="gl" x1="${gx(0)}" y1="${gy(a)}" x2="${gx(10)}" y2="${gy(a)}"/>${txt(gx(0) - 5, gy(a) + 4, a, "num", "end")}`;
    for (let L = 1; L <= 9; L++) g += txt(gx(L), gy(0) + 14, L, "num");
    let d = ""; for (let i = 0; i <= 100; i++) { const L = i / 10; d += `${i ? "L" : "M"}${f1(gx(L))} ${f1(gy(L * (10 - L)))}`; }
    g += `<path class="parent" d="${d}"/>`;
    for (let L = 1; L <= 9; L++) g += dot(P(gx(L), gy(L * (10 - L))), L === x ? 6 : 3.5, L === x ? "pt hot" : "pt");
    g += txt(gx(5), 246, "length x (m)", "num") + txt(gx(0) + 4, gy(26) + 2, "area (m²)", "num", "start");
    $("[data-g]", el).innerHTML = g;
    $("[data-o]", el).textContent = x;
    $("[data-res]", el).innerHTML = `Width = 10 − ${x} = ${w} m. Area: A = x(10 − x) = ${x} × ${w} = <b>${A} m²</b>${x === 5 ? ". This is the largest plot." : ""}`;
  } else if (el.dataset.explore === "pb") {
    const mode = el.dataset.mode, a = +$("[data-a]", el).value;
    const h = mode.includes("h") ? +$("[data-h]", el).value : 0, k = mode.includes("k") ? +$("[data-k]", el).value : 0;
    $("[data-oa]", el).textContent = fmt(a);
    if ($("[data-oh]", el)) $("[data-oh]", el).textContent = fmt(h);
    if ($("[data-ok]", el)) $("[data-ok]", el).textContent = fmt(k);
    const parentA = mode === "a" ? 1 : a;
    const curves = [{ f: x => parentA * x * x, cls: "parent" }, { f: x => a * (x - h) ** 2 + k, cls: "curve" }];
    $("[data-g]", el).innerHTML = plot({ id: `${el.id}-clip`, W: 320, H: 320, x0: -6, x1: 6, y0: -8, y1: 8, vlines: a ? [h] : [], curves, dots: a ? [{ x: h, y: k }] : [] });
    const res = $("[data-res]", el);
    if (a === 0) { res.innerHTML = `a cannot be 0. Then y = ${fmt(k)} is a straight line, not a parabola.`; return; }
    const dir = a > 0 ? "upward" : "downward";
    const base = eqStr(a, 0, 0);
    let out = `<b>${eqStr(a, h, k)}</b><br>Vertex (${fmt(h)}, ${fmt(k)}) · axis of symmetry x = ${fmt(h)} · opens ${dir}`;
    if (mode === "a") out += `<br>${Math.abs(a) > 1 ? "Narrower than" : Math.abs(a) < 1 ? "Wider than" : a === 1 ? "This is" : "Same width as"} y = x²${a === -1 ? ", flipped" : ""}. The dashed curve is y = x².`;
    if (mode === "ak") out += `<br>${k ? `Moved ${units(k)} ${k > 0 ? "up" : "down"} from` : "No shift from"} ${base} (dashed). In y = ax² + b, the vertex is (0, b).`;
    if (mode === "ah") out += `<br>${h ? `Moved ${units(h)} to the ${h > 0 ? "right" : "left"} of` : "No shift from"} ${base} (dashed). In y = a(x − b)², the vertex is (b, 0).`;
    if (mode === "ahk") out += `<br>The vertex is the ${a > 0 ? "lowest" : "highest"} point, so the ${a > 0 ? "minimum" : "maximum"} value is ${fmt(k)}.`;
    res.innerHTML = out;
  }
}

function trussFig(iso) {
  const A = P(30, 185), C = P(330, 185), B = P(180, 40), D = P(180, 185);
  return `<svg viewBox="0 0 360 232" class="fig" style="max-width:440px" role="img" aria-label="${iso ? "Isosceles triangle ABC with AB congruent to CB and median BD to the base" : "Roof truss ABC with king post BD; D is the midpoint of AC and BD is perpendicular to AC"}">
    <polygon class="tri" points="${pts([A, B, C])}"/>${seg(B, D, "acc")}${ticks(A, D, 2)}${ticks(D, C, 2)}${iso ? ticks(A, B, 1) + ticks(B, C, 1) : rightM(D, C, B)}
    ${dot(D)}${lbl(A, "A", -12, 16)}${lbl(C, "C", 12, 16)}${lbl(B, "B", 0, -12)}${lbl(D, "D", 0, 22)}
    ${txt(180, 226, iso ? "AB ≅ CB and AD ≅ CD. Prove: BD ⊥ AC" : "D is the midpoint of AC and BD ⊥ AC")}
  </svg>`;
}

