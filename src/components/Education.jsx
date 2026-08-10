function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        <p className="section-label">Education</p>

        <div className="education-list">
          <article className="education-card">
            <div>
              <h3>Full Sail University</h3>

              <p className="degree">Bachelor of Science in Computer Science</p>

              <p>Concentration in Artificial Intelligence</p>
            </div>

            <div className="education-date">Expected September 2026</div>
          </article>

          <article className="education-card">
            <div>
              <h3>Full Sail University</h3>

              <p className="degree">Associate of Science in Computer Science</p>
            </div>

            <div className="education-date">Graduated August 2025</div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Education;
