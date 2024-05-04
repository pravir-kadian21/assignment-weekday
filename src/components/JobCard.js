import React from "react";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

const JobCard = ({
  job: {
    companyName,
    jobRole,
    location,
    logoUrl,
    minExp,
    minJdSalary,
    maxJdSalary,
    salaryCurrencyCode,
    jobDetailsFromCompany,
  },
}) => {
  return (
    <Paper
      elevation={3}
      class="job-paper"
      //   style={{
      //     width: "28%",
      //     padding: "10px",
      //     overflowWrap: "break-word",
      //     height: "560px",
      //     margin: "24px 24px",
      //   }}
    >
      <div style={{ display: "flex", gap: "8px" }}>
        <div>
          <img src={logoUrl} alt="company-logo" width={40} />
        </div>
        <div style={{ display: "flex", gap: "4px", flexDirection: "column" }}>
          <div>{companyName}</div>
          <div>{jobRole}</div>
          <div>{location}</div>
        </div>
      </div>
      <div style={{ margin: "12px 0" }}>
        Estimated Salary: {minJdSalary} - {maxJdSalary} {salaryCurrencyCode}
      </div>
      <div style={{ marginBottom: "2px" }}>About the company:</div>
      <div>About Us:</div>
      <div>{jobDetailsFromCompany}</div>
      <div style={{ marginTop: "24px" }}>Minimum Experience</div>
      <div>{minExp} years</div>
      <Button variant="contained" fullWidth style={{ marginTop: "18px" }}>
        Easy Apply
      </Button>
    </Paper>
  );
};

export default JobCard;
