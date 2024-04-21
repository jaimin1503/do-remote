import React, { useState } from "react";

const EditBid = ({ handleCloseBidModal, bidAmount, budget }) => {
  const [formData, setFormData] = useState({
    bidAmount: bidAmount,
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div className=" bg-white absolute top-[50%] p-4 left-[50%] translate-x-[-50%] translate-y-[-50%] z-10 rounded-2xl w-[330px] sm:w-[500px]">
        <h1 className=" text-2xl md:text-3xl font-medium">Edit your bid</h1>
        <div className="job-proposal my-4 rounded-2xl border-2">
          <div className=" bid flex justify-between flex-col sm:flex-row">
            <div className=" mx-4 mt-4 sm:m-4">
              <h1 className=" font-medium py-2">Your bid amout</h1>
            </div>
            <div className=" mx-4 mb-4 sm:m-4">
              <input
                type="number"
                name="bidAmount"
                value={formData.bidAmount}
                onChange={handleChange}
                placeholder={budget}
                className=" p-2 border-2 border-gray-300 text-right rounded-md"
              />
              <span className=" font-medium mx-2">&#8377;</span>
            </div>
          </div>
          <hr />
          <div className=" flex justify-between m-4 flex-col sm:flex-row sm:items-center">
            <h1 className=" mt-2 font-medium">10% Do-Remote service fee</h1>
            <div className=" my-2 sm:flex sm:items-center">
              <input
                type="number"
                name="hourlyRate"
                value={-formData.bidAmount * 0.1}
                disabled
                className=" p-2 border-2 cursor-not-allowed bg-gray-200 border-gray-300 text-right rounded-md"
              />
              <span className=" font-medium mx-2">&#8377;</span>
            </div>
          </div>
          <hr />
          <div className="m-4 bid flex justify-between flex-col sm:flex-row">
            <div className="">
              <h1 className="mb-2 font-medium">You'll Receive</h1>
            </div>
            <div className=" md:flex md:items-center">
              <input
                type="number"
                name="hourlyRate"
                disabled
                value={formData.bidAmount - formData.bidAmount * 0.1}
                className=" p-2 border-2 border-gray-300 text-right rounded-md"
              />
              <span className=" font-medium mx-2">&#8377;</span>
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="btn bg-blue-500 hover:bg-blue-600 py-2 px-5 rounded-lg float-right text-white"
        >
          Save
        </button>
        <button
          onClick={handleCloseBidModal}
          className="py-2 px-4 float-right text-blue-500"
        >
          Cancle
        </button>
      </div>
    </>
  );
};
export default EditBid;
