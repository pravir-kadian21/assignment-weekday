import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Filters from "./Filters";
import JobsListContainer from "./JobsListContainer";

import { GET_JOBS_API_URL } from "../utils/constants";
import { updateFilteredJobsList, updateJobsList } from "../utils/jobsSlice";

import "./styles.css";

const Body = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [offset, setOffset] = useState(0);

  const dispatch = useDispatch();
  const jobsList = useSelector((store) => store.jobs.jobsList);
  const filteredJobsList = useSelector((store) => store.jobs.filteredJobsList);
  const appliedFilters = useSelector((store) => store.appliedFilters.filters);

  const getJobsData = async () => {
    debugger;
    console.log("po");
    setIsLoading(true);
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const body = JSON.stringify({
      limit: 10,
      offset,
    });
    const data = await fetch(GET_JOBS_API_URL, {
      method: "POST",
      headers: myHeaders,
      body,
    });
    const json = await data.json();
    dispatch(updateJobsList({ jobsList: [...jobsList, ...json.jdList] }));
    const filteredJobs = filterJobsList([...jobsList, ...json.jdList]);
    dispatch(updateFilteredJobsList({ jobsList: filteredJobs }));
    setIsLoading(false);
    setOffset((offset) => offset + 10);

    console.log(json.jdList);
  };

  useEffect(() => {
    const filteredJobsList = filterJobsList();
    dispatch(updateFilteredJobsList({ jobsList: filteredJobsList }));
  }, [appliedFilters]);

  useEffect(() => {
    getJobsData();
  }, []);

  const filterJobsList = (jobs = jobsList) => {
    console.log(appliedFilters);
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
      let experienceValid = minExp >= experience[0];
      if (!experience.length) {
        experienceValid = true;
      }
      let remoteValid = remote.includes(location);
      if (remote.includes("in-office") && location) {
        remoteValid = true;
      }
      if (!remote.length) {
        remoteValid = true;
      }
      let salaryValid = false;
      if (!salary.length) {
        salaryValid = true;
      }
      for (let i = 0; i < salary.length; i++) {
        debugger;
        const numbersArray = salary[i].split(" ")[0].split("-").map(Number);
        if (minJdSalary >= numbersArray[0] && minJdSalary < numbersArray[1]) {
          salaryValid = true;
          break;
        }
      }
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

      let companyValid = false;
      if (!companyValid.length || company[0] === "") {
        companyValid = true;
      }
      debugger;
      companyValid = companyName
        .toLowerCase()
        .includes(company[0].toLowerCase());
      let locationValid = false;

      if (!locationValid.length || filterLocation[0] === "") {
        locationValid = true;
      }

      locationValid = location
        .toLowerCase()
        .includes(filterLocation[0].toLowerCase());

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

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight
    ) {
      return;
    }
    getJobsData();
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isLoading, appliedFilters]);

  return (
    <div>
      <Filters />
      <JobsListContainer jobsList={filteredJobsList} />
    </div>
  );
};

export default Body;
