import NavLogged from "../components/NavLogged";
import { useSelector } from "react-redux";
import editLogo from "./assets/editLogo.svg";
import EditPP from "../forms/EditPP";

const Profile = () => {
  const { user } = useSelector((state) => state.user);
  const time = new Date().toLocaleTimeString("IN", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
  return (
    <>
      <NavLogged />
      <div className=" md:border md:rounded-2xl md:m-5">
        <div className="row1 p-5 pb-5 flex flex-col md:flex-row items-center">
          <div className="user-info flex flex-col items-center md:flex-row h-fit">
            <img
              className=" h-24 w-24 rounded-full object-cover"
              src={user?.profile?.profilePicture}
              alt="image"
            />
            <button className="absolute p-1 ml-[4.5rem] bg-gray-200 mt-16 border-gray-600 rounded-full border-2">
              <img src={editLogo} alt="edit" />
            </button>
            {/* //edit profile picture */}
            <div className="info mx-4">
              <h1 className="text-4xl my-2 font-semibold">{user.username}</h1>
              <span className="text-lg my-2 text-gray-600 font-semibold">
                {user.location},{" "}
              </span>
              <span> {time}</span>
            </div>
          </div>
          <div className="editbutton mt-4 md:mt-0 md:ml-auto bg-gray-200 h-fit">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg">
              Edit Profile
            </button>
          </div>
        </div>

        <div className="row2 border-t flex flex-col-reverse lg:flex-row">
          <div className="side-bar px-0 lg:border-r w-full md:w-fit">
            <button className=" float-right m-4 p-1 bg-gray-200 border-gray-600 rounded-full border-2">
              <img src={editLogo} alt="edit" />
            </button>
            {/* edit specifications */}
            <ul className="list-none p-4 mr-10">
              <li className="py-2">
                <h1 className=" text-xl pb-2 font-semibold">Rate</h1>
                <p className="text-gray-600 text-lg">
                  {user.profile?.hourlyRate}{" "}
                  <span className="text-gray-600">Rs./hr</span>
                </p>
              </li>
              <li className="py-2">
                <h1 className=" text-xl pb-2 font-semibold">
                  Languages Spoken
                </h1>
                <p className="text-gray-600">Hindi</p>
                <p className="text-gray-600">English</p>
                <p className="text-gray-600">Gujarati</p>
              </li>
              <li className="py-2">
                <h1 className=" text-xl pb-2 font-semibold">Education</h1>
                <p className="text-gray-900 font-medium text-xl">NIT Surat</p>
                <p className="text-gray-600">B.Tech</p>
              </li>

              <li className="py-2">
                <h1 className=" text-xl pb-2 font-semibold">Linked Accounts</h1>
                <p className="text-gray-600 cursor-pointer">GitHub</p>
                <p className="text-gray-600 cursor-pointer">Stack OverFlow</p>
                <p className="text-gray-600 cursor-pointer">LinkedIn</p>
              </li>
            </ul>
          </div>

          <div className=" w-full ">
            <button className=" float-right m-4 p-1 bg-gray-200 border-gray-600 rounded-full border-2">
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
                <p className="text-gray-600">{user.profile?.about}</p>
              </div>
            </div>
            <div className="projects p-0 md:p-4 border-b">
              <h1 className="text-2xl p-4 font-semibold">Portfolio</h1>
              <div className="projects flex flex-col md:flex-row overflow-auto">
                <div className="title px-4 mb-4">
                  <h1 className="text-xl pb-2 font-semibold">Project 1</h1>
                  <img
                    className=" w-44 h-32 object-cover cursor-pointer rounded-lg "
                    src={user.profile?.profilePicture}
                    alt="img"
                  />
                </div>
              </div>
            </div>
            <div className="skills p-0 md:p-4 border-b lg:border-none">
              <h1 className="text-2xl p-4 font-semibold">Skills</h1>
              <div className=" flex p-5 pt-0 flex-wrap">
                {user.profile?.skills?.map((skill, index) => (
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
      <EditPP pId={user.profile?._id} />
    </>
  );
};
export default Profile;
