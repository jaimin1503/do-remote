import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import FlCard from "../components/FlCard";
import JobCardSm from "../components/JobCardSm";

function ClientDB() {
  const { user } = useSelector((state) => state.user);
  const [users, setUsers] = useState([]);
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BASE_URL}/client/randomUsers`)
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BASE_URL}/job/getalljobs`, {
        withCredentials: true,
      })
      .then((res) => {
        setJobs(res.data.jobs);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className="container my-10 ">
        <h1 className=" text-4xl font-medium">Hello, {user?.firstName} 👋</h1>
        <h1 className=" text-3xl my-4 font-medium">Your Jobs</h1>
        <div className="your-jobs overflow-x-auto whitespace-nowrap w-full">
          <div className="jobs-container flex whitespace-nowrap w-full">
            {jobs &&
              jobs.map((job) => (
                <div key={job?._id}>
                  <JobCardSm job={job} />
                </div>
              ))}
          </div>
        </div>
        <div className="browse-talents w-full my-10 overflow-x-auto whitespace-nowrap">
          <h1 className="text-4xl font-medium">Browse Freelancers</h1>
          <div className="fl-card-container my-4 flex whitespace-nowrap w-full">
            {users &&
              users.map((user) => (
                <div key={user?._id}>
                  <Link to={`/viewprofile/${user?._id}`}>
                    <FlCard user={user} />
                  </Link>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}
export default ClientDB;
