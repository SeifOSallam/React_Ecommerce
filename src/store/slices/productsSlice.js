import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../../axios/axiosFile";

export const getProductsThunk = createAsyncThunk(
    "products/getProducts", //action type
    async () => {
      const res = await axiosInstance.get("/products");
      return res.data; // dont forget to return response
    }
  );


export const productsSlice = createSlice({
    name: "products",
    initialState: {},
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getProductsThunk.pending, (state) => {
          state.isLoading = true;
        });
        builder.addCase(getProductsThunk.fulfilled, (state, action) => {
          state.isLoading = false;
          state.products = action.payload.products;
        });
        builder.addCase(getProductsThunk.rejected, (state, action) => {
          state.isLoading = false;
          state.error = action.error.message;
        });
      },
});

export default productsSlice.reducer;