import { useState, useEffect } from "react";
import GalleryCard from "./GalleryCard";
import galleryData from "../data/galleryData";
import {
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const openImage = (index) => {
    setSelectedIndex(index);
  };

  const closeImage = () => {
    setSelectedIndex(null);
  };

  const nextImage = () => {
    setSelectedIndex((prev) => (prev + 1) % galleryData.length);
  };

  const prevImage = () => {
    setSelectedIndex(
      (prev) => (prev - 1 + galleryData.length) % galleryData.length
    );
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedIndex === null) return;

      switch (e.key) {
        case "Escape":
          closeImage();
          break;

        case "ArrowRight":
          nextImage();
          break;

        case "ArrowLeft":
          prevImage();
          break;

        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedIndex]);

  return (
    <section className="gallery" id="gallery">
      <div className="container">
        <div className="section-title">
          <span>GALLERY</span>
          <h2>Our Delicious Moments</h2>
          <p>
            A glimpse of our restaurant, food, and memorable dining
            experience.
          </p>
        </div>

        <div className="gallery-grid">
          {galleryData.map((item, index) => (
            <GalleryCard
              key={item.id}
              image={item.image}
              title={item.title}
              onClick={() => openImage(index)}
            />
          ))}
        </div>

        {selectedIndex !== null && (
          <div className="lightbox show" onClick={closeImage}>
            <FaTimes
              className="close-lightbox"
              onClick={(e) => {
                e.stopPropagation();
                closeImage();
              }}
            />

            <FaChevronLeft
              className="lightbox-arrow left"
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
            />

            <img
              src={galleryData[selectedIndex].image}
              alt={galleryData[selectedIndex].title}
              onClick={(e) => e.stopPropagation()}
            />

            <FaChevronRight
              className="lightbox-arrow right"
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
            />
          </div>
        )}
      </div>
    </section>
  );
}

export default Gallery;