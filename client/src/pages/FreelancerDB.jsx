import React from "react";
import { useSelector } from "react-redux";
import { useState } from "react";
import SearchCompo from "../components/SearchCompo";
import BasicTabs from "../components/JobsTabs";

const FreelancerDB = () => {
  const { user } = useSelector((state) => state.user);

  return (
    <div>
      <div className="container">
        <h1 className=" text-3xl font-medium my-4">
          Hi, {user?.firstName} 👋{" "}
        </h1>
        <div className="search">
          <SearchCompo />
        </div>
        <h1 className=" text-3xl font-medium my-4">Explore new jobs</h1>
        <div>
          <BasicTabs />
        </div>
      </div>
    </div>
  );
};
export default FreelancerDB;
