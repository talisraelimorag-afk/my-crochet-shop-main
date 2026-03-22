import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [
    // { pizzaId: 1, name: "Romana", quantity: 2, unitPrice: 16, totalPrice: 32 },
  ],
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      //payload = new item
      console.log(state.cart);
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      //payload = item id
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    incQuantity(state, action) {
      //payload = item id
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    decQuantity(state, action) {
      //payload = item id
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity--;
      item.totalPrice = item.quantity * item.unitPrice;
      if (item.quantity === 0) cartSlice.caseReducers.deleteItem(state, action);
    },
    clear(state) {
      state.cart = [];
    },
  },
});
export const { addItem, deleteItem, incQuantity, decQuantity, clear } =
  cartSlice.actions;
export default cartSlice.reducer;

export const getTotalCartQuantity = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.quantity, 0);

export const getTotalCartPrice = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0);

export const getCart = (state) => state.cart.cart;

export const getQunatitybyId = (id) => (state) =>
  state.cart.cart.find((item) => item.pizzaId === id)?.quantity ?? 0;
