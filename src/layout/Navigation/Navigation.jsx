import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.scss";

function Navigation() {
  const categories = [
    {
      category: "Eyes",
      items: [
        { name: "Eyebrows", link: "/one" },
        { name: "Eyeliner", link: "/two" },
        { name: "Eyeshadow", link: "/three" },
        { name: "Mascara", link: "/four" },
      ],
    },
    {
      category: "Face",
      items: [
        { name: "Blush", link: "/item1" },
        { name: "Bronzer", link: "/two" },
        { name: "Foundation", link: "/three" },
      ],
    },
    {
      category: "Lips",
      items: [
        { name: "Lip liner", link: "/item1" },
        { name: "Lipstick", link: "/item2" },
      ],
    },
    {
      category: "Nails",
      items: [{ name: "Nail polish", link: "/item1" }],
    },
  ];
  return (
    <nav className="menu">
      <div className="layout">
        <ul className="menu-list">
          {categories.map((category, index) => (
            <li key={index} className="menu-list__item">
              <Link to="#" className="menu-list__link__category" onClick={(e) => e.preventDefault()}>
                {category.category}
              </Link>
              {/* Subcategories Dropdown */}
              <ul className="menu-list__subcategories">
                {category.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="menu-list__subcategories__item">
                    <Link to={`/products/${category.category.toLowerCase()}/${item.name.toLowerCase()}`}>{item.name}</Link>

                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export { Navigation };

