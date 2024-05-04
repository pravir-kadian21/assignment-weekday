import React from "react";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

const JobCard = ({
  job: {
    companyName = "",
    jobRole = "",
    location = "",
    logoUrl,
    minExp = 0,
    minJdSalary = 0,
    maxJdSalary = 0,
    salaryCurrencyCode = "USD",
    jobDetailsFromCompany,
    jdLink,
  },
}) => {
  return (
    <Paper elevation={3} class="job-paper">
      <div style={{ display: "flex", gap: "8px" }}>
        <div>
          <img src={logoUrl} alt="company-logo" width={40} />
        </div>
        <div style={{ display: "flex", gap: "4px", flexDirection: "column" }}>
          <div className="company-name">{companyName}</div>
          <div className="job-role">{jobRole}</div>
          <div className="location">{location}</div>
        </div>
      </div>
      <div className="salary">
        Estimated Salary: {minJdSalary || 0} - {maxJdSalary}{" "}
        {salaryCurrencyCode} ✅
      </div>
      <a href={jdLink} className="jd-link" target="_blank">
        {jdLink}
      </a>
      <div className="about-company">About the Company:</div>
      <div className="about-us">About Us:</div>
      <div style={{ position: "relative" }}>
        <div className="job-details">
          {jobDetailsFromCompany.substring(0, 800)}...
        </div>
        <div
          style={{
            color: "red",
            position: "absolute",
            bottom: "-20px",
            left: "120px",
            color: "#4943da",
            fontSize: "14px",
          }}
        >
          Show More
        </div>
      </div>
      <div className="min-exp-heading">Minimum Experience</div>
      <div className="min-exp">{minExp || 0} years</div>
      <Button
        variant="contained"
        fullWidth
        style={{ marginTop: "18px" }}
        className="easy-apply-btn"
        size="large"
      >
        ⚡ Easy Apply
      </Button>
    </Paper>
  );
};

export default JobCard;
