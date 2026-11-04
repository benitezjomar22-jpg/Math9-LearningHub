// Progress saved in this browser only (localStorage).
// Nothing here is sent to a server or to the teacher.
// Saved: weekly Check scores, self-ratings (green/yellow/red), and written reflections.

const STORE_KEY = "m9hub";

const progress = {
  available() {
    try { const k = "__m9test"; localStorage.setItem(k, "1"); localStorage.removeItem(k); return true; } catch (_) { return false; }
  },
  get() {
    try { return JSON.parse(localStorage.getItem(STORE_KEY) || "{}"); } catch (_) { return {}; }
  },
  set(fn) {
    try { const s = progress.get(); fn(s); localStorage.setItem(STORE_KEY, JSON.stringify(s)); return true; } catch (_) { return false; }
  },
  score(n) { return (progress.get().checks || {})[n]; },
  rating(n) { return (progress.get().reflect || {})[n]; },
  notes(n) { return (progress.get().notes || {})[n] || {}; },
  hasAny() {
    const s = progress.get();
    return ["checks", "reflect", "notes"].some(k => s[k] && Object.keys(s[k]).length);
  },
  clear() {
    try { localStorage.removeItem(STORE_KEY); return true; } catch (_) { return false; }
  }
};

// The "Your progress on this device" box, shown on the home page.
function progressPanelHTML() {
  const ok = progress.available();
  return `<section class="panel privacy" aria-labelledby="pp-h">
    <div class="panel-head"><div><span class="eyebrow">Your progress on this device</span><h2 id="pp-h">Where your answers are saved</h2></div></div>
    <ul class="plain">
      <li>There is no login. Your Check scores, self-ratings, and written reflections are saved <b>only in this browser on this device</b>. They are not sent to your teacher or to any server.</li>
      <li>Anyone who opens this site in the same browser can see them. <b>On a shared phone or school computer, clear your progress before you leave.</b></li>
      <li>If you switch phones or browsers, your saved progress does not move with you.</li>
      ${ok ? "" : `<li><b>Saving is turned off in this browser</b> (for example, in a private window), so your progress will not be kept after you close the page.</li>`}
    </ul>
    <div class="row"><button type="button" class="btn danger" data-clear-progress>Clear my progress</button>
      <p class="fb" data-clear-msg aria-live="polite"></p></div>
  </section>`;
}
