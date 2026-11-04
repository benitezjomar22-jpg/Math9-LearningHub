// Navigation: everything here follows SITE.currentWeek in js/config.js.

const STRAND = { geo: "Geometry and proof", alg: "Quadratics" };
const thisWeek = () => findWeek(SITE.currentWeek);
const nextWeek = () => findWeek(SITE.currentWeek + 1);
const weekDates = w => w && w.dates ? w.dates : "Dates to be announced";

function buildNav() {
  const nav = $("#main-nav"), cw = thisWeek(), nw = nextWeek();
  nav.innerHTML = `<a href="#home">Home</a>${cw ? `<a href="#week-${cw.n}">This week</a>` : ""}${nw ? `<a href="#week-${nw.n}">Next week</a>` : ""}`;
}

function termMap() {
  const cw = SITE.currentWeek;
  const tag = n => n === cw ? "This week" : n === cw + 1 ? "Next" : "";
  return `<nav class="map" aria-labelledby="map-h">
    <div class="map-head"><h2 class="h4" id="map-h">${SITE.term} at a glance</h2><span class="muted">Pick a week</span></div>
    <svg class="map-art" viewBox="0 0 1000 110" preserveAspectRatio="none" aria-hidden="true">
      <polygon points="70,98 430,98 350,26 150,26" class="art-geo"/>
      <line x1="150" y1="26" x2="70" y2="98" class="art-geo-d"/><line x1="350" y1="26" x2="430" y2="98" class="art-geo-d"/>
      <path d="M520 14 Q750 196 980 14" class="art-alg"/>
    </svg>
    <ol class="ticks">${HUB.weeks.map(w => `<li><a href="#week-${w.n}" class="tick ${w.strand} ${w.n === cw ? "now" : ""} ${w.n === cw + 1 ? "next" : ""}" aria-label="Week ${w.n}: ${w.short}${tag(w.n) ? `, ${tag(w.n).toLowerCase()}` : ""}"${w.n === cw ? ' aria-current="date"' : ""}>
      <span class="tn">${w.n}</span><span class="ts">${w.short}</span>${tag(w.n) ? `<span class="flag">${tag(w.n)}</span>` : ""}</a></li>`).join("")}</ol>
    <div class="bands"><span class="band geo">Weeks 1–5 · ${STRAND.geo}</span><span class="band alg">Weeks 6–10 · ${STRAND.alg}</span></div>
  </nav>`;
}

function route() {
  const h = location.hash.slice(1);
  const m = h.match(/^week-(\d+)$/);
  const n = m ? +m[1] : 0;
  const app = $("#app");
  app.innerHTML = n && findWeek(n) ? weekView(n) : homeView();
  $$("[data-explore]").forEach(drawExplore);
  const cw = SITE.currentWeek;
  $$("#main-nav a").forEach(a => a.removeAttribute("aria-current"));
  const cur = n ? (n === cw ? "This week" : n === cw + 1 ? "Next week" : "") : "Home";
  $$("#main-nav a").forEach(a => { if (a.textContent === cur) a.setAttribute("aria-current", "page"); });
  document.title = n && findWeek(n) ? `Week ${n}: ${findWeek(n).short} · Math 9 Learning Hub` : "Math 9 Learning Hub · Siay NHS";
  window.scrollTo(0, 0);
  // Move keyboard and screen-reader focus to the new page heading.
  if (route.started) { const h1 = $("#app h1"); if (h1) { h1.setAttribute("tabindex", "-1"); h1.focus({ preventScroll: true }); } }
  route.started = true;
}
window.addEventListener("hashchange", route);
