import React, { useState } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { useDispatch, useSelector } from "react-redux";
import { updateFilters } from "../utils/filterSlice";
import {
  EXPERIENCE_FILTER_OPTIONS,
  MIN_BASE_PAY_FILTER_OTIONS,
  REMOTE_FILTER_OPTIONS,
} from "../utils/constants";

const Filters = () => {
  //   const rolesCons = [
  //     { label: "Backend", key: "Backend" },
  //     { label: "Frontend", key: "Frontend" },
  //     { label: "FullStack", key: "FullStack" },
  //     { label: "IOS", key: "IOS" },
  //     { label: "Flutter", key: "Flutter" },
  //     { label: "React Native", key: "React Native" },
  //     { label: "Android", key: "Android" },
  //     { label: "Tech Lead", key: "Tech Lead" },
  //     { label: "Dev-Ops", key: "Dev-Ops" },
  //     { label: "Data Engineer", key: "Data Engineer" },
  //     { label: "Data Science", key: "Data Science" },
  //     { label: "Computer Vision", key: "Computer Vision" },
  //     { label: "NLP", key: "NLP" },
  //   ];
  const dispatch = useDispatch();

  const filters = useSelector((store) => store.appliedFilters.filters);

  const handleFilterChange = (filterValues, type) => {
    const updatedFilters = { ...filters };
    debugger;
    console.log(filterValues, type);
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

  console.log(filters);

  return (
    <div style={{ display: "flex", flexWrap: "wrap", margin: "12px 32px" }}>
      <Autocomplete
        multiple
        id="multiple-limit-tags"
        options={EXPERIENCE_FILTER_OPTIONS}
        getOptionLabel={(option) => option.value}
        renderInput={(params) => (
          <TextField {...params} label="Roles" placeholder="Roles" />
        )}
        sx={{ width: "500px" }}
        onChange={(e, value) => handleFilterChange(value, "roles")}
      />
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={EXPERIENCE_FILTER_OPTIONS}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Experience" />}
        onChange={(e, value) => handleFilterChange(value, "experience")}
      />

      <Autocomplete
        multiple
        id="multiple-limit-tags"
        options={REMOTE_FILTER_OPTIONS}
        getOptionLabel={(option) => option.label}
        renderInput={(params) => (
          <TextField {...params} label="Remote" placeholder="Remote" />
        )}
        sx={{ width: "500px" }}
        onChange={(e, value) => handleFilterChange(value, "remote")}
      />
      <Autocomplete
        multiple
        limitTags={2}
        id="multiple-limit-tags"
        options={MIN_BASE_PAY_FILTER_OTIONS}
        getOptionLabel={(option) => option.value}
        renderInput={(params) => {
          return (
            <TextField
              {...params}
              label="Minimum Base Pay Salary"
              placeholder="Minimum Base Pay Salary"
            />
          );
        }}
        sx={{ width: "400px" }}
        onChange={(e, value) => handleFilterChange(value, "salary")}
      />
    </div>
  );
};

export default Filters;
