function Gallery() {
  return (
    <div className="page-container gallery-page">
      <h1 className="page-title">Gallery</h1>
      <p className="gallery-intro">
        A collection of images showcasing my work, projects, and interests. This
        gallery includes development screenshots, UI concepts, and related
        visuals.
      </p>

      {/* ===== IMAGE GRID ===== */}
      <div className="gallery-grid">
        {/* Placeholder images (you can replace these later) */}
        <div className="gallery-item placeholder"></div>
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
