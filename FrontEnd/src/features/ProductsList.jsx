import React, { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "./productsSlice";

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.filteredItems);
  const status = useSelector((state) => state.products.status);
  const error = useSelector((state) => state.products.error);
  const [page, setPage] = useState(1);
  const loaderRef = useRef(null);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts(page));
    }
  }, [status, dispatch, page]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entities) => {
        const target = entities[0];
        if (target.isIntersecting) {
          setPage((prev) => prev + 1);
        }
      },
      {
        root: null,
        rootMargin: "20px",
        threshold: 1.0,
      }
    );

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }
    return () => {
      if (loaderRef.current) {
        observer.unobserve(loaderRef.current);
      }
    };
  }, []);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  console.log(products);
  return (
    <div>
      {products && Array.isArray(products) ? (
        products.map((product, index) => (
          <div key={`${product.id}-${index}`}>
            <h2>{product.name}</h2>
          </div>
        ))
      ) : (
        <div>No products found.</div>
      )}
      <div ref={loaderRef} />
    </div>
  );
};

export default ProductList;
