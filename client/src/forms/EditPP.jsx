import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { updateDisplayPicture } from "../services/profile.js";
import "./formStyles.css";

const EditPP = ({ pId }) => {
  const [File, setFile] = useState(null);
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const inputRef = useRef(null);
  const showRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [previewSource, setPreviewSource] = useState(null);

  const handleImageChange = (e) => {
    console.log(e.target.files[0]);
    setFile(e.target.files[0]);
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
      console.log("previewsource", reader.result);
    };
  };

  const handleUpload = () => {
    try {
      console.log("uploading...");
      const formData = new FormData();
      formData.append("displayPicture", File);
      console.log("formdata", formData);
      dispatch(updateDisplayPicture(formData, pId)).then(() => {
        setLoading(false);
      });
    } catch (error) {
      setLoading(false);
      console.log("ERROR MESSAGE - ", error.message);
    }
  };

  const handleImageClick = () => {
    inputRef.current.click();
  };

  return (
    <div id="edit-profile" className="overlay">
      <div className="upload-img absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-10">
        <div
          ref={showRef}
          className=" items-center flex flex-col bg-white rounded-2xl w-[300px] sm:w-[350px] "
        >
          <h1 className="text-2xl font-semibold my-4 text-center">
            Edit Profile Picture
          </h1>
          <img
            onClick={handleImageClick}
            className=" h-40 w-40 rounded-full object-cover cursor-pointer"
            src={previewSource ? previewSource : user?.profile?.profilePicture}
            alt="img"
          />
          <input
            className="hidden"
            type="file"
            accept="image/*"
            id="file"
            ref={inputRef}
            onChange={handleImageChange}
          />
          <div>
            <button
              onClick={handleImageClick}
              className=" my-4 text-blue-500 hover:text-blue-600 text-lg font-bold py-2 px-4 rounded-lg"
            >
              Change Image
            </button>
            <button
              onClick={handleUpload}
              className="bg-blue-500 my-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
            >
              Upload
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EditPP;
