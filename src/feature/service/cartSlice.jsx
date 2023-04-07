import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      const isExist = state.cart.find((item=> item.id === payload.id));
     if(isExist){
      state.cart.map((item)=>{
        if(item.id === payload.id){
        item.quantity += 1;      
        }
        return item;
      })
     }else{
      state.cart.push({...payload,quantity:1});
     }
    },
    removeFromCart:(state,{payload})=>{
      state.cart = state.cart.filter((item)=> item.id != payload.id);
    },
    increaseQuantity: (state,{payload})=>{
      state.cart = state.cart.map(item=>{
        if(item.id === payload.id)
        item.quantity++;
        return item;
      })
    },
    decreaseQuantity: (state,{payload})=>{
      state.cart = state.cart.map(item=>{
        if(item.id === payload.id && payload.quantity>1)
        item.quantity--;
        return item;
      })
    }
  },
});
export const { addToCart,removeFromCart,increaseQuantity,decreaseQuantity} = cartSlice.actions;
export default cartSlice.reducer;
