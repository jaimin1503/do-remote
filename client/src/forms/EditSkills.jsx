import Multiselect from "multiselect-react-dropdown";
import "./formStyles.css";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { updateSkills } from "../services/profile.js";
import skillsArray from "./assets/skills.js";

function EditSkills({ pId }) {
  const [skills, setSkills] = useState([]);
  const [optiopns, setOptions] = useState([]);
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  // Assuming user.profile.skills is the array of skills from your database

  useEffect(() => {
    const skills = skillsArray.map((skill) => ({
      name: skill,
      value: skill,
    }));
    setOptions(skills);
  }, []);

  useEffect(() => {
    if (user?.profile?.skills) {
      const skills = user?.profile?.skills.map((skill) => ({
        name: skill,
        value: skill,
      }));
      setSkills(skills);
    }
  }, [user?.profile]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Dispatch updateSkills action with updated skills
    dispatch(
      updateSkills({ skills: skills.map((skill) => skill.value) }, pId)
    ).then(() => {
      console.log("submitted");
      setIsOpenSkills(false);
    });
  };

  return (
    <>
      <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-10">
        <div className="bg-white p-4 rounded-2xl flex flex-col w-[340px] sm:w-[50vw] items-center">
          <h1 className="my-4 text-2xl font-semibold">Edit Skills</h1>
          <form onSubmit={handleSubmit} className=" w-full">
            <div className="w-full h-fit">
              <Multiselect
                options={optiopns}
                displayValue="name"
                onSelect={(selectedList) => setSkills(selectedList)}
                onRemove={(selectedList) => setSkills(selectedList)}
                selectedValues={skills}
              />
            </div>
            <div className="mt-4">
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 float-right rounded-lg"
                type="submit"
              >
                Save
              </button>
              <button
                onClick={() => setIsOpenSkills(false)}
                className="py-2 px-4 float-right text-blue-500 "
              >
                Cancle
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default EditSkills;
