// Page views (home and week pages) and start-up.

function factsHTML() {
  const cw = thisWeek();
  const facts = [["School year", SITE.schoolYear], ["Term", SITE.term], ["Current week", cw ? `Week ${cw.n}` : "—"],
    ["Lesson dates", weekDates(cw)], ["Last updated", SITE.lastUpdated]];
  return `<dl class="facts">${facts.map(([k, v]) => `<div><dt>${k}</dt><dd>${v}</dd></div>`).join("")}</dl>`;
}

function weekCard(w) {
  const sc = progress.score(w.n), cw = SITE.currentWeek;
  return `<a class="wcard ${w.strand} ${w.n === cw ? "now" : ""}" href="#week-${w.n}">
    <span class="wnum">Week ${w.n}${w.n === cw ? " · This week" : w.n === cw + 1 ? " · Next week" : ""}</span>
    <span class="wtitle">${w.title}</span>
    <span class="wmeta"><span class="pill st-${w.status}">${w.status === "ready" ? "Lessons ready" : "Study ahead"}</span>${w.dates ? `<span class="muted">${w.dates}</span>` : ""}${sc != null ? `<span class="pill score">Check ${sc}/5</span>` : ""}</span>
  </a>`;
}

function homeView() {
  const cw = thisWeek(), nw = nextWeek();
  const steps = [["Study ahead", "Refresh what you need and learn the new words before class."],
    ["Learn", "Study the lesson explanation, examine the illustrations, and follow the worked examples. Watch the supplementary video when one is available."],
    ["Practice", "Easy, Average, and Difficult problems that tell you right away if you are correct."],
    ["Check", "Five questions. Getting 4 right meets the weekly practice target."],
    ["Next step", "More practice if you need it, or an enrichment task once you meet the target."],
    ["Reflect", "Answer the exit question, write a short reflection, and rate how well you understand."]];
  return `<section class="view" aria-labelledby="home-h">
    <div class="banner greenband">
      <div class="banner-row">
        <img class="seal" src="siay-nhs-logo.png" alt="Seal of Siay National High School" width="104" height="104">
        <div class="banner-text">
          <span class="eyebrow">${SITE.school} · Grade 9 Mathematics</span>
          <h1 id="home-h">Math 9 <span class="gold-text">Learning Hub</span></h1>
          <p>Review past lessons, study ahead for the next one, and practice until you've got it. For ${SITE.audience} of ${SITE.school}.</p>
        </div>
      </div>
      ${factsHTML()}
    </div>
    ${termMap()}
    ${cw ? `<section class="panel nextup ${cw.strand}" aria-labelledby="tw-h">
      <div class="panel-head"><div><span class="eyebrow">This week · Week ${cw.n} · ${weekDates(cw)}</span><h2 id="tw-h">${cw.title}</h2></div>
        <a class="btn gold" href="#week-${cw.n}">Open Week ${cw.n}</a></div>
      ${cw.lessons ? `<ol class="lesson-links">${cw.lessons.map(l => `<li><a href="#week-${cw.n}">${l.id} ${l.title}</a>${lessonVideos(l).length ? ` <span class="pill vid">video</span>` : ""}</li>`).join("")}</ol>` : `<p>The lessons for this week are being added. Use the study-ahead material on the week page.</p>`}
      ${cw.note ? `<p class="note"><b>Session 4.</b> ${cw.note}</p>` : ""}
    </section>` : ""}
    ${nw ? `<section class="panel nextup ${nw.strand}" aria-labelledby="nw-h">
      <div class="panel-head"><div><span class="eyebrow">Study ahead · Next week · Week ${nw.n}</span><h2 id="nw-h">${nw.title}</h2></div>
        <a class="btn" href="#week-${nw.n}">Open Week ${nw.n}</a></div>
      ${studyHTML(nw, "h")}
    </section>` : ""}
    <section class="how" aria-labelledby="how-h"><h2 id="how-h">How each week works</h2>
      <ol class="steps">${steps.map(([t, d]) => `<li><b>${t}</b><span>${d}</span></li>`).join("")}</ol></section>
    ${progressPanelHTML()}
    ${window.OFFLINE_BUILD ? "" : `<section class="panel offline" aria-labelledby="off-h">
      <div class="panel-head"><div><span class="eyebrow">No internet at home?</span><h2 id="off-h">Use the hub offline</h2></div>
        <a class="btn primary" href="math9-hub-offline.html" download="Math9-Learning-Hub.html">Download offline copy</a></div>
      <p>Download one file while you have data or Wi-Fi. Open it later from your phone's <b>Files → Downloads</b> using Chrome. It works without internet. Download it again after your teacher adds new lessons.</p>
    </section>`}
    <section class="weeks" aria-labelledby="all-h">
      <h2 id="all-h">All weeks</h2>
      <h3 class="strand-h geo">${STRAND.geo}</h3><div class="wgrid">${HUB.weeks.filter(w => w.strand === "geo").map(weekCard).join("")}</div>
      <h3 class="strand-h alg">${STRAND.alg}</h3><div class="wgrid">${HUB.weeks.filter(w => w.strand === "alg").map(weekCard).join("")}</div>
    </section>
  </section>`;
}

