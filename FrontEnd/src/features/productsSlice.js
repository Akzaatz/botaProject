import { createSlice } from "@reduxjs/toolkit";
// import Cart from "../components/cart/Cart";

const initialState = {
  items: [],
  status: "idle",
  error: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts(state, action) {
      state.items = action.payload;
      state.status = "succeeded";
    },
    setStatus(state, action) {
      state.status = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
      state.status = "failed";
    },
    togglePicked(state, action) {
      const product = state.items.find((item) => item.id === action.payload);
      if (product) {
        product.picked = !product.picked;
      }
    },
  },
});

export const { setProducts, setStatus, setError, togglePicked } =
  productsSlice.actions;

export const fetchProducts = () => async (dispatch) => {
  try {
    dispatch(setStatus("loading"));
    const response = await fetch("/assets/data/dataProducts.json");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    if (data.products && typeof data.products === "object") {
      const allProducts = [
        ...data.products.plantsLegumes,
        ...data.products.plantsFruits,
        ...data.products.plantsFleurs,
      ];
      dispatch(setProducts(allProducts));
    } else {
      throw new Error("Data format is incorrect");
    }
  } catch (error) {
    dispatch(setError(error.toString()));
  }
};

export default productsSlice.reducer;
