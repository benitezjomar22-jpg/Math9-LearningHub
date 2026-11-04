// Week 1 lesson content. Edit the text here; the site builds the page from it.
HUB.weeks.push({
  n: 1, strand: "geo", dates: "", status: "ready",
  title: "Properties of trapezoids and kites",
  short: "Trapezoids and kites",
  competencies: [
    "Derive the properties of trapezoids and kites by exploring the relationship between their parts and secondary parts."
  ],
  study: {
    refresh: [
      "A quadrilateral is a polygon with four sides.",
      "Parallel sides never meet. Congruent sides have the same length.",
      "From Term 1: a parallelogram has two pairs of parallel sides. Rectangles, squares, and rhombuses are special parallelograms."
    ],
    words: ["trapezoid", "bases", "legs", "base angles", "isosceles trapezoid", "midsegment", "kite", "diagonal", "adjacent sides", "perpendicular", "bisect"],
    warm: { type: "mc", q: "Which shape has exactly one pair of parallel sides?", choices: ["Square", "Rectangle", "Trapezoid", "Rhombus"], ans: 2,
      sol: "A trapezoid has exactly one pair of parallel sides. The other three are parallelograms, with two pairs." }
  },
  lessons: [
    {
      id: "1.1", title: "Meet the trapezoid and the kite", videos: [vid("Kites as a geometric shape", "https://www.khanacademy.org/math/basic-geo/basic-geometry-shapes/basic-geo-quadrilaterals/v/kites-as-a-mathematical-shape")], figure: "trap-kite",
      key: "A trapezoid is a quadrilateral with exactly one pair of parallel sides. A kite is a quadrilateral with two pairs of adjacent congruent sides, where the two pairs have different lengths.",
      points: [
        ctable(["Figure", "Definition we use", "Not included"], [
          ["Trapezoid", "A quadrilateral with <b>exactly one</b> pair of parallel sides. The parallel sides are the <b>bases</b>; the other two sides are the <b>legs</b>.", "A parallelogram has <b>two</b> pairs of parallel sides, so it is not a trapezoid in our lessons. (Some books say \"at least one pair\"; our module uses \"exactly one.\")"],
          ["Kite", "A quadrilateral with <b>two pairs of adjacent (consecutive) congruent sides</b>. The two pairs have different lengths, so no two opposite sides are congruent.", "A rhombus has all four sides congruent. Some books call it a special kite, but in our lessons a kite has two different side lengths."]
        ], "Definitions"),
        `<b>Parts of a trapezoid.</b> The parallel sides are the <b>bases</b>. The other two sides are the <b>legs</b>. The two angles that share a base are a pair of <b>base angles</b>.`,
        `In trapezoid PALM, ${o("PA")} ∥ ${o("ML")}. The bases are ${o("PA")} and ${o("ML")}, and the legs are ${o("PM")} and ${o("AL")}. The base angles are ∠P and ∠A, and ∠M and ∠L.`,
        `In kite KITE, ${o("KE")} ≅ ${o("KI")} and ${o("TE")} ≅ ${o("TI")}. Each pair of equal sides meets at a vertex, so the equal sides are next to each other.`,
        `<b>Tip:</b> check the sides first. Parallel sides point to a trapezoid. Equal sides next to each other point to a kite.`
      ],
      example: {
        q: "A quadrilateral has sides of 8 cm, 8 cm, 5 cm, and 5 cm, with the equal sides next to each other. What is it?",
        steps: ["It has two pairs of equal sides.", "Each pair is adjacent, and opposite sides are not equal.", "So it is a kite."]
      }
    },
    {
      id: "1.2", title: "Properties of trapezoids", figure: "midsegment-explorer",
      key: "In any trapezoid, the two angles along the same leg add up to 180°. An isosceles trapezoid also has congruent legs, congruent base angles, and congruent diagonals.",
      points: [
        `<b>Angles along a leg.</b> In trapezoid ABCD with bases ${o("AB")} and ${o("DC")}, m∠A + m∠D = 180° and m∠B + m∠C = 180°.`,
        `<b>Isosceles trapezoid.</b> If the legs are congruent, then the base angles are congruent (∠A ≅ ∠B and ∠D ≅ ∠C) and the diagonals are congruent (${o("AC")} ≅ ${o("BD")}).`,
        `<b>Midsegment theorem.</b> The midsegment joins the midpoints of the legs. It is parallel to the bases, and its length is half their sum: <span class="f">M = (b<sub>1</sub> + b<sub>2</sub>) ÷ 2</span>.`
      ],
      example: {
        q: "The diagonals of an isosceles trapezoid are AC = (7x − 9) cm and BD = (5x + 7) cm. How long is each diagonal?",
        steps: ["The diagonals are congruent, so 7x − 9 = 5x + 7.", "2x = 16, so x = 8.", "AC = 7(8) − 9 = 47 cm. Check: BD = 5(8) + 7 = 47 cm."]
      }
    },
    {
      id: "1.3", title: "Properties of kites", videos: [vid("Proof: The diagonals of a kite are perpendicular", "https://www.khanacademy.org/math/9th-grade-math-revised-k-to-10-3-terms/x1e64c39423990571:2nd-quarter/x1e64c39423990571:quadrilaterals-and-their-properties-trapezoid-and-kites/v/two-column-proof-showing-segments-are-perpendicular")], figure: "kite-abcd",
      key: "In kite ABCD with AB = AD and BC = CD, the diagonals are perpendicular, diagonal AC bisects diagonal BD, and ∠B ≅ ∠D.",
      points: [
        `<b>Diagonals.</b> The diagonals meet at a right angle. The diagonal joining the vertices where the equal sides meet (${o("AC")}) cuts the other diagonal (${o("BD")}) into two equal parts, so BE = ED.`,
        `<b>Angles.</b> One pair of opposite angles is congruent: the angles where the unequal sides meet, ∠B and ∠D.`,
        `<b>Folding test.</b> Fold a paper kite along ${o("AC")} and the two halves match exactly.`
      ],
      example: {
        q: "In kite ABCD, m∠B = (4x + 10)° and m∠D = (6x − 30)°. Find m∠B.",
        steps: ["∠B ≅ ∠D, so 4x + 10 = 6x − 30.", "40 = 2x, so x = 20.", "m∠B = 4(20) + 10 = 90°."]
      }
    }
  ],
  practice: [
    { level: "Easy", lesson: "1.2", q: "The bases of a trapezoid are 12 cm and 20 cm. How long is its midsegment?", ans: 16, unit: "cm", sol: "M = (12 + 20) ÷ 2 = 32 ÷ 2 = 16 cm" },
    { level: "Easy", lesson: "1.2", q: "One base angle of an isosceles trapezoid measures 68°. What is the other angle on the same base?", ans: 68, unit: "°", sol: "Base angles of an isosceles trapezoid are congruent, so the answer is 68°." },
    { level: "Easy", lesson: "1.3", q: "In kite ABCD, AB = AD = 9 cm and BC = CD = 14 cm. What is its perimeter?", ans: 46, unit: "cm", sol: "9 + 9 + 14 + 14 = 46 cm" },
    { level: "Average", lesson: "1.2", q: "One angle of a trapezoid measures 115°. What is the angle next to it along the same leg?", ans: 65, unit: "°", sol: "Angles along the same leg add up to 180°: 180° − 115° = 65°." },
    { level: "Average", lesson: "1.2", q: "The midsegment of a trapezoid is 15 cm and one base is 10 cm. How long is the other base?", ans: 20, unit: "cm", sol: "15 = (10 + b) ÷ 2, so 30 = 10 + b and b = 20 cm." },
    { level: "Average", lesson: "1.3", q: "In kite ABCD, diagonal AC bisects diagonal BD at E. If BE = 6 cm, how long is BD?", ans: 12, unit: "cm", sol: "AC bisects BD, so ED = BE = 6 cm and BD = 6 + 6 = 12 cm." },
    { level: "Difficult", lesson: "1.2", q: "The diagonals of an isosceles trapezoid are AC = (7x − 9) cm and BD = (5x + 7) cm. How long is each diagonal?", ans: 47, unit: "cm", sol: "7x − 9 = 5x + 7, so x = 8. AC = 7(8) − 9 = 47 cm." },
    { level: "Difficult", lesson: "1.3", q: "In kite ABCD with AB = AD and BC = CD, m∠B = (4x + 10)° and m∠D = (6x − 30)°. Find m∠B.", ans: 90, unit: "°", sol: "∠B ≅ ∠D, so 4x + 10 = 6x − 30 and x = 20. m∠B = 4(20) + 10 = 90°." },
    { level: "Difficult", lesson: "1.2", q: "In isosceles trapezoid ABCD with bases AB and DC, m∠A = (3x + 10)° and m∠B = (5x − 20)°. Find m∠D.", ans: 125, unit: "°", sol: "∠A ≅ ∠B, so 3x + 10 = 5x − 20 and x = 15. m∠A = 55°. ∠A and ∠D are along the same leg, so m∠D = 180° − 55° = 125°." }
  ],
  check: [
    { lesson: "1.1", q: "A quadrilateral has exactly one pair of opposite sides that are parallel. What type of quadrilateral is it?", choices: ["Kite", "Trapezoid", "Rectangle", "Square"], ans: 1 },
    { lesson: "1.1", q: "A quadrilateral has sides of 8 cm, 8 cm, 5 cm, and 5 cm, with the equal sides next to each other. Which name fits best?", choices: ["Kite", "Rectangle", "Square", "Trapezoid"], ans: 0 },
    { lesson: "1.2", q: "One base angle of an isosceles trapezoid measures 72°. What is the angle next to it along the same leg?", choices: ["72°", "90°", "108°", "118°"], ans: 2 },
    { lesson: "1.2", q: "Both diagonals of an isosceles trapezoid measure 15 cm. Which property does this show?", choices: ["The diagonals are congruent.", "The diagonals are perpendicular.", "The bases are congruent.", "The legs are parallel."], ans: 0 },
    { lesson: "1.3", q: "In a kite, the two opposite angles where the unequal sides meet are congruent. If one measures 75°, what is the other?", choices: ["15°", "75°", "105°", "150°"], ans: 1 }
  ],
  enrich: "Find two objects shaped like trapezoids and one shaped like a kite at home or around Siay. Sketch each one, mark the parallel or equal sides, and measure them if you can. Then think about this: can a kite also be a trapezoid? Explain why or why not.",
  exitQ: "What property would you look for first to identify a trapezoid? How about a kite?"
});
