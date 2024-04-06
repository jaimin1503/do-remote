import JobCard from "./JobCard";
import axios from "axios";
import { useEffect, useState } from "react";
import JobSktn from "../skeletons/JobSktn";

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
      {loading ? (
        <>
          <JobSktn />
          <JobSktn />
          <JobSktn />
          <JobSktn />
        </>
      ) : (
        <>
          {jobs.map((job, index) => (
            <JobCard key={index} job={job} />
          ))}
        </>
      )}
    </>
  );
};
export default Jobs;
