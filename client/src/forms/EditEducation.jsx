import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateEducation } from "../services/profile";

const EditEducation = ({ pId, handleCloseEduModal }) => {
  const [FormData, setFormData] = useState({
    school: "",
    degree: "",
  });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({ ...FormData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateEducation(FormData, pId)).then(() => {
      console.log("submitted");
      handleCloseEduModal();
    });
  };

  return (
    <>
      <div className=" absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-10">
        <div className=" bg-white p-4 rounded-2xl flex flex-col w-[340px] sm:w-[500px] items-cente">
          <div className="edit-details-header my-4">
            <h1 className="text-3xl font-medium">
              Edit Job description and budget
            </h1>
          </div>
          <form>
            <h1 className="mb-2 font-medium">Name of School or Institute:</h1>
            <input
              type="text"
              name="school"
              value={FormData.school}
              onChange={handleChange}
              className=" p-2 border-2 border-gray-300 rounded-md w-full"
            />
            <h1 className="my-2 mt-4 font-medium">Degree:</h1>
            <input
              type="text"
              name="degree"
              value={FormData.degree}
              onChange={handleChange}
              className=" p-2 border-2 border-gray-300 rounded-md w-full"
            />
            <button
              onClick={handleSubmit}
              className="bg-blue-500 text-white py-2 px-4 rounded-md mt-4 float-right"
            >
              Save
            </button>
            <button
              onClick={handleCloseEduModal}
              className=" py-2 px-4 mt-4 float-right text-blue-500"
            >
              Cancel
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
export default EditEducation;
