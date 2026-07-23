import { useState } from "react";
import menuData from "../data/menuData";
import MenuCard from "./MenuCard";

function Menu() {
  const [menu, setMenu] = useState(menuData);
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    "all",
    "pizza",
    "snacks",
    "pasta",
    "mexican",
    "desserts",
    "drinks",
  ];

  const filterItems = (category) => {
    setActiveCategory(category);

    if (category === "all") {
      setMenu(menuData);
      return;
    }

    const filteredItems = menuData.filter(
      (item) => item.category === category
    );

    setMenu(filteredItems);
  };

  return (
    <section id="menu" className="menu">
      <div className="container">
        <div className="section-title">
          <span>OUR SPECIAL MENU</span>

          <h2>Fresh • Healthy • 100% Vegetarian</h2>

          <p>
            Explore our chef's special vegetarian dishes prepared with fresh
            ingredients and authentic flavors.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="menu-filter">
          {categories.map((category) => (
            <button
              key={category}
              className={activeCategory === category ? "active" : ""}
              onClick={() => filterItems(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Menu Cards */}
        <div className="menu-grid">
          {menu.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Menu;