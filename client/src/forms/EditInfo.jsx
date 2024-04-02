import MultipleSelectChip from "../components/MultipleSelectChip";
import React, { useEffect, useRef, useState } from "react";
import { updateInfo } from "../services/profile";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import "./formStyles.css";

const EditInfo = ({ pId, setIsOpenEditInfo }) => {
  const [formData, setFormData] = useState({});
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const editInfoRef = useRef(null);
  const [selectedSkills, setSelectedSkills] = useState([]);

  const handelInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    setFormData({
      current_position: user.profile.current_position,
      about: user.profile.about,
    });
  }, [user.profile]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitting...");
    dispatch(updateInfo(formData, pId)).then(() => {
      console.log("submitted");
      setIsOpenEditInfo(false);
    });
  };
  return (
    <div>
      <div ref={editInfoRef} className="edit-details overlay">
        <div className=" absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-10">
          <div className=" bg-white p-4 rounded-2xl flex flex-col w-[340px] sm:w-fit items-center">
            <div className="edit-details-header my-4">
              <h1 className="text-2xl font-semibold">Edit Personal Info</h1>
            </div>

            <form
              onSubmit={handleSubmit}
              className="flex flex-col items-center w-full"
            >
              <input
                onChange={handelInputChange}
                name="current_position"
                type="text"
                value={formData.current_position}
                className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none "
              />

              <textarea
                onChange={handelInputChange}
                name="about"
                type="text"
                rows={3}
                value={formData.about}
                className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500"
              />

              <button
                type="submit"
                className="btn bg-blue-500 hover:bg-blue-600 py-2 px-5 rounded-lg text-white my-4"
              >
                Save
              </button>
            </form>
            <MultipleSelectChip setSelectedSkills={setSelectedSkills} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default EditInfo;
