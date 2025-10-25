import { configureStore } from "@reduxjs/toolkit";
import loremReducer from "./LoremSlice";

export const store = configureStore({
  reducer: {
    lorem: loremReducer,
  },
});
