import NavLogged from "../components/NavLogged";
import { useSelector } from "react-redux";
import editLogo from "./assets/editLogo.svg";
import EditPP from "../forms/profileforms/EditPP";
import { useState } from "react";
import EditInfo from "../forms/profileforms/EditInfo";
import EditSkills from "../forms/profileforms/EditSkills";
import Rate from "../forms/profileforms/Rate";
import EditEducation from "../forms/profileforms/EditEducation";
import EditLangs from "../forms/profileforms/EditLangs";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import EditLinks from "../forms/profileforms/EditLinks";
import { Link } from "react-router-dom";
import githubLogo from "./assets/github.svg";
import linkedInlogo from "./assets/linkedin.svg";
import soflogo from "./assets/sof.svg";

const Profile = () => {
  const { user } = useSelector((state) => state.user);
  const [openPPModal, setOpenPPModal] = useState(false);
  const [openInfoModal, setOpenInfoModal] = useState(false);
  const [openSkillsModal, setOpenSkillsModal] = useState(false);
  const [openRateModal, setOpenRateModal] = useState(false);
  const [openLangsModal, setOpenLangsModal] = useState(false);
  const [openEduModal, setOpenEduModal] = useState(false);
  const [openLinks, setOpenLinks] = useState(false);

  const handleOpenEduModal = () => setOpenEduModal(true);
  const handleCloseEduModal = () => setOpenEduModal(false);

  const handleOpenLinks = () => setOpenLinks(true);
  const handleCloseLinks = () => setOpenLinks(false);

  const handleOpenPPModal = () => setOpenPPModal(true);
  const handleClosePPModal = () => setOpenPPModal(false);

  const handleOpenInfoModal = () => setOpenInfoModal(true);
  const handleCloseInfoModal = () => setOpenInfoModal(false);

  const handleOpenSkillsModal = () => setOpenSkillsModal(true);
  const handleCloseSkillsModal = () => setOpenSkillsModal(false);

  const handleOpenRateModal = () => setOpenRateModal(true);
  const handleCloseRateModal = () => setOpenRateModal(false);

  const handleOpenLangsModal = () => setOpenLangsModal(true);
  const handleCloseLangsModal = () => setOpenLangsModal(false);

  const time = new Date().toLocaleTimeString("In", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <>
      <NavLogged />

      <Modal open={openPPModal} onClose={handleClosePPModal}>
        <Box>
          <EditPP
            pId={user?.profile?._id}
            handleClosePPModal={handleClosePPModal}
          />
        </Box>
      </Modal>
      <Modal open={openInfoModal} onClose={handleCloseInfoModal}>
        <Box>
          <EditInfo
            pId={user?.profile?._id}
            handleCloseInfoModal={handleCloseInfoModal}
          />
        </Box>
      </Modal>
      <Modal open={openSkillsModal} onClose={handleCloseSkillsModal}>
        <Box>
          <EditSkills
            pId={user?.profile?._id}
            handleCloseSkillsModal={handleCloseSkillsModal}
          />
        </Box>
      </Modal>
      <Modal open={openRateModal} onClose={handleCloseRateModal}>
        <Box>
          <Rate
            pId={user?.profile?._id}
            handleCloseRateModal={handleCloseRateModal}
          />
        </Box>
      </Modal>
      <Modal open={openLangsModal} onClose={handleCloseLangsModal}>
        <Box>
          <EditLangs
            pId={user?.profile?._id}
            handleCloseLangsModal={handleCloseLangsModal}
          />
        </Box>
      </Modal>
      <Modal open={openEduModal} onClose={handleCloseEduModal}>
        <Box>
          <EditEducation
            pId={user?.profile?._id}
            handleCloseEduModal={handleCloseEduModal}
          />
        </Box>
      </Modal>
      <Modal open={openLinks} onClose={handleCloseLinks}>
        <Box>
          <EditLinks
            pId={user?.profile?._id}
            handleCloseLinks={handleCloseLinks}
            github={user?.profile?.linkedAccounts?.github}
            stackoverflow={user?.profile?.linkedAccounts?.stackoverflow}
            linkedin={user?.profile?.linkedAccounts?.linkedin}
          />
        </Box>
      </Modal>
      <div className=" md:border md:rounded-2xl md:m-5">
        <div className="row1 p-5 pb-5 flex flex-col sm:flex-row items-center">
          <div className="user-info flex flex-col items-center sm:flex-row h-fit">
            <img
              className=" h-24 w-24 rounded-full object-cover"
              src={user?.profile?.profilePicture}
              alt="image"
            />
            <button
              id="edit-profile"
              onClick={handleOpenPPModal}
              className="absolute p-1 ml-[4.5rem] bg-gray-200 mt-16 border-gray-600 rounded-full border-2"
            >
              <img id="edit-profile" src={editLogo} alt="edit" />
            </button>
            {/* //edit profile picture */}
            <div className="info mx-4">
              <h1 className="text-4xl my-2 font-semibold">{user?.username}</h1>
              <span className="text-lg my-2 text-gray-600 font-semibold">
                {user?.location},{" "}
              </span>
              <span> {time}</span>
            </div>
          </div>
          {/* <div className="editbutton mt-4 md:mt-0 md:ml-auto h-fit">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg">
              Edit Profile
            </button>
          </div> */}
        </div>

        <div className="row2 border-t flex flex-col-reverse lg:flex-row">
          <div className="side-bar px-0 lg:border-r w-full lg:w-[400px]">
            <button
              onClick={handleOpenRateModal}
              className=" float-right m-4 p-1 bg-gray-200 border-gray-600 rounded-full border-2"
            >
              <img src={editLogo} alt="edit" />
            </button>
            {/* edit specifications */}
            <ul className="list-none p-4 ">
              <li className="py-2">
                <h1 className=" text-xl pb-2 font-semibold">Rate</h1>
                <p className="text-gray-600 text-lg">
                  {user?.profile?.hourlyRate}{" "}
                  <span className="text-gray-600">Rs./hr</span>
                </p>
              </li>
              <li className="py-2">
                <div className=" flex items-center justify-between w-full">
                  <h1 className=" text-xl pb-2 font-semibold">Languages</h1>
                  <button
                    onClick={handleOpenLangsModal}
                    className=" m-4 p-1 bg-gray-200 border-gray-600 rounded-full border-2"
                  >
                    <img src={editLogo} alt="edit" />
                  </button>
                </div>
                {user?.profile?.languages?.map((language, index) => (
                  <p key={index} className="text-gray-600">
                    {language}
                  </p>
                ))}
              </li>
              <li className="py-2">
                <div className=" flex items-center justify-between">
                  <h1 className=" text-xl pb-2 font-semibold">Education</h1>
                  <button
                    onClick={handleOpenEduModal}
                    className=" m-4 p-1 bg-gray-200 border-gray-600 rounded-full border-2"
                  >
                    <img src={editLogo} alt="edit" />
                  </button>
                </div>
                <p className="text-gray-900 font-medium text-xl">
                  {user?.profile?.education?.school}
                </p>
                <p className="text-gray-600">
                  {user?.profile?.education?.degree}
                </p>
              </li>

              <li className="py-2">
                <div className=" flex items-center justify-between">
                  <h1 className=" text-xl pb-2 font-semibold">
                    Linked Accounts
                  </h1>
                  <button
                    onClick={handleOpenLinks}
                    className=" m-4 p-1 bg-gray-200 border-gray-600 rounded-full border-2"
                  >
                    <img src={editLogo} alt="edit" />
                  </button>
                </div>
                {user?.profile?.linkedAccounts?.github && (
                  <div className=" flex pb-1">
                    <Link
                      className=" pl-2 hover:underline"
                      to={user?.profile?.linkedAccounts?.github}
                    >
                      <div className=" flex">
                        <p className=" font-medium pr-2">GitHub </p>
                        <img src={githubLogo} alt="" />
                      </div>
                    </Link>
                  </div>
                )}
                {user?.profile?.linkedAccounts?.stackoverflow && (
                  <div className=" flex pb-1">
                    <Link
                      className=" pl-2 hover:underline"
                      to={user?.profile?.linkedAccounts?.stackoverflow}
                    >
                      <div className=" flex">
                        <p className=" font-medium pr-2">Stack OverFlow </p>
                        <img src={soflogo} alt="" />
                      </div>
                    </Link>
                  </div>
                )}
                {user?.profile?.linkedAccounts?.linkedin && (
                  <div className=" flex pb-1">
                    <Link
                      className="  pl-2 hover:underline"
                      to={user?.profile?.linkedAccounts?.linkedin}
                    >
                      <div className=" flex">
                        <p className=" font-medium pr-2">LinkedIn </p>
                        <img src={linkedInlogo} alt="" />
                      </div>
                    </Link>
                  </div>
                )}
              </li>
            </ul>
          </div>

          <div className=" w-full ">
            <button
              onClick={handleOpenInfoModal}
              className=" float-right m-4 p-1 bg-gray-200 border-gray-600 rounded-full border-2"
            >
              <img src={editLogo} alt="edit" />
            </button>
            {/* // edit personal info */}
            <div className="content p-0 md:p-4 border-b h-fit">
              <div className="content-header p-4">
                <h1 className="text-2xl font-semibold">
                  {user?.profile?.current_position}
                </h1>
              </div>
              <div className="content-body p-4 pt-0 max-w-xl">
                <p className="text-gray-600">{user?.profile?.about}</p>
              </div>
            </div>
            <div className="projects p-0 md:p-4 border-b">
              <h1 className="text-2xl p-4 font-semibold">Portfolio</h1>
              <div className="projects flex flex-col md:flex-row overflow-auto">
                <div className="title px-4 mb-4">
                  <h1 className="text-xl pb-2 font-semibold">Project 1</h1>
                  <img
                    className=" w-44 h-32 object-cover cursor-pointer rounded-lg "
                    src={user?.profile?.profilePicture}
                    alt="img"
                  />
                </div>
              </div>
            </div>
            <div className="skills p-0 md:p-4 border-b lg:border-none">
              <button
                onClick={handleOpenSkillsModal}
                className=" float-right m-4 p-1 bg-gray-200 border-gray-600 rounded-full border-2"
              >
                <img src={editLogo} alt="edit" />
              </button>
              <h1 className="text-2xl p-4 font-semibold">Skills</h1>
              <div className=" flex p-5 pt-0 flex-wrap">
                {user?.profile?.skills?.map((skill, index) => (
                  <div
                    key={index}
                    className="skills-list py-2 px-4 m-2 bg-blue-200 w-fit rounded-full"
                  >
                    <h1 className=" text-sm font-medium">{skill}</h1>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Profile;
