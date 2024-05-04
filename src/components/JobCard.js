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
    // <div style={{ width: "33%" }}>
    //   <div style={{ display: "flex" }}>
    //     <div>
    //       <img
    //         src="https://logo.clearbit.com/lg.com"
    //         alt="company-logo"
    //         width={40}
    //       />
    //     </div>
    //     <div>
    //       <div>Company Name</div>
    //       <div>Role</div>
    //       <div>location</div>
    //     </div>
    //   </div>
    //   <div>Estimated Salry</div>
    //   <div>About the company:</div>
    //   <div>About Us</div>
    //   <div style={{ width: "10px" }}>
    //     fmxlmklzvklsklsfklsdkljklfsjklfsjklfsjklfjkjfskjfskljfskgjkfsjkfmxlmklzvklsklsfklsdkljklfsjklfsjklfsjklfjkjfskjfskljfskgjkfsjkfmxlmklzvklsklsfklsdkljklfsjklfsjklfsjklfjkjfskjfskljfskgjkfsjk
    //   </div>
    //   <div>Minimum Experience</div>
    //   <div>2 years</div>
    // </div>
    <Paper
      elevation={3}
      style={{
        width: "28%",
        padding: "10px",
        overflowWrap: "break-word",
        height: "560px",
        margin: "24px 24px",
      }}
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
    // <div
    //   style={{
    //     width: "15rem",
    //     background: "red",
    //     display: "flex",
    //     flexDirection: "column",
    //     overflowWrap: "break-word",
    //   }}
    // >
    //   <img
    //     src="https://logo.clearbit.com/lg.com"
    //     alt="company-logo"
    //     width={40}
    //   />
    //   <h1>ioi</h1>
    //   <p>jskfjkdjfkdjfjdkfdfdkfdkflkdlfkdlfkldsdsd</p>
    // </div>
  );
};

export default JobCard;
