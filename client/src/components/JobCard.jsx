import Rating from "@mui/material/Rating";
import Likelogo from "./assets/like.svg";
import pin from "./assets/pin.svg";

const JobCard = ({ job }) => {
  return (
    <>
      <div className="jobcard border-y w-full p-2 hover:bg-gray-100 cursor-pointer">
        <div className="header flex items-center justify-between my-2">
          <div>
            <p className=" text-sm text-gray-500">Posted 10 minutes ago</p>
            <h1 className=" text-xl font-medium my-2">{job?.title}</h1>
          </div>

          <button>
            <img src={Likelogo} alt="sakljhdkf" />
          </button>
        </div>
        <p className=" text-sm text-gray-500 font-medium">
          Est. Budget: rs. {job?.budget}
        </p>
        <div className=" my-2">
          <p>
            {job?.description.length > 200
              ? job?.description.slice(0, 200) + "..."
              : job?.description}
          </p>
        </div>
        <div className=" flex pt-0 flex-wrap my-2">
          {job?.skillsRequired?.map((skill, index) => (
            <div
              key={index}
              className="skills-list py-2 px-4 m-2 bg-blue-200 w-fit rounded-full"
            >
              <h1 className=" text-sm font-medium">{skill}</h1>
            </div>
          ))}
        </div>
        <div className=" flex items-center">
          <p className=" text-gray-400 text-sm mx-2">Reviews: </p>
          <Rating name="read-only" value={4} readOnly size="small" />
          <img className=" ml-4" src={pin} alt="pin" />
          <p className=" text-sm text-gray-500 mx-1">India</p>
        </div>
        <p className=" text-sm my-2 text-gray-500">Proposals: 5 to 10</p>
      </div>
    </>
  );
};
export default JobCard;
