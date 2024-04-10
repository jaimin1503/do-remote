import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useState } from "react";
import axios from "axios";
import FlCard from "../components/FlCard";
import JobCardSm from "../components/jobCompos/JobCardSm";
import Drawer from "@mui/material/Drawer";
import ViewProfile from "./ViewProfile";
import { Link } from "react-router-dom";

function ClientDB() {
  const { user } = useSelector((state) => state.user);
  const [users, setUsers] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [open, setOpen] = useState(false);
  const [drawerUser, setDrawerUser] = useState({});

  const toggleDrawer = (newOpen, user) => () => {
    setOpen(newOpen);
    setDrawerUser(user);
  };

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
                  <Link to={`/editJob/${job._id}`}>
                    <JobCardSm job={job} />
                  </Link>
                </div>
              ))}
          </div>
        </div>
        <h1 className="text-4xl font-medium my-4">Browse Freelancers</h1>
        <div className="browse-talents w-full overflow-x-auto whitespace-nowrap">
          <div className="fl-card-container my-4 flex whitespace-nowrap w-full">
            {users &&
              users.map((user) => (
                <div onClick={toggleDrawer(true, user)} key={user?._id}>
                  <FlCard user={user} />
                </div>
              ))}
          </div>
        </div>
      </div>
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        <ViewProfile user={drawerUser} />
      </Drawer>
    </>
  );
}
export default ClientDB;
