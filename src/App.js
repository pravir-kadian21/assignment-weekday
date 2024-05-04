import React, { useEffect, useState } from "react";
import { GET_JOBS_API_URL } from "./utils/constants";
import JobCard from "./components/JobCard";
import JobsListContainer from "./components/JobsListContainer";
import Filters from "./components/Filters";

function App() {
  const [jobsList, setJobsList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [offset, setOffset] = useState(0);
  const getJobsData = async () => {
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
    setJobsList([...jobsList, ...json.jdList]);
    setIsLoading(false);
    setOffset((offset) => offset + 10);

    console.log(json.jdList);
  };

  useEffect(() => {
    getJobsData();
  }, []);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight ||
      isLoading
    ) {
      return;
    }
    getJobsData();
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isLoading]);

  return (
    <div>
      <Filters />
      <JobsListContainer jobsList={jobsList} />
    </div>
  );
}

export default App;
