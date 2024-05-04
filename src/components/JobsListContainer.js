import React from "react";
import JobCard from "./JobCard";

const JobsListContainer = ({ jobsList }) => {
  if (!jobsList || !jobsList.length) {
    return (
      <div className="fallback-msg">
        OOPS!! No Results Found, try changing the filters
      </div>
    );
  }
  return (
    <div className="jobs-list-container">
      {jobsList.map((job) => {
        const { jdUid } = job;
        return <JobCard job={job} key={jdUid} />;
      })}
    </div>
  );
};

export default JobsListContainer;
