import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "appliedFilters",
  initialState: {
    filters: {},
  },
  reducers: {
    updateFilters: (state, action) => {
      state.filters = action.payload?.appliedFilters;
    },
  },
});

export const { updateFilters } = filtersSlice.actions;

export default filtersSlice.reducer;
