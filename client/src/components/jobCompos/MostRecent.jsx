import JobCard from "./JobCard";
import JobSktn from "../../skeletons/JobSktn";
import { useEffect, useState, useMemo } from "react";
import { useSelector } from "react-redux";

const MostRecent = () => {
  const [loading, setLoading] = useState(true);
  const { jobs } = useSelector((state) => state.job);

  useEffect(() => {
    setLoading(true); // Set loading state when jobs are being fetched
    // Sort jobs by createdDate in descending order
    const sortedJobs = [...jobs].sort((a, b) => {
      return new Date(b.createdDate) - new Date(a.createdDate);
    });
    setLoading(false);
  }, [jobs]);

  const mostRecent = useMemo(() => {
    return [...jobs].sort((a, b) => {
      return new Date(b.createdDate) - new Date(a.createdDate);
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
          {mostRecent.map((job, index) => (
            <JobCard key={index} job={job} />
          ))}
        </>
      )}
    </>
  );
};
export default MostRecent;
