import React from "react";
import { useSelector } from "react-redux";

// Components
import JobCard from "./JobCard";

const JobsListContainer = ({ jobsList }) => {
  const isLoading = useSelector((store) => store.config.isLoading);

  if ((!jobsList || !jobsList?.length) && !isLoading) {
    return (
      <div className="fallback-msg">
        OOPS!! No Results Found, try changing the filters or try after sometime
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
