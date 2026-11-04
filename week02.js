// Week 2 lesson content. Edit the text here; the site builds the page from it.
HUB.weeks.push({
  n: 2, strand: "geo", dates: "Sep 24–30", status: "ready",
  title: "Trapezoid and kite problems; inductive and deductive reasoning",
  short: "Problems and reasoning",
  competencies: [
    "Solve problems on trapezoids and kites by applying their properties.",
    "Distinguish inductive and deductive reasoning for establishing proofs."
  ],
  study: {
    refresh: [
      "Midsegment of a trapezoid: M = (b₁ + b₂) ÷ 2.",
      "Angles along the same leg of a trapezoid add up to 180°.",
      "Kite diagonals are perpendicular, and one bisects the other.",
      "Solving equations such as 360 = ½ × 18 × d."
    ],
    words: ["area", "perimeter", "conjecture", "counterexample", "premise", "inductive reasoning", "deductive reasoning"],
    warm: { type: "num", q: "A trapezoid has bases of 18 m and 30 m. How long is its midsegment?", ans: 24, unit: "m", sol: "(18 + 30) ÷ 2 = 24 m" }
  },
  lessons: [
    {
      id: "2.1", title: "Solving trapezoid problems", figure: "bridge",
      key: "Read the situation, name the figure, list what is given, choose the property that connects them, then solve and check the units.",
      points: [
        `A pedestrian bridge has a support shaped like an isosceles trapezoid. Its bases are 16 m and 28 m, and its legs are congruent.`,
        `<b>Angles.</b> If each base angle on the longer base is 70°, the angle next to it along the leg is 180° − 70° = 110°.`,
        `<b>Horizontal support.</b> A support joining the midpoints of the legs is the midsegment: (16 + 28) ÷ 2 = 22 m.`
      ],
      example: {
        q: "A trapezoidal roof frame has bases of 12 m and 26 m. Each base angle along the longer base is 65°. Find the midsegment and the angle next to each 65° angle.",
        steps: ["Midsegment: (12 + 26) ÷ 2 = 19 m.", "Angles along the same leg are supplementary: 180° − 65° = 115°."]
      }
    },
    {
      id: "2.2", title: "Area and perimeter of kites", videos: [vid("Area of kites", "https://www.khanacademy.org/math/9th-grade-philippines/x22ecd091eddebb21:3rd-quarter/x22ecd091eddebb21:trapezoids-and-kites/v/area-of-a-kite")], figure: "kite-explorer",
      key: "Area of a kite = ½ × d₁ × d₂, where d₁ and d₂ are its diagonals. Perimeter = 2a + 2b, where a and b are its two different side lengths.",
      points: [
        `<b>Why half?</b> Draw a rectangle around the kite with sides d₁ and d₂. Because the diagonals are perpendicular, the kite fills exactly half of that rectangle.`,
        `<b>Example.</b> A kite-shaped festival banner has diagonals of 18 cm and 30 cm. Its area is ½ × 18 × 30 = 270 cm².`,
        `<b>Perimeter.</b> A kite with sides of 12 cm and 18 cm has a perimeter of 2(12) + 2(18) = 60 cm.`
      ],
      example: {
        q: "A school banner is shaped like a kite. Its area is 360 cm², and one diagonal is 18 cm. How long is the other diagonal?",
        steps: ["360 = ½ × 18 × d", "360 = 9d", "d = 40 cm"]
      }
    },
    {
      id: "2.3", title: "Inductive and deductive reasoning", videos: [vid("Deductive reasoning", "https://www.khanacademy.org/math/8th-grade-philippines/xa5b1424237e0f2b8:2nd-quarter/xa5b1424237e0f2b8:inductive-and-deductive-reasoning/v/deductive-reasoning-2")], figure: "sorter",
      key: "Inductive reasoning goes from examples to a general conclusion, called a conjecture. Deductive reasoning goes from a known rule to a specific case, and its conclusion is guaranteed when the rule is true.",
      points: [
        `<b>Inductive:</b> \"I measured several isosceles trapezoids, and their diagonals were always equal, so the diagonals of an isosceles trapezoid are congruent.\" This is a conjecture. One counterexample would disprove it.`,
        `<b>Deductive:</b> \"ABCD is an isosceles trapezoid. The diagonals of an isosceles trapezoid are congruent. Therefore ${o("AC")} ≅ ${o("BD")}.\"`,
        `Seeing a pattern many times does not prove it is always true. Proofs in geometry use deductive reasoning.`
      ],
      example: {
        q: "A learner says, \"The diagonals of every kite are equal, because the kites I measured had equal diagonals.\" How do you test this?",
        steps: ["This is inductive reasoning, so it may be wrong.", "Look for a counterexample: a kite with diagonals of 16 cm and 21 cm.", "One counterexample is enough to show the conjecture is false."]
      }
    }
  ],
  sorter: [
    { s: "A learner measures the angles of several trapezoids and notices that the angles along each leg add up to 180°. She concludes this is true for all trapezoids.", a: "Inductive" },
    { s: "ABCD is an isosceles trapezoid. The diagonals of an isosceles trapezoid are congruent. So AC = BD.", a: "Deductive" },
    { s: "The first four results of a pattern are even numbers, so a learner says every result will be even.", a: "Inductive" },
    { s: "A learner measures the diagonals of several kites and notices that one always bisects the other. He concludes this is a property of kites.", a: "Inductive" },
    { s: "ABCD is a kite, and one pair of its opposite angles is congruent. Since m∠B = 75°, the learner concludes m∠D = 75°.", a: "Deductive" }
  ],
  practice: [
    { level: "Easy", lesson: "2.1", q: "A pedestrian ramp has a trapezoidal side frame with bases of 18 m and 30 m. How long is the support joining the midpoints of the legs?", ans: 24, unit: "m", sol: "(18 + 30) ÷ 2 = 24 m" },
    { level: "Easy", lesson: "2.2", q: "A kite-shaped banner has diagonals of 20 cm and 36 cm. What is its area?", ans: 360, unit: "cm²", sol: "½ × 20 × 36 = 360 cm²" },
    { level: "Easy", lesson: "2.2", q: "A kite has two sides of 12 cm and two sides of 18 cm. What is its perimeter?", ans: 60, unit: "cm", sol: "2(12) + 2(18) = 24 + 36 = 60 cm" },
    { level: "Average", lesson: "2.1", q: "A trapezoidal garden beside a school walkway has one angle of 72°. What is the angle next to it along the same leg?", ans: 108, unit: "°", sol: "180° − 72° = 108°" },
    { level: "Average", lesson: "2.2", q: "A kite-shaped banner has an area of 360 cm², and one diagonal is 18 cm. How long is the other diagonal?", ans: 40, unit: "cm", sol: "360 = ½ × 18 × d = 9d, so d = 40 cm." },
    { level: "Average", lesson: "2.2", q: "Printing costs ₱2 per cm². How much does it cost to print a kite banner with diagonals of 20 cm and 36 cm?", ans: 720, unit: "pesos", sol: "Area = ½ × 20 × 36 = 360 cm². Cost = 360 × ₱2 = ₱720." },
    { level: "Difficult", lesson: "2.1", q: "A roof frame has bases of 14 m and 34 m. If the longer base is increased to 40 m, how long is the new horizontal support joining the midpoints of the legs?", ans: 27, unit: "m", sol: "(14 + 40) ÷ 2 = 27 m" },
    { level: "Difficult", lesson: "2.2", q: "A kite-shaped flower garden has two sides of 8 m and two sides of 13 m. How many meters of border go around it?", ans: 42, unit: "m", sol: "2(8) + 2(13) = 16 + 26 = 42 m" },
    { level: "Difficult", lesson: "2.1", q: "The midsegment of a trapezoid is 24 m, and the longer base is twice the shorter base. How long is the shorter base?", ans: 16, unit: "m", sol: "(b + 2b) ÷ 2 = 24, so 3b = 48 and b = 16 m." }
  ],
  check: [
    { lesson: "2.1", q: "A covered walkway frame is a trapezoid with bases of 18 m and 30 m. How long is the support joining the midpoints of its legs?", choices: ["20 m", "22 m", "24 m", "26 m"], ans: 2 },
    { lesson: "2.1", q: "One base angle of the walkway frame, an isosceles trapezoid, measures 70°. What is the angle next to it along the same leg?", choices: ["70°", "90°", "100°", "110°"], ans: 3 },
    { lesson: "2.2", q: "A kite-shaped display has diagonals of 24 cm and 18 cm. What is its area?", choices: ["108 cm²", "180 cm²", "216 cm²", "432 cm²"], ans: 2 },
    { lesson: "2.3", q: "A learner measures five isosceles trapezoids, finds congruent base angles every time, and concludes this is always true. What reasoning is this?", choices: ["Deductive reasoning", "Inductive reasoning", "Measurement reasoning", "Spatial reasoning"], ans: 1 },
    { lesson: "2.3", q: "Using the rule that angles along the same leg are supplementary, a learner finds that the angle next to 72° is 108°. What reasoning is this?", choices: ["Inductive reasoning", "Deductive reasoning", "Estimation", "Pattern recognition"], ans: 1 }
  ],
  enrich: "Write your own real-life trapezoid problem, for example about a covered walkway or a waiting shed in Siay, and swap it with a classmate. Or make a small kite from recycled materials, measure its diagonals, and work out its area.",
  exitQ: "Give one example of inductive reasoning and one of deductive reasoning from this week."
});