function weekView(n) {
  const w = findWeek(n), prev = findWeek(n - 1), next = findWeek(n + 1), cw = SITE.currentWeek;
  const ready = w.status === "ready";
  const parts = ready ? [["study", "Study ahead"], ["learn", "Learn"], ["practice", "Practice"], ["check", "Check"], ["reflect", "Reflect"]] : [["study", "Study ahead"]];
  const withVid = ready ? w.lessons.filter(l => lessonVideos(l).length).length : 0;
  return `<section class="view week ${w.strand}" aria-labelledby="wk-h">
    <a class="back" href="#home">← All weeks</a>
    <header class="banner greenband">
      <span class="eyebrow">Week ${w.n} · ${STRAND[w.strand]} · ${weekDates(w)}${n === cw ? " · This week" : n === cw + 1 ? " · Next week" : ""}</span>
      <h1 id="wk-h">${w.title}</h1>
      <p>${SITE.term} · S.Y. ${SITE.schoolYear} · ${SITE.school}</p>
    </header>
    <div class="comp"><h2 class="h4">This week's learning competencies</h2><ol>${w.competencies.map((c, i) => `<li><span class="cn" aria-hidden="true">${i + 1}</span><span><span class="cl">Learning Competency ${i + 1}</span>${c}</span></li>`).join("")}</ol></div>
    ${w.note ? `<p class="note"><b>Session 4.</b> ${w.note}</p>` : ""}
    <nav class="parts" aria-label="Parts of this week">${parts.map(([id, t], i) => `<button type="button" class="part" data-jump="${id}"><span aria-hidden="true">${i + 1}</span>${t}</button>`).join("")}</nav>
    ${ready ? `<p class="muted small">Supplementary videos: ${withVid} of ${w.lessons.length} lessons. Every lesson can be learned from its explanation, illustrations, and worked example.</p>` : ""}
    <section class="block" id="sec-study" aria-labelledby="h-study"><h2 id="h-study"><span class="sn" aria-hidden="true">1</span>Study ahead</h2>${studyHTML(w, "s")}</section>
    ${ready ? `
    <section class="block" id="sec-learn" aria-labelledby="h-learn"><h2 id="h-learn"><span class="sn" aria-hidden="true">2</span>Learn</h2>${w.lessons.map(l => lessonHTML(l, w)).join("")}</section>
    <section class="block" id="sec-practice" aria-labelledby="h-practice"><h2 id="h-practice"><span class="sn" aria-hidden="true">3</span>Practice</h2><p class="muted">Type a number or pick an answer. Units are already shown.</p>${practiceHTML(w)}</section>
    <section class="block" id="sec-check" aria-labelledby="h-check"><h2 id="h-check"><span class="sn" aria-hidden="true">4</span>Check</h2><p class="muted">Five questions from this week. Getting at least 4 right (80%) meets the weekly practice target. It is practice, not a final grade.</p>${checkHTML(w)}</section>
    <section class="block" id="sec-reflect" aria-labelledby="h-reflect"><h2 id="h-reflect"><span class="sn" aria-hidden="true">5</span>Reflect</h2>${reflectHTML(w)}</section>`
    : `<section class="block soon"><h2>Lessons coming soon</h2><p>The full lessons, practice, and check for this week are being added. For now, use the study-ahead material above to get ready.</p></section>`}
    <nav class="pager" aria-label="Other weeks">${prev ? `<a class="btn" href="#week-${prev.n}">← Week ${prev.n}</a>` : "<span></span>"}${next ? `<a class="btn" href="#week-${next.n}">Week ${next.n} →</a>` : ""}</nav>
  </section>`;
}

function footerHTML() {
  return `<div class="weave-strip" aria-hidden="true"></div>
    <p><b>Math 9 Learning Hub</b> · ${SITE.subject} for ${SITE.audience} of ${SITE.school}, ${SITE.place} · S.Y. ${SITE.schoolYear}, ${SITE.term} · Version ${SITE.version}, last updated ${SITE.lastUpdated}.</p>
    <p>Lessons are adapted from the Term 2 lesson plans (LPTs) and slides prepared by Grade 9 Mathematics teachers. Maintained by ${SITE.teacher}.</p>
    <p><b>Privacy.</b> There is no login, and this site has no database. Your answers, Check scores, self-ratings, and reflections are never sent to a server or to your teacher; they stay in this browser on this device until you clear them. Opening the site makes ordinary web requests (to the website host and to Google Fonts for the lettering), the same as visiting any web page. Supplementary video links open Khan Academy or YouTube, which have their own privacy policies.</p>`;
}

// "Skip to main content" moves focus without changing the page address.
$(".skip-link").addEventListener("click", e => {
  e.preventDefault();
  const target = $("#app h1") || $("#app");
  target.setAttribute("tabindex", "-1"); target.focus();
});

HUB.weeks.sort((a, b) => a.n - b.n);
buildNav();
$("#site-footer").innerHTML = footerHTML();
route();
