import { configureStore } from "@reduxjs/toolkit";
import filtersReducer from "./filterSlice";
import jobsReducer from "./jobsSlice";
import configReducer from "./configSlice";

const appStore = configureStore({
  reducer: {
    appliedFilters: filtersReducer,
    jobs: jobsReducer,
    config: configReducer,
  },
});

export default appStore;
