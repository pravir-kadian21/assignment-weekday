import React from "react";
import JobCard from "./JobCard";

const JobsListContainer = ({ jobsList }) => {
  return (
    <div
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
    >
      {jobsList.map((job) => {
        const { jdUid } = job;
        return <JobCard job={job} key={jdUid} />;
      })}
    </div>
  );
};

export default JobsListContainer;
