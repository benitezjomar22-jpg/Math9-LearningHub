// Week 7 lesson content. Edit the text here; the site builds the page from it.
HUB.weeks.push({
  n: 7, strand: "alg", dates: "", status: "ready",
  title: "Features of a parabola and the vertex form",
  short: "Parabola features",
  competencies: [
    "Interpret features of a parabola such as the vertex, axis of symmetry, x-intercepts, opening direction, minimum or maximum value, zeros, and increasing and decreasing intervals.",
    "Transform the quadratic functions y = ax², y = ax² + b, y = a(x − b)², and y = ax² + bx + c into the form y = a(x − h)² + k, and back."
  ],
  note: "Summative test on Weeks 4 to 7. To review, retake the Check in Weeks 4, 5, 6, and 7.",
  study: {
    refresh: ["The Week 6 graphs: y = ax², y = ax² + b, and y = a(x − b)².", "Squaring a binomial: (x + 3)² = x² + 6x + 9.", "Perfect square trinomials, such as x² − 8x + 16 = (x − 4)²."],
    words: ["vertex form", "vertex", "axis of symmetry", "x-intercept", "zeros", "maximum", "minimum", "increasing", "decreasing", "completing the square"],
    warm: { type: "mc", q: "What is the vertex of y = 2(x − 3)² + 5?", choices: ["(−3, 5)", "(3, 5)", "(3, −5)", "(2, 5)"], ans: 1, sol: "In y = a(x − h)² + k, the vertex is (h, k). Here h = 3 and k = 5. Watch the sign: x − 3 means h = 3." }
  },
  lessons: [
    {
      id: "7.1", title: "Reading the vertex form", videos: [vid("Vertex form introduction", "https://www.khanacademy.org/math/algebra/x2f8bb11595b61c86:quadratic-functions-equations/x2f8bb11595b61c86:vertex-form/v/vertex-form-intro")], figure: "pb-ahk",
      key: "In vertex form y = a(x − h)² + k, the vertex is (h, k) and the axis of symmetry is x = h. If a > 0, the parabola opens upward and the vertex is its lowest point. If a < 0, it opens downward and the vertex is its highest point.",
      points: [
        ctable(["Feature", "How to read it from y = a(x − h)² + k", "For y = 2(x − 3)² + 1"], [
          ["Vertex", "(h, k)", "(3, 1)"],
          ["Axis of symmetry", "x = h", "x = 3"],
          ["Opening", "Upward if a > 0; downward if a < 0", "Upward, since a = 2 > 0"],
          ["Lowest or highest point", "Lowest if a > 0; highest if a < 0", "(3, 1) is the lowest point"]
        ], "Reading the vertex form"),
        tov([["x", [1, 2, 3, 4, 5]], ["y = 2(x − 3)² + 1", [9, 3, 1, 3, 9]]], "Table of values: equal y-values on both sides of x = 3"),
        `<b>Watch the sign of h.</b> y = (x + 4)² − 1 = (x − (−4))² − 1, so the vertex is (−4, −1), not (4, −1).`,
        `<b>The Week 6 forms fit in.</b> y = ax² has h = 0 and k = 0. y = ax² + b has h = 0 and k = b. y = a(x − b)² has h = b and k = 0.`
      ],
      example: {
        q: "The water arc from the Gulayan hose follows y = −(x − 2)² + 4, in meters. Find the vertex, the axis of symmetry, and the opening. Is the vertex the highest or lowest point?",
        steps: ["a = −1, h = 2, k = 4.", "Vertex (2, 4); axis of symmetry x = 2.", "a < 0, so the arc opens downward.", "The vertex is the highest point: the water reaches 4 m."]
      }
    },
    {
      id: "7.2", title: "Maximum, minimum, and zeros", videos: [vid("Graphing quadratics in factored form (zeros and vertex)", "https://www.khanacademy.org/math/algebra/x2f8bb11595b61c86:quadratic-functions-equations/x2f8bb11595b61c86:factored-form-quadratics/v/graphing-quadratics-in-factored-form")], figure: "zeros-plot",
      key: "The y-coordinate of the vertex is the minimum value when the parabola opens upward, and the maximum value when it opens downward. The zeros are the x-values that make y = 0, where the graph meets the x-axis.",
      points: [
        `<b>y = (x − 3)² − 4</b> opens upward, so its minimum value is −4, at x = 3.`,
        `<b>Zeros:</b> let y = 0. (x − 3)² − 4 = 0, so (x − 3)² = 4 and x − 3 = ±2. x = 1 or x = 5. The graph crosses the x-axis at (1, 0) and (5, 0).`,
        `<b>Factoring works too.</b> y = x² − 6x + 8 = (x − 2)(x − 4), so the zeros are 2 and 4.`,
        `<b>No real zeros.</b> y = 2(x − 1)² + 3 opens upward, and its lowest point (1, 3) is above the x-axis, so the graph never touches the x-axis.`,
        `<b>Increasing and decreasing.</b> Read the graph from left to right. y = (x − 3)² − 4 goes down (decreasing) when x < 3 and goes up (increasing) when x > 3. A parabola that opens downward does the opposite.`
      ],
      example: {
        q: "During PE, a volleyball tossed up from the floor has height h(t) = −5t² + 10t meters after t seconds. When does it land, and how high does it go?",
        steps: ["Let h = 0: −5t² + 10t = 0, so −5t(t − 2) = 0.", "t = 0 (the toss) or t = 2. It lands after 2 seconds.", "The vertex is halfway, at t = 1: h = −5(1)² + 10(1) = 5 m.", `Table of values: ${tov([["t (s)", [0, 0.5, 1, 1.5, 2]], ["h (m)", [0, 3.75, 5, 3.75, 0]]])}`, "a = −5 < 0, so 5 m is the maximum height."]
      }
    },
    {
      id: "7.3", title: "Completing the square", videos: [vid("Finding the vertex of a parabola in standard form", "https://en.khanacademy.org/math/algebra/quadratics/quad-standard-form-alg1/v/ex3-completing-the-square")], figure: "complete-square",
      key: "To change y = ax² + bx + c into vertex form, complete the square: add and subtract (half of the coefficient of x)², then write the perfect square trinomial as a square.",
      points: [
        `<b>Perfect square trinomials.</b> x² + 6x + 9 = (x + 3)² and x² − 8x + 16 = (x − 4)². The constant is (half of the coefficient of x)².`,
        ctable(["Step", "What to do", "y = x² − 6x + 5"], [
          ["1", "Group the x-terms", "y = (x² − 6x) + 5"],
          ["2", "Take half of the coefficient of x, then square it", "(−6 ÷ 2)² = 9"],
          ["3", "Add and subtract that number", "y = (x² − 6x + 9) − 9 + 5"],
          ["4", "Write the perfect square trinomial as a square", "y = (x − 3)² − 4"],
          ["5", "Read the vertex (h, k)", "(3, −4)"]
        ], "Completing the square when a = 1"),
        `<b>When a ≠ 1,</b> factor a out of the x-terms first. y = 2x² − 8x + 3 = 2(x² − 4x + 4) − 2(4) + 3 = 2(x − 2)² − 5. Vertex (2, −5). The number subtracted is 2 × 4 = 8, not 4.`,
        `<b>Check with h = −b ÷ (2a).</b> For y = 2x² − 8x + 3: h = 8 ÷ 4 = 2, and k = 2(2)² − 8(2) + 3 = −5. ✓`,
        `<b>And back again.</b> y = 2(x − 1)² + 3 = 2(x² − 2x + 1) + 3 = 2x² − 4x + 5.`
      ],
      example: {
        q: "The Siay NHS TLE Food Fair profit is P(x) = −2x² + 12x − 7, in hundreds of pesos, for x trays sold. Write it in vertex form and find the greatest profit.",
        steps: ["Factor −2 out of the x-terms: P = −2(x² − 6x) − 7.", "(−6 ÷ 2)² = 9: P = −2(x² − 6x + 9) + 18 − 7.", "P = −2(x − 3)² + 11, so the vertex is (3, 11).", "Selling 3 trays gives the greatest profit: 11 hundred pesos, or ₱1,100."]
      }
    }
  ],
  practice: [
    { level: "Easy", lesson: "7.1", q: "What is the vertex of y = −2(x + 3)² + 5?", choices: ["(3, 5)", "(−3, 5)", "(−3, −5)", "(−2, 5)"], ans: 1, sol: "x + 3 = x − (−3), so h = −3. k = 5. Vertex (−3, 5)." },
    { level: "Easy", lesson: "7.1", q: "The axis of symmetry of y = (x − 4)² + 1 is x = ?", ans: 4, unit: "", sol: "The axis of symmetry is x = h, and h = 4." },
    { level: "Easy", lesson: "7.2", q: "What is the minimum value of y = 2(x + 1)² − 8?", ans: -8, unit: "", sol: "a = 2 > 0, so it opens upward. The minimum is k = −8, at x = −1." },
    { level: "Average", lesson: "7.2", q: "y = x² − 9 has two zeros. What is the positive one?", ans: 3, unit: "", sol: "x² − 9 = 0, so x² = 9 and x = ±3. The positive zero is 3." },
    { level: "Average", lesson: "7.2", q: "Which function has no real zeros?", choices: ["y = x² − 9", "y = (x − 3)² − 4", "y = x² + 4", "y = −(x − 2)² + 16"], ans: 2, sol: "y = x² + 4 opens upward, and its lowest point (0, 4) is above the x-axis, so it never meets the x-axis." },
    { level: "Average", lesson: "7.3", q: "What number completes the perfect square trinomial x² + 10x + ___?", ans: 25, unit: "", sol: "(10 ÷ 2)² = 5² = 25, and x² + 10x + 25 = (x + 5)²." },
    { level: "Difficult", lesson: "7.2", q: "A water-bottle rocket's height is h(t) = −5t² + 15t meters after t seconds. What is its maximum height?", ans: 11.25, unit: "m", sol: "It lands when −5t(t − 3) = 0, at t = 3. The vertex is halfway, at t = 1.5: h = −5(2.25) + 15(1.5) = −11.25 + 22.5 = 11.25 m." },
    { level: "Difficult", lesson: "7.3", q: "Write y = x² − 2x − 8 in the form y = (x − h)² + k. What is k?", ans: -9, unit: "", sol: "y = (x² − 2x + 1) − 1 − 8 = (x − 1)² − 9. So k = −9 and the vertex is (1, −9)." },
    { level: "Difficult", lesson: "7.3", q: "Write y = 3x² − 12x + 7 in vertex form. What is the y-coordinate of the vertex?", ans: -5, unit: "", sol: "y = 3(x² − 4x + 4) − 12 + 7 = 3(x − 2)² − 5. The vertex is (2, −5)." }
  ],
  check: [
    { lesson: "7.1", q: "The school stage arch follows y = −2(x + 3)² + 5. Which describes it?", choices: ["Vertex (−3, 5), opens downward", "Vertex (3, 5), opens downward", "Vertex (−3, 5), opens upward", "Vertex (3, −5), opens upward"], ans: 0 },
    { lesson: "7.1", q: "What is the axis of symmetry of y = ½(x − 1)² − 2?", choices: ["x = −1", "x = 1", "x = −2", "y = −2"], ans: 1 },
    { lesson: "7.2", q: "A canal beside the school follows y = 2(x + 1)² − 8. Does it have a minimum or a maximum, and what is it?", choices: ["Maximum, −8", "Minimum, −8", "Minimum, −1", "Maximum, 8"], ans: 1 },
    { lesson: "7.2", q: "What are the zeros of y = x² − x − 12?", choices: ["x = 12 or x = −1", "x = −4 or x = 3", "x = 6 or x = −2", "x = 4 or x = −3"], ans: 3 },
    { lesson: "7.3", q: "Which is y = x² − 8x + 10 written in vertex form?", choices: ["y = (x − 4)² − 6", "y = (x + 4)² − 6", "y = (x − 4)² + 10", "y = (x − 8)² − 54"], ans: 0 }
  ],
  enrich: "Find a parabola in Siay, such as a basketball shot, a footbridge arch, or a satellite dish, and write a vertex-form equation that could model it. Explain what its vertex, axis of symmetry, and zeros mean for that object. Challenge: change y = −x² + 6x − 5 into vertex form and find where the water arc lands.",
  exitQ: "If you know the vertex form of a parabola, what can you tell about its graph without plotting any points?"
});
