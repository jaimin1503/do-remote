import JobCard from "./JobCard";
import JobSktn from "../skeletons/JobSktn";

const Jobs = ({ jobsType, loading }) => {
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
          {jobsType.map((job, index) => (
            <JobCard key={index} job={job} />
          ))}
        </>
      )}
    </>
  );
};
export default Jobs;
