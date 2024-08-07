import React from "react";
import { useSelector } from "react-redux";
import ProductsList from "../../features/ProductsList";
import ResponsiveGridLayoutComponent from "../../components/ResponsiveGridLayout.jsx/ResponsiveGridLayout";
import Cart from "../../components/cart/Cart";

const Boutique = () => {
  const products = useSelector((state) => state.products.items);

  return (
    <div className="boutique">
      <div className="header">
        <h1>Boutique</h1>
        <Cart />
      </div>
      <div className="product-list">
        <ProductsList products={products} />
      </div>
      <ResponsiveGridLayoutComponent products={products} />
    </div>
  );
};

export default Boutique;
