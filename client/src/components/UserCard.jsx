import Drawer from "@mui/material/Drawer";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import axios from "axios";
import ViewProfile from "../pages/ViewProfile";

const UserCard = ({ user }) => {
  const [open, setOpen] = useState(false);
  const [drawerUser, setDrawerUser] = useState({});

  const toggleDrawer = (newOpen, user) => () => {
    setOpen(newOpen);
    setDrawerUser(user);
  };

  return (
    <>
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        <ViewProfile
          user={drawerUser}
          toggleDrawer={toggleDrawer}
          role="freelancer"
        />
      </Drawer>

      <div className=" w-full">
        <div className="image flex">
          <img
            className="h-16 w-16 rounded-full object-cover"
            src={user?.profile?.profilePicture}
            alt="img"
          />
          <div className=" mx-4">
            <p
              onClick={toggleDrawer(true, user)}
              className="Name hover:underline text-xl font-medium hover:text-blue-600 cursor-pointer"
              style={{ transition: "0.3s" }}
            >
              {user?.username}
            </p>
            <p className=" text-gray-500 text-sm">{user?.location}</p>
            <p className="role text-sm text-gray-600">
              {user?.profile?.current_position}
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center my-2">
            <p className=" font-medium mr-1">Rate:</p>
            <p className="text-gray-600 text-sm">
              {user?.profile?.hourlyRate} Rs/hr
            </p>
          </div>
        </div>

        <h1 className=" text-xl pb-2 font-semibold">Skills</h1>
        <div className="skills flex items-center flex-wrap">
          {user?.profile?.skills.map((skill, index) => (
            <div key={index} className="text-gray-600 text-sm">
              <div className="mt-2 mx-2 py-2 px-4 bg-blue-200 rounded-full w-fit">
                {skill}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default UserCard;
