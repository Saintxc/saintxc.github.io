import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Project Culper",
    category: "AI • Security • Web Application",
    description:
      "A web-based Security-as-a-Service platform designed for casino security operations. The application combines modern web development with artificial intelligence technologies to assist with intelligence reporting, case management, and operational workflows.",
    technologies: [
      "React",
      "TypeScript",
      "Python",
      "Docker",
      "PostgreSQL",
      "AI / NLP",
    ],
    github: "https://github.com/davincent/project-culper",
  },
  {
    title: "Rusty's Tuning",
    category: "Desktop Application • Audio",
    description:
      "A desktop audio tuning application designed for motorcycle audio systems. The software provides real-time audio analysis, DSP channel management, microphone input, tuning profiles, and system configuration tools.",
    technologies: ["Python", "PySide6", "DSP", "Audio Processing", "RTA"],
    github: "#",
  },
];

function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <p className="section-label">Portfolio</p>

        <h2 className="section-title">Featured Projects</h2>

        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
