// export const filterJobsList = (jobs, appliedFilters) => {
//   console.log(Object.keys(appliedFilters).length);
//   debugger;
//   console.log(appliedFilters);
//   if (Object.keys(appliedFilters).length === 0) return jobs;
//   const filteredJobs = jobs.filter((job) => {
//     const {
//       minExp = 0,
//       minJdSalary = 0,
//       location = "",
//       jobRole = "",
//       companyName = "",
//     } = job;
//     const {
//       experience = [],
//       remote = [],
//       salary = [],
//       roles = [],
//       company = [""],
//       location: filterLocation = [""],
//     } = appliedFilters;
//     let experienceValid = minExp >= experience[0];
//     if (!experience.length) {
//       experienceValid = true;
//     }
//     let remoteValid = remote.includes(location);
//     if (remote.includes("in-office") && location) {
//       remoteValid = true;
//     }
//     if (!remote.length) {
//       remoteValid = true;
//     }
//     let salaryValid = false;
//     if (!salary.length) {
//       salaryValid = true;
//     }
//     for (let i = 0; i < salary.length; i++) {
//       debugger;
//       const numbersArray = salary[i].split(" ")[0].split("-").map(Number);
//       if (minJdSalary >= numbersArray[0] && minJdSalary < numbersArray[1]) {
//         salaryValid = true;
//         break;
//       }
//     }
//     let jobRoleValid = false;
//     if (!roles.length) {
//       jobRoleValid = true;
//     }
//     for (let i = 0; i < roles.length; i++) {
//       if (jobRole.includes(roles[i])) {
//         jobRoleValid = true;
//         break;
//       }
//     }

//     let companyValid = false;
//     if (!companyValid.length || company[0] === "") {
//       companyValid = true;
//     }
//     debugger;
//     companyValid = companyName.toLowerCase().includes(company[0].toLowerCase());
//     let locationValid = false;

//     if (!locationValid.length || filterLocation[0] === "") {
//       locationValid = true;
//     }

//     locationValid = location
//       .toLowerCase()
//       .includes(filterLocation[0].toLowerCase());

//     return (
//       locationValid &&
//       remoteValid &&
//       experienceValid &&
//       salaryValid &&
//       jobRoleValid &&
//       companyValid
//     );
//   });
//   return filteredJobs;
// };
