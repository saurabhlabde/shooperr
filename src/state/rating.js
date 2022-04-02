import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const ratingSlice = createSlice({
  name: "rating",
  initialState,
  reducers: {
    setRating: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setRating } = ratingSlice.actions;

export default ratingSlice.reducer;
