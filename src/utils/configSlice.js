import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
  name: "config",
  initialState: {
    isLoading: false,
  },
  reducers: {
    toggleLoading: (state) => {
      state.isLoading = !state.isLoading;
    },
  },
});

export const { toggleLoading } = configSlice.actions;

export default configSlice.reducer;
