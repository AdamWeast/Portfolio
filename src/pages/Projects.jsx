function Projects() {
  return (
    <div className="page-container projects-page">
      <h1 className="page-title">Projects</h1>
      <p className="projects-intro">
        Here are some of the projects I’ve worked on during my studies and free time. Each
        project highlights different skills I've developed in web development,
        game design, and software engineering.
      </p>

      {/* ===== PROJECTS GRID ===== */}
      <div className="projects-grid">
        {/* ===== Project 1 ===== */}
        <div className="project-card">
          <h2>CS-601 Term Project</h2>
          <p>
            A multi-page React portfolio website built with Vite, React Router, Firebase, and Netlify. 
            This project showcases component-based design, client-side routing, API integration, and 
            responsive UI development.
          </p>
          <a href="https://github.com/AdamWeast/CS601_FinalProject_Cebulski.git" target="_blank" className="project-link">
            View GitHub Repo
          </a>
        </div>

        {/* ===== Project 2 ===== */}
        <div className="project-card">
          <h2>CS-622 Point & Click Adventure Game</h2>
          <p>
            A lightweight point-and-click adventure prototype created in Unreal Engine 5. Developed 
            using a mix of Blueprints and C++ to implement player interaction, camera control, scene logic, 
            and basic gameplay systems.
          </p>
          <a href="https://github.com/AdamWeast/CS622_PointClick_Cebulski.git" target="_blank" className="project-link">
            View GitHub Repo
          </a>
        </div>

        {/* ===== Project 3 ===== */}
        <div className="project-card">
          <h2>Game Development Practice</h2>
          <p>
            An early-stage Unreal Engine 5 prototype focused on gameplay experimentation, Blueprints/C++ 
            integration, animation testing, and incremental feature development. This project explores level 
            design, interaction systems, debugging, and engine workflow fundamentals.
          </p>
          <a href="https://github.com/AdamWeast/Some-Assembly-Required.git" target="_blank" className="project-link">
            View GitHub Repo
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
