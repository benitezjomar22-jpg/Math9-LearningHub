// Activities: warm-ups, lessons, sorting tasks, practice, the weekly Check, and the reflection.

const findWeek = n => HUB.weeks.find(w => w.n === n);

// Reads a typed number; accepts −3, -3, 1,200 and 1.5
const num = v => {
  const m = String(v).replace(/[−–]/g, "-").replace(/,/g, "").match(/-?\d+(\.\d+)?/);
  return m ? parseFloat(m[0]) : NaN;
};

// Multiple-choice options as real radio buttons, labelled by the question.
const mc = (key, choices, labelId) => `<div class="choices" role="radiogroup"${labelId ? ` aria-labelledby="${labelId}"` : ""}>${choices.map((c, i) => `
    <label class="choice" for="${key}-${i}"><input type="radio" name="${key}" id="${key}-${i}" value="${i}"><span>${c}</span></label>`).join("")}</div>`;

const numInput = (key, unit) => `<div class="answer-row"><label class="ans-label" for="${key}-in">Your answer</label>
    <input class="ans" id="${key}-in" inputmode="decimal" autocomplete="off" aria-describedby="q-${key}"><span class="unit" aria-hidden="${unit ? "false" : "true"}">${unit || ""}</span></div>`;

function problemHTML(item, key, attr) {
  return `<form class="prob" ${attr} aria-labelledby="q-${key}"><p class="q" id="q-${key}">${item.q}</p>
    ${item.choices ? mc(key, item.choices, `q-${key}`) : numInput(key, item.unit)}
    <div class="row"><button class="btn primary" type="submit">Check</button><button class="btn" type="button" data-show="${key}" aria-controls="sol-${key}" aria-expanded="false">Show solution</button></div>
    <p class="fb" id="fb-${key}" aria-live="polite"></p><p class="sol" id="sol-${key}" hidden>${item.sol}</p></form>`;
}

function studyHTML(wk, prefix) {
  const s = wk.study;
  return `<div class="study">
    <div class="study-col"><h3 class="h4">Refresh before class</h3><ul>${s.refresh.map(r => `<li>${r}</li>`).join("")}</ul></div>
    <div class="study-col"><h3 class="h4">Words to know</h3><ul class="chips">${s.words.map(w => `<li class="chip">${w}</li>`).join("")}</ul></div>
    <div class="study-col warm"><h3 class="h4">Warm-up</h3>${problemHTML(s.warm, `${prefix}w${wk.n}`, `data-warm="${prefix}w${wk.n}"`)}</div>
  </div>`;
}

// Videos: a lesson lists supplementary videos in `videos`. Without one, the lesson says so plainly.
function lessonVideos(l) {
  const list = l.videos || (l.video ? [{ title: "Video lesson", url: l.video, source: "" }] : []);
  return list;
}
function videoHTML(l) {
  const list = lessonVideos(l);
  if (!list.length) return `<div class="video none"><span class="play" aria-hidden="true"></span><span><b>No video for this lesson yet</b>
      <small>Study the lesson explanation, examine the illustrations, and follow the worked example.</small></span></div>`;
  return `<div class="video ready"><span class="play" aria-hidden="true"></span><div><b>Supplementary video${list.length > 1 ? "s" : ""}</b>
      <ul class="vlist">${list.map(v => `<li><a href="${v.url}" target="_blank" rel="noopener">${v.title}</a>${v.source ? ` <small>(${v.source}, opens in a new tab)</small>` : ` <small>(opens in a new tab)</small>`}</li>`).join("")}</ul>
      <small>Watch after reading the lesson. Videos explain the same idea in another way.</small></div></div>`;
}

function lessonHTML(l, wk) {
  const fid = `fx-${l.id.replace(".", "-")}`;
  const figs = [].concat(l.figure || []);
  const fig = figs.map((f, j) => f === "sorter" ? sorterHTML(wk) : (FIG[f] ? FIG[f](j ? `${fid}-${j}` : fid) : "")).join("");
  const point = p => /^\s*<(table|div|ul|ol)/.test(p) ? p : `<p>${p}</p>`;
  return `<article class="lesson" id="l-${l.id.replace(".", "-")}" aria-labelledby="lh-${l.id.replace(".", "-")}">
    <div class="lesson-head"><span class="lesson-num">${l.id}</span><h3 id="lh-${l.id.replace(".", "-")}">${l.title}</h3></div>
    <p class="key"><b>Key idea.</b> ${l.key}</p>
    <div class="lesson-body"><div class="points">${l.points.map(point).join("")}</div>
      <div class="figwrap">${fig}</div></div>
    <div class="example"><span class="eyebrow">Worked example</span><p class="q">${l.example.q}</p>
      <ol>${l.example.steps.map(s => `<li>${s}</li>`).join("")}</ol></div>
    ${videoHTML(l)}
  </article>`;
}

