// Week 3 lesson content. Edit the text here; the site builds the page from it.
HUB.weeks.push({
  n: 3, strand: "geo", dates: "Sep 30–Oct 6", status: "ready",
  title: "Postulates, theorems, and triangle congruence",
  short: "Triangle congruence",
  competencies: [
    "State postulates and theorems about defined and undefined terms in geometry, and formulate proofs involving them.",
    "Use the triangle congruence postulates and theorems to illustrate congruence of triangles, including CPCTC."
  ],
  note: "Performance task: School Bulletin Board Frame Verification. You will decide whether two triangles are congruent, name the postulate, complete a two-column proof, use CPCTC, and write 3 to 5 sentences on how congruent triangles help builders make safe structures.",
  study: {
    refresh: ["The undefined terms: point, line, and plane.", "How to name a triangle by its vertices, such as △ABC.", "Corresponding parts: matching sides and angles in the same order."],
    words: ["postulate", "theorem", "included angle", "included side", "SSS", "SAS", "ASA", "AAS", "CPCTC", "two-column proof"],
    warm: { type: "mc", q: "△ABC ≅ △DEF. Which side corresponds to side BC?", choices: ["DE", "EF", "DF", "FE"], ans: 1, sol: "Match the letters in order: B goes with E and C goes with F, so BC corresponds to EF." }
  },
  lessons: [
    {
      id: "3.1", title: "Undefined terms, defined terms, and postulates", videos: [vid("Terms and labels in geometry", "https://www.khanacademy.org/math/4th-grade-illustrative-mathematics/xa755074f458c4b7e:angles-and-angle-measurement/xa755074f458c4b7e:untitled-1003/v/language-and-notation-of-basic-geometry")], figure: "terms",
      key: "Point, line, and plane are undefined terms: we describe them but do not define them. Segments, rays, and angles are defined terms built from them. A postulate is a statement we accept as true without proof.",
      points: [
        `<b>Undefined terms.</b> A <b>point</b> marks a location and has no size, like the tip of a pencil. A <b>line</b> is straight and goes on without end in both directions. A <b>plane</b> is a flat surface that goes on without end, like a whiteboard that never stops.`,
        `<b>Defined terms.</b> A <b>segment</b> such as ${o("DE")} has two endpoints, like the edge of a ruler. A <b>ray</b> has one endpoint and goes on in one direction. An <b>angle</b> is two rays with the same endpoint, like the corner of a book.`,
        `<b>Basic postulates.</b> Through any two points, there is exactly one line. If two lines intersect, they meet at exactly one point. Through any three noncollinear points, there is exactly one plane. If two points lie in a plane, the line through them lies in that plane.`
      ],
      example: {
        q: "The edge of a ruler has two endpoints. A flashlight beam starts at the bulb and goes on in one direction. Which figure does each one model?",
        steps: ["The ruler's edge has two endpoints, so it models a segment.", "The beam has one endpoint and goes on in one direction, so it models a ray.", "Both are defined terms, built from points and lines."]
      }
    },
    {
      id: "3.2", title: "Postulates, theorems, and vertical angles", videos: [vid("Vertical angles", "https://www.khanacademy.org/math/geometry/hs-geo-foundations/hs-geo-angles/v/angles-at-the-intersection-of-two-lines")], figure: ["vertical", "sorter"],
      key: "A postulate is accepted as true without proof. A theorem is proven using definitions, postulates, and theorems already proven. Vertical Angles Theorem: vertical angles are congruent.",
      points: [
        `<b>Postulate:</b> "Through any two distinct points, there is exactly one line." We accept it without proof.`,
        `<b>Theorem:</b> "Vertical angles are congruent." It can be proven from postulates and definitions.`,
        `<b>Two postulates used in proofs.</b> Segment Addition: if B is between A and C, then AB + BC = AC. Angle Addition: if ray BD is inside ∠ABC, then m∠ABD + m∠DBC = m∠ABC.`,
        `<b>Vertical angles</b> are the opposite angles formed by two intersecting lines. If m∠1 = 65°, the angle opposite it, ∠2, also measures 65°.`
      ],
      example: {
        q: "Two lines intersect, forming vertical angles ∠1 and ∠2. If m∠1 = (3x + 10)° and m∠2 = (5x − 14)°, find x and m∠1.",
        steps: ["Vertical angles are congruent, so 3x + 10 = 5x − 14.", "24 = 2x, so x = 12.", "m∠1 = 3(12) + 10 = 46°. Check: m∠2 = 5(12) − 14 = 46°."]
      }
    },
    {
      id: "3.3", title: "Triangle congruence: SSS, SAS, ASA, and AAS", videos: [vid("Determining congruent triangles", "https://en.khanacademy.org/math/math-1-illustrative-math-aligned/x193529144fa1e1f6:congruence/x193529144fa1e1f6:congruent-triangles-part-2/v/finding-congruent-triangles"), vid("Why SSA isn't a congruence postulate", "https://www.khanacademy.org/math/geometry-home/congruence/triangle-congruence/v/more-on-why-ssa-is-not-a-postulate")], figure: "congruence",
      key: "Two triangles are congruent when all their corresponding sides and angles are congruent. You only need three matching parts in the right pattern: SSS, SAS, ASA, or AAS.",
      points: [
        ctable(["Name", "Corresponding parts that must be congruent", "Type"], [
          ["SSS", "Three pairs of sides", "Postulate"],
          ["SAS", "Two pairs of sides and the <b>included angle</b> (the angle between those two sides)", "Postulate"],
          ["ASA", "Two pairs of angles and the <b>included side</b> (the side between those two angles)", "Postulate"],
          ["AAS", "Two pairs of angles and a <b>non-included side</b>", "Theorem (proven from ASA)"]
        ], "Ways to prove two triangles congruent"),
        `<b>Order matters.</b> In △ABC ≅ △DEF, A matches D, B matches E, and C matches F. So ${o("AB")} matches ${o("DE")}, and ∠C matches ∠F.`,
        `<b>Watch out.</b> SSA (two sides and an angle that is not between them) does not prove congruence. Neither does AAA: the triangles have the same shape but may have different sizes.`
      ],
      example: {
        q: "In △ABC and △DEF, AB = DE, ∠A = ∠D, and AC = DF. Which postulate proves the triangles congruent?",
        steps: ["The given parts are two sides, AB and AC, and one angle, ∠A.", "∠A is between AB and AC, so it is the included angle.", "Two sides and the included angle: △ABC ≅ △DEF by SAS."]
      }
    },
    {
      id: "3.4", title: "CPCTC and two-column proofs", videos: [vid("Corresponding parts of congruent triangles are congruent", "https://en.khanacademy.org/math/math1/x89d82521517266d4:congruence/x89d82521517266d4:congruent-triangles/v/congruent-triangles-and-sss")], figure: "cpctc",
      key: "CPCTC means Corresponding Parts of Congruent Triangles are Congruent. Once two triangles are proven congruent, every pair of matching sides and angles is congruent.",
      points: [
        `If △ABC ≅ △DEF, then ${o("AB")} ≅ ${o("DE")}, ${o("BC")} ≅ ${o("EF")}, ${o("AC")} ≅ ${o("DF")}, ∠A ≅ ∠D, ∠B ≅ ∠E, and ∠C ≅ ∠F.`,
        `<b>Finding measures.</b> If △ABC ≅ △DEF and AB = 8 cm, then DE = 8 cm. If m∠C = 50°, then m∠F = 50°.`,
        `<b>Two-column proof.</b> Write what is Given and what to Prove. List the statements on the left and a reason for each on the right: given, a definition, a postulate, or a theorem.`,
        proof([[`B is the midpoint of ${o("AC")}`, "Given"], [`${o("AB")} ≅ ${o("BC")}`, "Definition of midpoint"], ["AB = BC", "Definition of congruent segments"]], `Given: B is the midpoint of ${o("AC")}. Prove: AB = BC.`)
      ],
      example: {
        q: "△ABC ≅ △DEF. If AB = (5x − 7) cm and DE = (3x + 21) cm, find x and AB.",
        steps: ["AB and DE are corresponding sides, so by CPCTC, 5x − 7 = 3x + 21.", "2x = 28, so x = 14.", "AB = 5(14) − 7 = 63 cm. Check: DE = 3(14) + 21 = 63 cm."]
      }
    }
  ],
  sorterCfg: { title: "Postulate or theorem?", labels: ["Postulate", "Theorem"], hint: "Not quite. Ask yourself: is it accepted without proof, or has it been proven?" },
  sorter: [
    { s: "Through any two points, there is exactly one line.", a: "Postulate", why: "It is accepted as true without proof." },
    { s: "Vertical angles are congruent.", a: "Theorem", why: "It is proven from postulates and definitions: the Vertical Angles Theorem." },
    { s: "Through any three noncollinear points, there is exactly one plane.", a: "Postulate", why: "It is one of the basic postulates about points and planes." },
    { s: "If B is between A and C, then AB + BC = AC.", a: "Postulate", why: "This is the Segment Addition Postulate." },
    { s: "The base angles of an isosceles triangle are congruent.", a: "Theorem", why: "It is the Isosceles Triangle Theorem, which you will prove using congruent triangles." }
  ],
  practice: [
    { level: "Easy", lesson: "3.2", q: "Two lines intersect at point O. If m∠1 = 70°, what is the measure of its vertical angle, ∠2?", ans: 70, unit: "°", sol: "Vertical angles are congruent, so m∠2 = 70°." },
    { level: "Easy", lesson: "3.4", q: "△ABC ≅ △DEF. If BC = 12 cm, how long is EF?", ans: 12, unit: "cm", sol: "BC and EF are corresponding sides. By CPCTC, EF = 12 cm." },
    { level: "Easy", lesson: "3.3", q: "AB = DE, BC = EF, and AC = DF. Which postulate proves △ABC ≅ △DEF?", choices: ["SSS", "SAS", "ASA", "AAS"], ans: 0, sol: "All three pairs of corresponding sides are congruent, so the triangles are congruent by SSS." },
    { level: "Average", lesson: "3.2", q: "B is between A and C. If AB = 9 cm and BC = 14 cm, how long is AC?", ans: 23, unit: "cm", sol: "Segment Addition Postulate: AC = AB + BC = 9 + 14 = 23 cm." },
    { level: "Average", lesson: "3.3", q: "∠A ≅ ∠D, AB ≅ DE, and ∠B ≅ ∠E. Which postulate proves △ABC ≅ △DEF?", choices: ["SSS", "SAS", "ASA", "AAS"], ans: 2, sol: "AB is the side between ∠A and ∠B, so it is the included side. Two angles and the included side: ASA." },
    { level: "Average", lesson: "3.4", q: "△ABC ≅ △DEF, m∠A = 55°, and m∠B = 65°. What is m∠F?", ans: 60, unit: "°", sol: "m∠C = 180° − 55° − 65° = 60°. ∠C corresponds to ∠F, so by CPCTC, m∠F = 60°." },
    { level: "Difficult", lesson: "3.2", q: "Two vertical angles measure (4x − 6)° and (2x + 30)°. What is the measure of each angle?", ans: 66, unit: "°", sol: "Vertical angles are congruent: 4x − 6 = 2x + 30, so 2x = 36 and x = 18. Each angle is 4(18) − 6 = 66°." },
    { level: "Difficult", lesson: "3.4", q: "△ABC ≅ △DEF. AB = (2x + 2) cm and DE = (x + 8) cm. How long is AB?", ans: 14, unit: "cm", sol: "By CPCTC, 2x + 2 = x + 8, so x = 6. AB = 2(6) + 2 = 14 cm." },
    { level: "Difficult", lesson: "3.3", q: "∠A ≅ ∠D, ∠B ≅ ∠E, and BC ≅ EF. Which proves △ABC ≅ △DEF?", choices: ["SSS", "SAS", "ASA", "AAS"], ans: 3, sol: "BC is not between ∠A and ∠B, so it is a non-included side. Two angles and a non-included side: AAS." }
  ],
  check: [
    { lesson: "3.1", q: "Which of these is an undefined term in geometry?", choices: ["Angle", "Segment", "Ray", "Point"], ans: 3 },
    { lesson: "3.2", q: "\"Vertical angles are congruent\" is an example of a:", choices: ["Postulate", "Definition", "Theorem", "Undefined term"], ans: 2 },
    { lesson: "3.3", q: "Two triangular supports of a footbridge have two pairs of congruent sides, and the angles between those sides are congruent. Which postulate proves the supports congruent?", choices: ["SSS", "SAS", "ASA", "AAS"], ans: 1 },
    { lesson: "3.3", q: "Which set of corresponding parts does NOT prove two triangles congruent?", choices: ["Three pairs of sides", "Two sides and the included angle", "Two sides and an angle that is not between them", "Two angles and the included side"], ans: 2 },
    { lesson: "3.4", q: "△ABC ≅ △DEF and m∠C = 50°. What is m∠F?", choices: ["40°", "45°", "50°", "130°"], ans: 2 }
  ],
  enrich: "Look at roof trusses, window grills, gates, or bulletin board frames at school. Find a pair of triangles that look congruent, sketch them, mark the parts you think are congruent, and name the postulate (SSS, SAS, ASA, or AAS) that would prove it. Then write 3 to 5 sentences on how congruent triangles help builders make safe structures.",
  exitQ: "What is the difference between a postulate and a theorem? Which congruence postulate is easiest for you to spot, and why?"
});
