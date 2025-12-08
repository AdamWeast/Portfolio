function About() {
  return (
    <div className="page-container about-page">
      {/* Header */}
      <h1 className="page-title">About Me</h1>

      {/* Intro Section */}
      <p className="about-intro">
        Hi, I'm <span className="highlight">Adam Cebulski</span> — a passionate
        developer currently studying Software Development at Boston University.
        I am also an indie game developer working solo on some projects in Unreal Engine 5.
        I have spent the last 3 years diligently studying game design, the UE5 engine, and basic 3D modeling.
      </p>

      {/* Two-Column About Section */}
      <div className="about-section">
        {/* Left column */}
        <div className="about-text">
          <h2>Background</h2>
          <p>
            I began my journey studying civil engineering. I've worked for about 6 years in project controls on various construction projects.
            I later transitioned into software development through dedicated study and hands-on learning. I decided to pursue a career as I wanted to expand my knowledge and skills in a field I've become passtionate about.
          </p>

          <h2>Interests</h2>
          <p>
            Outside of coursework, I enjoy working with Unreal Engine, exploring
            game development, sharpening my programming fundamentals, and
            building projects that challenge me to grow as a developer. I love video games, and also enjoy hobbies such as DnD, Warhammer 40K, and drawing.
          </p>
        </div>

        {/* Right column */}
        <div className="about-details">
          <h2>Skills</h2>
          <ul>
            <li>React & JavaScript</li>
            <li>HTML5 & CSS3</li>
            <li>Node.js & Git</li>
            <li>Firebase</li>
            <li>Unreal Engine 5 (C++ basics)</li>
            <li>Python</li>
          </ul>

          <h2>Education</h2>
          <p>Boston University — MS in Software Development</p>
          <p>University of New Hampshire — BS in Civil Engineering</p>
        </div>
      </div>
    </div>
  );
}

export default About;