// Sorting activity; Week 2 uses the defaults, other weeks set sorterCfg.
const sorterCfg = wk => Object.assign({ title: "Inductive or deductive?", labels: ["Inductive", "Deductive"], noun: "reasoning",
  hint: "Not quite. Ask yourself: is it based on examples, or on a known rule?" }, wk.sorterCfg || {});
function sorterHTML(wk) {
  const cfg = sorterCfg(wk);
  return `<div class="explore sorter" data-sw="${wk.n}"><div class="explore-head"><span class="eyebrow">Try it</span><b>${cfg.title}</b></div>
    ${wk.sorter.map((it, i) => `<div class="sort-item" data-sort="${i}"><p id="st-${wk.n}-${i}">${it.s}</p>
      <div class="row" role="group" aria-labelledby="st-${wk.n}-${i}">${cfg.labels.map(lb => `<button class="btn sm" type="button" data-pick="${lb}">${lb}</button>`).join("")}</div>
      <p class="fb" aria-live="polite"></p></div>`).join("")}</div>`;
}

function practiceHTML(wk) {
  const levels = ["Easy", "Average", "Difficult"];
  return levels.map(lv => `<div class="level"><h3 class="h4"><span class="lv lv-${lv.toLowerCase()}">${lv}</span></h3>
    ${wk.practice.map((p, i) => p.level !== lv ? "" : problemHTML(p, `p${wk.n}-${i}`, `data-prac="${wk.n}-${i}"`)).join("")}</div>`).join("");
}

function checkHTML(wk) {
  return `<form class="check" data-check="${wk.n}">
    ${wk.check.map((c, i) => `<fieldset class="check-item" data-ci="${i}"><legend id="cq-${wk.n}-${i}"><span class="qn" aria-hidden="true">${i + 1}</span><span><span class="sr-only">Question ${i + 1}. </span>${c.q}</span></legend>${mc(`c${wk.n}-${i}`, c.choices, `cq-${wk.n}-${i}`)}</fieldset>`).join("")}
    <p class="fb" data-check-msg aria-live="polite"></p>
    <div class="row"><button class="btn primary" type="submit">Submit my answers</button><button class="btn" type="button" data-retake="${wk.n}" hidden>Try again</button></div>
    <div class="next" data-next hidden></div>
  </form>`;
}

const LIGHTS = [["green", "I understand it and can explain it."], ["yellow", "I understand some of it."], ["red", "I'm having difficulty."]];
const NOTE_QS = [["learn", "What did I learn today?"], ["difficult", "Which concept was difficult for me?"], ["apply", "Where can I apply this mathematical concept?"]];

function reflectHTML(wk) {
  const saved = progress.rating(wk.n), notes = progress.notes(wk.n);
  return `<p class="q" id="exit-${wk.n}"><span class="eyebrow">Exit question</span><br>${wk.exitQ}</p>
    <form class="reflect" data-reflect="${wk.n}">
      <fieldset class="notes"><legend>My reflection <span class="muted">(optional)</span></legend>
        ${NOTE_QS.map(([k, q]) => `<label for="rf-${wk.n}-${k}">${q}</label>
          <textarea id="rf-${wk.n}-${k}" data-note="${k}" rows="3" maxlength="600">${(notes[k] || "").replace(/</g, "&lt;")}</textarea>`).join("")}
      </fieldset>
      <fieldset class="lights"><legend>How well do I understand this week's lessons?</legend>
        ${LIGHTS.map(([c, t]) => `<label class="light"><input type="radio" name="light-${wk.n}" value="${c}" ${saved === c ? "checked" : ""}><span class="dot dot-${c}" aria-hidden="true"></span>${t}</label>`).join("")}
      </fieldset>
      <p class="fb" data-light-msg aria-live="polite">${saved ? lightMsg(saved) : ""}</p>
      <div class="row"><button class="btn primary" type="submit">Save my reflection</button><button class="btn" type="button" data-copy-reflect="${wk.n}">Copy my reflection</button></div>
      <p class="fb" data-reflect-msg aria-live="polite"></p>
      <p class="muted small">Your reflection is saved only on this device. To send it to your teacher, tap <b>Copy my reflection</b> and paste it where your teacher asks.</p>
    </form>`;
}
function lightMsg(c) {
  return c === "green" ? "Great. Try the Difficult practice problems or the enrichment task."
    : c === "yellow" ? "Good start. Reread the key ideas, then redo the Easy and Average problems."
    : "That's okay. Tell your teacher which part is hard, and go over the worked examples again.";
}
function reflectionText(n, f) {
  const w = findWeek(n), get = k => ($(`[data-note="${k}"]`, f).value || "").trim() || "(no answer)";
  const pick = $(`input[name="light-${n}"]:checked`, f), light = pick ? LIGHTS.find(l => l[0] === pick.value)[1] : "(not rated)";
  return [`Math 9 Learning Hub, Week ${n} reflection`, `Exit question: ${w.exitQ.replace(/<[^>]+>/g, "")}`,
    ...NOTE_QS.map(([k, q]) => `${q} ${get(k)}`), `How well I understand: ${light}`].join("\n");
}

