import { useEffect, useState } from "react";
import axios from "axios";
import JobCard from "./JobCard";
import JobSktn from "../skeletons/JobSktn";

const SavedJobs = () => {
  const [savedJobs, setSavedJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BASE_URL}/job/getsavedjobs`, {
        withCredentials: true,
      })
      .then((res) => {
        setSavedJobs(res.data.data);
        console.log(res.data.data);
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
          {savedJobs.map((job, index) => (
            <JobCard key={index} job={job} />
          ))}
        </>
      )}
    </>
  );
};
export default SavedJobs;
