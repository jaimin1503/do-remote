import Rating from "@mui/material/Rating";
import React, { useEffect, useState } from "react";
import pin from "../assets/pin.svg";
import axios from "axios";
import Like from "../assets/Like.jsx";
import Drawer from "@mui/material/Drawer";
import ViewJob from "./ViewJob";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";

const JobCard = ({ job }) => {
  const now = new Date();
  const createDate = new Date(job?.createdDate);
  const timeDiffrence = now.getTime() - createDate.getTime();
  const minutes = Math.floor(timeDiffrence / 60000);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const [saved, setSaved] = useState(false);
  const [open, setOpen] = useState(false);
  const [drawerJob, setDrawerJob] = useState({});

  const toggleDrawer = (newOpen, job) => () => {
    setOpen(newOpen);
    setDrawerJob(job);
  };

  const handleSave = (e) => {
    e.stopPropagation();
    axios
      .put(`${import.meta.env.VITE_BASE_URL}/job/savejob/${job?._id}`, null, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res.data.message);
        setSaved(!saved);
        toast.success(res.data.message, {
          duration: 4000,
          position: "top-right",
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BASE_URL}/job/isjobsaved/${job?._id}`, {
        withCredentials: true,
      })
      .then((res) => {
        setSaved(res.data.saved);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div
        onClick={toggleDrawer(true, job)}
        className="jobcard border-y w-full p-2 hover:bg-gray-100 cursor-pointer"
      >
        <div className="header flex items-center justify-between my-2">
          <div>
            <p className=" text-sm text-gray-500">
              {days > 0
                ? "Posted " + days + " days ago"
                : hours > 0
                ? "Posted " + hours + " hours ago"
                : "Posted " + minutes + " minutes ago"}
            </p>
            <h1
              onClick={toggleDrawer(true, job)}
              className=" sm:text-xl hover:text-blue-500 hover:underline font-medium my-2"
            >
              {job?.title}
            </h1>
          </div>

          <button onClick={(e) => handleSave(e)}>
            <Like saved={saved} />
          </button>
        </div>
        <p className=" text-sm text-gray-500 font-medium">
          Est. Budget: rs. {job?.budget}
        </p>
        <div className=" my-2">
          <p>
            {job?.description?.length > 200
              ? job?.description.slice(0, 200) + "..."
              : job?.description}
          </p>
        </div>
        <div className=" flex pt-0 overflow-x-scroll my-2">
          {job?.skillsRequired?.map((skill, index) => (
            <div
              key={index}
              className="skills-list py-2 px-4 m-2 whitespace-nowrap bg-blue-200 w-fit rounded-full"
            >
              <h1 className=" text-sm font-medium">{skill}</h1>
            </div>
          ))}
        </div>
        <div className=" flex items-center">
          <p className=" text-gray-400 text-sm mx-2">Reviews: </p>
          <Rating name="read-only" value={4} readOnly size="small" />
          <img className=" ml-4" src={pin} alt="pin" />
          <p className=" text-sm text-gray-500 mx-1">{job?.location}</p>
        </div>
        <p className=" text-sm my-2 text-gray-500">
          {job?.proposals?.length < 6
            ? "Proposals: 0 to 5 "
            : "Proposals: more than 5"}
        </p>
      </div>
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        <ViewJob job={drawerJob} toggleDrawer={toggleDrawer} />
      </Drawer>
    </>
  );
};
export default JobCard;
