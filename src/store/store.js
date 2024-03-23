import { configureStore } from "@reduxjs/toolkit";
import profileReducer from "./slices/profileSlice";
import productsReducer from "./slices/productsSlice";


export default configureStore({
  reducer: {
    profile: profileReducer,
    products: productsReducer
  },
});
