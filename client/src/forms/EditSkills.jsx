import Multiselect from "multiselect-react-dropdown";
import "./formStyles.css";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
const data = [
  {
    name: "one",
    value: "one",
  },
  {
    name: "two",
    value: "two",
  },
  {
    name: "three",
    value: "three",
  },
  {
    name: "four",
    value: "four",
  },
  {
    name: "five",
    value: "five",
  },
  {
    name: "six",
    value: "six",
  },
  {
    name: "seven",
    value: "seven",
  },
  {
    name: "eight",
    value: "eight",
  },
  {
    name: "nine",
    value: "nine",
  },
  {
    name: "ten",
    value: "ten",
  },
];
function EditSkills() {
  const [skills, setSkills] = useState([]);
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const editSkillsRef = useRef(null);
  const handelSubmit = (e) => {
    e.preventDefault();
    dispatch(updateSkills({ skills }, user?.profile?._id)).then(() => {
      console.log("submitted");
      setIsOpenSkills(false);
    });
  };
  useEffect(() => {
    setSkills(user?.profile?.skills);
  }, [user.profile]);

  return (
    <div className=" overlay">
      <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-10">
        <div className=" bg-white p-4 rounded-2xl flex flex-col w-[340px] sm:w-[50vw] items-center">
          <h1 className="my-4 text-2xl font-semibold">Edit Skills</h1>
          <div className=" w-full h-fit">
            <Multiselect options={data} displayValue="name" />
          </div>
          <div className="mt-4">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default EditSkills;
