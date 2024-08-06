import React from "react";
import { useSelector } from "react-redux";
import ProductsList from "../../features/ProductsList";
import ResponsiveGridLayoutComponent from "../../components/ResponsiveGridLayout.jsx/ResponsiveGridLayout";
import shoppingCart from "/shopping-cart.svg";

const Boutique = () => {
  const products = useSelector((state) => state.products.items);

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
      <div className="product-list">
        <ProductsList products={products} />
      </div>
      <ResponsiveGridLayoutComponent products={products} />
    </div>
  );
};

export default Boutique;
