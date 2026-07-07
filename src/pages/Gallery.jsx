import img1 from "../assets/gallery/AnimationGraph.png";
import img2 from "../assets/gallery/NodeConnectionBlueprintFunction.png";
import img3 from "../assets/gallery/Firebase.jpg";
import img4 from "../assets/gallery/2DBattleship.png";

function Gallery() {
  return (
    <div className="page-container gallery-page">
      <h1 className="page-title">Gallery</h1>

      <p className="gallery-intro">
        A collection of images showcasing some of my work in Unreal Engine and other school projects.
      </p>

      {/* ===== IMAGE GRID ===== */}
      <div className="gallery-grid">
        <img
          src={img1}
          alt="Animation Graph Screenshot"
          className="gallery-item"
        />

        <img
          src={img2}
          alt="Node Connection Blueprint Function"
          className="gallery-item"
        />

        <img
          src={img3}
          alt="Firebase Integration Screenshot"
          className="gallery-item"
        />

        <img
          src={img4}
          alt="2D Battleship Screenshot"
          className="gallery-item"
        />

        {/* Placeholder items */}
        <div className="gallery-item placeholder"></div>
        <div className="gallery-item placeholder"></div>
        <div className="gallery-item placeholder"></div>
        <div className="gallery-item placeholder"></div>
        <div className="gallery-item placeholder"></div>
      </div>
    </div>
  );
}

export default Gallery;