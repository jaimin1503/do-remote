import Multiselect from "multiselect-react-dropdown";
import skillsArray from "../../../forms/assets/skills.js";
import { useEffect, useState } from "react";

const Skills = ({ skills, setSkills }) => {
  const [optiopns, setOptions] = useState([]);

  useEffect(() => {
    const skills = skillsArray.map((skill) => ({
      name: skill,
      value: skill,
    }));
    setOptions(skills);
  }, []);
  return (
    <>
      <div className="container flex flex-col md:flex-row md:items-center border p-4 rounded-2xl">
        <div className="info md:w-1/2 m-4">
          <h1 className=" text-3xl font-medium">
            What skills are required for this job?
          </h1>
          <p className=" mt-4 text-gray-500">
            Add skills that best describe your job. This will help freelancers
            understand your needs.
          </p>
        </div>
        <div className="form md:w-1/2 m-4">
          <label htmlFor="skillsRequired" className="block mt-4 font-medium">
            Enter skills required for this job
          </label>
          <div className="w-full h-fit">
            <Multiselect
              options={optiopns}
              displayValue="name"
              onSelect={(selectedList) => setSkills(selectedList)}
              onRemove={(selectedList) => setSkills(selectedList)}
              selectedValues={skills}
            />
          </div>
          <div className="examples">
            <h1 className=" text-lg font-medium my-2">Example skills </h1>
            <ul className=" list-disc">
              <li className="">React</li>
              <li>Node.js</li>
              <li>Python</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default Skills;
