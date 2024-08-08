import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import ProductsList from "../../features/ProductsList";
import ResponsiveGridLayoutComponent from "../../components/ResponsiveGridLayout.jsx/ResponsiveGridLayout";
import FloatingCartButton from "../../components/floatingCartButton/FloatingCartButton";
import { setFilter } from "../../features/productsSlice";

const Boutique = () => {
  const products = useSelector((state) => state.products.items);
  const dispatch = useDispatch();
  const [filter, setFilterState] = useState("");

  const handleFilterChange = (event) => {
    const value = event.target.value;
    setFilterState(value);
    dispatch(setFilter(value));
  };

  return (
    <div className="boutique">
      <div className="header">
        <FloatingCartButton />
        <select onChange={handleFilterChange} value={filter}>
          <option value="">Tous les produits</option>
          <option value="plantsLegumes">Legumes</option>
          <option value="plantsFruits">Fruits</option>
          <option value="plantsFleurs">Fleurs</option>
          <option value="grainesLegumes">Graines de Legumes</option>
          <option value="grainesFruits">Graines de Fruits</option>
          <option value="grainesFleurs">Graines de Fleurs</option>
        </select>
      </div>
      <div className="product-list">
        <ProductsList />
      </div>
      <ResponsiveGridLayoutComponent products={products} />
    </div>
  );
};

export default Boutique;
