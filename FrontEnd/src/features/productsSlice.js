import { createSlice } from "@reduxjs/toolkit";
import { deleteFromCart } from "./cart";

const initialState = {
  items: [],
  filteredItems: [],
  status: "idle",
  error: null,
  filter: "",
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts(state, action) {
      state.items = [...state.items, ...action.payload];
      state.filteredItems = applyFilter(state.items, state.filter);
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
    setFilter(state, action) {
      state.filter = action.payload;
      state.filteredItems = applyFilter(state.items, state.filter);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(deleteFromCart, (state, action) => {
      const product = state.items.find(
        (product) => product.id === action.payload
      );
      if (product) {
        product.picked = false;
      }
    });
  },
});

const applyFilter = (items, filter) => {
  console.log("Filtering with:", filter, "Items:", items);
  if (filter === "") {
    return items;
  }
  switch (filter) {
    case "plantsLegumes":
      return items.filter((item) => item.category === 0);
    case "plantsFruits":
      return items.filter((item) => item.category === 1);
    case "plantsFleurs":
      return items.filter((item) => item.category === 2);
    case "grainesLegumes":
      return items.filter((item) => item.category === 4);
    case "grainesFruits":
      return items.filter((item) => item.category === 4);
    case "grainesFleurs":
      return items.filter((item) => item.category === 5);
    default:
      return items;
  }
};

export const { setProducts, setStatus, setError, togglePicked, setFilter } =
  productsSlice.actions;
export const fetchProducts =
  (page = 1) =>
  async (dispatch) => {
    try {
      dispatch(setStatus("loading"));
      const response = await fetch(`/assets/data/dataProductsPage${page}.json`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const responseText = await response.text();
      console.log("Response text: ", responseText);

      console.log(response);
      const data = JSON.parse(responseText);
      if (data.products && typeof data.products === "object") {
        const allProducts = [
          ...data.products.plantsLegumes,
          ...data.products.plantsFruits,
          ...data.products.plantsFleurs,
          ...data.products.grainesLegumes,
          ...data.products.grainesFruits,
          ...data.products.grainesFleurs,
        ];

        dispatch(setProducts(allProducts));
      } else {
        throw new Error("Data format is incorrect");
      }
    } catch (error) {
      console.error("Fetch error: ", error);
      dispatch(setError(error.toString()));
    }
  };

export default productsSlice.reducer;
