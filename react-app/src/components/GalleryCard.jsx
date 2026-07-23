function GalleryCard({ image, title, onClick }) {
  return (
    <div className="gallery-item" onClick={onClick}>
      <img
        src={image}
        alt={title}
        className="gallery-img"
      />
    </div>
  );
}

export default GalleryCard;