function MenuCard({ item }) {
  return (
    <div className="menu-card">

      <img src={item.image} alt={item.title} />

      <div className="menu-content">

        <h3>{item.title}</h3>

        <p>{item.description}</p>

        <div className="menu-bottom">

          <span className="price">
            ₹{item.price}
          </span>

          <a href="#" className="btn">
            Order Now
          </a>

        </div>

      </div>

    </div>
  );
}

export default MenuCard;