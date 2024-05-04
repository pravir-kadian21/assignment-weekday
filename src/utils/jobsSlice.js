import { createSlice } from "@reduxjs/toolkit";

const jobsSlice = createSlice({
  name: "jobs",
  initialState: {
    jobsList: [],
    filteredJobsList: [],
  },
  reducers: {
    updateJobsList: (state, action) => {
      state.jobsList = action.payload?.jobsList;
    },
    updateFilteredJobsList: (state, action) => {
      state.filteredJobsList = action.payload?.jobsList;
    },
  },
});

export const { updateJobsList, updateFilteredJobsList } = jobsSlice.actions;

export default jobsSlice.reducer;
