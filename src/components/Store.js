import { configureStore } from "@reduxjs/toolkit";
import loremReducer from "./LoremSlice";

const store = configureStore({
  reducer: {
    lorem: loremReducer,
  },
});

export default store;
