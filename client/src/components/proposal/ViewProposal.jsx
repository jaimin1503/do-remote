import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import NavLogged from "../NavLogged";
import Rating from "@mui/material/Rating";
import { toast } from "react-hot-toast";

const ViewProposal = () => {
  const [proposal, setProposal] = useState({});
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BASE_URL}/proposal/getProposal/${id}`, {
        withCredentials: true,
      })
      .then((res) => {
        setProposal(res.data.proposal);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  const handleApprove = () => {
    axios
      .put(
        `${import.meta.env.VITE_BASE_URL}/proposal/acceptproposal/${id}`,
        {},
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        console.log(res.data.message);
        toast.success(res.data.message);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const rejectProposal = () => {
    axios
      .put(
        `${import.meta.env.VITE_BASE_URL}/proposal/rejectproposal/${id}`,
        {},
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        console.log(res.data.message);
        toast.error(res.data.message);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <NavLogged />
      <div className="container p-4">
        <div className=" border rounded-2xl p-4">
          <h1 className=" text-3xl font-medium">{proposal?.job?.title}</h1>
          <div className=" my-4">
            <h2 className=" text-2xl font-medium text-blue-500 cursor-pointer hover:text-blue-600 hover:underline">
              {proposal?.freelancer?.username}
            </h2>
            <h2 className=" text-gray-500">
              {proposal?.freelancer?.profile?.current_position}
            </h2>
          </div>
          <h2 className="font-medium text-xl">Delivery Time</h2>
          <h2 className=" text-sm text-gray-500">{proposal?.deliveryTime}</h2>
        </div>
        <div className=" border rounded-2xl p-4 my-4">
          <h2 className=" text-2xl font-medium">Cover Letter</h2>
          <p className=" whitespace-pre-wrap text-gray-600 my-2 mr-4 text-justify">
            {proposal?.coverLetter}
          </p>
        </div>
        <div className=" border rounded-2xl p-4 my-4">
          <div className="mb-4">
            <h2 className=" text-xl font-medium">Bid Amount</h2>
            <h2 className=" text-gray-500">&#8377; {proposal?.bidAmount}</h2>
          </div>
          <h2 className=" text-xl font-medium">Attachments</h2>
          <div className="flex">
            {proposal?.attachments?.map((attachment, index) => (
              <a
                key={index}
                href={attachment}
                target="_blank"
                rel="noreferrer"
                className="text-blue-500 hover:text-blue-600 hover:underline"
              >
                Attachment {index + 1}
              </a>
            ))}
          </div>
        </div>

        <div className=" border rounded-2xl p-4 my-4">
          <h1 className=" text-2xl font-medium mb-4">About Freelancer</h1>
          <p className=" text-gray-500">
            Freelancer ratings <span>(5)</span>
          </p>

          <Rating name="read-only" value={4} readOnly size="small" />

          <h1 className="mt-2 text-gray-500">20 jobs completed </h1>

          <h1 className=" text-2xl font-medium mt-4">Skills</h1>
          <div className="flex flex-wrap">
            {proposal?.freelancer?.profile?.skills?.map((skill, index) => (
              <div
                key={index}
                className="skills-list py-2 px-4 m-2 whitespace-nowrap bg-blue-200 w-fit rounded-full"
              >
                <h1 className=" text-sm font-medium">{skill}</h1>
              </div>
            ))}
          </div>
        </div>
        {proposal?.status === "submitted" ? (
          <div className="buttons  flex justify-evenly">
            <button
              onClick={handleApprove}
              className="bg-green-600 hover:bg-green-700 text-white py-2 px-5 rounded-full"
            >
              Approve
            </button>
            <button
              onClick={rejectProposal}
              className="bg-red-500 hover:bg-red-600 text-white py-2 px-5 rounded-full"
            >
              Reject
            </button>
          </div>
        ) : (
          <>
            {proposal?.status === "accepted" ? (
              <div className="text-center text-green-500 font-medium">
                <h1>Proposal Accepted</h1>
              </div>
            ) : (
              <div className="text-center text-red-500 font-medium">
                <h1>Proposal Rejected</h1>
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
};
export default ViewProposal;
