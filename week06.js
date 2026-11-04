// Week 6 lesson content. Edit the text here; the site builds the page from it.
HUB.weeks.push({
  n: 6, strand: "alg", dates: "Oct 26–29", status: "ready",
  title: "Quadratic relationships and their graphs",
  short: "Quadratic graphs",
  competencies: [
    "Represent real-life situations that can be modelled using quadratic relationships.",
    "Graph equations in two variables to represent quadratic relationships, such as y = ax², y = ax² + b, and y = a(x − b)²."
  ],
  study: {
    refresh: ["Plotting points on the Cartesian plane.", "Squaring negative numbers: (−3)² = 9, but −3² = −9.", "Making a table of values from an equation.", "Graphs of linear functions from Term 1."],
    words: ["quadratic", "parabola", "vertex", "axis of symmetry", "opens upward", "opens downward"],
    warm: { type: "num", q: "If y = x², what is y when x = −3?", ans: 9, unit: "", sol: "y = (−3)² = (−3)(−3) = 9" }
  },
  lessons: [
    {
      id: "6.1", title: "Representing quadratic relationships", videos: [vid("Interpreting a parabola in context", "https://www.khanacademy.org/math/algebra/x2f8bb11595b61c86:quadratic-functions-equations/x2f8bb11595b61c86:intro-parabolas/v/interpret-parabola-context")], figure: ["fence-explorer", "sorter"],
      key: "A quadratic relationship can be written as y = ax² + bx + c with a ≠ 0, so the highest power of the variable is 2. Its graph is a parabola: a smooth curve that is symmetric about a vertical line, opens upward or downward, and has one turning point, the vertex.",
      points: [
        `<b>Quadratic or not?</b> The area of a square pechay bed with side s is A = s², so it is quadratic. The cost of notebooks at ₱25 each is C = 25n. It grows by the same ₱25 each time, so it is linear, not quadratic.`,
        `<b>Things that rise and fall.</b> A sepak takraw ball kicked up at the covered court rises, reaches a highest point, then falls. Its height can be modeled by h = −5t² + 6t.`,
        `<b>Fence It, Plant It!</b> With 20 m of bamboo fence, length + width = 10, so the width is 10 − x and the area is A = x(10 − x) = −x² + 10x.`,
        tov([["Length x (m)", [1, 2, 3, 4, 5, 6, 7, 8, 9]], ["Width (m)", [9, 8, 7, 6, 5, 4, 3, 2, 1]], ["Area A (m²)", [9, 16, 21, 24, 25, 24, 21, 16, 9]]], "Table of values: A = x(10 − x)"),
        `The area rises from 9 m² to 25 m², then falls back to 9 m². The 5 m × 5 m plot gives the largest area, 25 m².`
      ],
      example: {
        q: "A square picture frame has a side of x cm. A border 2 cm wide is added all around it. Write the total area, and tell whether the relationship is quadratic.",
        steps: ["Outer side: x + 2 + 2 = x + 4.", "Area: A = (x + 4)².", "Expanded: A = x² + 8x + 16.", "The highest power of x is 2, so the relationship is quadratic."]
      }
    },
    {
      id: "6.2", title: "Graphing y = ax²", videos: [vid("Intro to parabola transformations", "https://www.khanacademy.org/math/math2/xe2ae2386aa2e13d6:quad-2/xe2ae2386aa2e13d6:quad-trans/v/shifting-and-scaling-parabolas")], figure: "pb-a",
      key: "The graph of y = ax² is a parabola with vertex (0, 0) and axis of symmetry x = 0. It opens upward if a > 0 and downward if a < 0. The larger |a| is, the narrower the graph.",
      points: [
        `<b>Table, plot, join.</b> Make a table of values for y = 2x², plot the points, and join them with a smooth curve. A parabola has no straight pieces and no sharp corner at the vertex.`,
        tov([["x", [-2, -1, 0, 1, 2]], ["y = 2x²", [8, 2, 0, 2, 8]]], "Table of values: y = 2x²"),
        ctable(["Value of a", "What happens to y = ax²", "Example"], [
          ["a > 0", "Opens upward; the vertex is the lowest point", "y = 2x²"],
          ["a < 0", "Opens downward; the vertex is the highest point, like a stage arch", "y = −x²"],
          ["|a| > 1", "Narrower than y = x²", "y = −2x²"],
          ["0 < |a| < 1", "Wider than y = x²", "y = ½x²"]
        ], "How a changes the graph"),
        `<b>Square first.</b> For y = −x² and x = −2: square first, (−2)² = 4, then apply the sign: y = −4.`
      ],
      example: {
        q: "Graph y = 3x². Give the vertex, the axis of symmetry, and the opening, and compare it with y = x².",
        steps: [`Make a table of values: ${tov([["x", [-2, -1, 0, 1, 2]], ["y = 3x²", [12, 3, 0, 3, 12]]])}`, "Vertex (0, 0); axis of symmetry x = 0.", "a = 3 > 0, so it opens upward.", "|3| > 1, so it is narrower than y = x²."]
      }
    },
    {
      id: "6.3", title: "Graphing y = ax² + b", videos: [vid("Intro to parabola transformations", "https://www.khanacademy.org/math/math2/xe2ae2386aa2e13d6:quad-2/xe2ae2386aa2e13d6:quad-trans/v/shifting-and-scaling-parabolas")], figure: "pb-ak",
      key: "Adding b moves the graph of y = ax² up b units (b > 0) or down |b| units (b < 0). The vertex is (0, b), and the shape stays the same.",
      points: [
        `y = x² + 3 is y = x² moved 3 units up, with vertex (0, 3). Every y-value is 3 more:`,
        tov([["x", [-2, -1, 0, 1, 2]], ["y = x²", [4, 1, 0, 1, 4]], ["y = x² + 3", [7, 4, 3, 4, 7]]], "Table of values: y = x² and y = x² + 3"),
        `y = x² − 2 is y = x² moved 2 units down, with vertex (0, −2).`,
        `<b>a still decides the shape.</b> y = 2x² + 4 opens upward and is narrower than y = x². y = −x² + 1 opens downward, with vertex (0, 1).`,
        `<b>Bamboo trellis.</b> The ampalaya trellis y = −½x² + 2 opens downward. It is 2 m high at the center and meets the ground (y = 0) at x = −2 and x = 2.`
      ],
      example: {
        q: "Graph y = −2x² + 3. Give the vertex, the opening, and the shift from y = −2x².",
        steps: [`Make a table of values: ${tov([["x", [-2, -1, 0, 1, 2]], ["y = −2x² + 3", [-5, 1, 3, 1, -5]]])}`, "Vertex (0, 3); axis of symmetry x = 0.", "a = −2 < 0, so it opens downward.", "It is the graph of y = −2x² moved 3 units up."]
      }
    },
    {
      id: "6.4", title: "Graphing y = a(x − b)²", videos: [vid("Intro to parabola transformations", "https://www.khanacademy.org/math/math2/xe2ae2386aa2e13d6:quad-2/xe2ae2386aa2e13d6:quad-trans/v/shifting-and-scaling-parabolas")], figure: "pb-ah",
      key: "y = a(x − b)² is the graph of y = ax² moved b units right (b > 0) or |b| units left (b < 0). Its vertex is (b, 0), and its axis of symmetry is x = b.",
      points: [
        `y = (x − 3)²: b = 3, vertex (3, 0), moved 3 units right. y = (x + 2)² = (x − (−2))²: b = −2, vertex (−2, 0), moved 2 units left.`,
        `<b>Watch the sign.</b> Inside the parentheses, x − 3 moves the graph right and x + 2 moves it left.`,
        `<b>Table tip.</b> Use x-values around b: b − 2, b − 1, b, b + 1, b + 2. For y = (x − 3)², b = 3:`,
        tov([["x", [1, 2, 3, 4, 5]], ["y = (x − 3)²", [4, 1, 0, 1, 4]]], "Table of values: y = (x − 3)²"),
        `<b>Drainage canal.</b> A canal shaped like y = ½(x − 2)² has its lowest point at (2, 0), the bottom of the canal.`
      ],
      example: {
        q: "Graph y = 2(x − 1)². Give a, b, the vertex, the axis of symmetry, and the opening.",
        steps: ["a = 2 and b = 1.", "Vertex (1, 0); axis of symmetry x = 1; it opens upward because a > 0.", `Table of values: ${tov([["x", [-1, 0, 1, 2, 3]], ["y = 2(x − 1)²", [8, 2, 0, 2, 8]]])}`, "It is the graph of y = 2x² moved 1 unit right."]
      }
    }
  ],
  sorterCfg: { title: "Quadratic or not?", labels: ["Quadratic", "Not quadratic"], hint: "Not quite. Is the variable squared, or does the quantity rise and then fall?" },
  sorter: [
    { s: "The height of fireworks during the Siay town fiesta", a: "Quadratic", why: "The fireworks rise, reach a highest point, and fall back, like h = −5t² + 40t." },
    { s: "The distance a tricycle travels at a constant 30 km/h", a: "Not quadratic", why: "d = 30t grows by the same 30 km each hour, so it is linear." },
    { s: "The perimeter of a square with side s", a: "Not quadratic", why: "P = 4s. The side is not squared, so it is linear." },
    { s: "The area of a circle with radius r", a: "Quadratic", why: "A = πr². The radius is squared." },
    { s: "The water arc from a hose in the Gulayan sa Paaralan", a: "Quadratic", why: "The water rises, reaches a highest point, and falls. Its path can be modeled by a parabola." },
    { s: "Your pay for x hours of work at ₱60 per hour", a: "Not quadratic", why: "Pay = 60x grows by the same ₱60 each hour, so it is linear." }
  ],
  practice: [
    { level: "Easy", lesson: "6.2", q: "If y = −x², what is y when x = −2?", ans: -4, unit: "", sol: "Square first: (−2)² = 4. Then y = −4." },
    { level: "Easy", lesson: "6.3", q: "The graph of y = x² + 5 is the graph of y = x² moved how many units up?", ans: 5, unit: "units", sol: "+5 moves every point 5 units up. The vertex is (0, 5)." },
    { level: "Easy", lesson: "6.1", q: "Which equation shows a quadratic relationship?", choices: ["C = 25n", "d = 30t", "A = s²", "P = 4s"], ans: 2, sol: "In A = s², the variable is squared, so the highest power is 2." },
    { level: "Average", lesson: "6.1", q: "With 16 m of fence, a rectangular eggplant plot has length x and area A = x(8 − x). What is the area when x = 3 m?", ans: 15, unit: "m²", sol: "A = 3(8 − 3) = 3 × 5 = 15 m²" },
    { level: "Average", lesson: "6.2", q: "Which graph is the narrowest?", choices: ["y = x²", "y = −2x²", "y = ½x²", "y = 3x²"], ans: 3, sol: "The larger |a| is, the narrower the graph. |3| is the largest." },
    { level: "Average", lesson: "6.4", q: "What is the x-coordinate of the vertex of y = −(x + 3)²?", ans: -3, unit: "", sol: "y = −(x − (−3))², so b = −3 and the vertex is (−3, 0)." },
    { level: "Difficult", lesson: "6.1", q: "With 20 m of bamboo fence, what is the largest possible area of a rectangular plot?", ans: 25, unit: "m²", sol: "A = x(10 − x). The table peaks at x = 5: A = 5 × 5 = 25 m²." },
    { level: "Difficult", lesson: "6.3", q: "A bamboo trellis follows y = −½x² + 2 (in meters). How high is it 1 m from the center (x = 1)?", ans: 1.5, unit: "m", sol: "y = −½(1)² + 2 = −0.5 + 2 = 1.5 m" },
    { level: "Difficult", lesson: "6.4", q: "A canal shaped like y = ½(x − 2)² is redesigned as y = ½(x − 3)². How does the graph change?", choices: ["It moves 1 unit right.", "It moves 1 unit left.", "It moves 3 units up.", "It becomes narrower."], ans: 0, sol: "b changes from 2 to 3, so the graph moves 1 more unit right. a stays ½, so the shape is the same." }
  ],
  check: [
    { lesson: "6.1", q: "A Gulayan plot has 16 m of fence and length x. Which equation gives its area?", choices: ["A = x² − 8x", "A = 8x", "A = −x² + 16x", "A = −x² + 8x"], ans: 3 },
    { lesson: "6.2", q: "Arch A is y = −x² and Arch B is y = −2x². Which arch is narrower?", choices: ["Arch A, since a = −1", "Arch B, since |−2| > |−1|", "They have the same width.", "Arch A, since −1 > −2"], ans: 1 },
    { lesson: "6.2", q: "Which way does the graph of y = −3x² open?", choices: ["Upward", "Downward", "To the left", "To the right"], ans: 1 },
    { lesson: "6.3", q: "Compared with y = −½x², the graph of y = −½x² + 2 is:", choices: ["2 units up", "2 units down", "2 units to the right", "narrower"], ans: 0 },
    { lesson: "6.4", q: "What is the vertex of y = (x + 2)²?", choices: ["(2, 0)", "(−2, 0)", "(0, 2)", "(0, −2)"], ans: 1 }
  ],
  enrich: "Find three parabolas around you: a ball's path at the covered court, the water arc from a hose, or an arched footbridge. Sketch each one, mark its vertex and axis of symmetry, and say whether it opens upward or downward. Challenge: write an equation y = ax² + b that could model one of them.",
  exitQ: "How do a and b change the graph of y = ax² + b? How does b change the graph of y = a(x − b)²?"
});
