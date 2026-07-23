function GalleryCard({ item }) {
  return (
    <div className="gallery-item">
      <img
        src={item.image}
        alt={item.title}
        className="gallery-img"
      />
    </div>
  );
}

export default GalleryCard;