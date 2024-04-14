import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";

const Description = () => {
  const [formData, setFormData] = useState({
    description: "",
    budget: "",
  });
  const dispatch = useDispatch();

  const handelInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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

            <form className="items-center w-full">
              <textarea
                onChange={handelInputChange}
                name="description"
                type="text"
                rows={5}
                value={formData.description}
                className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500"
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Description;
