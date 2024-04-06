import JobCard from "./JobCard";
import axios from "axios";
import { useEffect, useState } from "react";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BASE_URL}/job/getalljobs`, {
        withCredentials: true,
      })
      .then((res) => {
        setJobs(res.data.jobs);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      {jobs.map((job, index) => (
        <JobCard job={job} key={index} />
      ))}
    </>
  );
};
export default Jobs;
