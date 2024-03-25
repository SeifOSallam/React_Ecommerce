import { configureStore } from "@reduxjs/toolkit";
import profileReducer from "./slices/profileSlice";
import productsReducer from "./slices/productsSlice";
import cartReducer from './slices/cartSlice';

export default configureStore({
  reducer: {
    profile: profileReducer,
    products: productsReducer,
    cart: cartReducer
  },
});
