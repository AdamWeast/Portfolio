function Projects() {
  return (
    <div className="page-container projects-page">
      <h1 className="page-title">Projects</h1>
      <p className="projects-intro">
        Here are some of the projects I’ve worked on during my studies. Each
        project highlights different skills I've developed in web development,
        design, and software engineering.
      </p>

      {/* ===== PROJECTS GRID ===== */}
      <div className="projects-grid">
        {/* ===== Project 1 ===== */}
        <div className="project-card">
          <h2>CS601 Term Project</h2>
          <p>
            A multi-page React website using modern web technologies including
            Vite, React Router, Firebase, and Netlify deployment. This project
            demonstrates skills in front-end architecture and component-based
            design.
          </p>
          <a href="#" target="_blank" className="project-link">
            View GitHub Repo
          </a>
        </div>

        {/* ===== Project 2 ===== */}
        <div className="project-card">
          <h2>React Portfolio (HW5)</h2>
          <p>
            A React application built as part of the CS601 React introduction
            module. Includes component structure, state basics, and styled
            interface design.
          </p>
          <a href="#" target="_blank" className="project-link">
            View GitHub Repo
          </a>
        </div>

        {/* ===== Project 3 ===== */}
        <div className="project-card">
          <h2>Game Development Practice</h2>
          <p>
            Early development in Unreal Engine 5. Focused on level design,
            blueprints, C++ fundamentals, and project structure. Includes demo
            scenes and gameplay prototypes.
          </p>
          <a href="#" target="_blank" className="project-link">
            Preview Coming Soon
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
