import { configureStore } from "@reduxjs/toolkit";
import ratingReducer from "./rating";

export const store = configureStore({
  reducer: {
    rating: ratingReducer,
  },
});
