// Week 8 lesson content. Edit the text here; the site builds the page from it.
HUB.weeks.push({
  n: 8, strand: "alg", dates: "", status: "study",
  title: "Sketching parabolas and the effects of a, h, and k",
  short: "Sketching parabolas",
  competencies: [
    "Sketch the graph of quadratic functions expressed in equation form.",
    "Analyze the effect of changing the values of the parameters on the behavior of the graph and on the properties of y = a(x − h)² + k."
  ],
  study: {
    refresh: ["The vertex form y = a(x − h)² + k from Week 7.", "Making a table of values around the vertex."],
    words: ["parameter", "stretch", "shrink", "shift", "reflection"],
    warm: { type: "mc", q: "Which graph is wider?", choices: ["y = x²", "y = 0.5x²", "y = 2x²", "They are the same width"], ans: 1, sol: "When a is between 0 and 1, the parabola is wider than y = x²." }
  }
});
