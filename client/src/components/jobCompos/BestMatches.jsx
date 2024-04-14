import JobCard from "./JobCard";
import JobSktn from "../../skeletons/JobSktn";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const BestMatches = () => {
  const [bestMatches, setBestMatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const { jobs } = useSelector((state) => state.job);
  const { user } = useSelector((state) => state.user);
  const userMatch = user?.profile?.current_position.split(" ")[0];

  useEffect(() => {
    if (jobs && jobs.length > 0) {
      const filteredJobs = jobs.filter((job) =>
        job.category.includes(userMatch)
      );
      setBestMatches(filteredJobs);
      setLoading(false);
    }
  }, [jobs, userMatch]);

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
          {bestMatches.map((job) => (
            <JobCard key={job._id} job={job} />
          ))}
        </>
      )}
    </>
  );
};
export default BestMatches;
