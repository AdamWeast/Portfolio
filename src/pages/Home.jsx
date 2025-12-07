function Home() {
  return (
    <header className="hero-section">
      {/* Left side text */}
      <div className="hero-content">
        <p className="subtitle">Developer • Designer • Creator</p>

        <h1 className="hero-title">
          I build <span className="highlight">scalable</span> web experiences.
        </h1>

        <p className="hero-text">
          Welcome to my portfolio. I specialize in web development, design, and
          creative solutions. Explore my work, skills, and projects below.
        </p>

        <button className="cta-button">Get in Touch</button>
      </div>

      {/* Right side image */}
      <div className="hero-image">
        <div className="image-placeholder"></div>
      </div>
    </header>
  );
}

export default Home;
