import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      state.cart.push({...payload,quantity:1});
    },
  },
});
export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
