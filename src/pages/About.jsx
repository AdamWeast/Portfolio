function About() {
  return (
    <div className="page-container about-page">
      {/* Header */}
      <h1 className="page-title">About Me</h1>

      {/* Intro Section */}
      <p className="about-intro">
        Hi, I'm <span className="highlight">Adam Cebulski</span> — a passionate
        developer currently studying Software Development at Boston University.
        I specialize in building modern, scalable web experiences using React,
        JavaScript, and various front-end technologies.
      </p>

      {/* Two-Column About Section */}
      <div className="about-section">
        {/* Left column */}
        <div className="about-text">
          <h2>Background</h2>
          <p>
            I began my journey in engineering, later transitioning into software
            development through dedicated study and hands-on learning. I’m
            focused on mastering the fundamentals of web technologies and
            applying them through real projects.
          </p>

          <h2>Interests</h2>
          <p>
            Outside of coursework, I enjoy working with Unreal Engine, exploring
            game development, sharpening my programming fundamentals, and
            building projects that challenge me to grow as a developer.
          </p>
        </div>

        {/* Right column */}
        <div className="about-details">
          <h2>Skills</h2>
          <ul>
            <li>React & JavaScript</li>
            <li>HTML5 & CSS3</li>
            <li>Node.js & Git</li>
            <li>Firebase (in progress)</li>
            <li>Software Development lifecycle</li>
            <li>Unreal Engine 5 (C++ basics)</li>
          </ul>

          <h2>Education</h2>
          <p>Boston University — MS in Software Development</p>
        </div>
      </div>
    </div>
  );
}

export default About;
