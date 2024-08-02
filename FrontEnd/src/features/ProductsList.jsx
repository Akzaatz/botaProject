import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "./products";

const ProductList = () => {
  const dispatch = useDispatch();
  const {
    items: products,
    status,
    error,
  } = useSelector((state) => state.products);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  useEffect(() => {
    console.log("Products:", products);
  }, [products]);

  if (status === "loading") {
    return <p>Loading products...</p>;
  }

  if (status === "failed") {
    return <p>Error loading products: {error}</p>;
  }

  return (
    <div className="product-list">
      {products.map((product, index) => (
        <div key={index}>{product.name}</div>
      ))}
    </div>
  );
};

export default ProductList;
