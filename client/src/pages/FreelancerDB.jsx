import React from "react";
import { useSelector } from "react-redux";
import SearchCompo from "../components/SearchCompo";
import JobsTabs from "../components/jobCompos/JobsTabs";
import NavLogged from "../components/NavLogged";

const FreelancerDB = () => {
  const { user } = useSelector((state) => state.user);

  return (
    <>
      <NavLogged />
      <div className=" p-4">
        <h1
          style={{ fontFamily: "Philosopher-Bold" }}
          className=" text-4xl font-medium my-4"
        >
          Hi, {user?.firstName} 👋{" "}
        </h1>
        <div className="search">
          <SearchCompo />
        </div>
        <h1 className=" text-3xl font-medium my-4">Explore new jobs</h1>
        <div>
          <JobsTabs />
        </div>
      </div>
    </>
  );
};
export default FreelancerDB;
