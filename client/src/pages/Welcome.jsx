import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Welcome() {
  const [role, setRole] = useState("");
  console.log(role);

  const handleRole = (e) => {
    setRole(e.target.value);
  };

  return (
    <div>
      <nav>
        <h1 className=" p-4">DO-REMOTE</h1>
      </nav>

      <div className=" flex flex-col justify-center items-center md:border-2 p-10 rounded-xl max-w-xl border-blue-300 mx-auto">
        <div className="message">
          <h1 className="text-3xl my-5 font-medium">
            Join as client or Freelancer
          </h1>
        </div>
        <div className="choice flex flex-col">
          <div className=" bg-blue-200 border-2 rounded-xl m-5 py-5 hover:border-blue-300">
            <input
              className="m-5"
              type="radio"
              name="role"
              id="client"
              value="client"
              checked={role === "client"}
              onChange={handleRole}
            />
            <label
              className="text-lg font-medium py-10 px-5 cursor-pointer"
              htmlFor="client"
            >
              I am a client looking for Talent
            </label>
          </div>
          <div className=" bg-blue-200 rounded-xl m-5 py-5 border-2 hover:border-blue-300">
            <input
              className="m-5"
              type="radio"
              name="role"
              id="freelancer"
              value="freelancer"
              checked={role === "freelancer"}
              onChange={handleRole}
            />
            <label
              className="py-10 font-medium text-lg px-5 cursor-pointer"
              htmlFor="freelancer"
            >
              I am a Freelancer looking for work
            </label>
          </div>
        </div>
        <div className="button">
          <Link to={`/signup/${role}`}>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 my-5 rounded-lg">
              {role === "client"
                ? "Continue as Client"
                : "Continue as Freelancer"}
            </button>
          </Link>
        </div>
        <p>
          Already have an account?{" "}
          <a
            className=" text-gray-500 underline cursor-pointer font-medium hover:text-blue-500"
            href="/login"
          >
            Login
          </a>
        </p>
      </div>
    </div>
  );
}
