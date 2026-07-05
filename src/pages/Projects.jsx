function Projects() {
  return (
    <div className="page-container projects-page">
      <h1 className="page-title">Projects</h1>

      <p className="projects-intro">
        Below are several projects I've developed throughout my graduate studies
        and personal learning.
      </p>

      {/* ===== PROJECTS GRID ===== */}
      <div className="projects-grid">

        {/* ===== Project Adam ===== */}
        <div className="project-card">
          <h2>Project Adam</h2>
          <p>
            My primary personal software engineering project. This is the game I've been actively
            developing, with a focus on scalable architecture, gameplay systems, and transforming abstract
            graph structures into 3D node-based environments with procedurally generated level design.
          </p>

          <a
            href="https://github.com/AdamWeast/ProjectAdam"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            View GitHub Repo
          </a>
        </div>

        {/* ===== Battleship ===== */}
        <div className="project-card">
          <h2>2D Battleship</h2>
          <p>
            A Battleship game written in Python featuring turn-based gameplay,
            game-state management, input validation, and object-oriented design.
            This project strengthened my understanding of Python programming and
            core software development principles.
          </p>

          <a
            href="https://github.com/AdamWeast/2D-Battleship"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            View GitHub Repo
          </a>
        </div>

        {/* ===== Portfolio ===== */}
        <div className="project-card">
          <h2>Portfolio Website</h2>
          <p>
            A personal portfolio website built using React and Vite. The site
            showcases my projects, technical skills, and education while
            demonstrating component-based architecture, responsive design, and
            modern frontend development practices.
          </p>

          <a
            href="https://github.com/AdamWeast/Portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            View GitHub Repo
          </a>
        </div>

        {/* ===== Point & Click ===== */}
        <div className="project-card">
          <h2>Point-and-Click Adventure Game</h2>
          <p>
            A point-and-click adventure game prototype developed in Unreal Engine
            5 using both Blueprints and C++. Features include player interaction,
            camera systems, scene logic, and gameplay mechanics.
          </p>

          <a
            href="https://github.com/AdamWeast/Point-and-Click-Adventure-Game"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            View GitHub Repo
          </a>
        </div>

      </div>
    </div>
  );
}

export default Projects;