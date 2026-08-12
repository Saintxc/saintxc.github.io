function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container contact-container">
        <p className="section-label">Contact</p>

        <p className="contact-description">
          I'm interested in opportunities involving software development,
          artificial intelligence, full-stack development, and practical
          AI-powered solutions.
        </p>

        <div className="contact-links">
          <a
            href="https://github.com/saintxc"
            target="_blank"
            rel="noreferrer"
            className="contact-button"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/zacary-spaulding/"
            target="_blank"
            rel="noreferrer"
            className="contact-button"
          >
            LinkedIn
          </a>

          <a
            href="mailto:zacary.spaulding@gmail.com"
            className="contact-button contact-button-primary"
          >
            Email Me
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
