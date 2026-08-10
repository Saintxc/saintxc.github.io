function Hero() {
  return (
    <section id="home" className="hero section">
      <div className="container hero-content">
        <p className="eyebrow">COMPUTER SCIENCE | ARTIFICIAL INTELLIGENCE</p>

        <h1>Zacary Spaulding</h1>

        <p className="hero-description">
          Computer Science student specializing in Artificial Intelligence,
          software development, and modern application development.
        </p>

        <div className="hero-actions">
          <a href="#projects" className="button primary-button">
            View Projects
          </a>

          <a
            href="https://github.com/saintxc"
            target="_blank"
            rel="noreferrer"
            className="button secondary-button"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
