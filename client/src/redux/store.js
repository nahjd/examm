import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slice/personSlice";

export const store = configureStore({
  reducer: {
    product: productReducer,
  },
});