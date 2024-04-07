import JobCard from "./JobCard";
import JobSktn from "../../skeletons/JobSktn";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Drawer from "@mui/material/Drawer";
import ViewJob from "./ViewJob";

const BestMatches = () => {
  const [bestMatches, setBestMatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const { jobs } = useSelector((state) => state.job);
  const { user } = useSelector((state) => state.user);
  const userMatch = user?.profile?.current_position.split(" ")[0];
  const [open, setOpen] = useState(false);
  const [drawerJob, setDrawerJob] = useState({});

  const toggleDrawer = (newOpen, job) => () => {
    setOpen(newOpen);
    setDrawerJob(job);
  };

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
export default BestMatches;
