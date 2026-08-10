function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <a href="#home" className="logo">
          ZS.
        </a>

        <nav className="nav-links">
          <a href="#about">About</a>
          <a href="#focus">Focus</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
