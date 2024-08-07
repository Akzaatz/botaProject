// cart.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    createCartItem: (state, action) => {
      state.cartItems.push(action.payload);
    },
  },
});

export const addOneToCart = (productId) => {
  return (dispatch, getState) => {
    console.log("addOneToCart");
    const storeState = getState();

    const isAlreadyPresent = storeState.cart.cartItems.find(
      (product) => product.id === productId
    );

    if (!isAlreadyPresent) {
      const itemToAdd = storeState.products.items.find(
        (product) => product.id === productId
      );

      if (itemToAdd) {
        const newCartItem = {
          ...itemToAdd,

          quantity: 1,
        };
        console.log(newCartItem);
        dispatch(createCartItem(newCartItem));
      }
    }
  };
};

export const { createCartItem } = cartSlice.actions;
export default cartSlice.reducer;
