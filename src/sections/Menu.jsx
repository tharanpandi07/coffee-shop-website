
import React, { useState } from "react";
import "../styles/menu.css";

const categories = ["All", "Hot Coffee", "Cold Coffee", "Tea"];

const menuItems = [
  {
    id: 1,
    name: "Classic Espresso",
    category: "Hot Coffee",
    description: "Rich, bold espresso with a beautiful crema.",
    price: 120,
    image:
      "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?auto=format&fit=crop&w=700&q=85",
    tag: "CLASSIC",
  },
  {
    id: 2,
    name: "Velvet Cappuccino",
    category: "Hot Coffee",
    description: "Smooth espresso topped with silky milk foam.",
    price: 160,
    image:
      "https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=700&q=85",
    tag: "POPULAR",
  },
  {
    id: 3,
    name: "Caramel Latte",
    category: "Hot Coffee",
    description: "Creamy latte finished with sweet caramel.",
    price: 180,
    image:
      "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=700&q=85",
    tag: "FAVOURITE",
  },
  {
    id: 4,
    name: "Iced Americano",
    category: "Cold Coffee",
    description: "Chilled espresso with a refreshing finish.",
    price: 150,
    image:
      "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=700&q=85",
    tag: "REFRESHING",
  },
  {
    id: 5,
    name: "Iced Latte",
    category: "Cold Coffee",
    description: "Cold milk and espresso served over ice.",
    price: 190,
    image:
      "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=700&q=85",
    tag: "POPULAR",
  },
  {
    id: 6,
    name: "Masala Chai",
    category: "Tea",
    description: "Traditional Indian tea with aromatic spices.",
    price: 80,
    image:
      "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?auto=format&fit=crop&w=700&q=85",
    tag: "TRADITIONAL",
  },
];

function Menu() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems =
    activeCategory === "All"
      ? menuItems
      : menuItems.filter(
          (item) => item.category === activeCategory
        );

  return (
    <main className="menu-page" id="menu">
      <section className="menu-hero">
        <p className="menu-eyebrow">CRAFTED WITH PASSION</p>

        <h1>
          A menu for
          <br />
          <span>beautiful moments.</span>
        </h1>

        <p className="menu-intro">
          Thoughtfully brewed coffee, comforting classics,
          and little moments worth slowing down for.
        </p>
      </section>

      <section className="menu-content">
        <div className="menu-heading">
          <div>
            <p className="menu-eyebrow">OUR SELECTION</p>
            <h2>Discover the menu</h2>
          </div>

          <p className="menu-count">
            {filteredItems.length} crafted selections
          </p>
        </div>

        <div className="menu-filters">
          {categories.map((category) => (
            <button
              key={category}
              className={
                activeCategory === category
                  ? "menu-filter active"
                  : "menu-filter"
              }
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="menu-grid">
          {filteredItems.map((item) => (
            <article className="menu-card" key={item.id}>
              <div className="menu-image-wrap">
                <img
                  src={item.image}
                  alt={item.name}
                  className="menu-image"
                  loading="lazy"
                />
                <span className="menu-tag">{item.tag}</span>
              </div>

              <div className="menu-card-body">
                <div className="menu-item-heading">
                  <h3>{item.name}</h3>
                  <span className="menu-price">
                    ₹{item.price}
                  </span>
                </div>

                <p className="menu-description">
                  {item.description}
                </p>

                <div className="menu-card-footer">
                  <span>{item.category}</span>
                  <span className="menu-dot">✦</span>
                  <span>Made fresh</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="menu-note">
          <span>✦</span>
          <p>
            Good coffee takes time. Every cup is prepared
            with care, just for you.
          </p>
          <span>✦</span>
        </div>
      </section>
    </main>
  );
}

export default Menu;
