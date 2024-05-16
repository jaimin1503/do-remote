import JobCard from "./JobCard";
import JobSktn from "../../skeletons/JobSktn";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { calculateMatchScore } from "../../services/matchScore";
import { setAllJobs } from "../../reducers/jobReducer";
import axios from "axios";

const BestMatches = () => {
  const [bestMatches, setBestMatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const { allJobs } = useSelector((state) => state.job);
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BASE_URL}/job/getJobs`, {
        withCredentials: true,
      })
      .then((res) => {
        dispatch(setAllJobs(res.data.jobs));
      })
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    if (allJobs) {
      const matches = allJobs.filter((job) => {
        const score = calculateMatchScore(
          user?.profile?.skills,
          job?.skillsRequired
        );
        return score > 0; // Adjust the condition according to your matching criteria
      });
      setBestMatches(matches);
      setLoading(false);
    }
  }, [allJobs, user?.profile?.skills]);

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
