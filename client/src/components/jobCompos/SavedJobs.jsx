import { useEffect, useState } from "react";
import axios from "axios";
import JobCard from "./JobCard";
import JobSktn from "../../skeletons/JobSktn";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setSavedJobs } from "../../reducers/jobReducer";
import Drawer from "@mui/material/Drawer";
import ViewJob from "./ViewJob";

const SavedJobs = () => {
  const [loading, setLoading] = useState(true);
  const savedJobs = useSelector((state) => state.job.savedJobs);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [drawerJob, setDrawerJob] = useState({});

  const toggleDrawer = (newOpen, job) => () => {
    setOpen(newOpen);
    setDrawerJob(job);
  };

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BASE_URL}/job/getsavedjobs`, {
        withCredentials: true,
      })
      .then((res) => {
        dispatch(setSavedJobs(res.data.data));
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
          {savedJobs &&
            savedJobs.map((job, index) => (
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
export default SavedJobs;
