import React, { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setJobs } from "../reducers/jobReducer";

const EditDes = ({ jId, handleCloseDescription, description, budget }) => {
  const [formData, setFormData] = useState({
    description: description,
    budget: budget,
  });
  const dispatch = useDispatch();
  const { jobs } = useSelector((state) => state.job);

  const handelInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`${import.meta.env.VITE_BASE_URL}/job/editjob/${jId}`, formData, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res.data);
        dispatch(
          setJobs(jobs.map((job) => (job._id === jId ? formData : job)))
        );
        handleCloseDescription();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="edit-details">
        <div className=" absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-10">
          <div className=" bg-white p-4 rounded-2xl flex flex-col w-[340px] sm:w-[500px] items-center">
            <div className="edit-details-header my-4">
              <h1 className="text-3xl font-semibold">
                Edit Job description and budget
              </h1>
            </div>

            <form onSubmit={handleSubmit} className="items-center w-full">
              <textarea
                onChange={handelInputChange}
                name="description"
                type="text"
                rows={5}
                value={formData.description}
                className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500"
              />
              <div className=" bid flex justify-between flex-col sm:flex-row">
                <div className="mt-4 sm:m-4">
                  <h1 className=" text-gray-500 py-2">Your budget</h1>
                </div>
                <div className="mb-4 sm:my-4 sm:ml-4">
                  <input
                    type="number"
                    name="budget"
                    value={formData.budget}
                    onChange={handelInputChange}
                    placeholder={budget}
                    className=" p-2 border-2 border-gray-300 text-right rounded-md"
                  />
                  <span className=" font-medium ml-2">&#8377;</span>
                </div>
              </div>
              <button
                type="submit"
                className="btn bg-blue-500 hover:bg-blue-600 py-2 px-5 rounded-lg float-right text-white mt-4"
              >
                Save
              </button>
              <button
                onClick={() => setIsOpenEditInfo(false)}
                className="py-2 px-4 float-right text-blue-500 mt-4"
              >
                Cancle
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default EditDes;