// ---------- interactions ----------
function findPractice(key) { const [wn, i] = key.split("-").map(Number); return findWeek(wn).practice[i]; }
function findWarm(key) { return findWeek(+key.replace(/^[a-z]+w/, "")).study.warm; }

document.addEventListener("submit", e => {
  const f = e.target;
  if (f.dataset.prac || f.dataset.warm) {
    e.preventDefault();
    const key = f.dataset.prac ? `p${f.dataset.prac}` : f.dataset.warm;
    const item = f.dataset.prac ? findPractice(f.dataset.prac) : findWarm(f.dataset.warm);
    const fb = $(`#fb-${key}`, f);
    let ok;
    if (item.choices) {
      const pick = $(`input[name="${key}"]:checked`, f);
      if (!pick) { fb.className = "fb no"; fb.textContent = "Pick an answer first."; return; }
      ok = +pick.value === item.ans;
    } else {
      const v = num($("input.ans", f).value);
      if (isNaN(v)) { fb.className = "fb no"; fb.textContent = "Type a number first."; return; }
      ok = Math.abs(v - item.ans) < 0.01;
    }
    fb.className = "fb " + (ok ? "ok" : "no");
    fb.textContent = ok ? "Correct. Nice work!" : "Not yet. Check your work and try again, or show the solution.";
  }
  if (f.dataset.check) {
    e.preventDefault();
    const n = +f.dataset.check, w = findWeek(n);
    const picks = w.check.map((c, i) => $(`input[name="c${n}-${i}"]:checked`, f));
    const msg = $("[data-check-msg]", f);
    if (picks.some(p => !p)) { msg.className = "fb no"; msg.textContent = "Answer all five questions first."; return; }
    let score = 0; const missed = [];
    w.check.forEach((c, i) => {
      const fs = $(`[data-ci="${i}"]`, f), ok = +picks[i].value === c.ans;
      if (ok) score++; else missed.push(c.lesson);
      fs.classList.toggle("right", ok); fs.classList.toggle("wrong", !ok);
      $$("label.choice", fs).forEach((lb, j) => lb.classList.toggle("is-answer", j === c.ans));
      $$("input", fs).forEach(inp => inp.disabled = true);
    });
    progress.set(s => { s.checks = s.checks || {}; s.checks[n] = score; });
    msg.className = "fb " + (score >= 4 ? "ok" : "no");
    msg.textContent = `You got ${score} out of 5.`;
    const nx = $("[data-next]", f); nx.hidden = false;
    const lessons = [...new Set(missed)].sort();
    nx.innerHTML = score >= 4
      ? `<span class="eyebrow">Next step · Target reached</span><h3>You met the weekly practice target (at least 4 out of 5).</h3>
         ${score === 5 ? "" : `<p>Look over the question you missed, then try this:</p>`}<p><b>Enrichment:</b> ${w.enrich}</p>
         <p class="muted small">This check is a quick practice snapshot, not a final grade. Your quizzes and tasks in class show your full progress.</p>`
      : `<span class="eyebrow">Next step · More practice recommended</span><h3>More practice recommended. Review these lessons:</h3>
         <div class="row">${lessons.map(id => `<button type="button" class="btn" data-goto="l-${id.replace(".", "-")}">Lesson ${id}</button>`).join("")}</div>
         <p>Reread the key idea and the worked example, redo the Easy and Average practice, then try the check again.</p>`;
    $("button[type=submit]", f).hidden = true; $("[data-retake]", f).hidden = false;
    nx.setAttribute("tabindex", "-1"); nx.focus();
  }
  if (f.dataset.reflect) {
    e.preventDefault();
    const n = +f.dataset.reflect, notes = {};
    $$("[data-note]", f).forEach(t => { notes[t.dataset.note] = t.value.trim(); });
    const pick = $(`input[name="light-${n}"]:checked`, f);
    const ok = progress.set(s => {
      s.notes = s.notes || {}; s.notes[n] = notes;
      if (pick) { s.reflect = s.reflect || {}; s.reflect[n] = pick.value; }
    });
    const m = $("[data-reflect-msg]", f);
    m.className = "fb " + (ok ? "ok" : "no");
    m.textContent = ok ? "Saved on this device." : "This browser is not allowing saving. Use Copy my reflection to keep your answers.";
  }
});

