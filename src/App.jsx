// Import global styles and React Router components
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";

// Import the pages we will display for each route
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app-container">
      {/* ===========================
          NAVIGATION BAR (HEADER)
          =========================== */}
      <nav className="navbar">
        {/* Logo or name in top-left */}
        <div className="nav-logo">Adam Cebulski</div>

        {/* Navigation links using React Router */}
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/gallery">Gallery</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      {/* ===========================
          PAGE ROUTES
          Determines which component 
          (page) to show based on URL
          =========================== */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
