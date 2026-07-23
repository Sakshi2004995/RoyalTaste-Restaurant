import galleryData from "../data/galleryData";
import GalleryCard from "./GalleryCard";

function Gallery() {
  return (
    <section id="gallery" className="gallery">
      <div className="container">
        <div className="section-title">
          <span>OUR GALLERY</span>

          <h2>Moments of Delicious Memories</h2>

          <p>
            Experience the elegance of RoyalTaste through luxurious interiors,
            signature dishes, talented chefs, and unforgettable dining moments.
          </p>
        </div>

        <div className="gallery-grid">
          {galleryData.map((item) => (
            <GalleryCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;