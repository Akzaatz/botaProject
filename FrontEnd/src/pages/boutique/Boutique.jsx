import React, { useState } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import Card from "../../components/card/Card";
import boutikItems from "../../assets/data/dataProducts.json";
import shoppingCart from "/shopping-cart.svg";

const ResponsiveGridLayout = WidthProvider(Responsive);

const Boutique = () => {
  const [filteredProducts, setFilteredProducts] = useState([
    ...boutikItems.plantsLegumes,
    ...boutikItems.plantsFruits,
    ...boutikItems.plantsFleurs,
    ...boutikItems.grainesLegumes,
    ...boutikItems.grainesFruits,
    ...boutikItems.grainesFleurs,
  ]);

  const generateLayouts = (products) => {
    const layouts = { lg: [], md: [], sm: [], xs: [], xxs: [] };
    products.forEach((product, index) => {
      layouts.lg.push({
        i: index.toString(),
        x: index % 3,
        y: Math.floor(index / 3),
        w: 1,
        h: 1,
      });
      layouts.md.push({
        i: index.toString(),
        x: index % 3,
        y: Math.floor(index / 3),
        w: 1,
        h: 1,
      });
      layouts.sm.push({
        i: index.toString(),
        x: index % 2,
        y: Math.floor(index / 2),
        w: 1,
        h: 1,
      });
      layouts.xs.push({ i: index.toString(), x: 0, y: index, w: 1, h: 1 });
      layouts.xxs.push({ i: index.toString(), x: 0, y: index, w: 1, h: 1 });
    });
    return layouts;
  };

  const layouts = generateLayouts(filteredProducts);

  return (
    <div className="boutique">
      <div className="header">
        <h1>Boutique</h1>
        <div>
          <button>
            <img className="shopping-cart" src={shoppingCart} alt="Panier" />
            <span>Aller au Panier : 0</span>
          </button>
        </div>
      </div>
      <ResponsiveGridLayout
        layouts={layouts}
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        cols={{ lg: 3, md: 3, sm: 2, xs: 1, xxs: 1 }}
        rowHeight={620}
        margin={[10, 10]}
        isResizable={false}
        isDraggable={false}
      >
        {filteredProducts.map((product, index) => (
          <div
            key={index}
            data-grid={{ x: index % 3, y: Math.floor(index / 3), w: 1, h: 1 }}
          >
            <Card product={product} />
          </div>
        ))}
      </ResponsiveGridLayout>
    </div>
  );
};

export default Boutique;
