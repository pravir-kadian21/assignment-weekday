import React from "react";

// Components
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
      <div className="company-info-container">
        <div>
          <img src={logoUrl} alt="company-logo" width={40} />
        </div>
        <div className="company-info">
          <div className="company-name">{companyName}</div>
          <div className="job-role">{jobRole}</div>
          <div className="location">{location}</div>
        </div>
      </div>
      <div className="salary">
        Estimated Salary: {minJdSalary || 0} - {maxJdSalary}{" "}
        {salaryCurrencyCode} ✅
      </div>
      <a href={jdLink} className="jd-link" target="_blank" rel="noreferrer">
        {jdLink}
      </a>
      <div className="about-company">About the Company:</div>
      <div className="about-us">About Us:</div>
      <div className="job-details-container">
        <div className="job-details">
          {jobDetailsFromCompany.substring(0, 800)}...
        </div>
        <div className="show-more">Show More</div>
      </div>
      <div className="min-exp-heading">Minimum Experience</div>
      <div className="min-exp">{minExp || 0} years</div>
      <Button
        variant="contained"
        fullWidth
        className="easy-apply-btn"
        size="large"
      >
        ⚡ Easy Apply
      </Button>
    </Paper>
  );
};

export default JobCard;
