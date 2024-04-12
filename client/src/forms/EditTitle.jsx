import React, { useState } from "react";
import axios from "axios";

const EditTitle = ({ jId, handleCloseTitle, title, category }) => {
  const [formData, setFormData] = useState({
    title: title,
    category: category,
  });

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
        handleCloseTitle();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="upload-img absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-10">
        <div className="p-4 items-center flex flex-col bg-white rounded-2xl w-[300px] sm:w-[400px] ">
          <h1 className="text-2xl font-semibold my-4 text-center">
            Edit Title and Category
          </h1>

          <form onSubmit={handleSubmit} className="items-center w-full">
            <input
              onChange={handelInputChange}
              name="title"
              type="text"
              value={formData.title}
              className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none "
            />

            <input
              onChange={handelInputChange}
              name="category"
              type="text"
              value={formData.category}
              className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500"
            />
            <button className="bg-blue-500 hover:bg-blue-600 py-2 px-5 rounded-lg float-right text-white mt-4">
              Save
            </button>
          </form>
          <div></div>
        </div>
      </div>
    </>
  );
};
export default EditTitle;
