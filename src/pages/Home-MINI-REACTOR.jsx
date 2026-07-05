import { Link } from "react-router-dom";

function Home() {
  return (
    <header className="hero-section">
      <div className="hero-content">
        <p className="subtitle">
          Indie Game Developer • Software Engineer • Web Developer
        </p>

        <h1 className="hero-title">
          I build <span className="highlight">scalable</span> web experiences.
        </h1>

        <p className="hero-text">
          Welcome to my portfolio. I specialize in web development, design, and
          creative solutions. Explore my work, skills, and projects below.
        </p>

        <div className="hero-buttons">
          <Link to="/contact" className="btn btn-primary">
            Get in Touch
          </Link>

          <Link to="/projects" className="btn btn-outline">
            See My Projects
          </Link>
        </div>
      </div>

      <div className="hero-image">
        <div className="image-placeholder"></div>
      </div>
    </header>
  );
}

export default Home;
