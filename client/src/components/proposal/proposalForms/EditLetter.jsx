import React, { useState } from "react";
import { editProposal } from "../../../services/proposal";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";

const EditLetter = ({ handleCloseLetterModal, coverLetter, id }) => {
  const [formData, setFormData] = useState({
    coverLetter: coverLetter,
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    const toastId = toast.loading("Loading...");
    e.preventDefault();
    dispatch(editProposal(id, formData))
      .then(() => {
        handleCloseLetterModal();
      })
      .catch((err) => {
        console.log(err);
      });
    toast.dismiss(toastId);
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
          onClick={handleSubmit}
          className="btn bg-blue-500 hover:bg-blue-600 py-2 px-5 rounded-lg float-right text-white mt-4"
        >
          Save
        </button>
        <button
          onClick={handleCloseLetterModal}
          className="py-2 px-4 float-right text-blue-500 mt-4"
        >
          cancel
        </button>
      </div>
    </>
  );
};
export default EditLetter;
