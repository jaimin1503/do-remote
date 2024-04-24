import NavLogged from "../../components/NavLogged";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import EditButton from "../../smallComponents/EditButton";
import pin from "../../components/assets/pin.svg";
import { Link } from "react-router-dom";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import EditTitle from "../../forms/EditTitle";
import EditDes from "../../forms/EditDes";
import EditRskills from "../../forms/EditRskills";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setJob } from "../../reducers/jobReducer";
import Dialogue from "../../components/Dialogue";

const EditJob = () => {
  // const [job, setJob] = useState({});
  const job = useSelector((state) => state.job.job);
  const [openTitle, setOpenTitle] = useState(false);
  const [openDescription, setOpenDescription] = useState(false);
  const [openSkills, setOpenSkills] = useState(false);
  const { id } = useParams();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCloseTitle = () => setOpenTitle(false);
  const handleOpenTitle = () => setOpenTitle(true);

  const handleCloseDescription = () => setOpenDescription(false);
  const handleOpenDescription = () => setOpenDescription(true);

  const handleCloseSkills = () => setOpenSkills(false);
  const handleOpenSkills = () => setOpenSkills(true);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BASE_URL}/job/getjob/${id}`, {
        withCredentials: true,
      })
      .then((res) => {
        // setJob(res.data);
        dispatch(setJob(res.data.job));
      })
      .catch((err) => {
        console.log(err);
      });
  }, [dispatch, id]);

  return (
    <>
      <Modal open={openTitle} onClose={handleCloseTitle}>
        <Box>
          <EditTitle
            jId={job?._id}
            handleCloseTitle={handleCloseTitle}
            title={job?.title}
            category={job?.category}
          />
        </Box>
      </Modal>
      <Modal open={openDescription} onClose={handleCloseDescription}>
        <Box>
          <EditDes
            jId={job?._id}
            handleCloseDescription={handleCloseDescription}
            description={job?.description}
            budget={job?.budget}
          />
        </Box>
      </Modal>
      <Modal open={openSkills} onClose={handleCloseSkills}>
        <Box>
          <EditRskills
            jId={job?._id}
            handleCloseSkills={handleCloseSkills}
            skillsRequired={job?.skillsRequired}
          />
        </Box>
      </Modal>

      <NavLogged />
      <div className=" md:mx-10">
        <div className=" m-4 md:m-5">
          <div className=" flex items-center">
            <h1 className=" text-2xl md:text-3xl font-medium">{job?.title}</h1>
            <div onClick={handleOpenTitle}>
              <EditButton />
            </div>
          </div>
          <div className=" flex items-center">
            <p className=" py-2 px-4 bg-gray-200 w-fit rounded-full">
              {job?.category}
            </p>
            <div className=" flex">
              <img className=" ml-4" src={pin} alt="pin" />
              <p className=" text-sm text-gray-500 mx-1">{job?.location}</p>
            </div>
          </div>
        </div>
        <hr />
        <div className=" m-4 pr-0 md:m-5">
          <div className=" flex items-center">
            <h1 className="text-2xl font-medium">Job Requirements</h1>
            <div onClick={handleOpenDescription}>
              <EditButton />
            </div>
          </div>
          <p className=" whitespace-pre-wrap md:max-w-[80%] text-justify font-light">
            {job?.description}
          </p>
          <p className=" my-3">
            Budget: <span className=" text-gray-500">&#8377;{job?.budget}</span>
          </p>
        </div>
        <hr />
        <div className=" m-4 flex items-center md:m-5">
          <h1 className=" text-2xl font-medium">Skills and Expertise</h1>
          <div onClick={handleOpenSkills}>
            <EditButton />
          </div>
        </div>
        <div className=" flex mx-4 mb-4 flex-wrap ">
          {job?.skillsRequired?.map((skill, index) => (
            <div
              key={index}
              className="skills-list py-2 px-4 m-2 whitespace-nowrap bg-gray-200 w-fit rounded-full"
            >
              <h1 className=" text-sm font-medium">{skill}</h1>
            </div>
          ))}
        </div>
        <hr />
        <h1 className=" m-4 text-2xl font-medium">Activity</h1>
        <p className=" px-4 py-2 font-light text-sm">
          {job?.proposals?.length} Proposals
        </p>
        <div className=" w-full flex flex-col items-center justify-evenly my-4 md:m-5">
          <Link
            className=" py-2 px-5 sm:w-1/3 w-3/4 bg-blue-500 rounded-full text-white hover:bg-blue-600 m-4 text-center"
            to={`/proposals`}
          >
            View all proposals
          </Link>
          <button
            onClick={handleClickOpen}
            className="py-2 px-5 sm:w-1/3 w-3/4 bg-red-500 rounded-full text-white hover:bg-red-600 mx-4"
          >
            Delete job
          </button>
          {
            open && (
              <Dialogue
                open={open}
                handleClose={handleClose}
                jId={job?._id}
              />
            )
          }
        </div>
      </div>
    </>
  );
};
export default EditJob;