document.addEventListener("change", e => {
  const r = e.target;
  if (r.matches && r.matches('.lights input[type="radio"]')) {
    const n = +r.name.replace("light-", "");
    progress.set(s => { s.reflect = s.reflect || {}; s.reflect[n] = r.value; });
    const msg = $("[data-light-msg]", r.closest("form"));
    if (msg) msg.textContent = lightMsg(r.value);
  }
});

document.addEventListener("click", e => {
  const t = e.target.closest("button, a"); if (!t) return;
  if (t.dataset.show) {
    const s = $(`#sol-${t.dataset.show}`); s.hidden = !s.hidden;
    t.textContent = s.hidden ? "Show solution" : "Hide solution";
    t.setAttribute("aria-expanded", String(!s.hidden));
  }
  if (t.dataset.jump) $(`#sec-${t.dataset.jump}`)?.scrollIntoView({ behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "start" });
  if (t.dataset.goto) { const el = $(`#${t.dataset.goto}`); if (el) { el.scrollIntoView({ block: "start" }); el.setAttribute("tabindex", "-1"); el.focus({ preventScroll: true }); } }
  if (t.dataset.pick) {
    const box = t.closest("[data-sort]"), wk = findWeek(+t.closest("[data-sw]").dataset.sw), it = wk.sorter[+box.dataset.sort];
    const cfg = sorterCfg(wk), ok = t.dataset.pick === it.a, fb = $(".fb", box);
    fb.className = "fb " + (ok ? "ok" : "no");
    fb.textContent = ok ? (it.why ? `Correct. ${it.why}` : `Correct: ${it.a.toLowerCase()} ${cfg.noun}.`) : cfg.hint;
  }
  if (t.dataset.retake) {
    const n = +t.dataset.retake, f = t.closest("form");
    f.outerHTML = checkHTML(findWeek(n));
    $(`[data-check="${n}"] input`)?.focus();
  }
  if (t.dataset.copyReflect) {
    const f = t.closest("form"), text = reflectionText(+t.dataset.copyReflect, f), m = $("[data-reflect-msg]", f);
    const done = () => { m.className = "fb ok"; m.textContent = "Copied. Paste it where your teacher asks."; };
    const fail = () => { m.className = "fb no"; m.textContent = "Copy did not work in this browser. Select your answers and copy them yourself."; };
    try { navigator.clipboard.writeText(text).then(done, fail); } catch (_) { fail(); }
  }
  if (t.hasAttribute("data-clear-progress")) {
    const m = $("[data-clear-msg]");
    if (!progress.hasAny()) { m.className = "fb ok"; m.textContent = "There is no saved progress on this device."; return; }
    if (t.dataset.armed !== "1") {
      t.dataset.armed = "1"; t.textContent = "Yes, clear everything";
      m.className = "fb no"; m.textContent = "This removes all saved scores, ratings, and reflections on this device. Tap again to confirm.";
      return;
    }
    const ok = progress.clear();
    t.dataset.armed = ""; t.textContent = "Clear my progress";
    m.className = "fb " + (ok ? "ok" : "no");
    m.textContent = ok ? "Your progress on this device has been cleared." : "Could not clear progress in this browser.";
    $$(".pill.score").forEach(p => p.remove());
  }
});

document.addEventListener("input", e => {
  const ex = e.target.closest("[data-explore]"); if (ex) drawExplore(ex);
});
