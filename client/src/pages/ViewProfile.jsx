import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ViewProfile = () => {
  const [user, setUser] = useState({});
  const id = useParams().id;
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BASE_URL}/user/getuserbyid/${id}`, {
        withCredentials: true,
      })
      .then((res) => {
        setUser(res.data.user);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const time = new Date().toLocaleTimeString("In", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <>
      <div className=" md:border md:rounded-2xl md:m-5">
        <div className="row1 p-5 pb-5 flex flex-col sm:flex-row items-center">
          <div className="user-info flex flex-col items-center sm:flex-row h-fit">
            <img
              className=" h-24 w-24 rounded-full object-cover"
              src={user?.profile?.profilePicture}
              alt="image"
            />

            <div className="info mx-4">
              <h1 className="text-4xl my-2 font-semibold">{user?.username}</h1>
              <span className="text-lg my-2 text-gray-600 font-semibold">
                {user?.location},{" "}
              </span>
              <span> {time}</span>
            </div>
          </div>
        </div>

        <div className="row2 border-t flex flex-col-reverse lg:flex-row">
          <div className="side-bar px-0 lg:border-r w-full lg:w-[400px]">
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
                </div>
                {user?.profile?.languages?.map((language, index) => (
                  <p key={index} className="text-gray-600">
                    {language}
                  </p>
                ))}
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
export default ViewProfile;
