import "./formStyles.css";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import { updateLanguages } from "../services/profile.js";

export default function ({ setIsOpenLangs, pId }) {
  const [languages, setLanguages] = useState(""); // Initialize as an empty string
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const editLangsRef = useRef(null);

  useEffect(() => {
    if (user?.profile?.languages) {
      setLanguages(user?.profile?.languages.join(", ")); // Join the array of languages with comma and space
    }
  }, [user?.profile]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateLanguages({ languages }, pId));
    setIsOpenLangs(false);
  };

  return (
    <div ref={editLangsRef} className="overlay">
      <div className=" absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-10">
        <div className="bg-white p-4 rounded-2xl flex flex-col w-[340px] sm:w-[50vw] items-center">
          <h1 className="my-4 text-3xl font-semibold">Change Languages</h1>
          <form className=" w-full">
            <div className="w-full h-fit lg:flex items-center">
              <h1 className="my-2 font-medium">Languages:</h1>
              <div className=" text-center ml-4 w-full  mr-4">
                <input
                  type="text"
                  name="languages"
                  value={languages}
                  onChange={(e) => setLanguages(e.target.value)}
                  className=" p-2 border-2 border-gray-300 rounded-md w-full"
                />
              </div>
            </div>
            <button
              onClick={handleSubmit}
              className="bg-blue-500 text-white py-2 px-4 rounded-md mt-4 float-right"
            >
              Save
            </button>
            <button
              onClick={() => setIsOpenLangs(false)}
              className=" py-2 px-4 mt-4 float-right text-blue-500"
            >
              Cancel
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
