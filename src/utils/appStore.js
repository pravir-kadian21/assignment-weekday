import { configureStore } from "@reduxjs/toolkit";
import filtersReducer from "./filterSlice";
import jobsReducer from "./jobsSlice";

const appStore = configureStore({
  reducer: {
    appliedFilters: filtersReducer,
    jobs: jobsReducer,
  },
});

export default appStore;
