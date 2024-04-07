import JobCard from "./JobCard";
import JobSktn from "../../skeletons/JobSktn";
import { useEffect, useState, useMemo } from "react";
import { useSelector } from "react-redux";
import Drawer from "@mui/material/Drawer";
import ViewJob from "./ViewJob";

const MostRecent = () => {
  const [loading, setLoading] = useState(true);
  const { jobs } = useSelector((state) => state.job);
  const [open, setOpen] = useState(false);
  const [drawerJob, setDrawerJob] = useState({});

  const toggleDrawer = (newOpen, job) => () => {
    setOpen(newOpen);
    setDrawerJob(job);
  };

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
            <div onClick={toggleDrawer(true, job)} key={job._id}>
              <JobCard job={job} />
            </div>
          ))}
        </>
      )}
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        <ViewJob job={drawerJob} toggleDrawer={toggleDrawer} />
      </Drawer>
    </>
  );
};
export default MostRecent;
