import { createSlice } from "@reduxjs/toolkit";

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
  },
});

export const { setProducts, setStatus, setError } = productsSlice.actions;

export const fetchProducts = () => async (dispatch) => {
  try {
    dispatch(setStatus("loading"));
    const response = await fetch("/assets/data/dataProducts.json");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    const flattenedProducts = Object.values(data.products).flat();
    dispatch(setProducts(flattenedProducts));
  } catch (error) {
    dispatch(setError(error.toString()));
  }
};

export default productsSlice.reducer;
