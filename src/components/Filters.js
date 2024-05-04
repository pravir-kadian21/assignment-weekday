import React from "react";
import { useDispatch, useSelector } from "react-redux";

import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

import { updateFilters } from "../utils/filterSlice";
import {
  EXPERIENCE_FILTER_OPTIONS,
  INPUT_DEBOUNSE_TIMEOUT,
  MIN_BASE_PAY_FILTER_OTIONS,
  REMOTE_FILTER_OPTIONS,
  ROLE_FILTER_OPTION,
  TEXT_INPUT_META_DATA,
} from "../utils/constants";
import { myDebounce } from "../utils/utils";

const Filters = () => {
  const dispatch = useDispatch();

  const filters = useSelector((store) => store.appliedFilters.filters); // will be of format [{inputType: [...filterValues]}]

  // updates the filters
  const handleFilterChange = (filterValues, type) => {
    const updatedFilters = { ...filters };

    // checks if filterValues is not an array -> for all AutoComplete where only one value is possibe
    if (!Array.isArray(filterValues)) {
      updatedFilters[type] = [filterValues];
      dispatch(updateFilters({ appliedFilters: updatedFilters }));
      return;
    }

    const filtersApplied = filterValues.map((filterVal) => {
      return type === "remote"
        ? filterVal?.label.toLowerCase()
        : filterVal?.value.toLowerCase();
    });
    updatedFilters[type] = filtersApplied;

    dispatch(updateFilters({ appliedFilters: updatedFilters }));
  };

  const debouncedHandleChange = myDebounce(
    (...args) => handleFilterChange(...args),
    INPUT_DEBOUNSE_TIMEOUT
  );

  return (
    <div className="filters-container">
      <Autocomplete
        multiple
        limitTags={1}
        id="multiple-limit-tags"
        options={ROLE_FILTER_OPTION}
        groupBy={(option) => option.category}
        getOptionLabel={(option) => option.value}
        sx={{ minWidth: 180 }}
        renderInput={(params) => <TextField {...params} placeholder="Roles" />}
        onChange={(e, value) => handleFilterChange(value, "roles")}
        className="filters"
        size="small"
      />

      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={EXPERIENCE_FILTER_OPTIONS}
        sx={{ minWidth: 180 }}
        renderInput={(params) => (
          <TextField {...params} placeholder="Experience" />
        )}
        onChange={(e, value) => handleFilterChange(value, "experience")}
        className="filters"
        size="small"
      />
      <Autocomplete
        multiple
        id="multiple-limit-tags"
        options={REMOTE_FILTER_OPTIONS}
        getOptionLabel={(option) => option.label}
        renderInput={(params) => <TextField {...params} placeholder="Remote" />}
        sx={{ minWidth: 180 }}
        onChange={(e, value) => handleFilterChange(value, "remote")}
        className="filters"
        size="small"
      />
      <Autocomplete
        multiple
        limitTags={2}
        id="multiple-limit-tags"
        options={MIN_BASE_PAY_FILTER_OTIONS}
        getOptionLabel={(option) => option.value}
        renderInput={(params) => {
          return (
            <TextField {...params} placeholder="Minimum Base Pay Salary" />
          );
        }}
        sx={{ minWidth: 260 }}
        onChange={(e, value) => handleFilterChange(value, "salary")}
        className="filters"
        size="small"
      />

      {TEXT_INPUT_META_DATA.map((inputField) => {
        const { placeholder, name } = inputField;
        return (
          <TextField
            id="outlined-basic"
            className="filters"
            variant="outlined"
            onChange={(e) => debouncedHandleChange(e?.target?.value, name)}
            placeholder={placeholder}
            size="small"
          />
        );
      })}
    </div>
  );
};

export default Filters;
