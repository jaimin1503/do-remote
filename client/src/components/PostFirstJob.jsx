import React from "react";
import { Link } from "react-router-dom";
import jobImg from "./assets/job.png";

const PostFirstJob = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <div className="container h-[300px] mx-3 whitespace-nowrap max-w-[250px] min-w-[280px] border-2 border-blue-500 rounded-2xl cursor-pointer hover:bg-gray-50">
          <h1 className=" mx-4 mt-4 text-2xl font-medium">
            Post your first job!
          </h1>
          <img className=" w-[180px] mx-auto" src={jobImg} alt="" />
          <Link to={`/postjob`}>
            <button className=" py-2 px-5 w-full my-2 bg-blue-500 text-white rounded-full hover:bg-blue-600">
              Post new job
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};
export default PostFirstJob;
