// Week 4 lesson content. Edit the text here; the site builds the page from it.
HUB.weeks.push({
  n: 4, strand: "geo", dates: "Oct 12–15", status: "ready",
  title: "Right triangle, isosceles triangle, perpendicular bisector, and midline theorems",
  short: "Triangle theorems",
  competencies: ["Solve problems involving right triangle congruence theorems, the isosceles triangle theorem, the perpendicular bisector theorem, and the midline theorem."],
  note: "Written test on the HL, Isosceles Triangle, Perpendicular Bisector, and Midline Theorems. Use the Check below to review.",
  study: {
    refresh: ["SSS, SAS, ASA, and AAS from Week 3.", "The parts of a right triangle: the hypotenuse and two legs.", "A midpoint cuts a segment into two equal parts."],
    words: ["hypotenuse", "HL theorem", "isosceles triangle", "base angles", "perpendicular bisector", "equidistant", "midline"],
    warm: { type: "num", q: "In an isosceles triangle, each base angle measures 50°. What is the vertex angle?", ans: 80, unit: "°", sol: "180° − 50° − 50° = 80°" }
  },
  lessons: [
    {
      id: "4.1", title: "The HL (Hypotenuse-Leg) Theorem", figure: "hl",
      key: "HL Theorem: if the hypotenuse and a leg of one right triangle are congruent to the hypotenuse and a leg of another right triangle, then the two right triangles are congruent.",
      points: [
        `<b>Three conditions.</b> Both triangles are right triangles. Their hypotenuses are congruent. One pair of corresponding legs is congruent.`,
        `The <b>hypotenuse</b> is the side opposite the right angle. It is always the longest side. The other two sides are the <b>legs</b>.`,
        `<b>HL, then CPCTC.</b> Right triangles PQR and XYZ have right angles at Q and Y, PR = XZ = 13 cm, and PQ = XY = 5 cm. They are congruent by HL. So if QR = 12 cm, then YZ = 12 cm.`,
        `HL works only for right triangles. For other triangles, use SSS, SAS, ASA, or AAS.`
      ],
      example: {
        q: "Two ladders lean on a straight wall. Each is 6.5 m long, and the foot of each is 2.5 m from the wall. Are the right triangles they form congruent? How high does each ladder reach?",
        steps: ["The wall meets the ground at a right angle, so both are right triangles.", "The ladders are the hypotenuses: 6.5 m = 6.5 m.", "The distances from the wall are corresponding legs: 2.5 m = 2.5 m.", "So the triangles are congruent by HL.", "Height: √(6.5² − 2.5²) = √(42.25 − 6.25) = √36 = 6 m for both ladders."]
      }
    },
    {
      id: "4.2", title: "The Isosceles Triangle Theorem", videos: [vid("Finding angles in isosceles triangles", "https://www.khanacademy.org/math/geometry/hs-geo-congruence/hs-geo-working-with-triangles/v/another-isosceles-example-problem")], figure: "iso-explorer",
      key: "If two sides of a triangle are congruent, then the angles opposite those sides are congruent. So the base angles of an isosceles triangle are congruent.",
      points: [
        `<b>Parts.</b> The two congruent sides are the <b>legs</b>. The third side is the <b>base</b>. The angles opposite the legs are the <b>base angles</b>. The angle between the legs is the <b>vertex angle</b>.`,
        `In △ABC, if ${o("AB")} ≅ ${o("AC")}, then ∠B ≅ ∠C.`,
        `<b>The converse is also true.</b> If two angles of a triangle are congruent, the sides opposite them are congruent. In △STU with ∠T ≅ ∠U and SU = 14 cm, ST = 14 cm.`,
        `<b>Finding the vertex angle.</b> The angles add up to 180°, so the vertex angle = 180° − 2 × (base angle).`
      ],
      example: {
        q: "In △ABC, AB = AC, m∠B = (3x + 10)°, and m∠C = (5x − 6)°. Find x, the base angles, and the vertex angle.",
        steps: ["The base angles are congruent, so 3x + 10 = 5x − 6.", "16 = 2x, so x = 8.", "Each base angle: 3(8) + 10 = 34°.", "Vertex angle: 180° − 2(34°) = 112°."]
      }
    },
    {
      id: "4.3", title: "The Perpendicular Bisector and Midline Theorems", videos: [vid("Circumcenter of a triangle (points on a perpendicular bisector)", "https://www.khanacademy.org/math/geometry/triangle-properties/perpendicular_bisectors/v/circumcenter-of-a-triangle"), vid("Exploring medial triangles (midsegments)", "https://www.khanacademy.org/math/geometry-tx/x790e3ac3e338c450:similarity-in-triangles/x790e3ac3e338c450:special-segments-in-triangles/v/exploring-medial-triangles")], figure: "perp-mid",
      key: "A point on the perpendicular bisector of a segment is the same distance from both endpoints, and the converse is true. A midline of a triangle is parallel to the third side and half as long.",
      points: [
        `A <b>perpendicular bisector</b> of a segment passes through its midpoint and is perpendicular to it.`,
        `<b>Perpendicular Bisector Theorem.</b> If P is on the perpendicular bisector of ${o("AB")}, then PA = PB. <b>Converse:</b> if PA = PB, then P is on the perpendicular bisector of ${o("AB")}.`,
        `<b>Where should we place it?</b> To put a handwashing station the same distance from two classrooms, place it on the perpendicular bisector of the segment joining them.`,
        `<b>Midline Theorem.</b> The segment joining the midpoints of two sides of a triangle is parallel to the third side and half its length: <span class="f">midline = ½ × third side</span>.`
      ],
      example: {
        q: "A triangular school garden has a 20 m base. A walkway will join the midpoints of the other two sides. How long is the walkway, and how does it sit?",
        steps: ["The walkway joins the midpoints of two sides, so it is a midline.", "Midline = ½ × 20 = 10 m.", "By the Midline Theorem, the walkway is parallel to the 20 m base."]
      }
    }
  ],
  practice: [
    { level: "Easy", lesson: "4.2", q: "The base angles of an isosceles triangle measure 55° each. What is the vertex angle?", ans: 70, unit: "°", sol: "180° − 55° − 55° = 70°" },
    { level: "Easy", lesson: "4.3", q: "Segment CD = 24 cm, and N is its midpoint. How long is CN?", ans: 12, unit: "cm", sol: "The midpoint cuts CD into two equal parts: 24 ÷ 2 = 12 cm." },
    { level: "Easy", lesson: "4.3", q: "One side of a triangle measures 16 cm. How long is the midline parallel to that side?", ans: 8, unit: "cm", sol: "Midline = ½ × 16 = 8 cm" },
    { level: "Average", lesson: "4.1", q: "Two wheelchair ramps form right triangles. Each has a hypotenuse of 12 m and a leg of 5 m. Are the triangles congruent?", choices: ["Yes, by HL", "Yes, by SSS", "No, a third side is needed", "No, they are not right triangles"], ans: 0, sol: "Both are right triangles with congruent hypotenuses and a congruent pair of legs, so they are congruent by HL." },
    { level: "Average", lesson: "4.2", q: "The gable of a school building is an isosceles triangle with a base angle of 28°. What is the vertex angle?", ans: 124, unit: "°", sol: "Both base angles are 28°. Vertex angle = 180° − 2(28°) = 124°." },
    { level: "Average", lesson: "4.3", q: "Point P is on the perpendicular bisector of AB. PA = (2x + 3) cm and PB = (x + 9) cm. How long is PA?", ans: 15, unit: "cm", sol: "PA = PB, so 2x + 3 = x + 9 and x = 6. PA = 2(6) + 3 = 15 cm." },
    { level: "Difficult", lesson: "4.2", q: "In △ABC, AB = AC, m∠B = (2x + 15)°, and m∠C = (4x − 5)°. What is the vertex angle, m∠A?", ans: 110, unit: "°", sol: "2x + 15 = 4x − 5, so x = 10. Each base angle is 35°. m∠A = 180° − 70° = 110°." },
    { level: "Difficult", lesson: "4.2", q: "In △XYZ, ∠Y ≅ ∠Z, XY = (3a + 2) cm, and XZ = (5a − 6) cm. How long is XY?", ans: 14, unit: "cm", sol: "Sides opposite congruent angles are congruent, so XY = XZ: 3a + 2 = 5a − 6 and a = 4. XY = 3(4) + 2 = 14 cm." },
    { level: "Difficult", lesson: "4.3", q: "A midline of a triangle measures (x + 3) cm, and the side parallel to it measures (3x − 4) cm. How long is the midline?", ans: 13, unit: "cm", sol: "The side is twice the midline: 2(x + 3) = 3x − 4, so 2x + 6 = 3x − 4 and x = 10. Midline = 10 + 3 = 13 cm (the side is 26 cm)." }
  ],
  check: [
    { lesson: "4.1", q: "Ramp A and Ramp B are right triangles, each with a hypotenuse of 10 m and a leg of 6 m. Which theorem proves the ramps congruent?", choices: ["SSS", "SAS", "Isosceles Triangle Theorem", "HL Theorem"], ans: 3 },
    { lesson: "4.2", q: "A roof frame △ABC has AB = AC and m∠B = 50°. What is the vertex angle, ∠A?", choices: ["60°", "70°", "80°", "90°"], ans: 2 },
    { lesson: "4.2", q: "In △DEF, ∠E ≅ ∠F and DE = 3 m. Which statement is correct?", choices: ["DF = 3 m, because sides opposite congruent angles are congruent.", "EF = 3 m, because the base equals the legs.", "DF = 6 m, because it is twice DE.", "DF cannot be found."], ans: 0 },
    { lesson: "4.3", q: "Point P is 8 cm from A and 8 cm from B. Which statement must be true?", choices: ["P is the midpoint of AB.", "P is on the perpendicular bisector of AB.", "P is on segment AB.", "P is on line AB."], ans: 1 },
    { lesson: "4.3", q: "A triangular garden has an 18 m side. A walkway joins the midpoints of the other two sides. How long is the walkway?", choices: ["6 m", "8 m", "9 m", "36 m"], ans: 2 }
  ],
  enrich: "Sketch one structure at school or at home that forms a right triangle (a ramp, a staircase, a roof brace) and one that forms an isosceles triangle. Label the hypotenuse and legs, or the legs and base angles. Then draw a simple map of your classroom and use a perpendicular bisector to place something the same distance from two doors.",
  exitQ: "Which theorem helps you place a water station the same distance from two classrooms? Why?"
});
