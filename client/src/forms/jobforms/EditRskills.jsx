import Multiselect from "multiselect-react-dropdown";
import "../formStyles.css";
import { useEffect, useState } from "react";
import skillsArray from "../assets/skills.js";
import { useDispatch } from "react-redux";
import { editJob } from "../../services/job.js";

function EditRskills({ jId, handleCloseSkills, skillsRequired }) {
  const [options, setOptions] = useState([]);
  const [selectedSkills, setSelectedSkills] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const skills = skillsArray.map((skill) => ({
      name: skill,
      value: skill,
    }));
    setOptions(skills);
  }, []);

  useEffect(() => {
    if (skillsRequired) {
      const requiredSkills = skillsRequired.map((skill) => ({
        name: skill,
        value: skill,
      }));
      setSelectedSkills(requiredSkills);
    }
  }, [skillsRequired]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      editJob(jId, {
        skillsRequired: selectedSkills.map((skill) => skill.value),
      })
    )
      .then(() => {
        handleCloseSkills();
      })
      .catch((err) => {
        console.error("Error editing skills:", err);
      });
  };

  return (
    <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-10">
      <div className="bg-white p-4 rounded-2xl flex flex-col w-[340px] sm:w-[50vw] items-center">
        <h1 className="my-4 text-2xl font-semibold">Edit Skills</h1>
        <form onSubmit={handleSubmit} className="w-full">
          <div className="w-full h-fit">
            <Multiselect
              options={options}
              displayValue="name"
              onSelect={(selectedList) => setSelectedSkills(selectedList)}
              onRemove={(selectedList) => setSelectedSkills(selectedList)}
              selectedValues={selectedSkills}
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
              onClick={() => handleCloseSkills()}
              className="py-2 px-4 float-right text-blue-500 "
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditRskills;
