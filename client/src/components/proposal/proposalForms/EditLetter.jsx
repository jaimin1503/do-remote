import React, { useState } from "react";

const EditLetter = ({ handleCloseLetterModal }) => {
  const [formData, setFormData] = useState({
    coverLetter: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div className=" bg-white absolute top-[50%] p-4 left-[50%] translate-x-[-50%] translate-y-[-50%] z-10 rounded-2xl w-[330px] sm:w-[500px]">
        <h1 className=" text-3xl font-medium pb-4">Edit CoverLetter</h1>
        <textarea
          className=" p-4 w-full border-2 rounded-xl"
          placeholder="Write a cover letter to the client"
          rows={10}
          value={formData.coverLetter}
          onChange={handleChange}
          name="coverLetter"
        ></textarea>
        <button
          type="submit"
          className="btn bg-blue-500 hover:bg-blue-600 py-2 px-5 rounded-lg float-right text-white mt-4"
        >
          Save
        </button>
        <button
          onClick={handleCloseLetterModal}
          className="py-2 px-4 float-right text-blue-500 mt-4"
        >
          Cancle
        </button>
      </div>
    </>
  );
};
export default EditLetter;
