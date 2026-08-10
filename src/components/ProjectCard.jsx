function ProjectCard({ title, category, description, technologies, github }) {
  return (
    <article className="project-card">
      <p className="project-category">{category}</p>

      <h3>{title}</h3>

      <p className="project-description">{description}</p>

      <div className="technology-list">
        {technologies.map((technology) => (
          <span key={technology}>{technology}</span>
        ))}
      </div>

      <div className="project-links">
        {github && (
          <a href={github} target="_blank" rel="noreferrer">
            View on GitHub
          </a>
        )}
      </div>
    </article>
  );
}

export default ProjectCard;
