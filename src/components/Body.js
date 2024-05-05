import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// Components
import Filters from "./Filters";
import JobsListContainer from "./JobsListContainer";

// utils
import { API_DATA_LIMIT, GET_JOBS_API_URL } from "../utils/constants";
import { updateFilteredJobsList, updateJobsList } from "../utils/jobsSlice";
import { fetchOptions } from "../utils/utils";
import { toggleLoading } from "../utils/configSlice";

const Body = () => {
  const [offset, setOffset] = useState(0);

  const dispatch = useDispatch();
  const jobsList = useSelector((store) => store.jobs.jobsList);
  const filteredJobsList = useSelector((store) => store.jobs.filteredJobsList);
  const appliedFilters = useSelector((store) => store.appliedFilters.filters);
  const isLoading = useSelector((store) => store.config.isLoading);

  // fetches data from the api
  const getJobsData = async () => {
    dispatch(toggleLoading());

    try {
      const body = JSON.stringify({
        limit: API_DATA_LIMIT,
        offset,
      });
      const data = await fetch(GET_JOBS_API_URL, {
        ...fetchOptions,
        body,
      });

      const json = await data.json();
      const filteredJobs = filterJobsList([...jobsList, ...json.jdList]);

      setOffset((offset) => offset + 10); // increments offset for next api call

      // updates the state
      dispatch(updateFilteredJobsList({ jobsList: filteredJobs }));
      dispatch(updateJobsList({ jobsList: [...jobsList, ...json.jdList] }));
    } catch (error) {
      console.error(error);
    } finally {
      dispatch(toggleLoading());
    }
  };

  // handles infinite scroll
  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight
    ) {
      return;
    }
    getJobsData();
  };

  // adding scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isLoading, appliedFilters]);

  // filters jobs when filters are applied
  useEffect(() => {
    const filteredJobsList = filterJobsList();
    dispatch(updateFilteredJobsList({ jobsList: filteredJobsList }));
  }, [appliedFilters]);

  // fetches data on first render
  useEffect(() => {
    getJobsData();
  }, []);

  // function to filter the jobs based on various filters applied
  const filterJobsList = (jobs = jobsList) => {
    if (Object.keys(appliedFilters).length === 0) return jobs;
    const filteredJobs = jobs.filter((job) => {
      const {
        minExp = 0,
        minJdSalary = 0,
        location = "",
        jobRole = "",
        companyName = "",
      } = job;
      const {
        experience = [],
        remote = [],
        salary = [],
        roles = [],
        company = [""],
        location: filterLocation = [""],
      } = appliedFilters;

      //  checks if this job is valid for experience filter selected
      let experienceValid = minExp >= experience[0];
      if (!experience.length) {
        experienceValid = true;
      }

      //  checks if this job is remote
      let remoteValid = remote.includes(location);
      if (remote.includes("in-office") && location) {
        remoteValid = true;
      }
      if (!remote.length) {
        remoteValid = true;
      }

      //  checks if this job is valid for min salary filter selected
      let salaryValid = false;
      if (!salary.length) {
        salaryValid = true;
      }
      for (let i = 0; i < salary.length; i++) {
        const numbersArray = salary[i].split(" ")[0].split("-").map(Number);
        if (minJdSalary >= numbersArray[0] && minJdSalary < numbersArray[1]) {
          salaryValid = true;
          break;
        }
      }

      //  checks if this job is in the filters selected
      let jobRoleValid = false;
      if (!roles.length) {
        jobRoleValid = true;
      }
      for (let i = 0; i < roles.length; i++) {
        if (jobRole.includes(roles[i])) {
          jobRoleValid = true;
          break;
        }
      }

      // check if the company name input value a substring of the company name of this job
      let companyValid = false;
      if (!company.length || company[0] === "") {
        companyValid = true;
      }
      companyValid = companyName
        .toLowerCase()
        .includes(company[0].toLowerCase());

      // check if the location input value a substring of the location of this job
      let locationValid = false;
      if (!filterLocation.length || filterLocation[0] === "") {
        locationValid = true;
      }
      locationValid = location
        .toLowerCase()
        .includes(filterLocation[0].toLowerCase());

      // filter this job if it satifies all filter conditions
      return (
        locationValid &&
        remoteValid &&
        experienceValid &&
        salaryValid &&
        jobRoleValid &&
        companyValid
      );
    });
    return filteredJobs;
  };

  return (
    <div>
      <Filters />
      <JobsListContainer jobsList={filteredJobsList} />
      {isLoading && <div className="fallback-msg">Loading...</div>}
    </div>
  );
};

export default Body;
