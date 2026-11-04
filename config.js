// =====================================================================
// SITE SETTINGS: the only part you need to change each week.
// =====================================================================
// 1. Set currentWeek to the week your classes are on now.
// 2. Set lastUpdated to today's date.
// 3. If a week's lesson dates change, edit `dates` in that week's file
//    in the lessons folder (for example, lessons/week07.js).
// The home page, the "This week" and "Next week" links, and the
// week map all read these settings, so nothing else needs editing.
// =====================================================================

window.SITE = {
  school: "Siay National High School",
  place: "Siay, Zamboanga Sibugay",
  audience: "all Grade 9 learners",
  subject: "Mathematics 9",
  schoolYear: "2026–2027",
  term: "Term 2",
  currentWeek: 7,
  lastUpdated: "November 4, 2026",
  teacher: "Jomar B. Siarez",
  version: "1.1"
};

// Lesson files in the lessons folder add themselves to this list.
window.HUB = { weeks: [] };
