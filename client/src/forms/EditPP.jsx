import React, { useState, useCallback, useRef } from "react";
import default_pp from "./assets/default-profile-picture.png";
import axios from "axios";

const EditPP = ({ pId }) => {
  const [image, setImage] = useState("");
  const [url, setUrl] = useState("");
  const cloudname = import.meta.env.VITE_CLOUD_NAME;
  const preset = import.meta.env.VITE_UPLOAD_PRESET;
  const inputRef = useRef(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleImageClick = () => {
    inputRef.current.click();
  };

  const handleImageUpload = useCallback(async () => {
    try {
      const data = new FormData();
      data.append("file", image);
      data.append("upload_preset", preset);
      data.append("cloud_name", cloudname);

      const response = await fetch(
        `http://api.cloudinary.com/v1_1/${cloudname}/image/upload`,
        {
          method: "POST",
          body: data,
        }
      );

      if (!response.ok) {
        throw new Error(`Image upload failed with status: ${response.status}`);
      }
      const responseData = await response.json();
      setUrl(responseData.url);
      console.log("Image uploaded successfully!");
    } catch (error) {
      console.error("Error while uploading image:", error);
    }
  }, [image]);

  const handleImageUpdate = async () => {
    axios
      .post(`${import.meta.env.VITE_BASE_URL}/editProfilePicture/${pId}`, url, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="uploadimg">
        <img
          onClick={handleImageClick}
          className=" h-40 w-40 rounded-full object-cover cursor-pointer"
          src={image ? image : default_pp}
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
        <button
          onClick={handleImageUpload}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
        >
          Upload
        </button>
        <button
          onClick={handleImageUpdate}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
        >
          Update
        </button>
      </div>
    </>
  );
};
export default EditPP;
