import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="page-container">
      <header className="hero-section">
        {/* Left Content */}
        <div className="hero-content">
          <p className="subtitle">
            Indie Game Developer • Software Engineer • Web Developer
          </p>

          <h1 className="hero-title">
            Welcome to my <span className="highlight">portfolio.</span>
          </h1>

          <p className="hero-text">
            If you would like to see some of my work, check out the Projects
            tab. If you have any questions or would like to reach out, click
            below.
          </p>

          {/* BUTTONS */}
          <div className="hero-buttons">
            <button className="cta-button" onClick={() => navigate("/contact")}>
              Get in Touch
            </button>

            <button
              className="cta-button"
              onClick={() => navigate("/projects")}
            >
              View My Projects
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="hero-image">
          <div className="image-placeholder"></div>
        </div>
      </header>
    </div>
  );
}

export default Home;
