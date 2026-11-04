// Week 5 lesson content. Edit the text here; the site builds the page from it.
HUB.weeks.push({
  n: 5, strand: "geo", dates: "Oct 19–22", status: "ready",
  title: "Constructions and two-column congruence proofs",
  short: "Constructions and proofs",
  competencies: [
    "Construct and justify the construction of segments, angles, and triangles, including the triangle's secondary parts and centers, using the triangle congruence postulates and theorems.",
    "Construct congruence proofs involving triangles or corresponding parts of triangles using a two-column proof."
  ],
  note: "Performance task: Designing and Proving a Safe Triangle Support Structure. See Lesson 5.4.",
  study: {
    refresh: ["Using a compass and a straightedge.", "The congruence postulates and CPCTC.", "Properties of equality, such as the reflexive property: AC = AC."],
    words: ["construction", "compass", "straightedge", "angle bisector", "median", "altitude", "centroid", "incenter", "circumcenter", "orthocenter", "reflexive property"],
    warm: { type: "mc", q: "In a proof, which reason supports the statement AC ≅ AC?", choices: ["Definition of midpoint", "Reflexive property", "Vertical angles are congruent", "CPCTC"], ans: 1, sol: "Any segment is congruent to itself. That is the reflexive property." }
  },
  lessons: [
    {
      id: "5.1", title: "Secondary parts and centers of a triangle", videos: [vid("Medians and the centroid", "https://www.youtube.com/watch?v=ktFnyORhrIM", "YouTube, from the Week 5 lesson plan"), vid("Constructing an altitude", "https://www.youtube.com/watch?v=UoTJXg2gosw", "YouTube, from the Week 5 lesson plan"), vid("Constructing an angle bisector", "https://www.youtube.com/watch?v=5ge-JWd90Hg&t=55s", "YouTube, from the Week 5 lesson plan"), vid("Constructing a perpendicular bisector", "https://www.youtube.com/watch?v=m01KrzeBu7E", "YouTube, from the Week 5 lesson plan")], figure: "secondary",
      key: "A triangle has four kinds of special lines: medians, altitudes, angle bisectors, and perpendicular bisectors. Where two of the same kind cross, you find a center: the centroid, orthocenter, incenter, or circumcenter.",
      points: [
        ctable(["Line or segment", "What it does", "Where they meet", "Special fact"], [
          ["Median", "Joins a vertex to the midpoint of the opposite side", "<b>centroid</b>", "The balance point. It is two-thirds of the way along each median from the vertex."],
          ["Altitude", "Goes from a vertex to the opposite side (or its extension) at a right angle", "<b>orthocenter</b>", "In an obtuse triangle, two altitudes fall outside the triangle."],
          ["Angle bisector", "Splits an angle into two congruent angles", "<b>incenter</b>", "The same distance from all three <i>sides</i>."],
          ["Perpendicular bisector", "Passes through the midpoint of a side at a right angle", "<b>circumcenter</b>", "The same distance from all three <i>vertices</i>."]
        ], "The four special lines of a triangle"),
        `<b>Finding a midpoint with a compass.</b> Open the compass to more than half the segment. Draw arcs above and below from both endpoints, then join the two crossing points. That line is the perpendicular bisector, and it crosses the segment at its midpoint.`
      ],
      example: {
        q: "The class drew the triangular Gulayan sa Paaralan plot △ABC. A post for the garden net must be the same distance from the three corners A, B, and C. Where should it go?",
        steps: ["Being the same distance from the vertices points to the perpendicular bisectors.", "Construct the perpendicular bisectors of two sides.", "Place the post where they cross: the circumcenter."]
      }
    },
    {
      id: "5.2", title: "Justifying constructions with congruent triangles", videos: [vid("Geometric constructions: angle bisector", "https://www.khanacademy.org/math/geometry/hs-geo-congruence/hs-geo-bisectors/v/constructing-an-angle-bisector-using-a-compass-and-straightedge")], figure: "bisect-construct",
      key: "A construction is correct because it hides congruent triangles. Find them, name the congruent parts, choose the postulate, and say what CPCTC proves.",
      points: [
        `<b>The six-question routine.</b> 1) What triangles were formed? 2) Which parts are congruent? 3) Why are they congruent? 4) Which postulate applies? 5) What does the congruence prove? 6) How do we say it in a complete sentence?`,
        `<b>Why SSS shows up so often.</b> If you keep the same compass width, every arc has the same radius. The compass makes congruent segments, not measured angles, so most constructions are justified by <b>SSS</b>.`,
        `<b>Copying an angle.</b> With the same compass widths, AP ≅ DR, AQ ≅ DS, and PQ ≅ RS. So △APQ ≅ △DRS by SSS, and ∠A ≅ ∠D by CPCTC.`,
        `<b>Watch out for SSA.</b> If the marked angle is not between the two marked sides, the parts form SSA, which does not prove congruence.`
      ],
      example: {
        q: "To bisect the peak angle P of a roof frame, Mang Ruben made PA ≅ PB and AM ≅ BM, then drew ray PM. Why does PM split ∠P into two equal angles?",
        steps: ["Triangles formed: △PAM and △PBM.", "PA ≅ PB and AM ≅ BM (same compass widths), and PM ≅ PM (reflexive property).", "So △PAM ≅ △PBM by SSS.", "By CPCTC, ∠APM ≅ ∠BPM, so ray PM bisects ∠P."]
      }
    },
    {
      id: "5.3", title: "Two-column congruence proofs", videos: [vid("Proving triangle congruence", "https://www.khanacademy.org/math/geometry/hs-geo-congruence/xff63fac4:hs-geo-congruent-triangles/v/proving-triangle-congruence")], figure: "truss",
      key: "A two-column proof goes from the Given to what you must Prove. Each statement on the left has a reason on the right.",
      points: [
        `<b>Reasons you will use.</b> Given · Definition of midpoint · Reflexive property · Vertical angles are congruent · Perpendicular lines form congruent right angles · SSS, SAS, ASA, AAS, HL · CPCTC`,
        `<b>The covered court truss.</b> In △ABC, king post ${o("BD")} meets ${o("AC")} at D.`,
        proof([
          [`D is the midpoint of ${o("AC")}`, "Given"],
          [`${o("AD")} ≅ ${o("CD")}`, "Definition of midpoint"],
          [`${o("BD")} ⊥ ${o("AC")}`, "Given"],
          ["∠ADB ≅ ∠CDB", "Perpendicular lines form congruent right angles"],
          [`${o("BD")} ≅ ${o("BD")}`, "Reflexive property"],
          ["△ABD ≅ △CBD", "SAS"],
          [`${o("AB")} ≅ ${o("CB")}`, "CPCTC"]
        ], `Given: D is the midpoint of ${o("AC")}, and ${o("BD")} ⊥ ${o("AC")}. Prove: △ABD ≅ △CBD.`),
        `<b>Tip.</b> CPCTC can only be used <i>after</i> the triangles are proven congruent.`
      ],
      example: {
        q: "Segments MK and PN cross at L. Given: ML ≅ LK and PL ≅ LN. Prove: △MLN ≅ △KLP and MN ≅ KP.",
        steps: ["ML ≅ LK · Given", "PL ≅ LN · Given", "∠MLN ≅ ∠KLP · Vertical angles are congruent", "△MLN ≅ △KLP · SAS", "MN ≅ KP · CPCTC"]
      }
    },
    {
      id: "5.4", title: "Performance task: a safe triangle support", videos: [vid("Proofs concerning isosceles triangles", "https://www.khanacademy.org/math/geometry/hs-geo-congruence/hs-geo-congruence-theorems/v/congruent-legs-and-base-angles-of-isosceles-triangles")], figure: "iso-median",
      key: "The median to the base of an isosceles triangle splits it into two congruent triangles, and it is perpendicular to the base.",
      points: [
        `<b>The task.</b> Copy a segment twice to build isosceles △ABC with ${o("AB")} ≅ ${o("CB")}. Construct the midpoint D of the base ${o("AC")} and draw the median ${o("BD")}, like the center post of a symmetric waiting-shed roof. Then prove your design is correct.`,
        proof([
          [`${o("AB")} ≅ ${o("CB")}`, "Given"],
          [`D is the midpoint of ${o("AC")}`, "Given"],
          [`${o("AD")} ≅ ${o("CD")}`, "Definition of midpoint"],
          [`${o("BD")} ≅ ${o("BD")}`, "Reflexive property"],
          ["△ABD ≅ △CBD", "SSS"],
          ["∠ADB ≅ ∠CDB", "CPCTC"],
          [`${o("BD")} ⊥ ${o("AC")}`, "∠ADB and ∠CDB are congruent and form a linear pair, so each is 90°"]
        ], `Given: ${o("AB")} ≅ ${o("CB")}, D is the midpoint of ${o("AC")}. Prove: △ABD ≅ △CBD and ${o("BD")} ⊥ ${o("AC")}.`),
        `<b>Why it matters.</b> The roof rests evenly on its center post, and the proof shows it. We don't have to rely on "it looks right."`
      ],
      example: {
        q: "In the roof frame △ABC, AB ≅ CB, and BD is the median to the base AC. If m∠ABD = 40°, find m∠CBD and m∠A.",
        steps: ["△ABD ≅ △CBD by SSS, so by CPCTC, m∠CBD = m∠ABD = 40°.", "BD ⊥ AC, so m∠ADB = 90°.", "In △ABD: m∠A = 180° − 90° − 40° = 50°."]
      }
    }
  ],
  practice: [
    { level: "Easy", lesson: "5.1", q: "Which segment joins a vertex to the midpoint of the opposite side?", choices: ["Altitude", "Median", "Angle bisector", "Perpendicular bisector"], ans: 1, sol: "A median joins a vertex to the midpoint of the opposite side." },
    { level: "Easy", lesson: "5.1", q: "Where do the three angle bisectors of a triangle meet?", choices: ["Centroid", "Orthocenter", "Incenter", "Circumcenter"], ans: 2, sol: "The angle bisectors meet at the incenter." },
    { level: "Easy", lesson: "5.3", q: "Segments MK and PN cross at L. Which reason supports ∠MLN ≅ ∠KLP?", choices: ["Given", "Reflexive property", "Vertical angles are congruent", "CPCTC"], ans: 2, sol: "∠MLN and ∠KLP are opposite angles formed by two crossing segments, so they are vertical angles." },
    { level: "Average", lesson: "5.1", q: "A median of a triangle is 18 cm long. How far is the centroid from the vertex, along this median?", ans: 12, unit: "cm", sol: "The centroid is two-thirds of the way from the vertex: ⅔ × 18 = 12 cm." },
    { level: "Average", lesson: "5.2", q: "Rafters CA ≅ CB, the center post CD ⊥ AB at D, and CD is shared. Which proves △CAD ≅ △CBD?", choices: ["SSS", "ASA", "HL", "AAS"], ans: 2, sol: "Both are right triangles (CD ⊥ AB). The hypotenuses CA and CB are congruent, and the leg CD is shared, so HL applies." },
    { level: "Average", lesson: "5.3", q: "D is the midpoint of AC. Which reason supports AD ≅ CD?", choices: ["Given", "Definition of midpoint", "Reflexive property", "CPCTC"], ans: 1, sol: "A midpoint divides a segment into two congruent parts: definition of midpoint." },
    { level: "Difficult", lesson: "5.2", q: "A learner wrote: \"△CAD ≅ △CBD because CA ≅ CB, CD ≅ CD, and ∠CAD ≅ ∠CBD.\" Is this valid?", choices: ["Yes, by SAS", "Yes, by SSS", "No: the angle is not between the two sides (SSA)", "No: four pairs of parts are needed"], ans: 2, sol: "∠CAD is not between CA and CD, so the parts form SSA, which does not prove congruence." },
    { level: "Difficult", lesson: "5.4", q: "BD is the median to the base of isosceles △ABC (AB ≅ CB). AD = (3x − 4) cm and DC = (x + 8) cm. How long is the base AC?", ans: 28, unit: "cm", sol: "D is the midpoint, so 3x − 4 = x + 8 and x = 6. AD = 14 cm, so AC = 2 × 14 = 28 cm." },
    { level: "Difficult", lesson: "5.4", q: "In isosceles △ABC with AB ≅ CB, BD is the median to the base. If m∠A = 52°, what is m∠ABD?", ans: 38, unit: "°", sol: "The median to the base is perpendicular to it, so m∠ADB = 90°. m∠ABD = 180° − 90° − 52° = 38°." }
  ],
  check: [
    { lesson: "5.1", q: "Jessa wants a straight path from gate A to the exact middle of the opposite fence BC. Which line should she construct?", choices: ["Altitude", "Median", "Angle bisector", "Perpendicular bisector"], ans: 1 },
    { lesson: "5.1", q: "A sprinkler must be the same distance from the three sides of a triangular plot. Where should it go?", choices: ["Centroid", "Orthocenter", "Incenter", "Circumcenter"], ans: 2 },
    { lesson: "5.2", q: "Why are most compass-and-straightedge constructions justified by SSS?", choices: ["The compass keeps the same width, so it makes congruent segments.", "The compass measures angles exactly.", "Straightedges are marked in centimeters.", "Triangles always have three equal sides."], ans: 0 },
    { lesson: "5.3", q: "In the truss proof, BD ⊥ AC is given. Which reason supports ∠ADB ≅ ∠CDB?", choices: ["Vertical angles are congruent", "Perpendicular lines form congruent right angles", "Definition of midpoint", "CPCTC"], ans: 1 },
    { lesson: "5.3", q: "After proving △ABD ≅ △CBD, which reason supports AB ≅ CB?", choices: ["Given", "SAS", "Definition of median", "CPCTC"], ans: 3 }
  ],
  enrich: "Recreate the four constructions in GeoGebra (geogebra.org/geometry). Drag a vertex to make the triangle acute, right, and then obtuse. Which centers move outside the triangle? Or draw a figure with a pair of hidden congruent triangles and challenge a classmate or family member to find them and name the postulate.",
  exitQ: "Why can we trust a compass construction more than a line that only looks like it is in the middle?"
});
