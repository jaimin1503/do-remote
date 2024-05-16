import axios from "axios";
import NavLogged from "../../components/NavLogged";
import { useEffect, useState } from "react";
import JobSktn from "../../skeletons/JobSktn";
import JobCard from "../../components/jobCompos/JobCard";

const Contracts = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BASE_URL}/job/getActiveJobs`, {
        withCredentials: true,
      })
      .then((res) => {
        setJobs(res.data.jobs);
        console.log(res.data.jobs);
        setLoading(false);
      })
      .catch((error) => console.error(error));
  }, []);
  return (
    <>
      <NavLogged />
      <div className="container">
        <h1
          style={{ fontFamily: "Philosopher-Bold" }}
          className=" text-3xl font-medium m-4"
        >
          Your active jobs
        </h1>
        {loading ? (
          <>
            <JobSktn />
            <JobSktn />
            <JobSktn />
            <JobSktn />
          </>
        ) : (
          <>
            {jobs.map((job) => (
              <JobCard key={job._id} job={job} />
            ))}
          </>
        )}
      </div>
    </>
  );
};
export default Contracts;
