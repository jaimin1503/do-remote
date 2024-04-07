import React from "react";
import Like from "../assets/Like";
import { useState, useEffect } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import pin from "../assets/pin.svg";
import axios from "axios";

const ViewJob = ({ job, toggleDrawer }) => {
  const now = new Date();
  const createDate = new Date(job?.createdDate);
  const timeDiffrence = now.getTime() - createDate.getTime();
  const minutes = Math.floor(timeDiffrence / 60000);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const [saved, setSaved] = useState(false);

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

  const handleSave = () => {
    axios
      .put(`${import.meta.env.VITE_BASE_URL}/job/savejob/${job?._id}`, null, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res.data.message);
        setSaved(!saved);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className=" w-screen md:w-[70vw]">
      <div className=" m-4">
        <ArrowBackIcon
          onClick={toggleDrawer(false)}
          className="cursor-pointer"
        />
      </div>
      <div className=" m-4">
        <h1 className=" text-2xl md:text-3xl font-medium">{job?.title}</h1>
        <div className=" flex items-center">
          <p className=" text-sm text-gray-500 my-3">
            {days > 0
              ? "Posted " + days + " days ago"
              : hours > 0
              ? "Posted " + hours + " hours ago"
              : "Posted " + minutes + " minutes ago"}
          </p>
          <div className=" flex">
            <img className=" ml-4" src={pin} alt="pin" />
            <p className=" text-sm text-gray-500 mx-1">{job?.location}</p>
          </div>
        </div>
      </div>
      <hr />
      <div className=" p-4">
        <p className=" font-light">{job?.description}</p>
        <p className=" my-3">
          Budget: <span className=" text-gray-500">&#8377;{job?.budget}</span>
        </p>
      </div>
      <hr />
      <h1 className=" text-2xl font-medium m-4">Skills and Expertise</h1>
      <div className=" flex mx-4 mb-4 flex-wrap">
        {job?.skillsRequired?.map((skill, index) => (
          <div
            key={index}
            className="skills-list py-2 px-4 m-2 whitespace-nowrap bg-gray-200 w-fit rounded-full"
          >
            <h1 className=" text-sm font-medium">{skill}</h1>
          </div>
        ))}
      </div>
      <hr />
      <h1 className=" m-4 text-2xl font-medium">Activity</h1>
      <p className=" px-4 py-2 font-light text-sm">
        {job?.proposals?.length} Proposals
      </p>
      <hr />
      <div className="client-info m-4">
        <h1 className="text-2xl font-medium">About the Client</h1>
        <p className=" px-4 py-2 font-light text-sm">
          {job?.client?.jobs?.length} Jobs Posted
        </p>
      </div>
      <hr />
      <div className="buttons bottom-0 m-4 flex justify-evenly w-full">
        <button className=" px-5 py-2 rounded-full bg-blue-500 hover:bg-blue-600 text-white">
          Apply Now
        </button>
        <button
          onClick={handleSave}
          className="flex px-5 py-2 border-2 border-blue-500 rounded-full"
        >
          <span className=" mx-2 text-blue-500">Save Job</span>{" "}
          <Like saved={saved} />
        </button>
      </div>
    </div>
  );
};
export default ViewJob;
