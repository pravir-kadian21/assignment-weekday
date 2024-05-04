import React, { useState } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

const Filters = () => {
  const [filters, setFilters] = useState({});
  const rolesCons = [
    { label: "Backend", key: "Backend" },
    { label: "Frontend", key: "Frontend" },
    { label: "FullStack", key: "FullStack" },
    { label: "IOS", key: "IOS" },
    { label: "Flutter", key: "Flutter" },
    { label: "React Native", key: "React Native" },
    { label: "Android", key: "Android" },
    { label: "Tech Lead", key: "Tech Lead" },
    { label: "Dev-Ops", key: "Dev-Ops" },
    { label: "Data Engineer", key: "Data Engineer" },
    { label: "Data Science", key: "Data Science" },
    { label: "Computer Vision", key: "Computer Vision" },
    { label: "NLP", key: "NLP" },
  ];

  const handleFilterChange = (value, type) => {
    console.log(value, type);
  };

  return (
    <div style={{ display: "flex", flexWrap: "wrap", margin: "12px 32px" }}>
      <Autocomplete
        multiple
        id="multiple-limit-tags"
        options={rolesCons}
        getOptionLabel={(option) => option.label}
        renderInput={(params) => (
          <TextField {...params} label="Roles" placeholder="Roles" />
        )}
        sx={{ width: "500px" }}
      />
      <Autocomplete
        multiple
        id="multiple-limit-tags"
        options={rolesCons}
        getOptionLabel={(option) => option.label}
        renderInput={(params) => (
          <TextField {...params} label="Experience" placeholder="Experience" />
        )}
        sx={{ width: "500px" }}
      />
      <Autocomplete
        multiple
        id="multiple-limit-tags"
        options={rolesCons}
        getOptionLabel={(option) => option.label}
        renderInput={(params) => (
          <TextField {...params} label="Remote" placeholder="Remote" />
        )}
        sx={{ width: "500px" }}
      />
      <Autocomplete
        multiple
        id="multiple-limit-tags"
        options={rolesCons}
        getOptionLabel={(option) => option.label}
        renderInput={(params) => {
          return (
            <TextField
              {...params}
              label="Minimum Base Pay Salary"
              placeholder="Minimum Base Pay Salary"
            />
          );
        }}
        sx={{ width: "500px" }}
        onChange={(e, value) => handleFilterChange(value, "salary")}
      />
    </div>
  );
};

export default Filters;
