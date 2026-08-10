const skillGroups = [
  {
    title: "Programming",
    skills: ["Python", "JavaScript", "TypeScript", "C++", "HTML", "CSS"],
  },
  {
    title: "Frontend",
    skills: ["React", "Vite", "Tailwind CSS", "Responsive Design"],
  },
  {
    title: "Artificial Intelligence",
    skills: [
      "Artificial Intelligence",
      "Natural Language Processing",
      "Large Language Models",
      "AI Application Development",
    ],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "VS Code", "PyCharm"],
  },
];

function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <p className="section-label">Technical Skills</p>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <article className="skill-card" key={group.title}>
              <h3>{group.title}</h3>

              <div className="skill-list">
                {group.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
