const focusAreas = [
  {
    title: "Artificial Intelligence",
    description:
      "Building practical AI-powered applications and intelligent software solutions.",
  },
  {
    title: "Software Development",
    description:
      "Designing maintainable applications with an emphasis on usability and real-world functionality.",
  },
  {
    title: "Full-Stack Development",
    description:
      "Developing modern web applications using React, TypeScript, Python, APIs, and databases.",
  },
  {
    title: "Automation",
    description:
      "Creating software that simplifies workflows and improves operational efficiency.",
  },
];

function FocusAreas() {
  return (
    <section id="focus" className="section">
      <div className="container">
        <p className="section-label">Focus</p>

        <div className="focus-grid">
          {focusAreas.map((area) => (
            <article className="focus-card" key={area.title}>
              <h3>{area.title}</h3>

              <p>{area.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FocusAreas;
