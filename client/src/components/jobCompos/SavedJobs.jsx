import { useEffect, useState } from "react";
import axios from "axios";
import JobCard from "./JobCard";
import JobSktn from "../../skeletons/JobSktn";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setSavedJobs } from "../../reducers/jobReducer";

const SavedJobs = () => {
  const [loading, setLoading] = useState(true);
  const savedJobs = useSelector((state) => state.job.savedJobs);
  const dispatch = useDispatch();

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
            savedJobs.map((job, index) => <JobCard key={index} job={job} />)}
        </>
      )}
    </>
  );
};
export default SavedJobs;
