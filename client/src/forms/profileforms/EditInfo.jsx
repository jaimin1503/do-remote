import React, { useEffect, useState } from "react";
import { updateInfo } from "../../services/profile";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import "../formStyles.css";

const EditInfo = ({ pId, handleCloseInfoModal }) => {
  const [formData, setFormData] = useState({});
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  const handelInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    setFormData({
      current_position: user?.profile?.current_position,
      about: user?.profile?.about,
    });
  }, [user?.profile]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitting...");
    dispatch(updateInfo(formData, pId)).then(() => {
      console.log("submitted");
      handleCloseInfoModal();
      dispatch({ type: "UPDATE_USER_PROFILE", payload: formData });
    });
  };

  return (
    <div>
      <div className="edit-details">
        <div className=" absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-10">
          <div className=" bg-white p-4 rounded-2xl flex flex-col w-[340px] sm:w-[50vw] items-center">
            <div className="edit-details-header my-4">
              <h1 className="text-3xl font-semibold">Edit Personal Info</h1>
            </div>

            <form onSubmit={handleSubmit} className="items-center w-full">
              <input
                onChange={handelInputChange}
                name="current_position"
                type="text"
                value={formData.current_position}
                placeholder="Add your current role"
                className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none "
              />

              <textarea
                onChange={handelInputChange}
                name="about"
                type="text"
                rows={5}
                value={formData.about}
                placeholder="Write something about you."
                className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500"
              />
              <button
                type="submit"
                className="btn bg-blue-500 hover:bg-blue-600 py-2 px-5 rounded-lg float-right text-white mt-4"
              >
                Save
              </button>
              <button
                onClick={handleCloseInfoModal}
                className="py-2 px-4 float-right text-blue-500 mt-4"
              >
                cancel
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EditInfo;
