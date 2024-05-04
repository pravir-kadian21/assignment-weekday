import React from "react";
import JobCard from "./JobCard";

const JobsListContainer = ({ jobsList }) => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        margin: "0 24px",
      }}
    >
      {jobsList.map((job) => {
        const { jdUid } = job;
        return <JobCard job={job} key={jdUid} />;
      })}
    </div>
  );
};

export default JobsListContainer;
