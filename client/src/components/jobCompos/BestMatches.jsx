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
    jobs.filter((job) => {
      if (job.category.includes(userMatch)) {
        setBestMatches((prev) => [...prev, job]);
        setLoading(false);
      }
    });
  }, [jobs]);

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
          {bestMatches.map((job, index) => (
            <JobCard key={index} job={job} />
          ))}
        </>
      )}
    </>
  );
};
export default BestMatches;
