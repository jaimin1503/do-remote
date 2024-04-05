import React from "react";
import { useSelector } from "react-redux";
import { useState } from "react";
import SearchCompo from "../components/SearchCompo";

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
      </div>
    </div>
  );
};
export default FreelancerDB;
