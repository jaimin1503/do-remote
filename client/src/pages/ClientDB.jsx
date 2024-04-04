import React from "react";
import { useSelector } from "react-redux";

function ClientDB() {
  const { user } = useSelector((state) => state.user);

  return (
    <>
      <div className="container my-10">
        <h1 className=" text-4xl font-medium">Hello, {user?.firstName} 👋</h1>
        <h1 className=" text-3xl my-4 font-medium">Your Jobs</h1>
        <div className="your-jobs overflow-x-auto whitespace-nowrap w-full">
          <div className="jobs-container flex whitespace-nowrap w-full">
            <div className="job-card h-[400px] mx-4 whitespace-nowrap max-w-[300px] min-w-[300px] border-2 border-blue-500 rounded-2xl">
              <div className="h-[10%]">
                <h1 className="text-2xl font-medium m-4">Job Title</h1>
              </div>
              <div className="h-[60%] overflow-hidden">
                <p className="text-lg text-wrap m-4">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. A
                  tenetur labore odio quis minus voluptates! Vitae ea ullam
                  neque minima deleniti voluptas. Facilis, in amet? Lorem ipsum
                  dolor sit amet consectetur adipisicing elit. Architecto quasi
                  harum qui ullam eaque ipsum in porro, nulla placeat eveniet
                  quae repellendus debitis ea sequi eos optio maxime. Placeat,
                  corrupti.
                </p>
              </div>
              <div className="flex justify-center">
                <button className="border-2 border-blue-500 m-4 hover:bg-gray-100 text-blue-500 py-2 px-4 rounded-full">
                  Edit Job
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="browse-talents w-full my-10 overflow-x-auto whitespace-nowrap">
          <h1 className="text-4xl font-medium">Browse Freelancers</h1>
          <div className="fl-card-container flex whitespace-nowrap w-full">
            <div className="fl-card h-fit m-4 whitespace-nowrap max-w-[300px] min-w-[300px] border-2 border-blue-500 rounded-2xl">
              <div className="fl-card-img">
                <img
                  src="https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg"
                  alt="img"
                  className=" w-24 h-24 object-cover rounded-full m-4"
                />
              </div>
              <div className="fl-card-content m-4">
                <h1 className="text-2xl font-medium">John Doe</h1>
                <p className="text-lg">Full Stack Developer</p>
                <p className="text-lg">5 years of experience</p>
                <p className="text-lg">100+ projects completed</p>
              </div>
              <div className="fl-card-footer mb-4 flex justify-center">
                <button className="border-2 border-blue-500 hover:bg-gray-100 text-blue-500 py-2 px-4 rounded-full">
                  View Profile
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default ClientDB;
