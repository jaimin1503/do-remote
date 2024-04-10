import NavLogged from "../../components/NavLogged";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import JobCard from "../../components/jobCompos/JobCard";
import { setJobs } from "../../reducers/jobReducer";
import { useDispatch } from "react-redux";
import JobSktn from "../../skeletons/JobSktn";

const MyJobs = () => {
  const { jobs } = useSelector((state) => state.job);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BASE_URL}/job/getalljobs`, {
        withCredentials: true,
      })
      .then((res) => {
        dispatch(setJobs(res.data.jobs));
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <NavLogged />
      <div className="container">
        <h1 className=" m-4 text-4xl font-medium">Your job postings</h1>
        <hr />
        <div className="jobs">
          {loading ? (
            <JobSktn />
          ) : (
            jobs.map((job) => (
              <Link to={`/editJob/${job._id}`} key={job._id}>
                <JobCard job={job} />
              </Link>
            ))
          )}
        </div>
      </div>
    </>
  );
};
export default MyJobs;
